import { useState, useEffect, useCallback } from "react";
import { relationService } from "@/services/relation.service";
import { attributeService } from "@/services/attribute.service";
import { fdSetService } from "@/services/fdSet.service";
import { getDb } from "@/lib/db";
import type { Relation, Attribute, FdSet } from "@/types/database";

export interface FullRelation extends Relation {
  attributes: Attribute[];
  fdSets: (FdSet & {
    dependencies: {
      id: number;
      lhs: Attribute[];
      rhs: Attribute[];
    }[];
  })[];
}

export function useRelaciones() {
  const [relaciones, setRelaciones] = useState<FullRelation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRelaciones = useCallback(async () => {
    setLoading(true);
    try {
      const db = await getDb();
      const relationsData = await relationService.getAll();

      const fullRelations = await Promise.all(
        relationsData.map(async (rel) => {
          const attributes = await attributeService.getByRelationId(rel.id);
          const fdSetsData = await fdSetService.getByRelationId(rel.id);

          const fdSets = await Promise.all(
            fdSetsData.map(async (set) => {
              // Obtener todas las dependencias para este set
              const deps = await db.select<{ id: number }[]>(
                "SELECT id FROM functional_dependencies WHERE fd_set_id = $1",
                [set.id],
              );

              const dependencies = await Promise.all(
                deps.map(async (dep) => {
                  // Obtener LHS
                  const lhsData = await db.select<{ attribute_id: number }[]>(
                    "SELECT attribute_id FROM dependency_left WHERE dependency_id = $1",
                    [dep.id],
                  );
                  // Obtener RHS
                  const rhsData = await db.select<{ attribute_id: number }[]>(
                    "SELECT attribute_id FROM dependency_right WHERE dependency_id = $1",
                    [dep.id],
                  );

                  const lhs = attributes.filter((a) =>
                    lhsData.some((l) => l.attribute_id === a.id),
                  );
                  const rhs = attributes.filter((a) =>
                    rhsData.some((r) => r.attribute_id === a.id),
                  );

                  return { id: dep.id, lhs, rhs };
                }),
              );

              return { ...set, dependencies };
            }),
          );

          return { ...rel, attributes, fdSets };
        }),
      );

      setRelaciones(fullRelations);
    } catch (err) {
      console.error("Error fetching relations:", err);
      setError("No se pudieron cargar las relaciones");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRelaciones();
  }, [fetchRelaciones]);

  return { relaciones, loading, error, refresh: fetchRelaciones };
}

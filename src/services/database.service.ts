import { getDb } from "@/lib/db";
import { relationService } from "./relation.service";
import { attributeService } from "./attribute.service";
import { fdSetService } from "./fdSet.service";
import type {
  Attribute,
  FunctionalDependency,
  FullFunctionalDependency,
  FullFdSet,
  FullRelation,
} from "@/types/database";

export const databaseService = {
  /** Obtiene una relación con todos sus atributos y dependencias */
  async getFullRelation(relationId: number): Promise<FullRelation | null> {
    const db = await getDb();

    const relation = await relationService.getById(relationId);
    if (!relation) return null;

    const attributes = await attributeService.getByRelationId(relationId);
    const fdSetsRaw = await fdSetService.getByRelationId(relationId);

    const fdSets: FullFdSet[] = [];

    for (const set of fdSetsRaw) {
      const depsRaw = await db.select<FunctionalDependency[]>(
        "SELECT * FROM functional_dependencies WHERE fd_set_id = $1",
        [set.id],
      );

      const dependencies: FullFunctionalDependency[] = [];

      for (const dep of depsRaw) {
        const lhs = await db.select<Attribute[]>(
          `SELECT a.* FROM attributes a 
           JOIN dependency_left dl ON a.id = dl.attribute_id 
           WHERE dl.dependency_id = $1`,
          [dep.id],
        );
        const rhs = await db.select<Attribute[]>(
          `SELECT a.* FROM attributes a 
           JOIN dependency_right dr ON a.id = dr.attribute_id 
           WHERE dr.dependency_id = $1`,
          [dep.id],
        );

        dependencies.push({
          ...dep,
          lhs,
          rhs,
        });
      }

      fdSets.push({
        ...set,
        dependencies,
      });
    }

    return {
      ...relation,
      attributes,
      fdSets,
    };
  },
};

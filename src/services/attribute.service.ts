import { getDb } from "@/lib/db";
import type { Attribute } from "@/types/database";

export const attributeService = {
  async getByRelationId(relationId: number): Promise<Attribute[]> {
    const db = await getDb();
    return await db.select<Attribute[]>(
      "SELECT * FROM attributes WHERE relation_id = $1 ORDER BY name",
      [relationId],
    );
  },

  async create(name: string, relationId: number): Promise<number> {
    const db = await getDb();
    const result = await db.execute(
      "INSERT INTO attributes (name, relation_id) VALUES ($1, $2)",
      [name, relationId],
    );
    return result.lastInsertId as number;
  },

  async update(id: number, name: string): Promise<void> {
    const db = await getDb();
    await db.execute("UPDATE attributes SET name = $1 WHERE id = $2", [
      name,
      id,
    ]);
  },

  async delete(id: number): Promise<void> {
    const db = await getDb();
    await db.execute("DELETE FROM attributes WHERE id = $1", [id]);
  },
};

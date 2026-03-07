import { getDb } from "@/lib/db";
import type { FdSet } from "@/types/database";

export const fdSetService = {
  async getByRelationId(relationId: number): Promise<FdSet[]> {
    const db = await getDb();
    return await db.select<FdSet[]>(
      "SELECT * FROM fd_sets WHERE relation_id = $1",
      [relationId],
    );
  },

  async create(relationId: number, name?: string): Promise<number> {
    const db = await getDb();
    const result = await db.execute(
      "INSERT INTO fd_sets (relation_id, name) VALUES ($1, $2)",
      [relationId, name],
    );
    return result.lastInsertId as number;
  },

  async delete(id: number): Promise<void> {
    const db = await getDb();
    await db.execute("DELETE FROM fd_sets WHERE id = $1", [id]);
  },
};

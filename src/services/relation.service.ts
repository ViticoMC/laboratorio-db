import { getDb } from "@/lib/db";
import type { Relation } from "@/types/database";

export const relationService = {
  async getAll(): Promise<Relation[]> {
    const db = await getDb();
    return await db.select<Relation[]>("SELECT * FROM relations ORDER BY name");
  },

  async getById(id: number): Promise<Relation | null> {
    const db = await getDb();
    const result = await db.select<Relation[]>(
      "SELECT * FROM relations WHERE id = $1",
      [id],
    );
    return result.length > 0 ? result[0] : null;
  },

  async create(name: string, description?: string): Promise<number> {
    const db = await getDb();
    const result = await db.execute(
      "INSERT INTO relations (name, description) VALUES ($1, $2)",
      [name, description],
    );
    return result.lastInsertId as number;
  },

  async update(id: number, name: string, description?: string): Promise<void> {
    const db = await getDb();
    await db.execute(
      "UPDATE relations SET name = $1, description = $2 WHERE id = $3",
      [name, description, id],
    );
  },

  async delete(id: number): Promise<void> {
    const db = await getDb();
    await db.execute("DELETE FROM relations WHERE id = $1", [id]);
  },
};

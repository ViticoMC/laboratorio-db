import { getDb } from "@/lib/db";

export const fdService = {
  async create(fdSetId: number, lhs: number[], rhs: number[]): Promise<void> {
    const db = await getDb();
    // 1. Insertar la dependencia base
    const res = await db.execute(
      "INSERT INTO functional_dependencies (fd_set_id) VALUES ($1)",
      [fdSetId],
    );
    const fdId = res.lastInsertId;

    // 2. Lado izquierdo (LHS)
    for (const attrId of lhs) {
      await db.execute(
        "INSERT INTO dependency_left (dependency_id, attribute_id) VALUES ($1, $2)",
        [fdId, attrId],
      );
    }

    // 3. Lado derecho (RHS)
    for (const attrId of rhs) {
      await db.execute(
        "INSERT INTO dependency_right (dependency_id, attribute_id) VALUES ($1, $2)",
        [fdId, attrId],
      );
    }
  },

  async delete(id: number): Promise<void> {
    const db = await getDb();
    await db.execute("DELETE FROM functional_dependencies WHERE id = $1", [id]);
  },
};

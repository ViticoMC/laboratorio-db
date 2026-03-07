import Database from "@tauri-apps/plugin-sql";

const DB_PATH = "sqlite:laboratorio.db";

let _db: Database | null = null;

/**
 * Devuelve la instancia de la base de datos, iniciándola si es necesario.
 * La base de datos se crea en el directorio de datos de la aplicación.
 */
export async function getDb(): Promise<Database> {
  if (!_db) {
    _db = await Database.load(DB_PATH);
  }
  return _db;
}

/** Cierra la conexión activa (útil al cerrar la ventana). */
export async function closeDb(): Promise<void> {
  if (_db) {
    await _db.close();
    _db = null;
  }
}

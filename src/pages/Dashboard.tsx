import { getDb } from "@/lib/db";
import { useEffect, useState } from "react";
export function Dashboard() {

    const [dbTestResult, setDbTestResult] = useState<string>("");

    useEffect(() => {


        async function testDb() {
            // Insertar
            const db = await getDb();
            // await db.execute("INSERT INTO registros (nombre, valor) VALUES ($1, $2)", ["test", "123"]);

            // Consultar
            const rows = await db.select("SELECT * FROM relations JOIN attributes ON relations.id = attributes.relation_id");

            console.log("Registros en la tabla relaciones:", rows);
        }
        testDb().then(() => setDbTestResult("Base de datos funcionando correctamente."))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-text-primary mb-4">Dashboard</h1>
            <p className="text-lg text-text-secondary">Panel de control principal.</p>
            <div className="mt-4 p-4 bg-surface-elevated rounded border border-border-base">
                <h2 className="text-xl font-semibold text-text-heading mb-2">Prueba de Base de Datos</h2>
                <p className="text-text-body">{dbTestResult}</p>
            </div>
        </div>
    );
}

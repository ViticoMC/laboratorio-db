import {
    PlusCircle,
    RefreshCcw,
    Trash2,
    Eye,
    Database,
    ShieldCheck,
    AlertTriangle
} from 'lucide-react';

export function SQLModificacionVistasPage() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* 1. SENTENCIA INSERT */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <PlusCircle className="text-blue-600 dark:text-blue-400" /> 1. Inserción de Datos (INSERT)
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                            La sentencia <code className="font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-1 rounded">INSERT</code> permite añadir nuevas filas a una tabla. Puede hacerse de forma manual (valores explícitos) o masiva (desde otra consulta).
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-blue-50 dark:bg-blue-950 p-5 rounded-xl border-l-4 border-blue-500 dark:border-blue-600 transition-colors duration-300">
                                <h4 className="font-bold text-xs uppercase mb-3 text-blue-800 dark:text-blue-400">Inserción Individual</h4>
                                <div className="bg-slate-900 dark:bg-slate-950 p-3 rounded font-mono text-[10px] text-blue-400 dark:text-blue-300 border border-slate-700 dark:border-slate-600">
                                    <p>INSERT INTO trabajador</p>
                                    <p>(id_trabajador, nomb_trabajador, tarifa_hr)</p>
                                    <p>VALUES ('112', 'Carlos Pérez', 35.00);</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-950 p-5 rounded-xl border-l-4 border-blue-500 dark:border-blue-600 transition-colors duration-300">
                                <h4 className="font-bold text-xs uppercase mb-3 text-blue-800 dark:text-blue-400">Inserción Masiva</h4>
                                <div className="bg-slate-900 dark:bg-slate-950 p-3 rounded font-mono text-[10px] text-blue-400 dark:text-blue-300 border border-slate-700 dark:border-slate-600">
                                    <p>INSERT INTO nomina_historica</p>
                                    <p>SELECT * FROM trabajador</p>
                                    <p>WHERE tarifa_hr {'>'} 40;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SENTENCIA UPDATE */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <RefreshCcw className="text-blue-600 dark:text-blue-400" /> 2. Actualización de Datos (UPDATE)
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 text-slate-700 dark:text-slate-300">
                            Modifica los valores de una o más columnas para un conjunto de filas que cumplen una condición.
                        </p>

                        <div className="bg-blue-900 dark:bg-blue-950 text-blue-50 dark:text-blue-100 p-6 rounded-xl mb-6 relative overflow-hidden border border-blue-800 dark:border-blue-900 transition-colors duration-300">
                            <div className="absolute top-2 right-4 opacity-20"><AlertTriangle size={40} /></div>
                            <h4 className="font-bold text-sm mb-2 uppercase">¡Atención con el WHERE!</h4>
                            <p className="text-xs">
                                Si omites la cláusula <code className="font-bold text-white bg-blue-800 dark:bg-blue-900 px-2 py-1 rounded">WHERE</code> en un UPDATE, se modificarán <strong>todas</strong> las filas de la tabla.
                            </p>
                        </div>

                        <div className="bg-slate-900 dark:bg-slate-950 p-5 rounded-xl font-mono text-xs text-emerald-400 dark:text-emerald-300 border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                            <p className="text-slate-500 dark:text-slate-600 mb-2">-- Ejemplo: Incrementar tarifa un 10% a electricistas</p>
                            <p><span className="text-blue-400 dark:text-blue-300">UPDATE</span> trabajador</p>
                            <p><span className="text-blue-400 dark:text-blue-300">SET</span> tarifa_hr = tarifa_hr * 1.10</p>
                            <p><span className="text-blue-400 dark:text-blue-300">WHERE</span> oficio = 'Electricista';</p>
                        </div>
                    </div>
                </section>

                {/* 3. SENTENCIA DELETE */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Trash2 className="text-blue-600 dark:text-blue-400" /> 3. Eliminación de Datos (DELETE)
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 text-slate-700 dark:text-slate-300">
                            Elimina filas completas de una tabla. Al igual que el UPDATE, su alcance está limitado por la cláusula WHERE.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-900 dark:bg-slate-950 p-5 rounded-xl font-mono text-xs text-white border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                                <p className="text-blue-400 dark:text-blue-300">-- Borrar un trabajador específico</p>
                                <p className="text-slate-200 dark:text-slate-300">DELETE FROM trabajador</p>
                                <p className="text-slate-200 dark:text-slate-300">WHERE id_trabajador = '112';</p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-sm text-blue-900 dark:text-blue-300 mb-2">Restricciones de Integridad</h4>
                                <p className="text-[11px] text-slate-700 dark:text-slate-300">
                                    No se puede eliminar una fila si su Clave Primaria está siendo referenciada por una Clave Ajena en otra tabla (a menos que esté configurado el borrado en cascada).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. VISTAS (VIEWS) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Eye className="text-blue-600 dark:text-blue-400" /> 4. Vistas: Tablas Virtuales
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                            Una <strong>Vista</strong> es una tabla virtual cuyo contenido se define mediante una consulta. No almacena datos físicamente (salvo excepciones), sino que guarda la definición de la consulta.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl transition-colors duration-300">
                                <h5 className="font-bold text-xs mb-2 text-blue-900 dark:text-blue-400">Seguridad</h5>
                                <p className="text-[10px] text-blue-800 dark:text-blue-300">Oculta columnas sensibles (como salarios) a ciertos usuarios.</p>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl transition-colors duration-300">
                                <h5 className="font-bold text-xs mb-2 text-blue-900 dark:text-blue-400">Simplicidad</h5>
                                <p className="text-[10px] text-blue-800 dark:text-blue-300">Simplifica consultas complejas con muchos JOINs en una sola tabla virtual.</p>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl transition-colors duration-300">
                                <h5 className="font-bold text-xs mb-2 text-blue-900 dark:text-blue-400">Independencia</h5>
                                <p className="text-[10px] text-blue-800 dark:text-blue-300">Permite cambiar la estructura física sin afectar a las aplicaciones.</p>
                            </div>
                        </div>

                        <h3 className="font-bold text-sm mb-4 text-slate-800 dark:text-slate-200">Creación de una Vista:</h3>
                        <div className="bg-slate-900 dark:bg-slate-950 p-5 rounded-xl font-mono text-xs text-blue-400 dark:text-blue-300 border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                            <p>CREATE VIEW electricistas_vsc AS</p>
                            <p>SELECT id_trabajador, nomb_trabajador, tarifa_hr</p>
                            <p>FROM trabajador</p>
                            <p>WHERE oficio = 'Electricista';</p>
                        </div>
                    </div>
                </section>

                {/* 5. INTEGRIDAD Y MANTENIMIENTO */}
                <section className="mb-16">
                    <div className="bg-blue-50 dark:bg-blue-950 border-2 border-blue-200 dark:border-blue-800 p-8 rounded-3xl transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-300">
                            <ShieldCheck className="text-blue-600 dark:text-blue-400" /> Reglas de Modificación
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-blue-900 dark:text-blue-200">
                            <div className="space-y-3">
                                <p>• <strong>Integridad de Entidad:</strong> No se pueden insertar nulos en la Clave Primaria.</p>
                                <p>• <strong>Integridad Referencial:</strong> No se pueden insertar valores en Claves Ajenas que no existan en la tabla padre.</p>
                            </div>
                            <div className="space-y-3">
                                <p>• <strong>Verificación de Tipos:</strong> Los datos deben coincidir con el dominio (tipo de dato) definido.</p>
                                <p>• <strong>Vistas Actualizables:</strong> Solo se pueden modificar datos a través de vistas si estas se basan en una sola tabla y no tienen funciones agregadas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest transition-colors duration-300">
                    <div>SBD I - Conferencia 13 (Modificación y Vistas)</div>
                    <div className="flex gap-3 items-center">
                        <Database size={16} className="text-blue-600 dark:text-blue-400" />
                        <span>Material: Otras sentencias del lenguaje SQL</span>
                    </div>
                </footer>

            </main>
        </>
    );
}

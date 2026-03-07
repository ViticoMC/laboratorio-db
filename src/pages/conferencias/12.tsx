import {
    Database,
    Search,
    Layers,
    ArrowRightLeft,
    AlertTriangle,
    Code,
    GitMerge
} from 'lucide-react';

export function ConsultasMultitablasPage() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* 1. FUNDAMENTOS DE LA UNIÓN (JOIN) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300 border-l-4 border-blue-600 dark:border-blue-700 pl-4">
                        <GitMerge className="text-blue-600 dark:text-blue-400" /> 1. Unión de Tablas (Equicomposiciones)
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                            En el modelo relacional, la información suele estar dispersa en varias tablas para evitar redundancias. Para recuperar datos combinados, utilizamos la **condición de reunión** en la cláusula <code className="font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-1 rounded">WHERE</code>.
                        </p>

                        <div className="bg-blue-900 dark:bg-blue-950 text-blue-50 dark:text-blue-100 p-6 rounded-xl mb-8 border border-blue-800 dark:border-blue-900 transition-colors duration-300">
                            <h4 className="font-bold text-sm mb-2 uppercase tracking-widest text-blue-300 dark:text-blue-200">La Regla de Oro del Join</h4>
                            <p className="text-xs">
                                Para unir <span className="font-bold text-white">n</span> tablas, se necesitan al menos <span className="font-bold text-white">n-1</span> condiciones de unión. Si olvidas la condición de unión, obtendrás un <strong>Producto Cartesiano</strong> (todas las combinaciones posibles), lo cual suele ser un error.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-colors duration-300">
                                <Code size={16} className="text-blue-600 dark:text-blue-400" /> Ejemplo de Unión Simple:
                            </h3>
                            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl font-mono text-xs text-white border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                                <p className="text-blue-400 dark:text-blue-300">-- Listar oficios de trabajadores del edificio 435</p>
                                <p><span className="text-pink-400 dark:text-pink-300">SELECT DISTINCT</span> oficio</p>
                                <p><span className="text-pink-400 dark:text-pink-300">FROM</span> trabajador, asignacion</p>
                                <p><span className="text-pink-400 dark:text-pink-300">WHERE</span> trabajador.id_trabajador = asignacion.id_trabajador</p>
                                <p className="pl-4 text-slate-400 dark:text-slate-500">AND id_edificio = '435';</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SUBCONSULTAS: NO CORRELACIONADAS */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300 border-l-4 border-blue-600 dark:border-blue-700 pl-4">
                        <Layers className="text-blue-600 dark:text-blue-400" /> 2. Subconsultas No Correlacionadas
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 text-slate-700 dark:text-slate-300">
                            Es una consulta anidada dentro de otra. En el caso **no correlacionado**, la subconsulta se ejecuta **una sola vez** y su resultado es entregado a la consulta externa.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                                <h4 className="font-bold text-xs mb-4 text-blue-900 dark:text-blue-400 uppercase">Lógica de Ejecución</h4>
                                <ol className="text-xs space-y-3 text-slate-700 dark:text-slate-300">
                                    <li className="flex gap-2">
                                        <span className="bg-blue-600 dark:bg-blue-700 text-white w-5 h-5 rounded-full flex items-center justify-center flex-none text-[10px] font-bold">1</span>
                                        Se ejecuta la subconsulta interna.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="bg-blue-600 dark:bg-blue-700 text-white w-5 h-5 rounded-full flex items-center justify-center flex-none text-[10px] font-bold">2</span>
                                        El resultado sustituye a la subconsulta en la consulta externa.
                                    </li>
                                </ol>
                            </div>
                            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl font-mono text-xs text-white border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                                <p className="text-emerald-400 dark:text-emerald-300">-- Trabajadores con tarifa mayor al promedio</p>
                                <p className="text-slate-200 dark:text-slate-300">SELECT nomb_trabajador FROM trabajador</p>
                                <p className="text-slate-200 dark:text-slate-300">WHERE tarifa_hr {">"} (<span className="text-pink-400 dark:text-pink-300">SELECT AVG(tarifa_hr) FROM trabajador</span>);</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. SUBCONSULTAS CORRELACIONADAS */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300 border-l-4 border-blue-600 dark:border-blue-700 pl-4">
                        <ArrowRightLeft className="text-blue-600 dark:text-blue-400" /> 3. Subconsultas Correlacionadas
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 text-slate-700 dark:text-slate-300">
                            Aquí, la subconsulta hace referencia a una columna de la tabla de la consulta externa. Se ejecuta **una vez por cada fila** de la tabla externa.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-xl border border-blue-200 dark:border-blue-800 flex gap-4 items-start mb-6 transition-colors duration-300">
                            <AlertTriangle className="text-blue-600 dark:text-blue-400 flex-none" />
                            <p className="text-xs text-blue-900 dark:text-blue-200">
                                <strong>Uso de Alias:</strong> Es obligatorio asignar alias a las tablas (ej: <code className="font-bold bg-slate-200 dark:bg-slate-700 px-1 rounded">trabajador t</code>) para que el motor sepa a qué instancia de la tabla nos referimos en la comparación.
                            </p>
                        </div>

                        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl font-mono text-xs text-white border border-slate-700 dark:border-slate-600 relative transition-colors duration-300">
                            <div className="absolute top-2 right-4 text-[10px] text-slate-500 dark:text-slate-600 uppercase font-bold tracking-tighter\">Ejemplo Maestro</div>
                            <p className="text-blue-400 dark:text-blue-300 mb-2">-- Trabajadores que ganan más que su propio supervisor</p>
                            <p><span className="text-pink-400 dark:text-pink-300">SELECT</span> t.nomb_trabajador</p>
                            <p><span className="text-pink-400 dark:text-pink-300">FROM</span> trabajador <span className="text-yellow-400 dark:text-yellow-300 italic">t</span></p>
                            <p><span className="text-pink-400 dark:text-pink-300">WHERE</span> t.tarifa_hr {'>'} (</p>
                            <p className="pl-6"><span className="text-pink-400 dark:text-pink-300">SELECT</span> s.tarifa_hr</p>
                            <p className="pl-6"><span className="text-pink-400 dark:text-pink-300">FROM</span> trabajador <span className="text-yellow-400 dark:text-yellow-300 italic">s</span></p>
                            <p className="pl-6"><span className="text-pink-400 dark:text-pink-300">WHERE</span> s.id_trabajador = <span className="text-yellow-400 dark:text-yellow-300 italic">t</span>.id_supv</p>
                            <p>);</p>
                        </div>
                    </div>
                </section>

                {/* 4. TESTS PARA SUBCONSULTAS */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300 border-l-4 border-blue-600 dark:border-blue-700 pl-4">
                        <Search className="text-blue-600 dark:text-blue-400" /> 4. Operadores de Conjuntos y Cuantificación
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-xs text-blue-800 dark:text-blue-400 mb-2">IN / NOT IN</h4>
                            <p className="text-[10px] text-slate-700 dark:text-slate-300">Verifica si un valor existe dentro del conjunto de resultados de la subconsulta.</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-xs text-blue-800 dark:text-blue-400 mb-2">EXISTS</h4>
                            <p className="text-[10px] text-slate-700 dark:text-slate-300">Devuelve TRUE si la subconsulta retorna al menos una fila. Es muy eficiente.</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-xs text-blue-800 dark:text-blue-400 mb-2">ANY / SOME</h4>
                            <p className="text-[10px] text-slate-700 dark:text-slate-300">Compara un valor con <strong>cualquier</strong> elemento del conjunto (al menos uno).</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-xs text-blue-800 dark:text-blue-400 mb-2">ALL</h4>
                            <p className="text-[10px] text-slate-700 dark:text-slate-300">Compara un valor con <strong>todos</strong> los elementos del conjunto.</p>
                        </div>
                    </div>
                </section>

                {/* 5. RESUMEN DE DIFERENCIAS */}
                <section className="mb-16">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-6 text-center text-blue-900 dark:text-blue-300 uppercase transition-colors duration-300">Comparativa: Subconsultas</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                                        <th className="p-3 border border-slate-200 dark:border-slate-700">Característica</th>
                                        <th className="p-3 border border-slate-200 dark:border-slate-700">No Correlacionada</th>
                                        <th className="p-3 border border-slate-200 dark:border-slate-700">Correlacionada</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300">
                                        <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold italic text-slate-700 dark:text-slate-300">Dependencia</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Independiente de la externa</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Depende de la externa (usa sus alias)</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300">
                                        <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold italic text-slate-700 dark:text-slate-300">Ejecución</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Una sola vez</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Una vez por cada fila externa</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300">
                                        <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold italic text-slate-700 dark:text-slate-300">Rendimiento</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400">Generalmente más rápido</td>
                                        <td className="p-3 border border-slate-200 dark:border-slate-700 text-amber-600 dark:text-amber-400">Costoso en tablas muy grandes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest transition-colors duration-300">
                    <div>SBD I - Conferencia 12 (Multitablas y Subconsultas)</div>
                    <div className="flex gap-3 items-center">
                        <Database size={16} className="text-blue-600 dark:text-blue-400" />
                        <span>Dra. Beatriz López Porrero</span>
                    </div>
                </footer>

            </main>
        </>
    );
}

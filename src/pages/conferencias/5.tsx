import {
    Calculator,
    Divide,
    X,
    Code,

    Combine
} from 'lucide-react';

export function AlgebraRelacionalPage() {
    return (
        <>
            <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* Tipos de Lenguajes */}
                <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border-t-4 border-blue-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Code className="text-blue-600 dark:text-blue-400" /> Tipos de Lenguajes
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-100 dark:border-blue-800 transition-colors duration-300">
                                <h3 className="font-bold text-blue-800 dark:text-blue-300 italic underline">Procedimentales (Álgebra Relacional)</h3>
                                <p className="text-sm text-blue-900 dark:text-blue-200">El usuario indica las operaciones que hay que realizar para obtener los resultados.</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                                <h3 className="font-bold text-slate-800 dark:text-slate-300 italic underline">No Procedimentales (Cálculo Relacional)</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-400">El usuario solo indica qué quiere obtener, sin especificar cómo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-900 dark:bg-blue-950 text-white p-8 rounded-2xl flex flex-col justify-center shadow-xl transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Definición de Álgebra Relacional</h2>
                        <p className="text-lg opacity-95 leading-relaxed">
                            Es un conjunto de operaciones que actúan sobre relaciones para producir nuevas relaciones.
                            Es un lenguaje de consulta procedimental.
                        </p>
                    </div>
                </section>

                {/* Operaciones Monádicas */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-blue-900 dark:text-blue-300 flex items-center gap-2 uppercase transition-colors duration-300">
                        <Calculator /> Operaciones Monádicas (Unarias)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Selección */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md transition-colors duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">Selección (σ)</h3>
                                <span className="bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3 py-1 rounded text-xs font-mono font-bold">FILTRADO HORIZONTAL</span>
                            </div>
                            <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">Extrae un subconjunto de tuplas que satisfacen un predicado o condición.</p>
                            <div className="bg-slate-900 dark:bg-slate-950 text-blue-400 dark:text-blue-300 p-4 rounded font-mono text-sm border-l-4 border-blue-500 transition-colors duration-300">
                                σ<sub>condición</sub>(Relación)
                            </div>
                        </div>

                        {/* Proyección */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md transition-colors duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">Proyección (π)</h3>
                                <span className="bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3 py-1 rounded text-xs font-mono font-bold">FILTRADO VERTICAL</span>
                            </div>
                            <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">Extrae columnas específicas y elimina automáticamente las tuplas duplicadas resultantes.</p>
                            <div className="bg-slate-900 dark:bg-slate-950 text-blue-400 dark:text-blue-300 p-4 rounded font-mono text-sm border-l-4 border-blue-500 transition-colors duration-300">
                                π<sub>lista_atributos</sub>(Relación)
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operaciones de Conjunto */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-blue-900 dark:text-blue-300 flex items-center gap-2 uppercase transition-colors duration-300">
                        Operaciones de Conjunto
                    </h2>
                    <div className="bg-blue-100 dark:bg-blue-950 p-4 rounded-lg mb-8 border-l-8 border-blue-500 dark:border-blue-600 shadow-sm transition-colors duration-300">
                        <p className="text-sm text-blue-900 dark:text-blue-200 font-bold">
                            IMPORTANTE: Las relaciones deben ser compatibles (mismo grado y dominios compatibles).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                            <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">∪</div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">Unión</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Tuplas que están en R, en S o en ambas.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                            <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">∩</div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">Intersección</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Solo tuplas presentes en R y S simultáneamente.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                            <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">−</div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">Diferencia</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Tuplas que están en R pero no en S.</p>
                        </div>
                    </div>
                </section>

                {/* Producto Cartesiano y Join */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-blue-900 dark:text-blue-300 flex items-center gap-2 uppercase transition-colors duration-300">
                        Combinación de Relaciones
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Producto Cartesiano */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                                <X className="text-blue-600 dark:text-blue-400" /> Producto Cartesiano (×)
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 italic">Combina todas las tuplas de R con todas las de S.</p>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span className="text-slate-700 dark:text-slate-300">Grado Resultante:</span>
                                    <span className="font-mono font-bold text-blue-700 dark:text-blue-400">Grado(R) + Grado(S)</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span className="text-slate-700 dark:text-slate-300">Cardinalidad:</span>
                                    <span className="font-mono font-bold text-blue-700 dark:text-blue-400">Card(R) × Card(S)</span>
                                </div>
                            </div>
                        </div>

                        {/* Acople Natural */}
                        <div className="bg-blue-50 dark:bg-blue-950 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-sm transition-colors duration-300">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-900 dark:text-blue-300">
                                <Combine className="text-blue-600 dark:text-blue-400" /> Acople Natural (⋈)
                            </h3>
                            <p className="text-sm mb-4 leading-relaxed text-blue-900 dark:text-blue-200">
                                Combina relaciones mediante atributos comunes (mismo nombre y dominio). Elimina columnas repetidas.
                            </p>
                            <div className="bg-white dark:bg-blue-900 p-3 rounded font-mono text-[10px] border border-blue-200 dark:border-blue-700 text-slate-900 dark:text-blue-100">
                                Ejemplo: R(A, B, C) ⋈ S(B, D) → T(A, B, C, D)
                            </div>
                        </div>
                    </div>
                </section>

                {/* División */}
                <section className="mb-16 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-6">
                        <Divide className="text-blue-600 dark:text-blue-400" size={32} />
                        <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-100 uppercase">Operación División (÷)</h2>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                        Dadas R(Grado m+n) y S(Grado n), produce una relación de grado m con las tuplas de R que están asociadas con <strong>todas</strong> las tuplas de S.
                    </p>
                    <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600 text-xs font-bold text-red-900 dark:text-red-200 transition-colors duration-300">
                        REGLA: Los atributos de S deben ser un subconjunto de los de R.
                    </div>
                </section>

                {/* Propiedades Finales */}
                <footer className="mt-12 pt-8 border-t border-slate-300 dark:border-slate-700 transition-colors duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-black text-xs uppercase text-slate-600 dark:text-slate-400 tracking-widest mb-4">Notas Técnicas</h4>
                            <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-400">
                                <li>• El resultado de cualquier operación es siempre una nueva relación.</li>
                                <li>• Es obligatorio renombrar atributos si hay conflicto de nombres en operaciones de conjunto.</li>
                                <li>• En la DIFERENCIA, la cardinalidad es ≤ a la del primer operando.</li>
                            </ul>
                        </div>
                        <div className="flex items-end justify-end">
                            <span className="bg-blue-200 dark:bg-blue-950 text-blue-900 dark:text-blue-300 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors duration-300">
                                Sistemas de Bases de Datos I - 2026
                            </span>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}

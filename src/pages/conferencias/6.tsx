import {
    Variable,
    Search,
    CheckSquare,
    AlertTriangle,
    Terminal,
    BookOpen,
    Layers
} from 'lucide-react';

export function CalculoRelacionalPage() {
    return (
        <>
            <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* Introducción y Definición */}
                <section className="mb-12">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-800 dark:text-blue-400">
                            <Search size={28} /> Concepto Fundamental
                        </h2>
                        <p className="text-lg leading-relaxed mb-4 text-slate-700 dark:text-slate-300">
                            A diferencia del Álgebra Relacional (procedimental), el Cálculo Relacional es un lenguaje **no procedimental**.
                            En este modelo, el usuario describe **qué información se desea** sin especificar los pasos u operaciones para obtenerla.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600 transition-colors duration-300">
                            <p className="text-sm font-medium text-blue-900 dark:text-blue-200 italic">
                                "Se basa en una rama de la lógica matemática llamada Cálculo de Predicados de Primer Orden."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cálculo Relacional de Tuplas */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-900 dark:text-blue-300 uppercase tracking-wide transition-colors duration-300">
                        <Variable /> Cálculo Relacional de Tuplas (CRT)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-900 dark:text-slate-100">Variables de Tupla</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                Las variables representan tuplas de una relación específica.
                                Una expresión en CRT tiene la forma:
                            </p>
                            <div className="bg-slate-900 dark:bg-slate-950 text-blue-400 dark:text-blue-300 p-4 rounded-lg font-mono text-center text-lg transition-colors duration-300">
                                {"{ t | P(t) }"}
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 italic text-center">
                                Donde 't' es una variable de tupla y 'P(t)' es una condición (predicado).
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                            <h3 className="font-bold mb-4 text-slate-900 dark:text-slate-100">Componentes de P(t)</h3>
                            <ul className="text-sm space-y-2">
                                <li className="flex gap-2">
                                    <CheckSquare size={16} className="text-blue-600 dark:text-blue-400 shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300"><strong>Átomos:</strong> Relaciones (ej. Empleado(t)) o comparaciones entre atributos y constantes.</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckSquare size={16} className="text-blue-600 dark:text-blue-400 shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300"><strong>Operadores Lógicos:</strong> AND (∧), OR (∨), NOT (¬).</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckSquare size={16} className="text-blue-600 dark:text-blue-400 shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300"><strong>Cuantificadores:</strong> Existencial (∃) y Universal (∀).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Ejemplos de Consultas */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Terminal /> Ejemplos de Expresiones
                    </h2>

                    <div className="space-y-4">
                        {/* Ejemplo 1 */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2">1. Empleados con salario superior a 3000</h4>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded font-mono text-sm text-slate-800 dark:text-slate-200 transition-colors duration-300">
                                {"{ t | empleado(t) and t.salario > 3000 }"}
                            </div>
                        </div>

                        {/* Ejemplo 2 */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2">2. Empleados del departamento 'Computación'</h4>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded font-mono text-sm text-slate-800 dark:text-slate-200 transition-colors duration-300">
                                {"{ t.nombre | empleado(t) and (existe d)(departamento(d) and d.NombreD='Computación' and d.nrodpto=t.dno) }"}
                            </div>
                        </div>

                        {/* Ejemplo 3 */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <h4 className="font-bold text-blue-800 dark:text-blue-400 mb-2">3. Empleados que no tienen dependientes</h4>
                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded font-mono text-sm text-slate-800 dark:text-slate-200 transition-colors duration-300">
                                {"{ e.nombre | empleado(e) and (not(existe d)(dependiente(d) and e.codemp=d.ecodemp)) }"}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expresiones Seguras vs Inseguras */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <AlertTriangle className="text-yellow-500 dark:text-yellow-400" /> Seguridad en las Expresiones
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-900 dark:bg-blue-950 text-blue-50 dark:text-blue-100 p-6 rounded-xl shadow-lg transition-colors duration-300">
                            <h3 className="text-yellow-400 dark:text-yellow-300 font-bold mb-2 text-lg">Expresiones Inseguras</h3>
                            <p className="text-sm opacity-90 mb-4 text-blue-100 dark:text-blue-200">
                                Son aquellas que pueden producir un número infinito de tuplas que no pertenecen al dominio de la base de datos.
                            </p>
                            <div className="bg-slate-800 dark:bg-slate-900 p-3 rounded text-xs font-mono text-yellow-400 dark:text-yellow-300 transition-colors duration-300">
                                {"{ t | not(empleado(t)) }"}
                            </div>
                        </div>
                        <div className="bg-green-900 dark:bg-green-950 text-green-50 dark:text-green-100 p-6 rounded-xl shadow-lg border border-green-700 dark:border-green-800 transition-colors duration-300">
                            <h3 className="text-green-300 dark:text-green-200 font-bold mb-2 text-lg">Expresiones Seguras</h3>
                            <p className="text-sm opacity-90 text-green-100 dark:text-green-200">
                                Aquellas donde todos los valores del resultado pertenecen al dominio de la expresión (constantes o valores existentes en las relaciones consultadas).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cálculo Relacional de Dominios */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Layers className="text-blue-600 dark:text-blue-400" />
                        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300">Cálculo Relacional de Dominios (CRD)</h2>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                            A diferencia del CRT, las variables no representan tuplas completas, sino valores individuales de los dominios de los atributos.
                        </p>
                        <div className="bg-slate-900 dark:bg-slate-950 text-blue-400 dark:text-blue-300 p-4 rounded-lg font-mono text-center transition-colors duration-300">
                            {"{ <v1, v2, ..., vn> | P(v1, v2, ..., vn) }"}
                        </div>
                    </div>
                </section>

                {/* Bibliografía */}
                <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="max-w-md">
                            <h4 className="font-bold text-slate-500 dark:text-slate-400 uppercase text-xs mb-4 flex items-center gap-2">
                                <BookOpen size={16} /> Referencias Bibliográficas
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                                Elmasri, R. & Navathe, S. "Fundamientos de los sistemas de bases de datos". Capítulo 6, Páginas 169-177.
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                Sistemas de Bases de Datos I — Conferencia 6
                            </p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                Prof. Ramiro Alberto Pérez Vázquez
                            </p>
                        </div>
                    </div>
                </footer>

            </main>
        </>
    );
}

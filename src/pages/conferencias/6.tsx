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
                    <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-text-heading">
                            <Search size={28} className="text-highlight-purple" /> Concepto Fundamental
                        </h2>
                        <p className="text-lg leading-relaxed mb-4 text-text-body">
                            A diferencia del Álgebra Relacional (procedimental), el Cálculo Relacional es un lenguaje **no procedimental**.
                            En este modelo, el usuario describe **qué información se desea** sin especificar los pasos u operaciones para obtenerla.
                        </p>
                        <div className="bg-highlight-purple-soft p-4 rounded-lg border-l-4 border-highlight-purple transition-colors duration-300">
                            <p className="text-sm font-medium text-highlight-purple italic">
                                "Se basa en una rama de la lógica matemática llamada Cálculo de Predicados de Primer Orden."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cálculo Relacional de Tuplas */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-text-heading uppercase tracking-wide transition-colors duration-300 border-l-4 border-highlight-purple pl-4">
                        <Variable className="text-highlight-purple" /> Cálculo Relacional de Tuplas (CRT)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold border-b border-border pb-2 text-text-heading">Variables de Tupla</h3>
                            <p className="text-sm text-text-body">
                                Las variables representan tuplas de una relación específica.
                                Una expresión en CRT tiene la forma:
                            </p>
                            <div className="bg-surface-elevated text-highlight-purple p-6 rounded-xl font-mono text-center text-2xl transition-colors duration-300 border border-highlight-purple/20 shadow-inner">
                                {"{ t | P(t) }"}
                            </div>
                            <p className="text-xs text-text-secondary italic text-center">
                                Donde 't' es una variable de tupla y 'P(t)' es una condición (predicado).
                            </p>
                        </div>

                        <div className="bg-highlight-purple-soft p-6 rounded-xl border border-highlight-purple/30 transition-colors duration-300">
                            <h3 className="font-bold mb-4 text-text-heading">Componentes de P(t)</h3>
                            <ul className="text-sm space-y-2">
                                <li className="flex gap-2">
                                    <CheckSquare size={16} className="text-highlight-purple shrink-0" />
                                    <span className="text-text-body"><strong>Átomos:</strong> Relaciones (ej. Empleado(t)) o comparaciones entre atributos y constantes.</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckSquare size={16} className="text-highlight-purple shrink-0" />
                                    <span className="text-text-body"><strong>Operadores Lógicos:</strong> AND (∧), OR (∨), NOT (¬).</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckSquare size={16} className="text-highlight-purple shrink-0" />
                                    <span className="text-text-body"><strong>Cuantificadores:</strong> Existencial (∃) y Universal (∀).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Ejemplos de Consultas */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-text-heading transition-colors duration-300">
                        <Terminal className="text-highlight-green" /> Ejemplos de Expresiones
                    </h2>

                    <div className="space-y-4">
                        {/* Ejemplo 1 */}
                        <div className="bg-highlight-green-soft p-6 rounded-xl border border-highlight-green/20 shadow-sm transition-transform hover:translate-x-2">
                            <h4 className="font-bold text-highlight-green mb-2">1. Empleados con salario superior a 3000</h4>
                            <div className="bg-surface p-4 rounded-lg font-mono text-sm text-text-body border border-highlight-green/10">
                                {"{ t | empleado(t) and t.salario > 3000 }"}
                            </div>
                        </div>

                        {/* Ejemplo 2 */}
                        <div className="bg-highlight-green-soft p-6 rounded-xl border border-highlight-green/20 shadow-sm transition-transform hover:translate-x-2">
                            <h4 className="font-bold text-highlight-green mb-2">2. Empleados del departamento 'Computación'</h4>
                            <div className="bg-surface p-4 rounded-lg font-mono text-sm text-text-body border border-highlight-green/10">
                                {"{ t.nombre | empleado(t) and (existe d)(departamento(d) and d.NombreD='Computación' and d.nrodpto=t.dno) }"}
                            </div>
                        </div>

                        {/* Ejemplo 3 */}
                        <div className="bg-highlight-green-soft p-6 rounded-xl border border-highlight-green/20 shadow-sm transition-transform hover:translate-x-2">
                            <h4 className="font-bold text-highlight-green mb-2">3. Empleados que no tienen dependientes</h4>
                            <div className="bg-surface p-4 rounded-lg font-mono text-sm text-text-body border border-highlight-green/10">
                                {"{ e.nombre | empleado(e) and (not(existe d)(dependiente(d) and e.codemp=d.ecodemp)) }"}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expresiones Seguras vs Inseguras */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-text-heading transition-colors duration-300">
                        <AlertTriangle className="text-highlight-yellow" /> Seguridad en las Expresiones
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-highlight-yellow/10 text-text-heading p-6 rounded-xl shadow-lg transition-colors border-2 border-highlight-yellow">
                            <h3 className="font-bold mb-2 text-lg uppercase flex items-center gap-2 text-highlight-yellow">⚠️ Expresiones Inseguras</h3>
                            <p className="text-sm text-text-body mb-4 font-medium">
                                Son aquellas que pueden producir un número infinito de tuplas que no pertenecen al dominio de la base de datos.
                            </p>
                            <div className="bg-surface-elevated p-3 rounded text-xs font-mono font-bold transition-colors duration-300 border border-border/50">
                                {"{ t | not(empleado(t)) }"}
                            </div>
                        </div>
                        <div className="bg-surface border-2 border-highlight-green p-6 rounded-xl shadow-lg transition-colors duration-300">
                            <h3 className="text-highlight-green font-bold mb-2 text-lg uppercase flex items-center gap-2">✅ Expresiones Seguras</h3>
                            <p className="text-sm text-text-body font-medium">
                                Aquellas donde todos los valores del resultado pertenecen al dominio de la expresión (constantes o valores existentes en las relaciones consultadas).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cálculo Relacional de Dominios */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Layers className="text-highlight-purple" />
                        <h2 className="text-3xl font-bold text-text-heading">Cálculo Relacional de Dominios (CRD)</h2>
                    </div>
                    <div className="bg-surface p-6 rounded-xl border border-border transition-colors duration-300">
                        <p className="text-text-body mb-4">
                            A diferencia del CRT, las variables no representan tuplas completas, sino valores individuales de los dominios de los atributos.
                        </p>
                        <div className="bg-surface-elevated text-highlight-purple p-6 rounded-lg font-mono text-center text-xl transition-colors duration-300 border border-highlight-purple/20">
                            {"{ <v1, v2, ..., vn> | P(v1, v2, ..., vn) }"}
                        </div>
                    </div>
                </section>

                {/* Bibliografía */}
                <footer className="mt-20 pt-8 border-t border-border transition-colors duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="max-w-md">
                            <h4 className="font-bold text-text-secondary uppercase text-xs mb-4 flex items-center gap-2">
                                <BookOpen size={16} /> Referencias Bibliográficas
                            </h4>
                            <p className="text-xs text-text-secondary italic">
                                Elmasri, R. & Navathe, S. "Fundamientos de los sistemas de bases de datos". Capítulo 6, Páginas 169-177.
                            </p>
                        </div>
                        {/* <div className="text-right">
                            <p className="text-[10px] text-text-secondary uppercase tracking-widest">
                                Sistemas de Bases de Datos I — Conferencia 6
                            </p>
                            <p className="text-[10px] text-text-secondary uppercase tracking-widest">
                                Prof. Ramiro Alberto Pérez Vázquez
                            </p>
                        </div> */}
                    </div>
                </footer>

            </main>
        </>
    );
}

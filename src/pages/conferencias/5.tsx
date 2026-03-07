import {
    Calculator,
    Divide,
    X,
    Code,

    Combine,
    Info
} from 'lucide-react';

export function AlgebraRelacionalPage() {
    return (
        <>
            <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* Tipos de Lenguajes */}
                <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-surface p-6 rounded-2xl shadow-sm border-t-4 border-highlight-purple transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-text-heading">
                            <Code className="text-highlight-purple" /> Tipos de Lenguajes
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-highlight-purple-soft rounded-lg border border-highlight-purple/20 transition-colors duration-300">
                                <h3 className="font-bold text-highlight-purple italic underline">Procedimentales (Álgebra Relacional)</h3>
                                <p className="text-sm text-text-body">El usuario indica las operaciones que hay que realizar para obtener los resultados.</p>
                            </div>
                            <div className="p-4 bg-surface-elevated rounded-lg border border-border transition-colors duration-300">
                                <h3 className="font-bold text-text-heading italic underline">No Procedimentales (Cálculo Relacional)</h3>
                                <p className="text-sm text-text-secondary">El usuario solo indica qué quiere obtener, sin especificar cómo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-highlight-purple text-foreground p-8 rounded-2xl flex flex-col justify-center shadow-xl transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-highlight-purple-soft">Definición de Álgebra Relacional</h2>
                        <p className="text-lg opacity-95 leading-relaxed font-medium">
                            Es un conjunto de operaciones que actúan sobre relaciones para producir nuevas relaciones.
                            Es un lenguaje de consulta procedimental.
                        </p>
                    </div>
                </section>

                {/* Operaciones Monádicas */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-text-heading flex items-center gap-2 uppercase transition-colors duration-300 border-l-4 border-highlight-purple pl-4">
                        <Calculator className="text-highlight-purple" /> Operaciones Monádicas (Unarias)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Selección */}
                        <div className="bg-surface p-6 rounded-xl border border-border shadow-md transition-colors duration-300 hover:border-highlight-purple/50">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-highlight-purple">Selección (σ)</h3>
                                <span className="bg-highlight-purple-soft text-highlight-purple px-3 py-1 rounded text-xs font-mono font-bold">FILTRADO HORIZONTAL</span>
                            </div>
                            <p className="text-sm mb-4 text-text-body">Extrae un subconjunto de tuplas que satisfacen un predicado o condición.</p>
                            <div className="bg-surface-elevated text-highlight-purple p-4 rounded font-mono text-sm border-l-4 border-highlight-purple transition-colors duration-300">
                                σ<sub>condición</sub>(Relación)
                            </div>
                        </div>

                        {/* Proyección */}
                        <div className="bg-surface p-6 rounded-xl border border-border shadow-md transition-colors duration-300 hover:border-highlight-purple/50">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-highlight-purple">Proyección (π)</h3>
                                <span className="bg-highlight-purple-soft text-highlight-purple px-3 py-1 rounded text-xs font-mono font-bold">FILTRADO VERTICAL</span>
                            </div>
                            <p className="text-sm mb-4 text-text-body">Extrae columnas específicas y elimina automáticamente las tuplas duplicadas resultantes.</p>
                            <div className="bg-surface-elevated text-highlight-purple p-4 rounded font-mono text-sm border-l-4 border-highlight-purple transition-colors duration-300">
                                π<sub>lista_atributos</sub>(Relación)
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operaciones de Conjunto */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-text-heading flex items-center gap-2 uppercase transition-colors duration-300">
                        Operaciones de Conjunto
                    </h2>
                    <div className="bg-highlight-yellow-soft p-5 rounded-xl mb-8 border-l-8 border-highlight-yellow shadow-sm transition-colors duration-300">
                        <p className="text-sm text-text-body font-bold flex items-center gap-2">
                            <Info className="text-highlight-yellow" size={20} /> IMPORTANTE: Las relaciones deben ser compatibles (mismo grado y dominios compatibles).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-surface border border-border rounded-xl text-center hover:shadow-lg hover:border-highlight-purple transition-all duration-300 group">
                            <div className="text-4xl text-highlight-purple mb-2 transition-transform group-hover:scale-125">∪</div>
                            <h4 className="font-bold text-lg text-text-heading">Unión</h4>
                            <p className="text-xs text-text-secondary">Tuplas que están en R, en S o en ambas.</p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-xl text-center hover:shadow-lg hover:border-highlight-purple transition-all duration-300 group">
                            <div className="text-4xl text-highlight-purple mb-2 transition-transform group-hover:scale-125">∩</div>
                            <h4 className="font-bold text-lg text-text-heading">Intersección</h4>
                            <p className="text-xs text-text-secondary">Solo tuplas presentes en R y S simultáneamente.</p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-xl text-center hover:shadow-lg hover:border-highlight-purple transition-all duration-300 group">
                            <div className="text-4xl text-highlight-purple mb-2 transition-transform group-hover:scale-125">−</div>
                            <h4 className="font-bold text-lg text-text-heading">Diferencia</h4>
                            <p className="text-xs text-text-secondary">Tuplas que están en R pero no en S.</p>
                        </div>
                    </div>
                </section>

                {/* Producto Cartesiano y Join */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-text-heading flex items-center gap-2 uppercase transition-colors duration-300">
                        Combinación de Relaciones
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Producto Cartesiano */}
                        <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border transition-colors duration-300">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-text-heading">
                                <X className="text-highlight-purple" /> Producto Cartesiano (×)
                            </h3>
                            <p className="text-sm text-text-secondary mb-6 italic">Combina todas las tuplas de R con todas las de S.</p>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm border-b border-border pb-2">
                                    <span className="text-text-body">Grado Resultante:</span>
                                    <span className="font-mono font-bold text-highlight-purple">Grado(R) + Grado(S)</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-border pb-2">
                                    <span className="text-text-body">Cardinalidad:</span>
                                    <span className="font-mono font-bold text-highlight-purple">Card(R) × Card(S)</span>
                                </div>
                            </div>
                        </div>

                        {/* Acople Natural */}
                        <div className="bg-highlight-purple-soft p-8 rounded-2xl border border-highlight-purple transition-colors duration-300">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-highlight-purple">
                                <Combine className="text-highlight-purple" /> Acople Natural (⋈)
                            </h3>
                            <p className="text-sm mb-4 leading-relaxed text-text-body">
                                Combina relaciones mediante atributos comunes (mismo nombre y dominio). Elimina columnas repetidas.
                            </p>
                            <div className="bg-surface-elevated p-3 rounded font-mono text-[11px] border border-highlight-purple/20 text-text-heading">
                                Ejemplo: R(A, B, C) ⋈ S(B, D) → T(A, B, C, D)
                            </div>
                        </div>
                    </div>
                </section>

                {/* División */}
                <section className="mb-16 bg-surface p-8 rounded-2xl border border-border shadow-sm transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-6">
                        <Divide className="text-highlight-purple" size={32} />
                        <h2 className="text-2xl font-bold text-text-heading uppercase">Operación División (÷)</h2>
                    </div>
                    <p className="text-text-body mb-6 text-lg">
                        Dadas R(Grado m+n) y S(Grado n), produce una relación de grado m con las tuplas de R que están asociadas con <strong>todas</strong> las tuplas de S.
                    </p>
                    <div className="bg-highlight-yellow-soft p-4 rounded-lg border-l-4 border-highlight-yellow text-xs font-bold text-text-body transition-colors duration-300">
                        REGLA: Los atributos de S deben ser un subconjunto de los de R.
                    </div>
                </section>

                {/* Propiedades Finales */}
                <footer className="mt-12 pt-8 border-t border-border transition-colors duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-black text-xs uppercase text-text-secondary tracking-widest mb-4">Notas Técnicas</h4>
                            <ul className="text-xs space-y-2 text-text-secondary">
                                <li>• El resultado de cualquier operación es siempre una nueva relación.</li>
                                <li>• Es obligatorio renombrar atributos si hay conflicto de nombres en operaciones de conjunto.</li>
                                <li>• En la DIFERENCIA, la cardinalidad es ≤ a la del primer operando.</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}

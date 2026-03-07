import {
    Calculator,
    Binary,
    ArrowRightLeft,
    ShieldCheck,
    Layers,
    Code,
    Zap
} from 'lucide-react';

export function Conferencia8Completa() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* 1. DETERMINACIÓN DEL CIERRE O CLAUSURA */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-text-heading border-l-4 border-highlight-purple pl-4 transition-colors duration-300">
                        <Calculator className="text-highlight-purple" /> 1. Clausura de un Conjunto de Atributos (X⁺)
                    </h2>

                    <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border transition-colors duration-300">
                        <p className="mb-6 text-text-body leading-relaxed">
                            La clausura de un descriptor <span className="font-bold text-highlight-purple">X</span> respecto a un conjunto de dependencias <span className="font-bold text-highlight-purple">F</span> es el conjunto de todos los atributos que dependen funcionalmente de X según las reglas de inferencia.
                        </p>

                        {/* Algoritmo de Clausura */}
                        <div className="bg-surface-elevated text-text-primary p-6 rounded-xl font-mono text-sm mb-8 shadow-inner transition-colors duration-300 border border-border/50">
                            <h4 className="text-highlight-purple-soft font-bold mb-4 border-b border-border pb-2 uppercase text-xs tracking-widest">Algoritmo de Jeffrey D. Ullman</h4>
                            <p>Entrada: Un conjunto de DFs <span className="text-highlight-purple">F</span> y un conjunto de atributos <span className="text-highlight-purple">X</span>.</p>
                            <p className="mt-2 text-highlight-purple">1. <span className="font-bold">Resultado</span> := X;</p>
                            <p className="text-highlight-purple">2. <span className="font-bold">Repetir</span> hasta que no haya cambios:</p>
                            <div className="ml-4 space-y-1 border-l-2 border-highlight-purple/30 pl-4 my-2">
                                <p>Por cada DF (<span className="text-highlight-purple font-bold">A → B</span>) en F:</p>
                                <p className="ml-4">Si (<span className="text-highlight-purple font-bold">A ⊆ Resultado</span>) entonces:</p>
                                <p className="ml-8 text-highlight-purple font-black">Resultado := Resultado ∪ B;</p>
                            </div>
                            <p className="text-highlight-purple font-bold">3. <span className="font-bold">Retornar</span> Resultado;</p>
                        </div>

                        {/* Ejemplo Práctico de Clausura */}
                        <div className="bg-highlight-purple/5 p-6 rounded-xl border border-highlight-purple/20 transition-colors duration-300">
                            <h3 className="font-bold text-highlight-purple mb-4 flex items-center gap-2 text-lg uppercase tracking-tight">
                                <Zap className="text-highlight-yellow" size={20} /> Ejemplo de Aplicación (X⁺)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                                <div>
                                    <p className="font-black mb-3 text-text-secondary uppercase text-xs tracking-widest">Entradas:</p>
                                    <ul className="font-mono bg-surface p-4 rounded-xl border border-border shadow-sm text-text-primary transition-colors duration-300">
                                        <li>R(A, B, C, D, E, H)</li>
                                        <li>F = {'{ A → B, BC → D, E → C, D → A }'}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-black mb-3 text-text-secondary uppercase text-xs tracking-widest">Proceso: Calcular (AE)⁺</p>
                                    <div className="space-y-2 italic text-text-body p-4 bg-surface rounded-xl border border-border/50">
                                        <p className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-highlight-purple"></span>
                                            <span>Inicio: <span className="font-mono font-bold text-highlight-purple">AE</span></span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-highlight-purple"></span>
                                            <span>A → B: A está en AE, sumamos B → <span className="font-mono font-bold text-highlight-purple">AEB</span></span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-highlight-purple"></span>
                                            <span>E → C: E está en AEB, sumamos C → <span className="font-mono font-bold text-highlight-purple">AEBC</span></span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-highlight-purple"></span>
                                            <span>BC → D: BC está en AEBC, sumamos D → <span className="font-mono font-bold text-highlight-purple">AEBCD</span></span>
                                        </p>
                                        <div className="mt-4 p-3 bg-highlight-purple text-highlight-purple-soft rounded-lg font-bold text-center shadow-lg not-italic">
                                            Resultado Final: (AE)⁺ = {'{A, B, C, D, E}'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. EQUIVALENCIA ENTRE CONJUNTOS DE DFs */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-text-heading border-l-4 border-highlight-green pl-4 transition-colors duration-300">
                        <ArrowRightLeft className="text-highlight-green" /> 2. Equivalencia y Recubrimiento
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-surface p-6 rounded-xl border border-border shadow-sm transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-4 text-highlight-green uppercase tracking-tight">Prueba de Recubrimiento (F cubre a G)</h3>
                            <p className="text-sm mb-4 text-text-body">Un conjunto F cubre a G si todas las dependencias de G pueden inferirse de F.</p>
                            <div className="p-4 bg-surface-elevated rounded-lg border-l-4 border-highlight-green transition-colors duration-300">
                                <p className="text-xs font-bold mb-2 uppercase text-text-primary tracking-widest">Procedimiento:</p>
                                <p className="text-xs text-text-body leading-relaxed">Para cada <span className="font-mono bg-highlight-green/10 px-1 rounded">X → Y</span> en G, calcula <span className="font-mono bg-highlight-green/10 px-1 rounded">X⁺</span> usando las DFs de F. Si <span className="font-mono bg-highlight-green/10 px-1 rounded">Y ⊆ X⁺</span>, la DF está cubierta.</p>
                            </div>
                        </div>

                        <div className="bg-highlight-green text-highlight-green-soft p-6 rounded-xl shadow-lg transition-colors duration-300 flex flex-col justify-between border-2 border-highlight-green/30">
                            <div>
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 uppercase tracking-tight">
                                    <ShieldCheck className="text-highlight-green-soft" /> Equivalencia (F ≡ G)
                                </h3>
                                <p className="text-sm mb-6 opacity-90 leading-relaxed font-medium">Dos conjuntos son idénticos en su poder de restricción si se cubren mutuamente:</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 bg-surface/10 rounded-2xl backdrop-blur-sm border border-white/10">
                                <span className="text-3xl font-black tracking-tighter">F ⊇ G  &  G ⊇ F</span>
                                <span className="text-[10px] mt-3 uppercase tracking-[0.2em] font-bold opacity-80">Ambos conjuntos son equivalentes</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CUBRIMIENTO MINIMAL O IRREDUCIBLE */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-text-heading border-l-4 border-highlight-purple pl-4 transition-colors duration-300">
                        <Layers className="text-highlight-purple" /> 3. Algoritmo de Cubrimiento Minimal
                    </h2>

                    <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border transition-colors duration-300">
                        <p className="text-sm mb-8 bg-highlight-purple/5 p-4 border border-highlight-purple/20 rounded-lg text-text-primary transition-colors duration-300 italic font-medium">
                            Un conjunto es <span className="text-highlight-purple font-bold">minimal</span> si no tiene dependencias redundantes, ni atributos extraños a la izquierda, y cada lado derecho es un atributo único.
                        </p>

                        <div className="space-y-12">
                            {/* PASO 1 */}
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-highlight-purple text-highlight-purple-soft w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transition-colors duration-300">1</span>
                                    <h3 className="text-lg font-bold text-text-heading uppercase tracking-tight">Lado Derecho Atómico</h3>
                                </div>
                                <p className="text-sm ml-12 text-text-body font-medium leading-relaxed">Descomponer cada <span className="font-mono bg-surface-elevated px-2 py-0.5 rounded border border-border">X → {'{A, B, C}'}</span> en <span className="font-mono text-highlight-purple font-bold px-2">X → A, X → B, X → C</span>.</p>
                            </div>

                            {/* PASO 2 */}
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-highlight-purple text-highlight-purple-soft w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transition-colors duration-300">2</span>
                                    <h3 className="text-lg font-bold text-text-heading uppercase tracking-tight">Eliminar Atributos Extraños</h3>
                                </div>
                                <div className="ml-12 text-sm text-text-body leading-relaxed">
                                    <p className="mb-3">Para una DF <span className="font-mono font-bold text-highlight-purple">XY → A</span>, verificar si <span className="font-mono font-bold text-highlight-purple">X → A</span> ya es suficiente.</p>
                                    <div className="bg-surface-elevated p-4 rounded-xl border border-border text-xs italic text-text-secondary transition-colors duration-300">
                                        <span className="font-bold text-text-primary not-italic block mb-1">Prueba Técnica:</span>
                                        Calcular <span className="font-mono font-bold text-highlight-purple">X⁺</span> usando F. Si <span className="font-mono font-bold text-highlight-purple">A ∈ X⁺</span>, entonces Y es extraño y se elimina.
                                    </div>
                                </div>
                            </div>

                            {/* PASO 3 */}
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-highlight-purple text-highlight-purple-soft w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transition-colors duration-300">3</span>
                                    <h3 className="text-lg font-bold text-text-heading uppercase tracking-tight">Eliminar Dependencias Redundantes</h3>
                                </div>
                                <div className="ml-12 text-sm text-text-body leading-relaxed">
                                    <p className="mb-3">Para cada DF <span className="font-mono font-bold text-highlight-purple">X → A</span>, ver si puede obtenerse mediante las demás DFs del conjunto.</p>
                                    <div className="bg-surface-elevated p-4 rounded-xl border border-border text-xs italic text-text-secondary transition-colors duration-300">
                                        <span className="font-bold text-text-primary not-italic block mb-1">Prueba Técnica:</span>
                                        Sea <span className="font-mono font-bold text-highlight-purple">G = F - {'{X → A}'}</span>. Calcular <span className="font-mono font-bold text-highlight-purple">X⁺</span> usando G. Si <span className="font-mono font-bold text-highlight-purple">A ∈ X⁺</span>, la DF <span className="font-mono font-bold text-highlight-purple text-highlight-yellow-soft bg-highlight-yellow/80 px-1">X → A</span> es redundante y se elimina.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ejemplo Completo Final */}
                        <div className="mt-12 bg-highlight-purple text-highlight-purple-soft rounded-3xl p-8 shadow-2xl relative overflow-hidden transition-colors duration-300 border-2 border-highlight-purple/20">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Code size={120} />
                            </div>
                            <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-tighter">
                                <Binary className="text-highlight-yellow" /> Resolución de Caso Completo
                            </h3>
                            <div className="space-y-8 text-sm relative z-10">
                                <div>
                                    <p className="opacity-80 font-bold mb-3 uppercase tracking-widest text-xs">Original:</p>
                                    <p className="font-mono text-lg bg-surface/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm inline-block">F = {'{ A → B, B → A, B → C, A → C, C → A }'}</p>
                                </div>
                                <div className="border-l-4 border-highlight-yellow pl-6 space-y-4">
                                    <p className="text-lg"><strong>Análisis de Redundancia:</strong></p>
                                    <p>¿Es <span className="font-mono font-black text-highlight-yellow bg-black/20 px-2 py-0.5 rounded">A → C</span> redundante?</p>
                                    <p className="opacity-90">Probamos <span className="font-mono italic">A⁺</span> sin esa dependencia usando: {'{ A → B, B → A, B → C, C → A }'}</p>
                                    <ul className="ml-4 space-y-2 opacity-80">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-highlight-yellow rounded-full"></span>
                                            <span>A → B (incluye B)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-highlight-yellow rounded-full"></span>
                                            <span>B → C (incluye C)</span>
                                        </li>
                                        <li className="font-bold text-highlight-yellow flex items-center gap-2">
                                            <span className="w-2 h-2 bg-highlight-yellow rounded-full"></span>
                                            <span>Resultado: A⁺ = {`{A, B, C}`}</span>
                                        </li>
                                    </ul>
                                    <div className="bg-highlight-yellow/80 p-4 rounded-xl text-black font-bold shadow-lg">
                                        Como <span className="underline">C</span> ya está en <span className="font-mono">A⁺</span>, la dependencia <span className="font-black italic underline uppercase">A → C es redundante</span> y se elimina.
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <p className="text-highlight-yellow font-black mb-3 uppercase tracking-[0.2em] text-xs">Cubrimiento Minimal Final:</p>
                                    <p className="font-mono text-2xl tracking-tighter bg-black/20 p-4 rounded-2xl border border-white/5 inline-block">F_min = {'{ A → B, B → A, B → C, C → A }'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONCLUSIONES TÉCNICAS */}
                <footer className="mt-16 pt-8 border-t border-border transition-colors duration-300">
                    <h3 className="text-xs font-black text-text-secondary uppercase tracking-[0.3em] mb-8 text-center">Importancia de la Conferencia 8</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 bg-surface rounded-2xl border border-border shadow-sm hover:border-highlight-purple/50 transition-colors duration-300">
                            <h4 className="text-sm font-black text-text-heading mb-3 uppercase tracking-tight">Diseño Lógico</h4>
                            <p className="text-xs text-text-body leading-relaxed">Permite simplificar esquemas antes de aplicar Normalización (2FN, 3FN).</p>
                        </div>
                        <div className="p-5 bg-surface rounded-2xl border border-border shadow-sm hover:border-highlight-purple/50 transition-colors duration-300">
                            <h4 className="text-sm font-black text-text-heading mb-3 uppercase tracking-tight">Optimización</h4>
                            <p className="text-xs text-text-body leading-relaxed">Elimina redundancias físicas y lógicas que ralentizan el SBD.</p>
                        </div>
                        <div className="p-5 bg-surface rounded-2xl border border-border shadow-sm hover:border-highlight-purple/50 transition-colors duration-300">
                            <h4 className="text-sm font-black text-text-heading mb-3 uppercase tracking-tight">Teoría de Llaves</h4>
                            <p className="text-xs text-text-body leading-relaxed">El cálculo de X⁺ es el método formal para demostrar que un descriptor es Clave Candidata.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
              
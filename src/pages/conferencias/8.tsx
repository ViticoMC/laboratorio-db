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
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-300 border-l-4 border-blue-600 dark:border-blue-500 pl-4 transition-colors duration-300">
                        <Calculator /> 1. Clausura de un Conjunto de Atributos (X⁺)
                    </h2>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                            La clausura de un descriptor <span className="font-bold">X</span> respecto a un conjunto de dependencias <span className="font-bold">F</span> es el conjunto de todos los atributos que dependen funcionalmente de X según las reglas de inferencia.
                        </p>

                        {/* Algoritmo de Clausura */}
                        <div className="bg-slate-900 dark:bg-slate-950 text-blue-400 dark:text-blue-300 p-6 rounded-xl font-mono text-sm mb-8 shadow-inner transition-colors duration-300">
                            <h4 className="text-slate-400 dark:text-slate-500 mb-4 border-b border-slate-700 dark:border-slate-600 pb-2 uppercase text-xs">Algoritmo de Jeffrey D. Ullman</h4>
                            <p>Entrada: Un conjunto de DFs <span className="text-white">F</span> y un conjunto de atributos <span className="text-white">X</span>.</p>
                            <p className="mt-2">1. <span className="text-blue-300 dark:text-blue-400">Resultado</span> := X;</p>
                            <p>2. <span className="text-blue-300 dark:text-blue-400">Repetir</span> hasta que no haya cambios:</p>
                            <p className="ml-4">Por cada DF (<span className="text-white">A → B</span>) en F:</p>
                            <p className="ml-8">Si (<span className="text-white">A ⊆ Resultado</span>) entonces:</p>
                            <p className="ml-12 text-white">Resultado := Resultado ∪ B;</p>
                            <p>3. <span className="text-blue-300 dark:text-blue-400">Retornar</span> Resultado;</p>
                        </div>

                        {/* Ejemplo Práctico de Clausura */}
                        <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                            <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center gap-2 text-lg">
                                <Zap size={20} /> Ejemplo de Aplicación (X⁺)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                <div>
                                    <p className="font-bold mb-2 text-blue-800 dark:text-blue-400">Dados:</p>
                                    <ul className="font-mono bg-white dark:bg-slate-800 p-3 rounded border border-blue-200 dark:border-blue-700 text-slate-900 dark:text-slate-100 transition-colors duration-300">
                                        <li>R(A, B, C, D, E, H)</li>
                                        <li>F = {'{ A → B, BC → D, E → C, D → A }'}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold mb-2 text-blue-800 dark:text-blue-400">Problema: Calcular (AE)⁺</p>
                                    <div className="space-y-1 italic text-slate-600 dark:text-slate-400">
                                        <p>• Inicio: <span className="font-mono">AE</span></p>
                                        <p>• A → B: A está en AE, sumamos B → <span className="font-mono">AEB</span></p>
                                        <p>• E → C: E está en AEB, sumamos C → <span className="font-mono">AEBC</span></p>
                                        <p>• BC → D: BC está en AEBC, sumamos D → <span className="font-mono">AEBCD</span></p>
                                        <p className="text-blue-700 dark:text-blue-400 font-bold mt-2">Resultado Final: (AE)⁺ = {'{A, B, C, D, E}'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. EQUIVALENCIA ENTRE CONJUNTOS DE DFs */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-300 border-l-4 border-blue-600 dark:border-blue-500 pl-4 transition-colors duration-300">
                        <ArrowRightLeft /> 2. Equivalencia y Recubrimiento
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-4 text-blue-800 dark:text-blue-400">Prueba de Recubrimiento (F cubre a G)</h3>
                            <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">Un conjunto F cubre a G si todas las dependencias de G pueden inferirse de F.</p>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-blue-500 dark:border-blue-600 transition-colors duration-300">
                                <p className="text-xs font-bold mb-2 uppercase text-slate-900 dark:text-slate-100">Procedimiento:</p>
                                <p className="text-xs text-slate-700 dark:text-slate-300">Para cada <span className="font-mono">X → Y</span> en G, calcula <span className="font-mono">X⁺</span> usando las DFs de F. Si <span className="font-mono">Y ⊆ X⁺</span>, la DF está cubierta.</p>
                            </div>
                        </div>

                        <div className="bg-blue-900 dark:bg-blue-950 text-white p-6 rounded-xl shadow-lg transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-blue-300 dark:text-blue-400" /> Equivalencia (F ≡ G)
                            </h3>
                            <p className="text-sm mb-4 text-blue-100 dark:text-blue-200">Dos conjuntos son idénticos en su poder de restricción si se cubren mutuamente:</p>
                            <div className="flex flex-col items-center justify-center p-4 bg-blue-800 dark:bg-blue-950 rounded-lg">
                                <span className="text-2xl font-black">F ⊇ G  &  G ⊇ F</span>
                                <span className="text-[10px] mt-2 uppercase tracking-widest text-blue-300 dark:text-blue-400">Ambos conjuntos son equivalentes</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CUBRIMIENTO MINIMAL O IRREDUCIBLE */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-900 dark:text-blue-300 border-l-4 border-blue-600 dark:border-blue-500 pl-4 transition-colors duration-300">
                        <Layers /> 3. Algoritmo de Cubrimiento Minimal
                    </h2>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-8 bg-blue-50 dark:bg-blue-950 p-4 border border-blue-200 dark:border-blue-800 rounded-lg text-blue-900 dark:text-blue-300 transition-colors duration-300">
                            Un conjunto es **minimal** si no tiene dependencias redundantes, ni atributos extraños a la izquierda, y cada lado derecho es un atributo único.
                        </p>

                        <div className="space-y-12">
                            {/* PASO 1 */}
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-blue-600 dark:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transition-colors duration-300">1</span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Lado Derecho Atómico</h3>
                                </div>
                                <p className="text-sm ml-12 text-slate-700 dark:text-slate-300">Descomponer cada <span className="font-mono">X → {'{A, B, C}'}</span> en <span className="font-mono">X → A, X → B, X → C</span>.</p>
                            </div>

                            {/* PASO 2 */}
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-blue-600 dark:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transition-colors duration-300">2</span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Eliminar Atributos Extraños (Lado Izquierdo)</h3>
                                </div>
                                <div className="ml-12 text-sm text-slate-700 dark:text-slate-300">
                                    <p className="mb-2">Para una DF <span className="font-mono">XY → A</span>, verificar si <span className="font-mono">X → A</span> ya es suficiente.</p>
                                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700 text-xs italic text-slate-600 dark:text-slate-400 transition-colors duration-300">
                                        Prueba: Calcular <span className="font-mono">X⁺</span> usando F. Si <span className="font-mono">A ∈ X⁺</span>, entonces Y es extraño y se elimina.
                                    </div>
                                </div>
                            </div>

                            {/* PASO 3 */}
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-blue-600 dark:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transition-colors duration-300">3</span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Eliminar Dependencias Redundantes</h3>
                                </div>
                                <div className="ml-12 text-sm text-slate-700 dark:text-slate-300">
                                    <p className="mb-2">Para cada DF <span className="font-mono">X → A</span>, ver si puede obtenerse mediante las demás DFs del conjunto.</p>
                                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700 text-xs italic text-slate-600 dark:text-slate-400 transition-colors duration-300">
                                        Prueba: Sea <span className="font-mono">G = F - {'{X → A}'}</span>. Calcular <span className="font-mono">X⁺</span> usando G. Si <span className="font-mono">A ∈ X⁺</span>, la DF <span className="font-mono">X → A</span> es redundante y se elimina.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ejemplo Completo Final */}
                        <div className="mt-12 bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 text-white relative overflow-hidden transition-colors duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Code size={120} />
                            </div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-400 dark:text-blue-300">
                                <Binary /> Resolución de Caso Completo
                            </h3>
                            <div className="space-y-6 text-sm">
                                <div>
                                    <p className="text-blue-300 dark:text-blue-400 font-bold mb-2">Original:</p>
                                    <p className="font-mono">F = {'{ A → B, B → A, B → C, A → C, C → A }'}</p>
                                </div>
                                <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4 space-y-4">
                                    <p><strong>Análisis de Redundancia:</strong></p>
                                    <p>¿Es <span className="text-blue-400 dark:text-blue-300 font-mono text-base">A → C</span> redundante?</p>
                                    <p>Probamos <span className="font-mono italic">A⁺</span> sin esa dependencia usando: {'{ A → B, B → A, B → C, C → A }'}</p>
                                    <ul className="ml-4 space-y-1 text-slate-400 dark:text-slate-500">
                                        <li>• A → B (incluye B)</li>
                                        <li>• B → C (incluye C)</li>
                                        <li>• Resultado: <span className="text-blue-400 dark:text-blue-300">A⁺ = {`{A, B, C}`}</span></li>
                                    </ul>
                                    <p className="bg-blue-800 dark:bg-blue-950 p-2 rounded text-blue-100 dark:text-blue-200">
                                        Como <span className="font-bold">C</span> ya está en <span className="font-mono">A⁺</span>, la dependencia <span className="text-red-400 dark:text-red-300">A → C es redundante</span> y se elimina.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-blue-400 dark:text-blue-300 font-bold mb-2 uppercase tracking-tighter">Cubrimiento Minimal Final:</p>
                                    <p className="font-mono text-lg">F_min = {'{ A → B, B → A, B → C, C → A }'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONCLUSIONES TÉCNICAS */}
                <footer className="mt-16 pt-8 border-t border-slate-300 dark:border-slate-700 transition-colors duration-300">
                    <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">Importancia de la Conferencia 8</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Diseño Lógico</h4>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400">Permite simplificar esquemas antes de aplicar Normalización (2FN, 3FN).</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Optimización</h4>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400">Elimina redundancias físicas y lógicas que ralentizan el SBD.</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Teoría de Llaves</h4>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400">El cálculo de X⁺ es el método formal para demostrar que un descriptor es Clave Candidata.</p>
                        </div>
                    </div>
                    <p className="text-center mt-12 text-[10px] text-slate-400 dark:text-slate-500 uppercase transition-colors duration-300">
                        SBD I - 2026 - Conferencia 8 Completa (Algoritmos y Propiedades)
                    </p>
                </footer>

            </main>
        </>
    );
}

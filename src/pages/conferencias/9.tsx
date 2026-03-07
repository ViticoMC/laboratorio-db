import {
    Library,
    Unlink2,
    DatabaseZap,
    TableProperties,
    CheckCircle,
    FileCode,
    Combine,
    SearchCode,
    AlertCircle
} from 'lucide-react';

export function DescomposicionRelacionesPage() {
    return (
        <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

            {/* Concepto de Descomposición */}
            <section className="mb-12">
                <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-colors duration-300">
                    <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-text-heading uppercase tracking-tight">
                        <TableProperties size={32} className="text-highlight-purple" /> ¿Qué es la Descomposición?
                    </h2>
                    <p className="text-lg leading-relaxed mb-8 text-text-body">
                        Es el proceso de sustituir una relación <span className="font-bold text-highlight-purple">R</span> por un conjunto de relaciones <span className="font-bold text-highlight-purple">{"{R1, R2, ..., Rn}"}</span> tales que cada <span className="italic">Ri</span> es una proyección de <span className="italic">R</span> y la unión de sus atributos forma el esquema original.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-highlight-purple/5 p-5 rounded-2xl border border-highlight-purple/20 transition-colors duration-300 hover:bg-highlight-purple/10">
                            <h4 className="font-black text-highlight-purple text-xs mb-3 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-highlight-purple"></span> Propiedad Obligatoria 1
                            </h4>
                            <p className="text-sm text-text-primary font-bold">Acople sin pérdida de información (Lossless Join).</p>
                        </div>
                        <div className="bg-highlight-purple/5 p-5 rounded-2xl border border-highlight-purple/20 transition-colors duration-300 hover:bg-highlight-purple/10">
                            <h4 className="font-black text-highlight-purple text-xs mb-3 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-highlight-purple"></span> Propiedad Obligatoria 2
                            </h4>
                            <p className="text-sm text-text-primary font-bold">Preservación de las Dependencias Funcionales.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. Acople sin Pérdida de Información */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-text-heading border-l-4 border-highlight-green pl-4 uppercase tracking-tight transition-colors duration-300">
                    <Combine className="text-highlight-green" /> 1. Acople sin Pérdida (Lossless Join)
                </h2>

                <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-colors duration-300">
                    <p className="mb-8 text-sm text-text-body leading-relaxed font-medium">
                        Garantiza que al realizar el <span className="font-mono font-bold text-highlight-green bg-highlight-green/10 px-2 py-0.5 rounded">Natural Join</span> de las relaciones descompuestas, obtengamos exactamente las mismas tuplas de la relación original, sin generar "tuplas espurias".
                    </p>

                    <h3 className="text-lg font-black mb-4 text-text-heading flex items-center gap-2 uppercase tracking-tighter">
                        <Library className="text-highlight-green" size={20} /> Algoritmo de Prueba (Matriz de Aho)
                    </h3>
                    <div className="bg-surface-elevated text-text-primary p-6 rounded-2xl font-mono text-xs mb-8 transition-colors duration-300 border border-border/50 shadow-inner">
                        <p className="text-highlight-green font-bold mb-3 border-b border-border pb-2 uppercase tracking-widest text-[10px]">Procedimiento Técnico</p>
                        <p className="mb-1"><span className="text-highlight-green font-bold">1.</span> Crear matriz S con filas (Ri) y columnas (Aj).</p>
                        <p className="mb-1"><span className="text-highlight-green font-bold">2.</span> Si Aj ∈ Ri, poner <span className="text-highlight-green font-black">a(j)</span>. Si no, poner <span className="opacity-50 font-bold">b(i,j)</span>.</p>
                        <p className="mb-1"><span className="text-highlight-green font-bold">3.</span> Por cada DF (X → Y) en F:</p>
                        <p className="ml-5 border-l-2 border-highlight-green/30 pl-4 my-2 opacity-90 italic">Si filas tienen valores iguales en columnas de X, igualar sus valores en columnas de Y. (Priorizar 'a' sobre 'b').</p>
                        <p><span className="text-highlight-green font-bold">4.</span> Éxito si una fila queda llena totalmente con valores <span className="text-highlight-green font-black underline">a</span>.</p>
                    </div>

                    {/* Ejemplo Matriz */}
                    <div className="bg-highlight-green/5 p-6 rounded-3xl border border-highlight-green/20 transition-colors duration-300">
                        <h4 className="font-black text-xs mb-6 text-text-secondary uppercase tracking-[0.2em]">Ejemplo de Resolución</h4>
                        <p className="text-xs mb-6 text-text-primary font-mono bg-surface p-3 rounded-xl border border-border inline-block shadow-sm">R(A, B, C), F={" {A → B} "}, Descomposición: R1(A,B), R2(A,C)</p>
                        <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                            <table className="w-full text-xs text-center border-collapse bg-surface transition-colors duration-300">
                                <thead>
                                    <tr className="bg-surface-elevated text-text-heading border-b border-border">
                                        <th className="p-4 uppercase tracking-widest font-black text-[10px]">Relación</th>
                                        <th className="p-4 border-l border-border font-mono text-highlight-green">A</th>
                                        <th className="p-4 border-l border-border font-mono text-highlight-green">B</th>
                                        <th className="p-4 border-l border-border font-mono text-highlight-green">C</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border hover:bg-highlight-green/5 transition-colors">
                                        <td className="p-4 font-black italic text-text-primary">R1(A,B)</td>
                                        <td className="p-4 border-l border-border font-mono font-bold">a1</td>
                                        <td className="p-4 border-l border-border font-mono font-bold">a2</td>
                                        <td className="p-4 border-l border-border font-mono opacity-30">b1,3</td>
                                    </tr>
                                    <tr className="hover:bg-highlight-green/5 transition-colors">
                                        <td className="p-4 font-black italic text-text-primary">R2(A,C)</td>
                                        <td className="p-4 border-l border-border font-mono font-bold">a1</td>
                                        <td className="p-4 border-l border-border font-mono text-highlight-green font-black bg-highlight-green/10">a2 (A→B)</td>
                                        <td className="p-4 border-l border-border font-mono font-bold">a3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 p-4 bg-highlight-green  rounded-2xl font-black text-center shadow-xl uppercase tracking-widest text-xs">
                            ✓ ÉXITO: Descomposición sin pérdida detectada
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Preservación de Dependencias */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-text-heading border-l-4 border-highlight-purple pl-4 uppercase tracking-tight transition-colors duration-300">
                    <DatabaseZap className="text-highlight-purple" /> 2. Preservación de Dependencias
                </h2>

                <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-colors duration-300">
                    <p className="text-sm mb-8 leading-relaxed text-text-body font-medium">
                        Una descomposión preserva las dependencias si el cierre del conjunto de dependencias locales (de cada Ri) es equivalente al cierre del conjunto original <span className="text-highlight-purple font-bold">F</span>.
                    </p>

                    <div className="bg-highlight-purple text-highlight-purple p-8 rounded-3xl transition-colors duration-300 shadow-xl border border-highlight-purple/20">
                        <h4 className="text-highlight-yellow font-black mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                            <SearchCode size={20} /> Algoritmo de Verificación (X → Y)
                        </h4>
                        <div className="space-y-4 text-foreground font-mono text-sm border-l-2 border-highlight-yellow/30 pl-6 py-2">
                            <p><span className="text-highlight-yellow font-bold">1.</span> Z := X;</p>
                            <p><span className="text-highlight-yellow font-bold">2.</span> Mientras haya cambios:</p>
                            <div className="ml-6 space-y-2 opacity-90 italic">
                                <p>Por cada relación Ri:</p>
                                <p>Z := Z ∪ ((Z ∩ Ri)⁺ ∩ Ri)</p>
                            </div>
                            <p><span className="text-highlight-yellow font-bold">3.</span> Si Y ⊆ Z, la dependencia se preserva.</p>
                        </div>
                    </div>

                    <div className="mt-8 p-5 bg-highlight-yellow/10 border border-highlight-yellow/30 rounded-2xl transition-colors duration-300 flex gap-4 items-start">
                        <AlertCircle className="text-highlight-yellow shrink-0" size={24} />
                        <div>
                            <h4 className="text-highlight-yellow font-black text-xs uppercase tracking-widest mb-1">Nota Crítica</h4>
                            <p className="text-[11px] text-text-primary font-medium leading-relaxed">
                                Si una descomposión no preserva dependencias, para verificar las restricciones originales se requerirían operaciones de Join costosas en cada actualización, comprometiendo el rendimiento del SBD.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teorema de Descomposición en 2 relaciones */}
            <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <Unlink2 className="text-highlight-purple transition-colors duration-300" size={36} />
                    <h2 className="text-3xl font-black text-text-heading uppercase tracking-tighter">Teorema Binario</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl shadow-lg border border-border transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-highlight-purple/5 -rotate-45 translate-x-16 -translate-y-16"></div>
                    <p className="mb-8 text-text-body font-medium leading-relaxed">Para una descomposción en solo dos relaciones <span className="font-bold text-highlight-purple">{"{R1, R2}"}</span>, el acople es sin pérdida si y solo si la intersección de sus atributos es llave de al menos una de ellas:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-lg font-black">
                        <div className="bg-surface-elevated p-6 rounded-2xl border border-border text-highlight-purple text-center shadow-inner">
                            (R1 ∩ R2) → (R1 - R2)
                        </div>
                        <div className="bg-surface-elevated p-6 rounded-2xl border border-border text-highlight-purple text-center shadow-inner">
                            (R1 ∩ R2) → (R2 - R1)
                        </div>
                    </div>
                </div>
            </section>

            {/* Resumen Final */}
            <footer className="mt-24 pt-12 border-t border-border transition-colors duration-300">
                <h3 className="text-xs font-black mb-10 uppercase tracking-[0.4em] text-text-secondary flex items-center justify-center gap-4">
                    <span className="h-px bg-border w-12"></span>
                    Criterio de Calidad
                    <span className="h-px bg-border w-12"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="p-8 bg-highlight-green text-highlight-green rounded-3xl shadow-2xl relative overflow-hidden">
                        <CheckCircle className="absolute -top-4 -right-4 opacity-10" size={120} />
                        <p className="italic font-bold text-lg leading-relaxed relative z-10 text-foreground">
                            "Un buen diseño relacional debe ser una descomposión que garantice simultáneamente el acople sin pérdida y la preservación de dependencias."
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-border shadow-sm">
                            <div className="bg-highlight-green/20 p-2 rounded-xl text-highlight-green">
                                <FileCode size={20} />
                            </div>
                            <span className="text-xs font-black text-text-secondary uppercase tracking-widest">Teorema de Jeffrey D. Ullman</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-border shadow-sm">
                            <div className="bg-highlight-purple/20 p-2 rounded-xl text-highlight-purple">
                                <Library size={20} />
                            </div>
                            <span className="text-xs font-black text-text-secondary uppercase tracking-widest">Referencia: Elmasri & Navathe, Cap. 10</span>
                        </div>
                    </div>
                </div>
                {/* <p className="text-center mt-12 text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-widest transition-colors duration-300">
                        Sistemas de Bases de Datos I — Conferencia 9 — Beatriz López Porrero
                    </p> */}
            </footer>

        </main>
    );
}

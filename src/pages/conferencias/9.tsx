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
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* Concepto de Descomposición */}
                <section className="mb-12">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-800 dark:text-blue-400">
                            <TableProperties size={28} /> ¿Qué es la Descomposición?
                        </h2>
                        <p className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                            Es el proceso de sustituir una relación <span className="font-bold">R</span> por un conjunto de relaciones <span className="font-bold">{"{R1, R2, ..., Rn}"}</span> tales que cada <span className="font-italic">Ri</span> es una proyección de <span className="font-italic">R</span> y la unión de sus atributos forma el esquema original.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-2 uppercase">Propiedad Obligatoria 1</h4>
                                <p className="text-xs text-blue-800 dark:text-blue-400">Acople sin pérdida de información (Lossless Join).</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-2 uppercase">Propiedad Obligatoria 2</h4>
                                <p className="text-xs text-blue-800 dark:text-blue-400">Preservación de las Dependencias Funcionales.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 1. Acople sin Pérdida de Información */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-slate-100 border-l-4 border-blue-600 dark:border-blue-500 pl-4 uppercase transition-colors duration-300">
                        <Combine /> 1. Acople sin Pérdida (Lossless Join)
                    </h2>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="mb-6 text-sm text-slate-700 dark:text-slate-300">
                            Garantiza que al realizar el <span className="font-mono font-bold italic">Natural Join</span> de las relaciones descompuestas, obtengamos exactamente las mismas tuplas de la relación original, sin generar "tuplas espurias".
                        </p>

                        <h3 className="text-lg font-bold mb-4 text-blue-800 dark:text-blue-400">Algoritmo de Prueba (Matriz de Aho)</h3>
                        <div className="bg-slate-900 dark:bg-slate-950 text-blue-400 dark:text-blue-300 p-6 rounded-xl font-mono text-xs mb-8 transition-colors duration-300">
                            <p className="text-slate-400 dark:text-slate-500 mb-2">// Procedimiento:</p>
                            <p>1. Crear matriz S con filas (relaciones Ri) y columnas (atributos Aj).</p>
                            <p>2. Si Aj ∈ Ri, poner a(j). Si no, poner b(i,j).</p>
                            <p>3. Por cada DF (X → Y) en F:</p>
                            <p className="ml-4">Si filas tienen valores iguales en columnas de X, igualar sus valores en columnas de Y.</p>
                            <p className="ml-4">(Priorizar 'a' sobre 'b').</p>
                            <p>4. Éxito si una fila queda llena totalmente con valores 'a'.</p>
                        </div>

                        {/* Ejemplo Matriz */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <h4 className="font-bold text-sm mb-4 text-slate-900 dark:text-slate-100">Ejemplo de Resolución:</h4>
                            <p className="text-xs mb-4 text-slate-700 dark:text-slate-300">R(A, B, C), F={" {A → B} "}, Descomposición: R1(A,B), R2(A,C)</p>
                            <table className="w-full text-xs text-center border-collapse bg-white dark:bg-slate-900 transition-colors duration-300">
                                <thead>
                                    <tr className="bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100">
                                        <th className="border border-slate-300 dark:border-slate-600 p-2">Relación</th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2">A</th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2">B</th>
                                        <th className="border border-slate-300 dark:border-slate-600 p-2">C</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-slate-900 dark:text-slate-100">
                                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold italic">R1(A,B)</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">a1</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">a2</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-slate-400 dark:text-slate-500">b1,3</td>
                                    </tr>
                                    <tr className="text-slate-900 dark:text-slate-100">
                                        <td className="border border-slate-300 dark:border-slate-600 p-2 font-bold italic">R2(A,C)</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">a1</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-blue-600 dark:text-blue-400 font-bold">a2 (por A→B)</td>
                                        <td className="border border-slate-300 dark:border-slate-600 p-2">a3</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="mt-4 text-[11px] text-blue-700 dark:text-blue-400 font-bold">
                                ✓ ÉXITO: La fila de R1 ahora tiene a1 y a2 (y eventualmente a3 si aplicamos otra DF).
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Preservación de Dependencias */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-slate-100 border-l-4 border-blue-600 dark:border-blue-500 pl-4 uppercase transition-colors duration-300">
                        <DatabaseZap /> 2. Preservación de Dependencias
                    </h2>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                            Una descomposión preserva las dependencias si el cierre del conjunto de dependencias locales (de cada Ri) es equivalente al cierre del conjunto original F.
                        </p>

                        <div className="bg-blue-900 dark:bg-blue-950 text-white p-6 rounded-xl transition-colors duration-300">
                            <h4 className="text-blue-300 dark:text-blue-400 font-bold mb-3 flex items-center gap-2">
                                <SearchCode size={18} /> Algoritmo de Verificación (X → Y)
                            </h4>
                            <div className="space-y-3 font-mono text-xs">
                                <p>1. Z := X;</p>
                                <p>2. Mientras haya cambios:</p>
                                <p className="ml-4">Por cada relación Ri:</p>
                                <p className="ml-8">Z := Z ∪ ((Z ∩ Ri)⁺ ∩ Ri)</p>
                                <p>3. Si Y ⊆ Z, la dependencia se preserva.</p>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg transition-colors duration-300">
                            <h4 className="text-blue-800 dark:text-blue-300 font-bold text-xs flex items-center gap-2">
                                <AlertCircle size={14} /> Nota Crítica
                            </h4>
                            <p className="text-[11px] text-blue-700 dark:text-blue-400">
                                Si una descomposión no preserva dependencias, para verificar las restricciones originales se requerirían operaciones de Join costosas en cada actualización.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Teorema de Descomposición en 2 relaciones */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Unlink2 className="text-blue-600 dark:text-blue-400 transition-colors duration-300" size={32} />
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Teorema Especial (Binary)</h2>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="mb-4 text-slate-700 dark:text-slate-300">Para una descomposición en solo dos relaciones <span className="font-bold">{"{R1, R2}"}</span>, el acople es sin pérdida si y solo si la intersección de sus atributos es llave de al menos una de ellas:</p>
                        <div className="flex flex-col gap-2 font-mono text-sm bg-slate-900 dark:bg-slate-950 p-4 rounded border border-slate-700 dark:border-slate-600 text-blue-400 dark:text-blue-300 text-center transition-colors duration-300">
                            <p>(R1 ∩ R2) → (R1 - R2)</p>
                            <p className="text-slate-500 dark:text-slate-400">O BIEN</p>
                            <p>(R1 ∩ R2) → (R2 - R1)</p>
                        </div>
                    </div>
                </section>

                {/* Resumen Final */}
                <footer className="mt-20 pt-12 border-t-2 border-slate-200 dark:border-slate-700 transition-colors duration-300">
                    <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-slate-600 dark:text-slate-400 flex items-center gap-2 transition-colors duration-300">
                        <CheckCircle className="text-blue-600 dark:text-blue-400" /> Criterio de Calidad
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div className="p-6 bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 rounded-2xl transition-colors duration-300">
                            <p className="italic">
                                "Un buen diseño relacional debe ser una descomposión que garantice simultáneamente el acople sin pérdida y la preservación de dependencias."
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                                <FileCode size={16} className="text-blue-600 dark:text-blue-400" />
                                <span>Basado en el Teorema de Jeffrey D. Ullman</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                                <Library size={16} className="text-blue-600 dark:text-blue-400" />
                                <span>Referencia: Elmasri & Navathe, Cap. 10</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-12 text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-widest transition-colors duration-300">
                        Sistemas de Bases de Datos I — Conferencia 9 — Beatriz López Porrero
                    </p>
                </footer>

            </main>
        </>
    );
}

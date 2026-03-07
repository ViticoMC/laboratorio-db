import {
    ShieldAlert,
    GitMerge,
    Binary,
    AlertCircle,
    Library,
    ArrowDownNarrowWide
} from 'lucide-react';

export function TeoriaDisenoPage() {
    return (
        <>
            <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* ¿Qué es la Teoría del Diseño? */}
                <section className="mb-12">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-800 dark:text-blue-400">
                            <Library size={28} /> Introducción
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Es una técnica formal para organizar los datos. Su objetivo principal es obtener un esquema relacional que minimice la redundancia y evite anomalías.
                        </p>
                    </div>
                </section>

                {/* Problemas de un mal diseño */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-800 dark:text-blue-400 uppercase transition-colors duration-300">
                        <ShieldAlert /> Problemas de un Mal Diseño
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Redundancia", desc: "Repetición innecesaria de datos (ej. Juan vive en VC varias veces)." },
                            { title: "Inconsistencia", desc: "Riesgo de tener datos contradictorios por actualizaciones parciales." },
                            { title: "Anomalía de Inserción", desc: "No poder añadir datos si falta una parte de la clave (ej. Ciudad sin suministrador)." },
                            { title: "Anomalía de Borrado", desc: "Perder información valiosa al eliminar un registro (ej. Borrar el único producto borra la ciudad)." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl transition-colors duration-300">
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-1">{item.title}</h4>
                                <p className="text-xs text-blue-700 dark:text-blue-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dependencias Funcionales */}
                {/* Sección Actualizada de Dependencias Funcionales */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-300 uppercase transition-colors duration-300">
                        <GitMerge /> Dependencias Funcionales (DF)
                    </h2>
                    <div className="bg-blue-900 dark:bg-blue-950 text-white p-8 rounded-3xl shadow-lg transition-colors duration-300">
                        <p className="italic mb-6 text-blue-100 dark:text-blue-200">"Es un vínculo muchos a uno que va de un conjunto de atributos a otro en una relación." — C. J. Date</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Clasificación por Contenido */}
                            <div className="bg-blue-800 dark:bg-blue-950 p-5 rounded-xl border border-blue-700 dark:border-blue-800 transition-colors duration-300">
                                <h3 className="text-blue-300 dark:text-blue-400 font-bold mb-3 uppercase text-xs tracking-widest">Según su naturaleza</h3>
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <strong className="text-white block underline">DF Trivial</strong>
                                        <p className="text-blue-100 dark:text-blue-200 opacity-80">
                                            Ocurre cuando el lado derecho es un subconjunto del lado izquierdo. Siempre se cumple por definición.
                                        </p>
                                        <code className="block mt-1 text-xs bg-slate-900 dark:bg-slate-950 p-1 rounded font-mono text-blue-400 dark:text-blue-300">Si Y ⊆ X, entonces X → Y</code>
                                    </li>
                                    <li>
                                        <strong className="text-white block underline">DF No Trivial</strong>
                                        <p className="text-blue-100 dark:text-blue-200 opacity-80">
                                            Cuando el lado derecho NO está contenido en el izquierdo. Son las que aportan información real al diseño.
                                        </p>
                                        <code className="block mt-1 text-xs bg-slate-900 dark:bg-slate-950 p-1 rounded font-mono text-blue-400 dark:text-blue-300">X → Y donde Y ⊈ X</code>
                                    </li>
                                </ul>
                            </div>

                            {/* Clasificación por Estructura */}
                            <div className="bg-blue-800 dark:bg-blue-950 p-5 rounded-xl border border-blue-700 dark:border-blue-800 transition-colors duration-300">
                                <h3 className="text-blue-300 dark:text-blue-400 font-bold mb-3 uppercase text-xs tracking-widest">Según su jerarquía</h3>
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <strong className="text-white block underline">DF Plena (Completa)</strong>
                                        <p className="text-blue-100 dark:text-blue-200 opacity-80">
                                            Y depende de X, pero no de ninguna parte de X. Es vital para la 2FN.
                                        </p>
                                    </li>
                                    <li>
                                        <strong className="text-white block underline">DF Transitiva</strong>
                                        <p className="text-blue-100 dark:text-blue-200 opacity-80">
                                            Si X → Y y Y → Z (donde Y no → X), entonces X → Z. Es el foco de la 3FN.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Nota sobre Determinantes */}
                        <div className="mt-6 p-4 bg-slate-900 dark:bg-slate-950 rounded-lg border-l-4 border-blue-400 dark:border-blue-300 transition-colors duration-300">
                            <p className="text-xs text-blue-100 dark:text-blue-200">
                                <strong>Determinante:</strong> Se denomina así al conjunto de atributos del lado izquierdo (X) de una dependencia funcional.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Formas Normales */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-900 dark:text-blue-300 uppercase tracking-widest transition-colors duration-300">
                        <ArrowDownNarrowWide /> Formas Normales (FN)
                    </h2>

                    <div className="space-y-10">
                        {/* 1FN */}
                        <div className="relative pl-8 border-l-4 border-blue-300 dark:border-blue-600 transition-colors duration-300">
                            <span className="absolute -left-4 top-0 bg-blue-600 dark:bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold transition-colors duration-300">1</span>
                            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400">Primera Forma Normal (1FN)</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Una relación está en 1FN si y solo si todos los dominios contienen únicamente valores atómicos (indivisibles).</p>
                        </div>

                        {/* 2FN */}
                        <div className="relative pl-8 border-l-4 border-blue-400 dark:border-blue-600 transition-colors duration-300">
                            <span className="absolute -left-4 top-0 bg-blue-500 dark:bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold transition-colors duration-300">2</span>
                            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400">Segunda Forma Normal (2FN)</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">Está en 1FN y cada atributo que no es parte de la clave tiene dependencia funcional <strong>plena</strong> respecto a la clave primaria.</p>
                            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-xs italic text-blue-900 dark:text-blue-300 transition-colors duration-300">
                                <strong>Ejemplo de corrección:</strong> Si (S#, P#) → Precio y S# → Ciudad, la relación se descompone para eliminar la dependencia parcial de Ciudad respecto a solo una parte de la llave.
                            </div>
                        </div>

                        {/* 3FN */}
                        <div className="relative pl-8 border-l-4 border-blue-500 dark:border-blue-600 transition-colors duration-300">
                            <span className="absolute -left-4 top-0 bg-blue-600 dark:bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold transition-colors duration-300">3</span>
                            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400">Tercera Forma Normal (3FN)</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">Está en 2FN y no existen dependencias <strong>transitivas</strong> de los atributos no clave respecto a la clave primaria.</p>
                            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800 flex gap-4 transition-colors duration-300">
                                <AlertCircle className="text-blue-600 dark:text-blue-400 shrink-0" />
                                <p className="text-xs text-blue-800 dark:text-blue-300">No debe haber atributos "no llave" que dependan de otros atributos "no llave" (ej. Ciudad → Status).</p>
                            </div>
                        </div>

                        {/* FNBC */}
                        <div className="relative pl-8 border-l-4 border-blue-600 dark:border-blue-500 transition-colors duration-300">
                            <span className="absolute -left-4 top-0 bg-blue-700 dark:bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold transition-colors duration-300">B</span>
                            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400">Forma Normal de Boyce-Codd (FNBC)</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">Propuesta en 1974. Una relación está en FNBC si y solo si todo <strong>determinante</strong> es una clave candidata.</p>
                            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg text-xs font-mono text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                                "Cualquier atributo del cual dependan funcionalmente otros debe ser necesariamente una llave."
                            </div>
                        </div>
                    </div>
                </section>

                {/* Línea del Tiempo y Resumen */}
                <section className="mb-16">
                    <div className="bg-slate-900 dark:bg-slate-950 p-8 rounded-3xl text-white transition-colors duration-300">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Binary className="text-blue-400 dark:text-blue-300" /> Cronología de Normalización
                        </h2>
                        <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest font-bold">
                            <div className="px-3 py-1 bg-slate-800 dark:bg-slate-800 rounded text-slate-100 dark:text-slate-200">1FN, 2FN, 3FN (Codd, 1970)</div>
                            <div className="px-3 py-1 bg-slate-800 dark:bg-slate-800 rounded text-blue-400 dark:text-blue-300">FNBC (Boyce/Codd, 1974)</div>
                            <div className="px-3 py-1 bg-slate-800 dark:bg-slate-800 rounded text-slate-100 dark:text-slate-200">4FN (Fagin, 1977)</div>
                            <div className="px-3 py-1 bg-slate-800 dark:bg-slate-800 rounded text-slate-100 dark:text-slate-200">5FN (Fagin, 1979)</div>
                        </div>
                    </div>
                </section>

                {/* Bibliografía */}
                <footer className="mt-12 pt-8 border-t border-slate-300 dark:border-slate-700 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-xs text-slate-600 dark:text-slate-400 italic">
                            Conferencia 7: Teoría del Diseño | Basado en C. J. Date y E. F. Codd.
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px] px-3 py-1 rounded-full font-bold uppercase transition-colors duration-300">
                            Sistemas de Bases de Datos I
                        </div>
                    </div>
                </footer>

            </main>
        </>
    );
}

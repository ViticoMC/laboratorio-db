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
                    <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-text-heading">
                            <Library size={28} className="text-highlight-purple" /> Introducción
                        </h2>
                        <p className="text-lg leading-relaxed text-text-body">
                            Es una técnica formal para organizar los datos. Su objetivo principal es obtener un esquema relacional que minimice la redundancia y evite anomalías.
                        </p>
                    </div>
                </section>

                {/* Problemas de un mal diseño */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-text-heading uppercase transition-colors duration-300 border-l-4 border-highlight-yellow pl-4">
                        <ShieldAlert className="text-highlight-yellow" /> Problemas de un Mal Diseño
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Redundancia", desc: "Repetición innecesaria de datos.", color: "highlight-yellow" },
                            { title: "Inconsistencia", desc: "Riesgo de tener datos contradictorios.", color: "highlight-yellow" },
                            { title: "Anomalía de Inserción", desc: "No poder añadir datos si falta información clave.", color: "highlight-yellow" },
                            { title: "Anomalía de Borrado", desc: "Perder información valiosa al eliminar un registro.", color: "highlight-yellow" }
                        ].map((item, idx) => (
                            <div key={idx} className="p-5 bg-highlight-yellow-soft border border-highlight-yellow/30 rounded-xl transition-all hover:scale-105">
                                <h4 className="font-bold text-text-heading mb-1">{item.title}</h4>
                                <p className="text-xs text-text-body">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dependencias Funcionales */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-text-heading uppercase transition-colors duration-300">
                        <GitMerge className="text-highlight-purple" /> Dependencias Funcionales (DF)
                    </h2>
                    <div className="bg-highlight-purple text-foreground p-8 rounded-3xl shadow-lg transition-colors duration-300">
                        <p className="italic mb-6 opacity-95 text-lg leading-relaxed">"Es un vínculo muchos a uno que va de un conjunto de atributos a otro en una relación." — C. J. Date</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Clasificación por Contenido */}
                            <div className="bg-surface-elevated p-5 rounded-xl border border-border/50 backdrop-blur-sm transition-colors duration-300">
                                <h3 className=" font-bold mb-3 uppercase text-xs tracking-widest">Según su naturaleza</h3>
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <strong className="text-foreground block underline">DF Trivial</strong>
                                        <p className="opacity-80">
                                            Ocurre cuando el lado derecho es un subconjunto del lado izquierdo. Siempre se cumple por definición.
                                        </p>
                                        <code className="block mt-1 text-xs bg-surface p-1 rounded font-mono ">Si Y ⊆ X, entonces X → Y</code>
                                    </li>
                                    <li>
                                        <strong className="text-foreground block underline">DF No Trivial</strong>
                                        <p className="opacity-80">
                                            Cuando el lado derecho NO está contenido en el izquierdo. Son las que aportan información real al diseño.
                                        </p>
                                        <code className="block mt-1 text-xs bg-surface p-1 rounded font-mono ">X → Y donde Y ⊈ X</code>
                                    </li>
                                </ul>
                            </div>

                            {/* Clasificación por Estructura */}
                            <div className="bg-surface-elevated p-5 rounded-xl border border-border/50 backdrop-blur-sm transition-colors duration-300">
                                <h3 className=" font-bold mb-3 uppercase text-xs tracking-widest">Según su jerarquía</h3>
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <strong className="text-foreground block underline">DF Plena (Completa)</strong>
                                        <p className="opacity-80">
                                            Y depende de X, pero no de ninguna parte de X. Es vital para la 2FN.
                                        </p>
                                    </li>
                                    <li>
                                        <strong className="text-foreground block underline">DF Transitiva</strong>
                                        <p className="opacity-80">
                                            Si X → Y y Y → Z (donde Y no → X), entonces X → Z. Es el foco de la 3FN.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Nota sobre Determinantes */}
                        <div className="mt-6 p-4 bg-surface-elevated/50 rounded-lg border-l-4 border-highlight-purple-soft transition-colors duration-300">
                            <p className="text-sm">
                                <strong>Determinante:</strong> Se denomina así al conjunto de atributos del lado izquierdo (X) de una dependencia funcional.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Formas Normales */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-2 text-text-heading uppercase tracking-widest transition-colors duration-300">
                        <ArrowDownNarrowWide className="text-highlight-purple" /> Formas Normales (FN)
                    </h2>

                    <div className="space-y-12">
                        {/* 1FN */}
                        <div className="relative pl-10 border-l-4 border-highlight-purple/30 transition-colors duration-300">
                            <span className="absolute -left-4 top-0 bg-highlight-purple text-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-300 shadow-lg">1</span>
                            <h3 className="text-xl font-bold text-highlight-purple mb-2">Primera Forma Normal (1FN)</h3>
                            <p className="text-sm text-text-body">Una relación está en 1FN si y solo si todos los dominios contienen únicamente valores <strong>atómicos</strong> (indivisibles).</p>
                        </div>

                        {/* 2FN */}
                        <div className="relative pl-10 border-l-4 border-highlight-purple/40 transition-colors duration-300">
                            <span className="absolute -left-4 top-0 bg-highlight-purple text-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-300 shadow-lg">2</span>
                            <h3 className="text-xl font-bold text-highlight-purple mb-2">Segunda Forma Normal (2FN)</h3>
                            <p className="text-sm text-text-body mb-4">Está en 1FN y cada atributo que no es parte de la clave tiene dependencia funcional <strong>plena</strong> respecto a la clave primaria.</p>
                            <div className="bg-highlight-purple-soft p-5 rounded-xl border border-highlight-purple/20 text-xs italic text-text-body transition-colors duration-300">
                                <strong>Ejemplo de corrección:</strong> Si (S#, P#) → Precio y S# → Ciudad, la relación se descompone para eliminar la dependencia parcial.
                            </div>
                        </div>

                        {/* 3FN */}
                        <div className="relative pl-10 border-l-4 border-highlight-purple/60 transition-colors duration-300">
                            <span className="absolute -left-4 top-0 bg-highlight-purple text-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-300 shadow-lg">3</span>
                            <h3 className="text-xl font-bold text-highlight-purple mb-2">Tercera Forma Normal (3FN)</h3>
                            <p className="text-sm text-text-body mb-4">Está en 2FN y no existen dependencias <strong>transitivas</strong> de los atributos no clave respecto a la clave primaria.</p>
                            <div className="p-5 bg-highlight-yellow-soft rounded-xl border border-highlight-yellow/30 flex gap-4 transition-colors duration-300">
                                <AlertCircle className="text-highlight-yellow shrink-0" />
                                <p className="text-xs text-text-body font-medium">No debe haber atributos "no llave" que dependan de otros atributos "no llave" (ej. Ciudad → Status).</p>
                            </div>
                        </div>

                        {/* FNBC */}
                        <div className="relative pl-10 border-l-4 border-highlight-purple transition-colors duration-300">
                            <span className="absolute -left-4 top-0 bg-highlight-purple text-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-300 shadow-lg italic">B</span>
                            <h3 className="text-xl font-bold text-highlight-purple mb-2">Forma Normal de Boyce-Codd (FNBC)</h3>
                            <p className="text-sm text-text-body mb-4">Propuesta en 1974. Una relación está en FNBC si y solo si todo <strong>determinante</strong> es una clave candidata.</p>
                            <div className="bg-surface-elevated p-5 rounded-xl text-xs font-mono text-text-heading border border-highlight-purple/30 transition-colors duration-300 shadow-inner">
                                "Cualquier atributo del cual dependan funcionalmente otros debe ser necesariamente una llave."
                            </div>
                        </div>
                    </div>
                </section>

                {/* Línea del Tiempo y Resumen */}
                <section className="mb-16">
                    <div className="bg-surface-elevated p-8 rounded-3xl text-text-heading border border-border transition-colors duration-300 shadow-sm">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Binary className="text-highlight-purple" /> Cronología de Normalización
                        </h2>
                        <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest font-bold">
                            <div className="px-3 py-1 bg-highlight-purple-soft rounded text-highlight-purple border border-highlight-purple/20">1FN, 2FN, 3FN (Codd, 1970)</div>
                            <div className="px-3 py-1 bg-highlight-purple text-foreground rounded shadow-md">FNBC (Boyce/Codd, 1974)</div>
                            <div className="px-3 py-1 bg-highlight-purple-soft rounded text-highlight-purple border border-highlight-purple/20">4FN (Fagin, 1977)</div>
                            <div className="px-3 py-1 bg-highlight-purple-soft rounded text-highlight-purple border border-highlight-purple/20">5FN (Fagin, 1979)</div>
                        </div>
                    </div>
                </section>

                {/* Bibliografía */}
                <footer className="mt-12 pt-8 border-t border-border transition-colors duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-xs text-text-secondary italic">
                            Conferencia 7: Teoría del Diseño | Basado en C. J. Date y E. F. Codd.
                        </div>
                        {/* <div className="bg-highlight-purple-soft text-highlight-purple text-[10px] px-3 py-1 rounded-full font-bold uppercase transition-colors duration-300 border border-highlight-purple/10">
                            Sistemas de Bases de Datos I
                        </div> */}
                    </div>
                </footer>

            </main>
        </>
    );
}

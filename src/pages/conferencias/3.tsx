import {
    Table2,
    KeyRound,
    Database,
    Combine,
    ListTree,
    FileText,
    Binary,
    Info
} from 'lucide-react';

export function ModeloRelacionalPage() {
    return (
        <>
            <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* Estructura del Modelo */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                        <Table2 /> Estructura del Modelo Relacional
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-highlight-purple-soft p-6 rounded-lg shadow-sm border border-highlight-purple transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-3 border-b border-highlight-purple pb-1 text-highlight-purple">Relación (Tabla)</h3>
                            <p className="text-sm mb-4 text-text-body">Es la estructura fundamental. Se compone de un conjunto de tuplas (filas) que comparten los mismos atributos (columnas).</p>
                            <ul className="text-sm space-y-2 list-disc list-inside text-text-secondary">
                                <li><strong>Tupla:</strong> Cada una de las filas de la tabla.</li>
                                <li><strong>Grado:</strong> Número de atributos de la relación.</li>
                                <li><strong>Cardinalidad:</strong> Número de tuplas que contiene.</li>
                            </ul>
                        </div>

                        <div className="bg-highlight-yellow-soft p-6 rounded-lg shadow-sm border border-highlight-yellow transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-3 border-b border-highlight-yellow pb-1 text-highlight-yellow">Dominio y Atributo</h3>
                            <p className="text-sm mb-2 text-text-body"><strong>Dominio:</strong> Conjunto de valores que puede tomar un atributo.</p>
                            <p className="text-sm text-text-body"><strong>Atributo:</strong> Papel que desempeña un dominio en una relación.</p>
                            <div className="mt-4 p-3 bg-highlight-yellow/5 rounded text-xs italic border border-highlight-yellow/20 text-highlight-yellow">
                                <strong>Nota Histórica:</strong> En 1990, Date y Codd propusieron el concepto de Dominio Compuesto (ej. Fecha = Día + Mes + Año).
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tipos de Claves */}
                <section className="mb-12 bg-primary text-primary-foreground p-8 rounded-2xl transition-colors duration-300">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <KeyRound className="text-accent" /> Definición de Claves (Keys)
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold shrink-0 text-sm">Primaria</div>
                            <div>
                                <p className="text-sm">Conjunto mínimo de atributos que identifican de forma única cada tupla. No puede contener valores nulos.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded font-bold shrink-0 text-sm">Ajena</div>
                            <div>
                                <p className="text-sm">Atributo(s) en una relación que referencia a la clave primaria de otra relación (o de la misma).</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="bg-text-secondary/50  px-3 py-1 rounded font-bold shrink-0 text-sm">Candidata</div>
                            <div>
                                <p className="text-sm">Cualquier superclave mínima que podría actuar como clave primaria.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Restricciones de Integridad */}
                <section className="mb-12">
                    <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-surface rounded-xl border border-border shadow-sm transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                                <Database size={20} /> Restricciones Inherentes
                            </h3>
                            <ul className="space-y-3 text-sm text-text-body">
                                <li>• <strong>No duplicidad:</strong> No puede haber filas duplicadas en una relación.</li>
                                <li>• <strong>Orden:</strong> El orden de las filas es irrelevante para el modelo.</li>
                                <li>• <strong>Atomicidad:</strong> En el cruce de fila y columna solo puede haber un valor simple (sin multievaluados).</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-primary text-primary-foreground rounded-xl shadow-md transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Binary size={20} /> Restricciones de Usuario
                            </h3>
                            <p className="text-sm mb-4">Son predicados definidos sobre un conjunto de atributos, tuplas o dominios.</p>
                            <div className="bg-primary-foreground/10 p-4 rounded-lg text-xs font-mono">
                                <p>// Ejemplo de Esquema Relacional </p>
                                <p>{"< {Ri}, {Vi} >"}</p>
                                <p className="mt-2">Ri: Conjunto de esquemas</p>
                                <p>Vi: Restricciones interrelacionales</p>
                            </div>
                        </div>
                    </section>

                    {/* Integridad Referencial */}
                    <div className="mt-8 bg-surface-elevated border-highlight-purple/30 border-2 p-8 rounded-3xl transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-highlight-purple p-2 rounded-xl text-highlight-purple-soft">
                                <Combine size={24} />
                            </div>
                            <h3 className="font-bold text-2xl text-highlight-purple uppercase tracking-tight">Integridad Referencial</h3>
                        </div>
                        <p className="text-md mb-8 text-text-body leading-relaxed">
                            Asegura que las referencias entre tablas sean consistentes. Cuando se intenta eliminar una tupla referenciada, existen tres opciones fundamentales:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-5 bg-surface rounded-2xl text-center border-t-4 border-highlight-purple shadow-sm hover:scale-105 transition-transform">
                                <strong className="block text-highlight-purple mb-1 text-lg">Restringir</strong>
                                <span className="text-xs text-text-secondary font-medium">No permitir la eliminación si hay hijos.</span>
                            </div>
                            <div className="p-5 bg-surface rounded-2xl text-center border-t-4 border-highlight-purple shadow-sm hover:scale-105 transition-transform">
                                <strong className="block text-highlight-purple mb-1 text-lg">Cascada</strong>
                                <span className="text-xs text-text-secondary font-medium">Borrar automáticamente todos los registros hijos.</span>
                            </div>
                            <div className="p-5 bg-surface rounded-2xl text-center border-t-4 border-highlight-purple shadow-sm hover:scale-105 transition-transform">
                                <strong className="block text-highlight-purple mb-1 text-lg">Poner a Nulo</strong>
                                <span className="text-xs text-text-secondary font-medium">Desacoplar registros hijos estableciendo null.</span>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Resumen del Modelo  */}
                <section className="mb-16">
                    <div className="bg-surface-elevated text-text-primary p-8 rounded-3xl transition-colors duration-300 border border-border">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FileText className="text-primary" /> Resumen: Esquema de Relación
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-lg font-mono text-primary">R(A: D, S)</p>
                                <ul className="text-sm space-y-2 opacity-80 text-text-body">
                                    <li><strong>R:</strong> Nombre de la relación.</li>
                                    <li><strong>A:</strong> Lista de atributos.</li>
                                    <li><strong>D:</strong> Dominios asociados.</li>
                                    <li><strong>S:</strong> Restricciones de integridad (Inherentes y de Usuario).</li>
                                </ul>
                            </div>
                            <div className="border-l border-border pl-8 hidden md:block italic text-text-secondary text-sm">
                                "El objetivo fundamental es mantener la independencia de la estructura lógica respecto al modo de almacenamiento físico".
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operaciones Especiales y Resumen */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                                <Binary size={20} /> Operaciones Especiales
                            </h3>
                            <p className="text-sm text-text-body">Incluye manipulación avanzada de la estructura lógica y el manejo de valores desconocidos o no aplicables mediante el valor nulo.</p>
                        </div>

                        <div className="bg-primary text-primary-foreground p-6 rounded-xl shadow-lg transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <FileText size={20} /> Resumen del Esquema
                            </h3>
                            <div className="font-mono text-xs space-y-2 opacity-90">
                                <p>Esquema de Relación: R(A: D, S)</p>
                                <p className="ml-4">• R: Nombre de la relación.</p>
                                <p className="ml-4">• A: Lista de atributos.</p>
                                <p className="ml-4">• D: Dominios.</p>
                                <p className="ml-4">• S: Restricciones de integridad.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer / Bibliografía */}
                <footer className="mt-16 pt-8 border-t border-border transition-colors duration-300">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-4 flex items-center gap-2">
                        <ListTree size={16} /> Bibliografía de Referencia
                    </h4>
                    <ul className="text-xs space-y-2 text-text-secondary italic">
                        <li>• Date, C.J. (1990) - Propuesta del concepto de Dominio Compuesto.</li>
                        <li>• Codd, E.F. - Fundamentos del Modelo Relacional.</li>
                        <li>• Material de Conferencia: "El Modelo Relacional" - Beatriz.</li>
                    </ul>
                </footer>
            </main>
        </>
    );
}

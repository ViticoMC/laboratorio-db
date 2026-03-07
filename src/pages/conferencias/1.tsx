import { Database, Server, HardDrive, Users, Layers, Share2, ShieldCheck, Key, ListTree, ChevronRight } from 'lucide-react';

export function DatabaseLecturePage() {
    return (
        <>
            <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">

                {/* Sumario */}
                <section className="mb-10 bg-highlight-green-soft p-8 rounded-2xl border-l-8 border-highlight-green shadow-sm">
                    <h2 className="text-2xl font-bold text-highlight-green inline-block mb-6 flex items-center gap-2">
                        <ListTree className="text-highlight-green" /> Sumario
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none text-lg text-text-secondary">
                        <li className="flex items-center gap-2">
                            <ChevronRight className="text-highlight-green shrink-0" size={20} />
                            <span>Introducción a los Sistemas de Bases de Datos (SBD)</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="text-highlight-green shrink-0" size={20} />
                            <span>Conceptos fundamentales</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="text-highlight-green shrink-0" size={20} />
                            <span>Arquitectura de los Sistemas de Bases de Datos</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="text-highlight-green shrink-0" size={20} />
                            <span>Modelos de datos</span>
                        </li>
                        <li className="flex items-center gap-2 col-span-full">
                            <ChevronRight className="text-highlight-green shrink-0" size={20} />
                            <span>Modelo E/R (Entidad/Interrelación)</span>
                        </li>
                    </ul>
                </section>

                {/* Conceptos Fundamentales */}
                <section className="mb-12 space-y-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3 text-text-heading">
                        <Database className="text-brand-primary" /> Conceptos Fundamentales
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-highlight-purple-soft p-6 rounded-xl border-t-4 border-highlight-purple shadow-md">
                            <h3 className="font-bold text-xl mb-2 text-highlight-purple">Sistema de Base de Datos (SBD)</h3>
                            <p className="text-text-body">Sistema computarizado cuya finalidad es almacenar información y permitir a los usuarios recuperar y actualizar esa información en base a peticiones.</p>
                        </div>
                        <div className="bg-highlight-purple-soft p-6 rounded-xl border-t-4 border-highlight-purple shadow-md">
                            <h3 className="font-bold text-xl mb-2 text-highlight-purple">SGBD</h3>
                            <p className="text-text-body">Conjunto coordinado de programas, procedimientos y lenguajes que suministra los medios para describir, recuperar y manipular datos manteniendo integridad y seguridad.</p>
                        </div>
                    </div>

                    <div className="space-y-4 pt-8">
                        <h3 className="text-xl font-semibold border-l-4 border-brand-primary pl-3 text-text-heading">Características de los Datos</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="p-4 bg-surface shadow rounded border-l-4 border-brand-primary">
                                <strong className="block text-brand-primary uppercase">Integrados</strong>
                                <p className="text-text-body mt-1">Representación unificada de varios archivos con redundancia controlada.</p>
                            </div>
                            <div className="p-4 bg-surface shadow rounded border-l-4 border-brand-secondary">
                                <strong className="block text-brand-secondary uppercase">Compartidos</strong>
                                <p className="text-text-body mt-1">Acceso concurrente por diferentes usuarios para fines diversos.</p>
                            </div>
                            <div className="p-4 bg-surface shadow rounded border-l-4 border-brand-accent">
                                <strong className="block text-brand-accent uppercase">Persistentes</strong>
                                <p className="text-text-body mt-1">Los datos permanecen hasta que existe una solicitud explícita de eliminación.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Componentes del Sistema */}
                <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-surface rounded-lg shadow-md hover:shadow-lg transition-shadow border-b-4 border-highlight-purple">
                        <HardDrive className="mx-auto mb-4 text-highlight-purple" size={48} />
                        <h3 className="font-bold text-lg mb-2 text-text-heading">Hardware</h3>
                        <p className="text-sm text-text-body">Discos magnéticos (almacenamiento secundario), Unidades E/S, procesadores y memoria principal.</p>
                    </div>
                    <div className="text-center p-6 bg-surface rounded-lg shadow-md hover:shadow-lg transition-shadow border-b-4 border-highlight-purple">
                        <Server className="mx-auto mb-4 text-highlight-purple" size={48} />
                        <h3 className="font-bold text-lg mb-2 text-text-heading">Software</h3>
                        <p className="text-sm text-text-body">SGBD (capa entre usuario y BD física), utilerías, generadores de informes y administrador de transacciones.</p>
                    </div>
                    <div className="text-center p-6 bg-surface rounded-lg shadow-md hover:shadow-lg transition-shadow border-b-4 border-highlight-purple">
                        <Users className="mx-auto mb-4 text-highlight-purple" size={48} />
                        <h3 className="font-bold text-lg mb-2 text-text-heading">Usuarios</h3>
                        <ul className="text-sm text-text-body space-y-1">
                            <li>Programadores de aplicaciones</li>
                            <li>Usuarios finales</li>
                            <li><span className="bg-highlight-purple-soft text-highlight-purple px-2 py-0.5 rounded font-bold text-xs">ABD:</span> Administrador de la Base de Datos.</li>
                        </ul>
                    </div>
                </section>

                {/* Arquitectura ANSI/SPARC */}
                <section className="mb-12 p-8 bg-surface-elevated text-text-primary rounded-2xl shadow-lg border border-border-base">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-brand-secondary">
                        <Layers /> Arquitectura de tres niveles ANSI/SPARC (1978)
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-surface p-4 rounded border-l-4 border-brand-primary">
                            <span className="bg-brand-primary px-3 py-1 rounded font-mono ">Externo</span>
                            <p className="text-text-primary">Vistas de usuario (Lógico)</p>
                        </div>
                        <div className="flex items-center gap-4 bg-surface p-4 rounded border-l-4 border-brand-secondary">
                            <span className="bg-brand-secondary px-3 py-1 rounded font-mono ">Conceptual</span>
                            <p className="text-text-primary">Vista de usuarios unificada (Intermedio)</p>
                        </div>
                        <div className="flex items-center gap-4 bg-surface p-4 rounded border-l-4 border-brand-accent">
                            <span className="bg-brand-accent px-3 py-1 rounded font-mono ">Interno</span>
                            <p className="text-text-primary">Base de datos física</p>
                        </div>
                    </div>
                </section>

                {/* Modelo Entidad/Interrelación */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 border-b-2 border-border-base pb-2 text-text-heading">Modelo Entidad / Interrelación (E/R)</h2>

                    {/* Entidades */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold mb-4 text-brand-primary italic">1. Entidades</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-2 border-dashed border-brand-primary p-4 flex items-center justify-center bg-surface rounded-lg">
                                <span className="text-xl font-bold tracking-widest uppercase text-text-heading">[ PACIENTE ]</span>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p className="text-text-primary"><strong>Reglas (Tardieu 1979):</strong></p>
                                <ul className="list-disc ml-5 text-text-secondary">
                                    <li>Tener existencia propia.</li>
                                    <li>Cada ocurrencia debe ser distinguible.</li>
                                    <li>Todas las ocurrencias deben tener mismas características.</li>
                                </ul>
                                <p className="mt-2 font-semibold text-text-primary">Tipos:</p>
                                <p className="text-text-body">Regulares (existen por sí mismas) y Débiles (dependen de otra).</p>
                            </div>
                        </div>
                    </div>

                    {/* Interrelaciones */}
                    <div className="mb-10 bg-surface p-6 rounded-lg shadow-sm border border-border-base">
                        <h3 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center gap-2">
                            <Share2 size={24} /> 2. Interrelaciones
                        </h3>
                        <p className="mb-4 text-text-body">Asociación o correspondencia entre entidades.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="p-3 bg-surface-elevated rounded border-l-4 border-brand-primary">
                                <p className="text-text-primary"><strong>Grado:</strong> Número de entidades participantes.</p>
                                <p className="text-text-body"><strong>Función:</strong> Papel de cada entidad.</p>
                            </div>
                            <div className="p-3 bg-surface-elevated rounded border-l-4 border-brand-secondary">
                                <p className="text-text-primary"><strong>Tipo de correspondencia:</strong></p>
                                <p className="font-mono font-bold text-brand-primary mt-1">1:1 | 1:N | N:M</p>
                            </div>
                        </div>
                    </div>

                    {/* Atributos */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center gap-2">
                            <ShieldCheck size={24} /> 3. Atributos e Identificadores
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="p-4 bg-surface-elevated rounded border-l-4 border-brand-primary">
                                    <h4 className="font-bold flex items-center gap-1 text-brand-primary"><Key size={16} /> Identificador Principal</h4>
                                    <p className="text-sm text-text-body mt-1">Conjunto mínimo de atributos (Llave/Superclave) que identifica unívocamente cada ocurrencia.</p>
                                </div>
                                <div className="p-4 bg-surface-elevated rounded border-l-4 border-border-base">
                                    <h4 className="font-bold text-text-heading">Identificador Alternativo</h4>
                                    <p className="text-sm text-text-body mt-1">Llave candidata que también podría identificar unívocamente la entidad.</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-6 border-2 border-brand-primary rounded-lg bg-surface">
                                <div className="w-32 h-16 border-2 border-brand-primary rounded-full flex items-center justify-center text-brand-primary font-bold mb-2">
                                    Atributo
                                </div>
                                <p className="text-xs text-text-body underline italic">Representación gráfica: Óvalo</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Historia y Bibliografía */}
                <footer className="mt-20 pt-8 border-t border-border-base bg-surface-elevated">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="font-bold text-lg mb-2 underline text-text-heading">Hitos Históricos</h4>
                                <ul className="text-sm space-y-1 text-text-body">
                                    <li><strong>1960:</strong> Charles Bachman (General Electric) crea IDS (Modelo de Red). Premio Turing 1973.</li>
                                    <li><strong>Finales 60s:</strong> IBM desarrolla IMS (Modelo Jerárquico) y sistema SABRE.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 underline text-text-heading">Bibliografía</h4>
                                <ul className="text-sm space-y-1 italic text-text-body">
                                    <li>C.J. Date - Introducción a los SBD (Cap. 1 y 2).</li>
                                    <li>Jeffrey D. Ullman - Principles of Database Systems.</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center text-text-secondary text-xs mt-10">
                            © 2026 - Material de Apoyo Académico: Sistemas de Bases de Datos I
                        </p>
                    </div>
                </footer>
            </main>
        </>
    );
}


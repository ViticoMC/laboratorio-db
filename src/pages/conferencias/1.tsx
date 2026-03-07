import { Database, Server, HardDrive, Users, Layers, Share2, ShieldCheck, Key, ListTree, ChevronRight, AlertCircle } from 'lucide-react';

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
                <section className="mb-12 p-8 bg-surface-elevated text-text-primary rounded-2xl shadow-lg border border-border-base relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-highlight-purple/5 -rotate-45 translate-x-16 -translate-y-16"></div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-highlight-purple">
                        <Layers /> Arquitectura de tres niveles ANSI/SPARC (1978)
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border-l-[6px] border-highlight-purple shadow-sm hover:translate-x-2 transition-transform">
                            <span className="bg-highlight-purple text-highlight-purple-soft px-3 py-1 rounded font-mono font-bold text-xs uppercase shadow-sm">Externo</span>
                            <p className="text-text-primary font-medium">Vistas de usuario (Lógico)</p>
                        </div>
                        <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border-l-[6px] border-highlight-purple/60 shadow-sm hover:translate-x-2 transition-transform">
                            <span className="bg-highlight-purple/60 text-highlight-purple-soft px-3 py-1 rounded font-mono font-bold text-xs uppercase shadow-sm">Conceptual</span>
                            <p className="text-text-primary font-medium">Vista de usuarios unificada (Intermedio)</p>
                        </div>
                        <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border-l-[6px] border-highlight-purple/30 shadow-sm hover:translate-x-2 transition-transform">
                            <span className="bg-highlight-purple/30 text-highlight-purple px-3 py-1 rounded font-mono font-bold text-xs uppercase shadow-sm border border-highlight-purple/20">Interno</span>
                            <p className="text-text-primary font-medium">Base de datos física</p>
                        </div>
                    </div>
                </section>

                {/* Modelo Entidad/Interrelación */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 border-b-4 border-highlight-green/30 pb-2 text-text-heading">Modelo Entidad / Interrelación (E/R)</h2>

                    {/* Entidades */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-black mb-4 text-highlight-green flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-highlight-green/10 flex items-center justify-center text-highlight-green">1</div>
                            Entidades
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-4 border-dashed border-highlight-green/40 p-10 flex items-center justify-center bg-highlight-green-soft rounded-2xl shadow-inner group">
                                <span className="text-2xl font-black tracking-[0.3em] uppercase text-highlight-green group-hover:scale-110 transition-transform cursor-default">
                                    [ PACIENTE ]
                                </span>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-surface p-4 rounded-xl border border-border-base shadow-sm">
                                    <p className="text-highlight-green font-black uppercase text-xs tracking-widest mb-2">Reglas (Tardieu 1979):</p>
                                    <ul className="space-y-2 text-sm text-text-body">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="text-highlight-green shrink-0 mt-0.5" size={14} />
                                            <span>Tener existencia propia en el mundo real.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="text-highlight-green shrink-0 mt-0.5" size={14} />
                                            <span>Cada ocurrencia debe ser distinguible unívocamente.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="text-highlight-green shrink-0 mt-0.5" size={14} />
                                            <span>Mismas características para todas las ocurrencias.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-highlight-yellow-soft rounded-xl border-l-4 border-highlight-yellow flex gap-3 text-sm">
                                    <AlertCircle className="text-highlight-yellow shrink-0" size={18} />
                                    <p className="text-text-body"><span className="font-bold text-highlight-yellow-dark">Tipos:</span> Regulares (independientes) y Débiles (dependen de otra entidad).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interrelaciones */}
                    <div className="mb-10 bg-surface p-8 rounded-2xl shadow-md border-t-4 border-highlight-green transition-all hover:shadow-lg">
                        <h3 className="text-2xl font-black mb-4 text-highlight-green flex items-center gap-2">
                            <Share2 size={28} /> 2. Interrelaciones
                        </h3>
                        <p className="mb-6 text-text-body font-medium">Asociación o correspondencia entre entidades en el modelo conceptual.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                            <div className="p-4 bg-highlight-green-soft rounded-xl border-l-4 border-highlight-green shadow-sm">
                                <h4 className="font-black text-highlight-green uppercase text-xs mb-3 tracking-widest">Atributos de la Relación</h4>
                                <div className="space-y-2">
                                    <p className="text-text-primary"><strong>Grado:</strong> Número de entidades participantes.</p>
                                    <p className="text-text-secondary"><strong>Función:</strong> Papel de cada entidad en la relación.</p>
                                </div>
                            </div>
                            <div className="p-4 bg-highlight-green-soft rounded-xl border-l-4 border-highlight-green shadow-sm flex flex-col justify-center">
                                <h4 className="font-black text-highlight-green uppercase text-xs mb-3 tracking-widest text-center">Tipo de correspondencia</h4>
                                <div className="flex justify-around items-center bg-surface p-3 rounded-lg border border-highlight-green/20">
                                    <span className="font-black text-highlight-green text-lg">1:1</span>
                                    <span className="w-1 h-1 rounded-full bg-highlight-green/40"></span>
                                    <span className="font-black text-highlight-green text-lg">1:N</span>
                                    <span className="w-1 h-1 rounded-full bg-highlight-green/40"></span>
                                    <span className="font-black text-highlight-green text-lg">N:M</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Atributos */}
                    <div>
                        <h3 className="text-2xl font-black mb-6 text-highlight-green flex items-center gap-2">
                            <ShieldCheck size={28} /> 3. Atributos e Identificadores
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-5 bg-highlight-yellow-soft rounded-2xl border-l-[10px] border-highlight-yellow shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-black flex items-center gap-2 text-highlight-yellow-dark mb-2">
                                        <Key size={20} className="text-highlight-yellow" />
                                        IDENTIFICADOR PRINCIPAL (AIP)
                                    </h4>
                                    <p className="text-sm text-text-body leading-relaxed">
                                        Conjunto mínimo de atributos que identifica **unívocamente** cada ocurrencia de una entidad.
                                    </p>
                                </div>
                                <div className="p-5 bg-surface-elevated rounded-2xl border-l-4 border-border-base shadow-sm">
                                    <h4 className="font-bold text-text-heading mb-1">Identificador Alternativo</h4>
                                    <p className="text-sm text-text-secondary">Llave candidata que no fue elegida como principal pero garantiza unicidad.</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-8 border-4 border-dashed border-highlight-green/30 rounded-3xl bg-highlight-green-soft/10 group">
                                <div className="w-40 h-20 border-4 border-highlight-green rounded-full flex items-center justify-center text-highlight-green font-black text-xl bg-surface shadow-lg group-hover:scale-105 transition-transform">
                                    Atributo
                                </div>
                                <div className="w-1 h-6 bg-highlight-green/20"></div>
                                <p className="text-xs font-black text-highlight-green uppercase tracking-[0.2em]">Simbología: Óvalo</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modelos de Datos */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-text-heading">
                        <Share2 className="text-highlight-purple" /> Modelos de Datos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-highlight-purple-soft p-6 rounded-2xl border-2 border-highlight-purple shadow-sm hover:-translate-y-1 transition-transform flex flex-col justify-around">
                            <h4 className="font-bold text-highlight-purple mb-2 uppercase text-sm tracking-widest text-center">Jerárquico</h4>
                            <div className="flex flex-col items-center gap-1 opacity-80">
                                <div className="w-8 h-8 rounded-full bg-highlight-purple flex items-center justify-center text-white text-[10px]">R</div>
                                <div className="w-0.5 h-3 bg-highlight-purple/40"></div>
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded bg-highlight-purple/60"></div>
                                    <div className="w-6 h-6 rounded bg-highlight-purple/60"></div>
                                </div>
                            </div>
                            <p className="text-xs text-text-body mt-4 text-center italic">Estructura de árbol: Segmentos y Padres/Hijos.</p>
                        </div>
                        <div className="bg-highlight-purple-soft p-6 rounded-2xl border-2 border-highlight-purple shadow-sm hover:-translate-y-1 transition-transform flex flex-col justify-around">
                            <h4 className="font-bold text-highlight-purple mb-2 uppercase text-sm tracking-widest text-center">Red</h4>
                            <div className="flex flex-col items-center gap-2 opacity-80">
                                <div className="relative w-16 h-10">
                                    <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-highlight-purple"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-highlight-purple"></div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-highlight-purple"></div>
                                    <div className="absolute top-2 left-2 w-12 h-0.5 bg-highlight-purple/30 rotate-12"></div>
                                    <div className="absolute top-2 right-2 w-8 h-0.5 bg-highlight-purple/30 -rotate-45"></div>
                                </div>
                            </div>
                            <p className="text-xs text-text-body mt-4 text-center italic">Estructura de grafos: Propietarios y Miembros.</p>
                        </div>
                        <div className="bg-highlight-purple-soft p-6 rounded-2xl border-2 border-highlight-purple shadow-lg hover:-translate-y-1 transition-transform flex flex-col justify-around">
                            <h4 className="font-bold text-highlight-purple mb-2 uppercase text-sm tracking-widest text-center">Relacional</h4>
                            <div className="flex flex-col items-center gap-1 opacity-90">
                                <div className="grid grid-cols-3 gap-0.5 border border-highlight-purple">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="w-3 h-2 bg-highlight-purple/40"></div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs text-text-body mt-4 text-center italic">Basado en tablas (Tuplas y Atributos). El estándar actual.</p>
                        </div>
                    </div>
                </section>

                {/* Independencia de Datos */}
                <section className="mb-12 bg-highlight-yellow-soft p-8 rounded-3xl border border-highlight-yellow/30 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 text-highlight-yellow opacity-10">
                        <Layers size={200} />
                    </div>
                    <h2 className="text-2xl font-bold mb-6 text-highlight-yellow-dark flex items-center gap-2 relative">
                        <ShieldCheck /> Independencia de Datos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        <div className="space-y-2">
                            <h4 className="font-bold text-lg text-text-heading flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-highlight-yellow"></span> Física
                            </h4>
                            <p className="text-sm text-text-body pl-4 border-l-2 border-highlight-yellow/50">
                                Capacidad de modificar el esquema **interno** sin tener que alterar el esquema conceptual o los externos. (Ej: mover archivos de disco).
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-lg text-text-heading flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-highlight-yellow text-highlight-yellow"></span> Lógica
                            </h4>
                            <p className="text-sm text-text-body pl-4 border-l-2 border-highlight-yellow/50">
                                Capacidad de modificar el esquema **conceptual** sin tener que alterar los esquemas externos. (Ej: añadir un nuevo campo a una tabla).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Historia y Bibliografía */}
                <footer className="mt-20 border-t border-border-base bg-surface-elevated/50 overflow-hidden">
                    <div className="max-w-5xl mx-auto px-6 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                            <div className="space-y-4">
                                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-highlight-green mb-4">Hitos Históricos</h4>
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-start pb-4 border-b border-border-base/50">
                                        <span className="bg-highlight-green-soft text-highlight-green font-mono font-bold px-2 py-1 rounded">1960</span>
                                        <p className="text-sm text-text-body"><strong>Charles Bachman</strong> (General Electric) crea IDS (Modelo de Red). Premio Turing 1973.</p>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <span className="bg-highlight-green-soft text-highlight-green font-mono font-bold px-2 py-1 rounded">1968</span>
                                        <p className="text-sm text-text-body"><strong>IBM</strong> desarrolla IMS (Modelo Jerárquico) y el sistema de reservación aérea <strong>SABRE</strong>.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-highlight-purple mb-4">Bibliografía Recomendada</h4>
                                <ul className="text-sm space-y-3 italic text-text-secondary list-none">
                                    <li className="flex gap-2 items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-highlight-purple"></div>
                                        <span>C.J. Date - Introducción a los SBD (Cap. 1 y 2).</span>
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-highlight-purple"></div>
                                        <span>Jeffrey D. Ullman - Principles of Database Systems.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </footer>
            </main>
        </>
    );
}


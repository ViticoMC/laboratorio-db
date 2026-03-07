
import {
    GitMerge,
    Boxes,
    ArrowDownZa,
    LinkIcon,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';

export function MER_ExtendidoPage() {
    return (
        <>
            <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* Sumario */}
                <nav className="mb-12 bg-surface border border-border-base p-6 rounded-xl shadow-sm transition-colors duration-300">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-text-heading">
                        <CheckCircle2 size={24} className="text-brand-primary" /> Sumario de la Sesión
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-text-secondary">
                        <p>• Semántica en las Interrelaciones</p>
                        <p>• Cardinalidad mínima y máxima</p>
                        <p>• Interrelaciones débiles (Existencia e Identificación)</p>
                        <p>• Jerarquías de Generalización / Especialización</p>
                        <p>• Agregación de entidades</p>
                    </div>
                </nav>

                {/* Caso de Estudio: Requisitos */}
                <section className="mb-12 bg-highlight-green-soft border-l-8 border-highlight-green p-8 rounded-r-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 className="text-highlight-green" size={28} />
                        <h2 className="text-xl font-black uppercase tracking-tight text-highlight-green">Caso de Estudio: Nuevos Requisitos</h2>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex gap-3 bg-surface/50 p-3 rounded-lg border border-highlight-green/20">
                            <span className="text-highlight-green font-bold">1.</span>
                            <p className="text-text-body font-medium">"Todos los empleados tienen que ser asignados a un único departamento."</p>
                        </li>
                        <li className="flex gap-3 bg-surface/50 p-3 rounded-lg border border-highlight-green/20">
                            <span className="text-highlight-green font-bold">2.</span>
                            <p className="text-text-body font-medium">"El personal técnico trabaja en proyectos; otros empleados realizan actividades distintas."</p>
                        </li>
                    </ul>
                </section>

                {/* 1. Semántica y Cardinalidades */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-highlight-purple p-2 rounded-lg text-foreground">
                            <LinkIcon size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-text-heading">Semántica de Interrelaciones</h2>
                    </div>

                    <div className="bg-surface  p-6 rounded-xl shadow-md border-t-4 border-highlight-purple mb-6 transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-3 text-highlight-purple">Cardinalidades Mínimas y Máximas</h3>
                        <p className="mb-4 text-text-body">Indican el número mínimo y máximo de ocurrencias de un tipo de entidad que pueden estar interrelacionadas con una ocurrencia de otro tipo.</p>

                        <div className="flex flex-wrap gap-4 mb-6">
                            {['(0,1)', '(1,1)', '(0,N)', '(1,N)'].map((card) => (
                                <span key={card} className="px-4 py-2 font-mono font-bold rounded-md border bg-surface-elevated border-border-base text-text-primary">
                                    {card}
                                </span>
                            ))}
                        </div>

                        <div className="border-2 border-border-base bg-surface-elevated rounded-lg p-6 flex items-center justify-around transition-colors duration-300">
                            <div className="text-center">
                                <div className="bg-surface border-2 border-brand-primary px-4 py-2 font-bold mb-1 text-text-heading uppercase">Empleado</div>
                                <span className="text-xs font-mono font-bold text-text-secondary">(1,m)</span>
                            </div>
                            <div className="h-0.5 bg-brand-secondary grow mx-4 relative">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm italic text-text-secondary">Trabaja_en</span>
                            </div>
                            <div className="text-center">
                                <div className="bg-surface border-2 border-brand-primary px-4 py-2 font-bold mb-1 text-text-heading uppercase">Departamento</div>
                                <span className="text-xs font-mono font-bold text-text-secondary">(1,1)</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Interrelaciones Débiles */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-highlight-yellow p-2 rounded-lg text-background">
                            <AlertCircle size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-text-heading">Interrelaciones Débiles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-highlight-yellow-soft border-highlight-yellow border-t-4 rounded-xl shadow-sm transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="p-1 px-3 bg-highlight-yellow text-background font-bold text-[10px] rounded-full uppercase">Existencia</span>
                                <h3 className="font-bold text-lg text-text-heading">Dependencia en Existencia</h3>
                            </div>
                            <p className="text-sm mb-4 text-text-body">Entre una entidad regular y una débil. Cardinalidad m-1 hacia la regular.</p>
                            <div className="p-4 rounded-lg text-xs border bg-surface border-highlight-yellow/50 text-text-body">
                                <strong className="text-highlight-yellow uppercase block mb-1">Regla de Borrado:</strong> Si la ocurrencia regular desaparece, sus ocurrencias débiles relacionadas también se eliminan.
                            </div>
                        </div>
                        <div className="p-6 bg-highlight-yellow-soft border-highlight-yellow border-t-4 rounded-xl shadow-sm transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="p-1 px-3 bg-highlight-yellow text-background font-bold text-[10px] rounded-full uppercase">Identificación</span>
                                <h3 className="font-bold text-lg text-text-heading">Dependencia en Identificación</h3>
                            </div>
                            <p className="text-sm mb-4 text-text-body">Es una relación débil en existencia donde la identificación propia es insuficiente.</p>
                            <div className="p-4 rounded-lg text-xs font-mono bg-highlight-yellow text-background border border-highlight-yellow shadow-inner">
                                <strong className="block mb-1 opacity-70">Identificador Global:</strong>
                                ID = [AIP Fuerte] + [AIP Propio Local]
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Jerarquías (Generalización / Especialización) */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                         <div className="bg-highlight-purple p-2 rounded-lg text-foreground">
                            <GitMerge size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-text-heading">Jerarquías (E/S)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-4 bg-highlight-purple-soft border-t-4 border-highlight-purple rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                            <h4 className="font-bold mb-1 text-highlight-purple">Herencia de Atributos</h4>
                            <p className="text-xs text-text-body">Todo atributo del supertipo pertenece a los subtipos. Los comunes van arriba; los específicos abajo.</p>
                        </div>
                        <div className="p-4 bg-highlight-purple-soft border-t-4 border-highlight-purple rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                            <h4 className="font-bold mb-1 text-highlight-purple">Herencia de Relaciones</h4>
                            <p className="text-xs text-text-body">Las interrelaciones del supertipo afectan a todos los subtipos.</p>
                        </div>
                        <div className="p-4 bg-highlight-purple-soft border-t-4 border-highlight-purple rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                            <h4 className="font-bold mb-1 text-highlight-purple">Ocurrencias</h4>
                            <p className="text-xs text-text-body">Toda ocurrencia de un subtipo es ocurrencia del supertipo (pero no viceversa).</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl border-2 border-dashed bg-highlight-purple-soft/30 border-highlight-purple/20 transition-colors duration-300">
                        <h3 className="text-center font-bold mb-8 uppercase tracking-widest text-sm text-highlight-purple opacity-70">Ejemplo: Jerarquía Total y Excluyente (t,e)</h3>
                        <div className="flex flex-col items-center">
                            <div className="bg-surface border-2 border-highlight-purple px-6 py-2 font-bold z-10 text-text-heading uppercase shadow-sm">Empleado</div>
                            <div className="w-0.5 h-8 bg-highlight-purple"></div>
                            <div className="px-4 py-1 border-2 rounded-full bg-highlight-purple text-foreground text-xs font-black mb-8 italic shadow-md">t, e</div>
                            <div className="flex gap-16">
                                <div className="flex flex-col items-center group">
                                    <div className="w-0.5 h-4 bg-highlight-purple/50 group-hover:bg-highlight-purple transition-colors"></div>
                                    <div className="bg-surface border-2 border-border-base group-hover:border-highlight-purple px-4 py-1 text-sm font-bold text-text-body rounded shadow-sm transition-all">Técnico</div>
                                </div>
                                <div className="flex flex-col items-center group">
                                    <div className="w-0.5 h-4 bg-highlight-purple/50 group-hover:bg-highlight-purple transition-colors"></div>
                                    <div className="bg-surface border-2 border-border-base group-hover:border-highlight-purple px-4 py-1 text-sm font-bold text-text-body rounded shadow-sm transition-all">No_Técnico</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Restricciones de Jerarquías */}
                    <div className="mt-12 group">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-text-heading">
                            <AlertCircle className="text-highlight-yellow" /> Restricciones de las Jerarquías
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative p-6 bg-highlight-yellow-soft rounded-2xl border-l-12 border-highlight-yellow shadow-md hover:shadow-xl transition-shadow">
                                <span className="absolute -top-4 right-4 text-highlight-yellow opacity-40 font-black text-6xl select-none">P/T</span>
                                <h4 className="font-bold text-highlight-yellow-dark text-xl mb-4 tracking-tight">Participación (P / T)</h4>
                                <div className="space-y-4">
                                    <div className="bg-background/50 p-3 rounded-lg border border-highlight-yellow/20">
                                        <strong className="text-highlight-yellow-dark block mb-1 uppercase text-xs">Parcial (P)</strong>
                                        <p className="text-sm text-text-body">No toda ocurrencia de la superentidad tiene que ser al menos de un subtipo.</p>
                                    </div>
                                    <div className="bg-highlight-yellow p-3 rounded-lg border border-highlight-yellow shadow-sm">
                                        <strong className="text-background block mb-1 uppercase text-xs font-black">Total (T)</strong>
                                        <p className="text-sm text-background font-medium text-opacity-80">Toda ocurrencia de la superentidad DEBE pertenecer a uno de los subtipos.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative p-6 bg-highlight-yellow-soft rounded-2xl border-l-12 border-highlight-yellow shadow-md hover:shadow-xl transition-shadow">
                                <span className="absolute -top-4 right-4 text-highlight-yellow opacity-40 font-black text-6xl select-none">EX/S</span>
                                <h4 className="font-bold text-highlight-yellow-dark text-xl mb-4 tracking-tight">Disyunción (EX / SOL)</h4>
                                <div className="space-y-4">
                                    <div className="bg-highlight-yellow p-3 rounded-lg border border-highlight-yellow shadow-sm">
                                        <strong className="text-background block mb-1 uppercase text-xs font-black">Excluyente (EX / E)</strong>
                                        <p className="text-sm text-background font-medium text-opacity-80">Una ocurrencia del supertipo pertenece como MÁXIMO a uno de los subtipos.</p>
                                    </div>
                                    <div className="bg-background/50 p-3 rounded-lg border border-highlight-yellow/20">
                                        <strong className="text-highlight-yellow-dark block mb-1 uppercase text-xs">Solapada (SOL / S)</strong>
                                        <p className="text-sm text-text-body">Una ocurrencia del supertipo puede pertenecer a varios subtipos simultáneamente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Agregación */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-highlight-green p-2 rounded-lg text-foreground">
                            <Boxes size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-text-heading">Agregación</h2>
                    </div>

                    <div className="bg-highlight-green-soft border-2 border-highlight-green/30 p-8 rounded-3xl shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-highlight-green/5 -rotate-45 translate-x-16 -translate-y-16"></div>
                        <p className="mb-8 leading-relaxed text-text-heading font-medium text-lg">
                            Abstracción por la cual una relación se trata como una **entidad de nivel superior**.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                            <div className="bg-surface p-6 rounded-2xl border-2 border-highlight-green/40 shadow-sm">
                                <h4 className="font-bold text-highlight-green mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-highlight-green"></span> Modelo Clásico
                                </h4>
                                <div className="flex items-center justify-center p-6 bg-surface-elevated rounded-xl border border-border-base border-dashed">
                                    <div className="flex flex-col items-center">
                                        <div className="px-4 py-2 border-2 border-brand-primary rounded bg-surface font-mono text-xs shadow-sm">Equipo</div>
                                        <div className="h-4 w-0.5 bg-brand-primary"></div>
                                        <div className="w-16 h-10 border-2 border-highlight-green border-double rotate-45 flex items-center justify-center -my-2 relative z-10 bg-surface shadow-sm">
                                            <span className="text-[10px] -rotate-45 font-bold uppercase text-highlight-green">Vs</span>
                                        </div>
                                        <div className="h-4 w-0.5 bg-brand-primary"></div>
                                        <div className="px-4 py-2 border-2 border-brand-primary rounded bg-surface font-mono text-xs shadow-sm">Juego</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface p-6 rounded-2xl border-2 border-highlight-green/40 shadow-sm flex flex-col justify-center">
                                <h4 className="font-bold text-highlight-green mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-highlight-yellow"></span> Aplicación
                                </h4>
                                <div className="space-y-3">
                                    <p className="text-sm p-3 bg-highlight-green-soft rounded-lg text-text-body italic">
                                        "Se necesita saber qué **árbitro** participó en un **juego** específico entre dos **equipos**."
                                    </p>
                                    <div className="p-3 bg-brand-secondary/10 border-l-4 border-brand-secondary text-sm font-bold text-brand-secondary">
                                        Agregación: [EQUIPO-JUEGO] 
                                        → Participa → [ARBITRO]
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pasos para el diseño conceptual */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center text-text-heading">Esquema para Diseño Conceptual</h2>
                    <div className="flex flex-col md:flex-row gap-4 items-stretch">
                        {[
                            { step: '01', title: 'Análisis', desc: 'Identificar entidades y relaciones clave.', color: 'highlight-purple' },
                            { step: '02', title: 'Refinamiento', desc: 'Añadir atributos y cardinalidades.', color: 'brand-secondary' },
                            { step: '03', title: 'Agregación/Jerarquía', desc: 'Identificar abstracciones complejas.', color: 'highlight-green' },
                            { step: '04', title: 'Validación', desc: 'Chequeo final con el mundo real.', color: 'brand-accent' }
                        ].map((item, i) => (
                            <div key={i} className="flex-1 bg-surface-elevated p-6 rounded-2xl border border-border-base relative group hover:border-brand-primary transition-colors duration-200 shadow-sm">
                                <span className={`text-4xl font-black absolute opacity-10 right-4 bottom-4 text-${item.color}`}>{item.step}</span>
                                <h4 className="font-bold text-lg mb-2 text-text-heading">{item.title}</h4>
                                <p className="text-xs text-text-body leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conclusiones */}
                <footer className="mt-12 bg-surface-elevated border border-border-base p-8 rounded-3xl transition-colors duration-300 shadow-lg relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-48 h-1 bg-highlight-purple opacity-40"></div>
                    <div className="absolute top-0 right-0 w-48 h-1 bg-highlight-yellow opacity-40"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-1 bg-highlight-green opacity-40"></div>
                    <h2 className="text-text-heading text-2xl font-bold mb-6 flex items-center gap-2">
                        <ArrowDownZa className="text-brand-accent" /> Resumen Final
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0"></div>
                                <p className="text-text-body font-medium">Las extensiones del modelo EE/R permiten capturar semántica que el modelo E/R básico omitiría.</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0"></div>
                                <p className="text-text-body font-medium">Las jerarquías (t,e) son la base para un modelado lógico robusto.</p>
                            </div>
                        </div>
                        <div className="bg-surface/50 p-6 rounded-2xl border-2 border-border-base backdrop-blur-sm">
                            <p className="text-brand-primary font-bold mb-2 uppercase text-xs tracking-widest">Siguiente Unidad:</p>
                            <p className="text-text-primary text-base font-bold">Modelado Lógico y Normalización</p>
                            <p className="text-[10px] text-text-secondary mt-2 opacity-60">Próxima sesión: Transformación de esquemas conceptuales a tablas.</p>
                        </div>
                    </div>
                </footer>

            </main>
        </>
    );
}



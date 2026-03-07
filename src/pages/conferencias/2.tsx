
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
                        <div className="bg-highlight-purple p-2 rounded-lg text-white">
                            <LinkIcon size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-text-heading">Semántica de Interrelaciones</h2>
                    </div>

                    <div className="bg-surface border-highlight-purple/20 p-6 rounded-xl shadow-md border-t-4 border-highlight-purple mb-6 transition-colors duration-300">
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
                        <div className="bg-highlight-yellow p-2 rounded-lg text-black">
                            <AlertCircle size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-text-heading">Interrelaciones Débiles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-highlight-yellow-soft border-highlight-yellow border-t-4 rounded-xl shadow-sm transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="p-1 px-3 bg-highlight-yellow text-black font-bold text-[10px] rounded-full uppercase">Existencia</span>
                                <h3 className="font-bold text-lg text-text-heading">Dependencia en Existencia</h3>
                            </div>
                            <p className="text-sm mb-4 text-text-body">Entre una entidad regular y una débil. Cardinalidad m-1 hacia la regular.</p>
                            <div className="p-4 rounded-lg text-xs border bg-surface border-highlight-yellow/50 text-text-body">
                                <strong className="text-highlight-yellow uppercase block mb-1">Regla de Borrado:</strong> Si la ocurrencia regular desaparece, sus ocurrencias débiles relacionadas también se eliminan.
                            </div>
                        </div>
                        <div className="p-6 bg-highlight-yellow-soft border-highlight-yellow border-t-4 rounded-xl shadow-sm transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="p-1 px-3 bg-highlight-yellow text-black font-bold text-[10px] rounded-full uppercase">Identificación</span>
                                <h3 className="font-bold text-lg text-text-heading">Dependencia en Identificación</h3>
                            </div>
                            <p className="text-sm mb-4 text-text-body">Es una relación débil en existencia donde la identificación propia es insuficiente.</p>
                            <div className="p-4 rounded-lg text-xs font-mono bg-highlight-yellow text-black border border-highlight-yellow shadow-inner">
                                <strong className="block mb-1 opacity-70">Identificador Global:</strong>
                                ID = [AIP Fuerte] + [AIP Propio Local]
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Jerarquías (Generalización / Especialización) */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-brand-secondary p-2 rounded-lg ">
                            <GitMerge size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-text-heading">Jerarquías (E/S)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-4 bg-brand-primary  rounded-lg transition-colors duration-300 shadow-md">
                            <h4 className="font-bold mb-1">Herencia de Atributos</h4>
                            <p className="text-xs opacity-90">Todo atributo del supertipo pertenece a los subtipos. Los comunes van arriba; los específicos abajo.</p>
                        </div>
                        <div className="p-4 bg-brand-secondary  rounded-lg transition-colors duration-300 shadow-md">
                            <h4 className="font-bold mb-1">Herencia de Relaciones</h4>
                            <p className="text-xs opacity-90">Las interrelaciones del supertipo afectan a todos los subtipos.</p>
                        </div>
                        <div className="p-4 bg-brand-accent  rounded-lg transition-colors duration-300 shadow-md">
                            <h4 className="font-bold mb-1">Ocurrencias</h4>
                            <p className="text-xs opacity-90">Toda ocurrencia de un subtipo es ocurrencia del supertipo (pero no viceversa).</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl border-2 border-dashed bg-surface border-border-base transition-colors duration-300">
                        <h3 className="text-center font-bold mb-8 uppercase tracking-widest text-sm text-text-secondary">Ejemplo: Jerarquía Total y Excluyente (t,e)</h3>
                        <div className="flex flex-col items-center">
                            <div className="bg-surface border-2 border-brand-primary px-6 py-2 font-bold z-10 text-text-heading uppercase">Empleado</div>
                            <div className="w-0.5 h-8 bg-brand-primary"></div>
                            <div className="px-3 py-1 border-2 rounded-full bg-surface-elevated text-xs font-bold mb-8 italic border-brand-primary text-brand-primary">t, e</div>
                            <div className="flex gap-16">
                                <div className="flex flex-col items-center">
                                    <div className="w-0.5 h-4 bg-brand-primary"></div>
                                    <div className="bg-surface border border-border-base px-4 py-1 text-sm text-text-body rounded shadow-sm">Técnico</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-0.5 h-4 bg-brand-primary"></div>
                                    <div className="bg-surface border border-border-base px-4 py-1 text-sm text-text-body rounded shadow-sm">No_Técnico</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Agregación */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-brand-primary p-2 rounded-lg ">
                            <Boxes size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-text-heading">Agregación</h2>
                    </div>

                    <div className="bg-surface border-border-base p-8 rounded-xl border shadow-sm transition-colors duration-300">
                        <p className="mb-6 leading-relaxed text-text-body">
                            Permite modelar situaciones donde se desea establecer una interrelación con otra interrelación existente. Se trata a la interrelación y sus entidades participantes como un **nuevo tipo de entidad compuesta**.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-surface-elevated border-border-base border p-4 rounded transition-colors duration-300">
                                <h4 className="font-bold text-sm mb-4 uppercase text-text-secondary">Ejemplo 1: Matrimonio</h4>
                                <div className="bg-surface border-brand-primary flex items-center justify-center p-4 border-2 rounded-lg relative transition-colors duration-300">
                                    <span className="text-xs font-bold text-text-primary">HOMBRE — Casado_con — MUJER</span>
                                    <div className="absolute inset-0 border-brand-secondary border-2 border-dotted opacity-30"></div>
                                </div>
                                <p className="text-[10px] mt-2 text-center font-mono text-text-secondary">Agregación: "Matrimonio"</p>
                            </div>

                            <div className="bg-surface-elevated border-border-base border p-4 rounded transition-colors duration-300">
                                <h4 className="font-bold text-sm mb-4 uppercase text-text-secondary">Ejemplo 2: Deportes</h4>
                                <div className="text-xs space-y-2 text-text-body">
                                    <p>• <strong className="text-brand-primary">Agregación:</strong> [Equipo — Compite_con — Juego]</p>
                                    <p>• <strong className="text-brand-primary">Interrelación con:</strong> Arbitro (Participa)</p>
                                    <p>• <strong className="text-brand-primary">Localización:</strong> Estadio, Fecha</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusiones */}
                <footer className="mt-12 bg-surface-elevated border border-border-base p-8 rounded-3xl transition-colors duration-300 shadow-lg">
                    <h2 className="text-text-heading text-2xl font-bold mb-4 flex items-center gap-2">
                        <ArrowDownZa className="text-brand-accent" /> Conclusiones
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-3 text-text-body">
                            <p>• Las extensiones del modelo EE/R proporcionan una mayor **riqueza expresiva** para modelar realidades complejas.</p>
                            <p>• El diseño conceptual es un **proceso iterativo** vital para la comunicación entre el diseñador y el cliente.</p>
                        </div>
                        <div className="bg-surface border border-border-base p-4 rounded-xl transition-colors duration-300">
                            <p className="text-brand-primary font-bold mb-1">Siguiente Etapa:</p>
                            <p className="text-text-primary">Obtención del **Diseño Lógico** de la Base de Datos.</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-border-base text-center text-[10px] uppercase tracking-widest text-text-secondary opacity-70">
                        Sistemas de Bases de Datos I - Conferencia 2 - Universidad de Ciencias Informáticas
                    </div>
                </footer>

            </main>
        </>
    );
}



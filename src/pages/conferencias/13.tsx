import {
    PlusCircle,
    RefreshCcw,
    Trash2,
    Eye,
    Database,
    ShieldCheck,
    AlertTriangle
} from 'lucide-react';

export function SQLModificacionVistasPage() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* 1. SENTENCIA INSERT */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <PlusCircle className="text-highlight-green" /> 1. Inserción de Datos (INSERT)
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300 hover:shadow-md">
                        <p className="text-sm mb-10 leading-relaxed text-text-body font-medium">
                            La sentencia <span className="text-highlight-green font-black">INSERT</span> permite añadir nuevas filas a una tabla de forma persistente. Existen dos modalidades principales: manual o masiva.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="bg-surface-elevated p-6 rounded-2xl border-l-[6px] border-highlight-green shadow-inner transition-all hover:bg-surface duration-300 group">
                                <h4 className="font-black text-[10px] uppercase mb-4 text-highlight-green tracking-[0.2em] flex items-center gap-2">
                                    <Database size={12} /> Inserción Individual
                                </h4>
                                <div className="bg-black/95 p-4 rounded-xl font-mono text-[11px] text-white border border-white/5 shadow-xl group-hover:scale-[1.02] transition-transform">
                                    <p className="text-highlight-purple font-black italic uppercase ">INSERT INTO <span className="text-white">trabajador</span></p>
                                    <p className="text-white/60">(id_trabajador, nomb_trabajador)</p>
                                    <p className="text-highlight-purple font-black  uppercase italic">VALUES <span className="text-highlight-green text-xs">('112', 'Carlos Pérez')</span>;</p>
                                </div>
                            </div>
                            <div className="bg-surface-elevated p-6 rounded-2xl border-l-[6px] border-highlight-green shadow-inner transition-all hover:bg-surface duration-300 group">
                                <h4 className="font-black text-[10px] uppercase mb-4 text-highlight-green tracking-[0.2em] flex items-center gap-2">
                                    <PlusCircle size={12} /> Inserción Masiva
                                </h4>
                                <div className="bg-black/95 p-4 rounded-xl font-mono text-[11px] text-white border border-white/5 shadow-xl group-hover:scale-[1.02] transition-transform">
                                    <p className="text-highlight-purple font-black italic uppercase ">INSERT INTO <span className="text-white">nomina_historica</span></p>
                                    <p className="text-highlight-yellow italic">SELECT <span className="text-white">*</span> FROM <span className="text-white">trabajador</span></p>
                                    <p className="text-highlight-yellow italic">WHERE <span className="text-white">tarifa_hr {'>'} 40</span>;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SENTENCIA UPDATE */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <RefreshCcw className="text-highlight-purple" /> 2. Actualización (UPDATE)
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300">
                        <p className="text-sm mb-10 text-text-body font-medium leading-relaxed border-l-4 border-highlight-purple pl-4">
                            Modifica los valores de una o más columnas para un subconjunto de filas que cumplen una condición específica.
                        </p>

                        <div className="bg-highlight-yellow/5 border border-highlight-yellow/20 p-8 rounded-3xl mb-10 relative overflow-hidden shadow-sm transition-all hover:bg-highlight-yellow/10">
                            <div className="absolute top-[-10px] right-[-10px] opacity-10 text-highlight-yellow rotate-12"><AlertTriangle size={120} /></div>
                            <h4 className="font-black text-[10px] mb-4 uppercase tracking-[0.2em] text-highlight-yellow flex items-center gap-2 italic underline underline-offset-4 decoration-2">
                                <AlertTriangle size={14} /> Peligro de Integridad
                            </h4>
                            <p className="text-sm text-text-body leading-relaxed max-w-2xl relative z-10">
                                Si omites la cláusula <span className="text-highlight-yellow font-black font-mono underline">WHERE</span> en un UPDATE, se modificarán <span className="text-highlight-yellow font-black uppercase text-lg tracking-tighter">todas las filas</span> de la tabla de forma irreversible.
                            </p>
                        </div>

                        <div className="bg-black/95 p-8 rounded-3xl font-mono text-sm text-white border border-white/5 shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-4 bg-highlight-purple/10 text-[9px] text-highlight-purple font-black uppercase tracking-widest italic decoration-highlight-purple">Script de Mantenimiento</div>
                            <p className="text-highlight-green mb-6">-- Incrementar tarifa un 10% a electricistas</p>
                            <p className="text-highlight-purple font-black uppercase italic tracking-widest"><span className="text-highlight-yellow font-black underline underline-offset-4 decoration-2">UPDATE</span> trabajador</p>
                            <p className="text-highlight-purple font-black uppercase italic tracking-widest">SET <span className="text-white">tarifa_hr = tarifa_hr * 1.10</span></p>
                            <p className="text-highlight-purple font-black uppercase italic tracking-widest">WHERE <span className="text-white">oficio = <span className="text-highlight-green">'Electricista'</span></span>;</p>
                        </div>
                    </div>
                </section>

                {/* 3. SENTENCIA DELETE */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Trash2 className="text-highlight-yellow" /> 3. Eliminación (DELETE)
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300">
                        <p className="text-sm mb-10 text-text-body font-medium leading-relaxed italic">
                            Elimina filas completas de una tabla. Al igual que el UPDATE, su alcance está restringido por la precisión del filtro aplicado.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div className="bg-black/95 p-8 rounded-2xl font-mono text-xs text-white border border-white/5 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-highlight-yellow" />
                                <p className="text-white mb-4">-- Borrar trabajador específico</p>
                                <p className="text-highlight-purple font-black uppercase tracking-widest group-hover:opacity-100 transition-opacity">DELETE FROM <span className="text-white">trabajador</span></p>
                                <p className="text-highlight-purple font-black uppercase tracking-widest group-hover:opacity-100 transition-opacity">WHERE <span className="text-white">id_trabajador = <span className="text-highlight-yellow">'112'</span></span>;</p>
                            </div>
                            <div className="bg-surface-elevated p-8 rounded-3xl border-2 border-border/40 shadow-sm">
                                <h4 className="font-black text-[10px] text-highlight-purple mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <ShieldCheck size={14} /> Integridad Referencial
                                </h4>
                                <p className="text-xs text-text-body leading-relaxed font-medium">
                                    El motor impedirá el borrado si la <span className="text-highlight-purple font-black underline underline-offset-4 decoration-2">Primary Key</span> está siendo referenciada por una <span className="text-highlight-yellow font-black underline underline-offset-4 decoration-2">Foreign Key</span> activa en otra tabla (Restricción de Integridad).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. VISTAS (VIEWS) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Eye className="text-highlight-purple" /> 4. Vistas: Tablas Virtuales
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300">
                        <p className="text-sm mb-12 leading-relaxed text-text-body font-medium">
                            Una <span className="text-foreground font-black uppercase underline decoration-highlight-purple/30 text-lg tracking-tighter decoration-2 underline-offset-4">Vista</span> no almacena datos físicamente; es una ventana lógica que guarda la definición de una consulta compleja.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            <div className="flex flex-col items-center text-center p-8 bg-surface-elevated rounded-3xl border border-border group hover:border-highlight-purple/50 transition-all duration-300 shadow-sm hover:translate-y-[-4px]">
                                <div className="w-14 h-14 rounded-2xl bg-highlight-purple/10 flex items-center justify-center mb-6 text-highlight-purple group-hover:scale-110 transition-transform"><ShieldCheck size={28} /></div>
                                <h5 className="font-black text-xs text-text-primary mb-3 uppercase tracking-widest">Seguridad</h5>
                                <p className="text-[11px] text-text-secondary leading-relaxed font-medium">Oculta columnas sensibles (salarios) a usuarios sin privilegios.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-8 bg-surface-elevated rounded-3xl border border-border group hover:border-highlight-purple/50 transition-all duration-300 shadow-sm hover:translate-y-[-4px]">
                                <div className="w-14 h-14 rounded-2xl bg-highlight-purple/10 flex items-center justify-center mb-6 text-highlight-purple group-hover:scale-110 transition-transform"><RefreshCcw size={28} /></div>
                                <h5 className="font-black text-xs text-text-primary mb-3 uppercase tracking-widest">Abstracción</h5>
                                <p className="text-[11px] text-text-secondary leading-relaxed font-medium">Simplifica joins masivos en una "tabla" virtual fácil de consultar.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-8 bg-surface-elevated rounded-3xl border border-border group hover:border-highlight-purple/50 transition-all duration-300 shadow-sm hover:translate-y-[-4px]">
                                <div className="w-14 h-14 rounded-2xl bg-highlight-purple/10 flex items-center justify-center mb-6 text-highlight-purple group-hover:scale-110 transition-transform"><Database size={28} /></div>
                                <h5 className="font-black text-xs text-text-primary mb-3 uppercase tracking-widest">Independencia</h5>
                                <p className="text-[11px] text-text-secondary leading-relaxed font-medium">Permite cambiar nombres en la BD física sin romper el código frontend.</p>
                            </div>
                        </div>

                        <div className="bg-black/95 p-10 rounded-3xl shadow-2xl border border-white/5 overflow-hidden relative">
                            <h3 className="font-black text-[10px] uppercase tracking-[0.4em] mb-6 text-white italic">Declaración de Tabla Virtual:</h3>
                            <div className="bg-white/5 p-6 rounded-2xl font-mono text-sm leading-relaxed border border-white/10 relative z-10 backdrop-blur-md">
                                <p className="text-white font-black uppercase underline decoration-2 underline-offset-4 italic mb-4">CREATE VIEW <span className="text-highlight-green">electricistas_vsc</span> AS</p>
                                <p className="text-white italic"><span className="text-highlight-yellow uppercase font-black">SELECT</span> id_trabajador, nomb_trabajador, tarifa_hr</p>
                                <p className="text-white italic"><span className="text-highlight-yellow uppercase font-black">FROM</span> trabajador</p>
                                <p className="text-white italic"><span className="text-highlight-yellow uppercase font-black">WHERE</span> oficio = <span className="text-highlight-green">'Electricista'</span>;</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. INTEGRIDAD Y MANTENIMIENTO */}
                <section className="mb-20">
                    <div className="bg-surface border-2 border-border p-12 rounded-[40px] shadow-sm relative overflow-hidden group">
                        <div className="absolute bottom-[-20px] right-[-20px] text-highlight-purple opacity-5"><ShieldCheck size={200} /></div>
                        <h3 className="text-2xl font-black mb-12 flex items-center gap-4 text-text-heading uppercase tracking-widest decoration-highlight-purple/30 transition-all">
                            <ShieldCheck className="text-highlight-green" size={32} /> Reglas del Mantenimiento SQL
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xs text-text-body font-medium leading-loose">
                            <div className="space-y-6">
                                <p className="p-4 bg-surface-elevated rounded-2xl border border-border/50"><strong className="text-highlight-purple uppercase font-black block mb-2 underline tracking-wider">Integridad de Entidad:</strong> La <span className="text-highlight-purple font-black italic">PK</span> es sagrada: no se admiten nulos ni duplicados bajo ninguna circunstancia.</p>
                                <p className="p-4 bg-surface-elevated rounded-2xl border border-border/50"><strong className="text-highlight-purple uppercase font-black block mb-2 underline tracking-wider">Integridad Referencial:</strong> Nadie entra si no está la tabla padre. Una <span className="text-highlight-yellow font-black italic">FK</span> debe apuntar a una <span className="text-highlight-purple font-black italic text-sm">PK</span> existente.</p>
                            </div>
                            <div className="space-y-6">
                                <p className="p-4 bg-surface-elevated rounded-2xl border border-border/50"><strong className="text-highlight-purple uppercase font-black block mb-2 underline tracking-wider">Verificación de Tipos:</strong> El <span className="text-highlight-green font-black italic">Dominio</span> manda. SQL rechazará cadenas en campos numéricos y desbordamientos de longitud.</p>
                                <p className="p-4 bg-surface-elevated rounded-2xl border border-border/50"><strong className="text-highlight-purple uppercase font-black block mb-2 underline tracking-wider">Vistas Actualizables:</strong> Ojo: Solo puedes hacer INSERT/UPDATE a través de una vista si esta se basa en <span className="text-white underline decoration-2 uppercase font-black">una sola tabla</span>.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                {/* <footer className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-text-secondary text-center sm:text-left">
                        <p className="mb-2 text-text-primary border-b border-highlight-purple w-fit">SBD I - Conferencia 13</p>
                        <p className="text-[8px] opacity-40 italic lowercase">sql.dml.vistas.integridad</p>
                    </div>
                    <div className="flex gap-4 items-center bg-surface-elevated p-4 rounded-2xl border border-border shadow-md">
                        <div className="w-10 h-10 rounded-full bg-highlight-purple/20 flex items-center justify-center text-highlight-purple">
                            <Database size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-text-primary uppercase tracking-widest whitespace-nowrap italic">Otras sentencias del lenguaje SQL</span>
                            <span className="text-[9px] text-text-secondary font-bold font-mono">Cátedra de Bases de Datos I</span>
                        </div>
                    </div>
                </footer> */}

            </main>
        </>
    );
}



import { ShieldCheck, Lock, EyeOff, UserCheck, Key, AlertCircle, UserPlus, UserMinus } from 'lucide-react';

export function VistasYSeguridadPage() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* 1. SEGURIDAD EN BASES DE DATOS */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <ShieldCheck className="text-highlight-purple" size={28} /> 1. Conceptos de Seguridad
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300 hover:shadow-md">
                        <p className="text-sm mb-10 leading-relaxed text-text-body font-medium pr-10">
                            La seguridad busca blindar los datos contra <span className="text-highlight-yellow font-black underline decoration-2 underline-offset-4">accesos no autorizados</span> y alteraciones (accidentales o malintencionadas). Se divide en dos pilares fundamentales:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group p-8 bg-surface-elevated rounded-[2rem] border-2 border-border/50 hover:border-highlight-purple/40 transition-all duration-500 shadow-sm flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-highlight-purple/10 flex items-center justify-center mb-6 text-highlight-purple group-hover:scale-110 transition-transform">
                                    <Lock size={32} />
                                </div>
                                <h4 className="font-black text-sm mb-4 uppercase tracking-widest text-text-primary">
                                    Seguridad Física
                                </h4>
                                <p className="text-xs text-text-secondary leading-relaxed font-medium pr-4 pl-4">Hardware, Backups, Criptografía de discos y Control de Acceso perimetral a servidores.</p>
                            </div>
                            <div className="group p-8 bg-surface-elevated rounded-[2rem] border-2 border-border/50 hover:border-highlight-green/40 transition-all duration-500 shadow-sm flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-highlight-green/10 flex items-center justify-center mb-6 text-highlight-green group-hover:scale-110 transition-transform">
                                    <UserCheck size={32} />
                                </div>
                                <h4 className="font-black text-sm mb-4 uppercase tracking-widest text-text-primary">
                                    Seguridad Lógica
                                </h4>
                                <p className="text-xs text-text-secondary leading-relaxed font-medium pr-4 pl-4">Mecanismos del <span className="text-highlight-green font-black">SGBD</span> para restringir permisos sobre Tablas, Columnas o incluso Filas específicas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. LAS VISTAS COMO MECANISMO DE SEGURIDAD */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <EyeOff className="text-highlight-purple" size={28} /> 2. Seguridad Mediante Vistas
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300">
                        <p className="text-sm mb-10 text-text-body font-medium leading-relaxed italic border-l-4 border-highlight-purple pl-6">
                            Las vistas permiten crear un <span className="text-highlight-purple font-black uppercase underline decoration-2 underline-offset-4 tracking-tighter">subconjunto lógico</span> de los datos, ofuscando información sensible sin alterar la arquitectura física de las tablas.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-6">
                                <h4 className="font-black text-[10px] uppercase text-text-secondary tracking-[0.2em] flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-highlight-purple" /> Restricción Vertical (Columnas)
                                </h4>
                                <p className="text-xs text-text-secondary font-medium pl-4">Oculta campos críticos (ej. Salarios) pero mantiene visible lo demás.</p>
                                <div className="bg-black/95 p-6 rounded-2xl font-mono text-[11px]  border border-white/5 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 bg-background rounded-2xl text-[8px] text-foreground font-black uppercase border-2 border-foreground">Vertical View</div>
                                    <p className="text-white font-black italic mb-2 uppercase  tracking-widest underline decoration-2 underline-offset-4">CREATE VIEW <span className="text-highlight-green">vista_publica</span> AS</p>
                                    <p className="text-white italic"><span className="text-highlight-yellow font-black uppercase">SELECT</span> id_emp, nombre, cargo</p>
                                    <p className="text-white italic"><span className="text-highlight-yellow font-black uppercase">FROM</span> empleado;</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="font-black text-[10px] uppercase text-text-secondary tracking-[0.2em] flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-highlight-green" /> Restricción Horizontal (Filas)
                                </h4>
                                <p className="text-xs text-text-secondary font-medium pl-4">Filtra datos según el rol (ej. Cada jefe solo ve SUS empleados).</p>
                                <div className="bg-black/95 p-6 rounded-2xl font-mono text-[11px]  border border-white/5 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 bg-background rounded-2xl text-[8px] text-foreground font-black uppercase border-2 border-foreground">Horizontal View</div>
                                    <p className="text-white font-black italic mb-2 uppercase rounded-2xl  tracking-widest underline decoration-2 underline-offset-4">CREATE VIEW <span className="text-highlight-green">trabajadores_p1</span> AS</p>
                                    <p className="text-white italic"><span className="text-highlight-yellow font-black uppercase">SELECT</span> * <span className="text-highlight-yellow font-black uppercase italic">FROM</span> trabajador</p>
                                    <p className="text-white italic"><span className="text-highlight-yellow font-black uppercase">WHERE</span> id_proyecto = <span className="text-highlight-green">'P1'</span>;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CONTROL DE ACCESO (GRANT Y REVOKE) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300 font-black">
                        <Key className="text-highlight-yellow" size={28} /> 3. Lenguaje de Control (DCL)
                    </h2>
                    <div className="bg-surface p-10 rounded-[2.5rem] shadow-sm border border-border transition-all duration-300">
                        <p className="text-sm mb-12 text-text-body font-medium leading-relaxed pr-20">
                            El <span className="text-highlight-yellow font-black uppercase tracking-widest text-lg decoration-highlight-yellow decoration-2 underline underline-offset-8">DBA</span> gestiona los privilegios de los usuarios mediante comandos de autorización explícitos.
                        </p>

                        <div className="space-y-10">
                            {/* GRANT */}
                            <div className="bg-surface-elevated p-10 rounded-3xl border border-highlight-green/20 transition-all hover:bg-surface group relative overflow-hidden shadow-sm">
                                <div className="absolute top-0 left-0 w-2 h-full bg-highlight-green" />
                                <h4 className="font-black text-highlight-green mb-6 flex items-center gap-3 uppercase tracking-[0.2em] text-sm">
                                    <UserPlus size={22} className="group-hover:rotate-12 transition-transform" /> GRANT : Conceder Acceso
                                </h4>
                                <div className="bg-foreground/95 p-6 rounded-2xl font-mono text-sm  mb-6 border border-white/5 shadow-2xl group-hover:scale-[1.01] transition-transform">
                                    <p className="text-highlight-purple-soft font-black italic uppercase tracking-widest"><span className="text-highlight-yellow uppercase font-black underline decoration-2 underline-offset-4">GRANT</span> SELECT, UPDATE(tarifa_hr)</p>
                                    <p className="text-highlight-purple-soft font-black italic uppercase tracking-widest">ON <span className=" underline decoration-2 underline-offset-1 text-highlight-purple">trabajador</span> TO <span className="text-highlight-green">'usuario_contable'</span>;</p>
                                </div>
                                <p className="text-[11px] text-text-body font-bold italic pl-8 border-l-2 border-highlight-green/30">
                                    Permiso granular: Acceso a consulta total y modificación restringida a una única columna.
                                </p>
                            </div>

                            {/* REVOKE */}
                            <div className="bg-surface-elevated p-10 rounded-3xl border border-border transition-all hover:bg-surface group relative overflow-hidden shadow-sm">
                                <div className="absolute top-0 left-0 w-2 h-full bg-highlight-yellow" />
                                <h4 className="font-black text-highlight-yellow mb-6 flex items-center gap-3 uppercase tracking-[0.2em] text-sm">
                                    <UserMinus size={22} className="group-hover:rotate-12 transition-transform" /> REVOKE : Retirar Acceso
                                </h4>
                                <div className="bg-foreground/95 p-6 rounded-2xl font-mono text-sm  mb-6 border border-white/5 shadow-2xl group-hover:scale-[1.01] transition-transform">
                                    <p className="text-highlight-purple-soft font-black italic uppercase tracking-widest"><span className="text-highlight-yellow uppercase font-black underline decoration-2 underline-offset-4">REVOKE</span> ALL PRIVILEGES</p>
                                    <p className="text-highlight-purple-soft font-black italic uppercase tracking-widest">ON <span className=" underline decoration-2 underline-offset-4 text-highlight-purple">edificio</span> FROM <span className="text-highlight-green">'usuario_invitado'</span>;</p>
                                </div>
                                <p className="text-[11px] text-text-body font-bold italic pl-8 border-l-2 border-highlight-yellow/30">
                                    Eliminación total: Se remueve cualquier permiso previamente otorgado sobre el objeto.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. TIPOS DE PRIVILEGIOS */}
                <section className="mb-20">
                    <h2 className="text-xs font-black mb-12 text-center text-text-secondary uppercase tracking-[0.6em]">Catálogo de Privilegios SQL</h2>
                    <div className="bg-surface p-2 rounded-[2rem] border border-border shadow-2xl overflow-hidden transition-all duration-300">
                        <table className="w-full text-xs text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-elevated text-highlight-purple font-black uppercase tracking-[0.2em] text-[10px]">
                                    <th className="p-6 border-b border-border w-1/4">Privilegio</th>
                                    <th className="p-6 border-b border-border">Alcance de la Operación Autorizada</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/30">
                                <tr className="group hover:bg-surface-elevated transition-colors">
                                    <td className="p-6 font-black uppercase tracking-widest text-[11px] text-text-primary group-hover:text-highlight-purple transition-colors">SELECT</td>
                                    <td className="p-6 text-text-body font-bold leading-relaxed italic pr-20">Capacidad de lectura sobre datos contenidos en tablas físicas o ventanas lógicas (vistas).</td>
                                </tr>
                                <tr className="group hover:bg-surface-elevated transition-colors">
                                    <td className="p-6 font-black uppercase tracking-widest text-[11px] text-text-primary group-hover:text-highlight-green transition-colors">INSERT</td>
                                    <td className="p-6 text-text-body font-bold leading-relaxed italic pr-20">Autorización para la creación de nuevas tuplas en el espacio de almacenamiento.</td>
                                </tr>
                                <tr className="group hover:bg-surface-elevated transition-colors">
                                    <td className="p-6 font-black uppercase tracking-widest text-[11px] text-text-primary group-hover:text-highlight-purple transition-colors">UPDATE</td>
                                    <td className="p-6 text-text-body font-bold leading-relaxed italic pr-20">Modificación de estados de datos existentes (disponible a nivel de columna).</td>
                                </tr>
                                <tr className="group hover:bg-surface-elevated transition-colors">
                                    <td className="p-6 font-black uppercase tracking-widest text-[11px] text-text-primary group-hover:text-highlight-yellow transition-colors">DELETE</td>
                                    <td className="p-6 text-text-body font-bold leading-relaxed italic pr-20">Privilegio destructivo para remover filas definitivas del sistema.</td>
                                </tr>
                                <tr className="group hover:bg-surface-elevated transition-colors">
                                    <td className="p-6 font-black uppercase tracking-widest text-[11px] text-text-primary group-hover:text-highlight-purple transition-colors">REFERENCES</td>
                                    <td className="p-6 text-text-body font-bold leading-relaxed italic pr-20">Derecho a definir restricciones de integridad (Foreign Keys) hacia esa tabla.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>


                {/* 5. CONCLUSIÓN */}
                <section className="mb-24">
                    <div className="bg-surface border-2 border-border p-12 rounded-[3.5rem] shadow-sm relative overflow-hidden group">
                        <div className="absolute top-[-40px] left-[-40px] text-highlight-purple opacity-5 rotate-12 select-none"><ShieldCheck size={300} /></div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="bg-highlight-purple/10 p-5 rounded-3xl mb-8 group-hover:scale-110 transition-transform">
                                <AlertCircle size={48} className="text-highlight-purple" />
                            </div>
                            <h3 className="text-3xl font-black mb-6 text-text-heading uppercase tracking-[0.2em] italic pr-4 pl-4 decoration-highlight-purple decoration-4 underline underline-offset-8">Estrategia de Defensa SQL</h3>
                            <p className="max-w-3xl text-sm text-text-body leading-[2] font-medium italic opacity-80 decoration-2 underline decoration-highlight-purple/10 underline-offset-4">
                                "La seguridad robusta no reside en un comando aislado, sino en la danza entre <span className="text-highlight-purple font-black uppercase tracking-widest text-lg">Vistas</span> (el QUÉ se expone) y <span className="text-highlight-yellow font-black uppercase tracking-widest text-lg">DCL</span> (el QUIÉN tiene la llave). Esta simbiosis garantiza que cada usuario interactúe únicamente con el átomo de información necesario para su labor."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                {/* <footer className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-text-secondary text-center sm:text-left">
                        <p className="mb-2 text-text-primary border-b border-highlight-purple w-fit">SBD I - Conferencia 14</p>
                        <p className="text-[8px] opacity-40 italic lowercase">vistas . seguridad . privilegios . grant . revoke</p>
                    </div>
                    <div className="flex gap-4 items-center bg-surface-elevated p-4 rounded-2xl border border-border shadow-md">
                        <div className="w-10 h-10 rounded-full bg-highlight-purple/20 flex items-center justify-center text-highlight-purple">
                            <Database size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-text-primary uppercase tracking-widest italic decoration-highlight-purple underline decoration-2 underline-offset-4">Vistas y Seguridad en SQL</span>
                            <span className="text-[9px] text-text-secondary font-bold font-mono">Cátedra de Bases de Datos I</span>
                        </div>
                    </div>
                </footer> */}
            </main>
        </>
    );
}



import { ShieldCheck, Lock, EyeOff, UserCheck, Key, Database, AlertCircle, UserPlus, UserMinus, BookOpen } from 'lucide-react';

export function VistasYSeguridadPage() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* 1. SEGURIDAD EN BASES DE DATOS */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-100 border-l-4 border-blue-600 dark:border-blue-700 pl-4">
                        <ShieldCheck className="text-blue-600 dark:text-blue-400" /> 1. Conceptos de Seguridad
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                            La seguridad busca proteger los datos contra accesos no autorizados y alteraciones accidentales o malintencionadas. Se divide en dos niveles principales:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 bg-blue-50 dark:bg-blue-950 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                                <h4 className="font-bold text-sm mb-2 flex items-center gap-2 text-blue-900 dark:text-blue-100">
                                    <Lock size={18} className="text-blue-600 dark:text-blue-400" /> Seguridad Física
                                </h4>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400">Protección del hardware, copias de seguridad (backups) y control de acceso físico a los servidores.</p>
                            </div>
                            <div className="p-5 bg-blue-50 dark:bg-blue-950 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                                <h4 className="font-bold text-sm mb-2 flex items-center gap-2 text-blue-900 dark:text-blue-100">
                                    <UserCheck size={18} className="text-blue-600 dark:text-blue-400" /> Seguridad Lógica
                                </h4>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400">Mecanismos del SGBD para restringir quién puede ver o modificar tablas, columnas o filas específicas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. LAS VISTAS COMO MECANISMO DE SEGURIDAD */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-100 border-l-4 border-blue-600 dark:border-blue-700 pl-4">
                        <EyeOff className="text-blue-600 dark:text-blue-400" /> 2. Seguridad Mediante Vistas
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-4 text-slate-700 dark:text-slate-300">
                            Las vistas permiten crear un <strong>subconjunto lógico</strong> de los datos, ocultando información sensible sin necesidad de cambiar la estructura de las tablas originales.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            <div className="space-y-4">
                                <h4 className="font-bold text-xs uppercase text-slate-600 dark:text-slate-400">Ocultar Columnas (Vertical)</h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 italic">Ejemplo: Permitir ver nombres de empleados pero ocultar sus salarios.</p>
                                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl font-mono text-[10px] text-blue-300 dark:text-blue-400 border border-slate-700 dark:border-slate-600">
                                    <p>CREATE VIEW vista_publica_emp AS</p>
                                    <p>SELECT id_emp, nombre, cargo</p>
                                    <p>FROM empleado;</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-xs uppercase text-slate-600 dark:text-slate-400">Ocultar Filas (Horizontal)</h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 italic">Ejemplo: Un jefe de proyecto solo ve a los trabajadores de SU proyecto.</p>
                                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl font-mono text-[10px] text-blue-300 dark:text-blue-400 border border-slate-700 dark:border-slate-600">
                                    <p>CREATE VIEW trabajadores_p1 AS</p>
                                    <p>SELECT * FROM trabajador</p>
                                    <p>WHERE id_proyecto = 'P1';</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CONTROL DE ACCESO (GRANT Y REVOKE) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-100 border-l-4 border-blue-600 dark:border-blue-700 pl-4">
                        <Key className="text-blue-600 dark:text-blue-400" /> 3. Autorización: GRANT y REVOKE
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 text-slate-700 dark:text-slate-300">
                            El administrador de la base de datos (DBA) o el dueño del objeto otorga o retira privilegios a otros usuarios utilizando el lenguaje de control de datos (DCL).
                        </p>

                        <div className="space-y-6">
                            {/* GRANT */}
                            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                                    <UserPlus size={18} className="text-blue-600 dark:text-blue-400" /> GRANT (Conceder)
                                </h4>
                                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg font-mono text-xs text-blue-300 dark:text-blue-400 mb-2 border border-slate-700 dark:border-slate-600">
                                    <p>GRANT SELECT, UPDATE(tarifa_hr) ON trabajador TO 'usuario_contable';</p>
                                </div>
                                <p className="text-[10px] text-blue-800 dark:text-blue-200 font-medium italic">
                                    * El usuario ahora puede consultar la tabla y modificar SOLAMENTE la columna tarifa_hr.
                                </p>
                            </div>

                            {/* REVOKE */}
                            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                                    <UserMinus size={18} className="text-blue-600 dark:text-blue-400" /> REVOKE (Retirar)
                                </h4>
                                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg font-mono text-xs text-blue-300 dark:text-blue-400 mb-2 border border-slate-700 dark:border-slate-600">
                                    <p>REVOKE ALL PRIVILEGES ON edificio FROM 'usuario_invitado';</p>
                                </div>
                                <p className="text-[10px] text-blue-800 dark:text-blue-200 font-medium italic">
                                    * Se eliminan todos los permisos que tenía el usuario sobre ese objeto.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. MATRIZ DE PRIVILEGIOS */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900 dark:text-blue-100 border-l-4 border-blue-600 dark:border-blue-700 pl-4">
                        <BookOpen className="text-blue-600 dark:text-blue-400" /> 4. Tipos de Privilegios
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-x-auto transition-colors duration-300">
                        <table className="w-full text-[11px] text-left border-collapse">
                            <thead>
                                <tr className="bg-blue-900 dark:bg-blue-950 text-white">
                                    <th className="p-3 border border-blue-800 dark:border-blue-700">Privilegio</th>
                                    <th className="p-3 border border-blue-800 dark:border-blue-700">Acción permitida</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300"><td className="p-2 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-slate-100">SELECT</td><td className="p-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Consultar datos de tablas o vistas.</td></tr>
                                <tr className="bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300"><td className="p-2 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-slate-100">INSERT</td><td className="p-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Añadir nuevas filas.</td></tr>
                                <tr className="hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300"><td className="p-2 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-slate-100">UPDATE</td><td className="p-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Modificar datos existentes (puede ser por columna).</td></tr>
                                <tr className="bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300"><td className="p-2 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-slate-100">DELETE</td><td className="p-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Eliminar filas.</td></tr>
                                <tr className="hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300"><td className="p-2 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-slate-100">REFERENCES</td><td className="p-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Definir claves ajenas que apunten a esa tabla.</td></tr>
                                <tr className="bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300"><td className="p-2 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-slate-100">USAGE</td><td className="p-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Permiso para usar dominios específicos.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>


                {/* 5. RESUMEN DE SEGURIDAD LÓGICA */}
                <section className="mb-16">
                    <div className="bg-blue-900 dark:bg-blue-950 border-2 border-blue-700 dark:border-blue-800 p-8 rounded-3xl flex gap-6 items-start transition-colors duration-300">
                        <div className="bg-blue-600 dark:bg-blue-700 p-3 rounded-full text-white flex-none">
                            <AlertCircle size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-blue-50 dark:text-blue-100">Conclusión: La Estrategia de Defensa</h3>
                            <p className="text-xs text-blue-100 dark:text-blue-200 leading-relaxed italic">
                                La seguridad más robusta en SQL no se logra con un solo comando, sino combinando <strong>Vistas</strong> (para limitar el QUÉ se ve) con <strong>GRANT/REVOKE</strong> (para limitar el QUIÉN lo ve). Esta capa de abstracción asegura que incluso si un usuario tiene acceso a la base de datos, solo interactúa con los objetos mínimos necesarios para su función.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest transition-colors duration-300">
                    <div>SBD I - Conferencia 14 (Seguridad y Vistas)</div>
                    <div className="flex gap-3 items-center">
                        <Database size={16} className="text-blue-600 dark:text-blue-400" />
                        <span>Material: Vistas y Seguridad en SQL</span>
                    </div>
                </footer>
            </main>
        </>
    );
}

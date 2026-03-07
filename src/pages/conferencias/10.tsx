import {
    Terminal,
    CheckCircle2,
    Filter,
    Code2,
    Type,
    Layout,
    AlertTriangle
} from 'lucide-react';

export function SQLIntroduccionCompleta() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* 1. NOMBRES Y CONCEPTOS GENERALES */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Layout className="text-highlight-purple" /> 1. Generalidades y Sintaxis
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm transition-colors duration-300 hover:border-highlight-purple/50">
                            <h3 className="font-black text-highlight-purple mb-4 uppercase text-xs tracking-widest">Identificadores (Nombres)</h3>
                            <ul className="text-sm space-y-4 text-text-body font-medium">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-highlight-purple mt-1.5"></span>
                                    <span>Máximo 18 caracteres (estándar antiguo) o 128 (actuales).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-highlight-purple mt-1.5"></span>
                                    <span>Deben comenzar con una letra obligatoriamente.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-highlight-purple mt-1.5"></span>
                                    <span>No pueden contener espacios ni carácteres especiales (excepto _).</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-highlight-purple  text-foreground p-6 rounded-2xl shadow-xl transition-colors duration-300 border border-highlight-purple/20">
                            <h3 className="font-black mb-6 uppercase tracking-widest text-xs opacity-80">Sentencias Principales (DML)</h3>
                            <div className="grid grid-cols-2 gap-4 text-[11px] font-mono font-black">
                                <div className="bg-black/20 p-4 rounded-xl hover:bg-black/30 transition-colors border border-white/5 backdrop-blur-sm text-center">SELECT (Consulta)</div>
                                <div className="bg-black/20 p-4 rounded-xl hover:bg-black/30 transition-colors border border-white/5 backdrop-blur-sm text-center">INSERT (Adición)</div>
                                <div className="bg-black/20 p-4 rounded-xl hover:bg-black/30 transition-colors border border-white/5 backdrop-blur-sm text-center">UPDATE (Modif.)</div>
                                <div className="bg-black/20 p-4 rounded-xl hover:bg-black/30 transition-colors border border-white/5 backdrop-blur-sm text-center">DELETE (Borrado)</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. TIPOS DE DATOS Y CONSTANTES */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Type className="text-highlight-green" /> 2. Tipos de Datos y Constantes
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl border border-border shadow-sm transition-colors duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div>
                                <h4 className="font-black text-xs mb-6 text-highlight-green uppercase tracking-[0.2em] pb-2 border-b-2 border-highlight-green/20">Numéricos</h4>
                                <ul className="text-xs space-y-3 text-text-body font-medium">
                                    <li className="flex justify-between border-b border-border/50 pb-1"><strong>INTEGER</strong> <span className="text-text-secondary italic">32 bits</span></li>
                                    <li className="flex justify-between border-b border-border/50 pb-1"><strong>SMALLINT</strong> <span className="text-text-secondary italic">16 bits</span></li>
                                    <li className="flex justify-between border-b border-border/50 pb-1"><strong>DECIMAL(p,q)</strong> <span className="text-text-secondary italic">Fijo</span></li>
                                    <li className="flex justify-between border-b border-border/50 pb-1"><strong>FLOAT</strong> <span className="text-text-secondary italic">Flotante</span></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-black text-xs mb-6 text-highlight-green uppercase tracking-[0.2em] pb-2 border-b-2 border-highlight-green/20">Cadenas y Tiempo</h4>
                                <ul className="text-xs space-y-3 text-text-body font-medium">
                                    <li className="flex justify-between border-b border-border/50 pb-1"><strong>CHAR(n)</strong> <span className="text-text-secondary italic">Fija</span></li>
                                    <li className="flex justify-between border-b border-border/50 pb-1"><strong>VARCHAR(n)</strong> <span className="text-text-secondary italic">Var.</span></li>
                                    <li className="flex justify-between border-b border-border/50 pb-1"><strong>DATE</strong> <span className="text-text-secondary italic">YYYY-MM-DD</span></li>
                                    <li className="flex justify-between border-b border-border/50 pb-1"><strong>TIME</strong> <span className="text-text-secondary italic">HH:MM:SS</span></li>
                                </ul>
                            </div>
                            <div className="bg-highlight-green/5 p-6 rounded-2xl border border-highlight-green/20 transition-colors duration-300">
                                <h4 className="font-black text-xs mb-4 text-highlight-green uppercase tracking-widest">Sintaxis de Constantes</h4>
                                <p className="text-[11px] text-text-primary leading-relaxed font-medium">
                                    Las cadenas y fechas siempre van entre <span className="font-mono font-bold text-highlight-green px-1.5 py-0.5 bg-highlight-green/10 rounded">comillas simples</span>: <code className="text-highlight-green font-black">'Cienfuegos'</code>.
                                    <br /><br />
                                    Los números van sin comillas: <code className="text-highlight-purple font-black">2500.50</code>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. EL VALOR NULO Y LÓGICA TRIVALENTE */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <AlertTriangle className="text-highlight-yellow" /> 3. Tratamiento de Nulos (NULL)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-highlight-yellow/10 p-6 rounded-2xl border-2 border-highlight-yellow/20 transition-colors duration-300">
                            <h3 className="font-black text-highlight-yellow mb-4 uppercase text-xs tracking-widest">Definición de NULL</h3>
                            <p className="text-sm leading-relaxed text-text-primary font-medium italic">
                                Representa información "desconocida" o "inexistente".
                            </p>
                            <div className="mt-6 p-4 bg-highlight-yellow/20 rounded-xl border border-highlight-yellow/30 font-bold text-xs">
                                <strong className="text-highlight-yellow block mb-1 uppercase tracking-tighter">Regla de oro:</strong>
                                Cualquier operación aritmética con un nulo (ej. 10 + NULL) siempre devuelve <span className="text-highlight-yellow font-black underline italic">NULL</span>.
                            </div>
                        </div>
                        <div className="bg-surface-elevated text-text-primary p-6 rounded-2xl font-mono text-xs border border-border shadow-lg transition-colors duration-300">
                            <h3 className="text-highlight-yellow font-black mb-6 tracking-[0.2em] uppercase text-[10px] border-b border-border pb-2">Tabla de Verdad (Operador AND)</h3>
                            <div className="space-y-3 leading-relaxed font-black">
                                <p className="flex justify-between border-b border-border/30 pb-1"><span>TRUE AND <span className="text-highlight-yellow italic">NULL</span></span> <span className="text-highlight-yellow">UNKNOWN</span></p>
                                <p className="flex justify-between border-b border-border/30 pb-1"><span>FALSE AND <span className="text-highlight-yellow italic">NULL</span></span> <span className="text-text-secondary opacity-50">FALSE</span></p>
                                <p className="flex justify-between border-b border-border/30 pb-1"><span><span className="text-highlight-yellow italic">NULL</span> AND <span className="text-highlight-yellow italic">NULL</span></span> <span className="text-highlight-yellow">UNKNOWN</span></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. SENTENCIA SELECT PASO A PASO */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Code2 className="text-highlight-purple" /> 4. Anatomía de la Consulta (DML)
                    </h2>
                    <div className="space-y-6">
                        <div className="flex gap-6 items-start group">
                            <div className="flex-none w-28 font-black text-highlight-purple text-right pt-4 text-sm uppercase tracking-widest group-hover:scale-110 transition-transform">SELECT</div>
                            <div className="flex-1 bg-surface p-5 rounded-2xl border-l-[6px] border-highlight-purple shadow-sm text-sm text-text-body transition-all hover:shadow-md hover:border-l-[12px]">
                                <p className="font-bold text-text-primary mb-2">Determina las <span className="text-highlight-purple underline">columnas</span> que se mostrarán en el resultado.</p>
                                <span className="text-xs text-text-secondary italic flex items-center gap-1">
                                    <CheckCircle2 size={12} className="text-highlight-green" /> Use <strong>DISTINCT</strong> para eliminar filas duplicadas.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start group">
                            <div className="flex-none w-28 font-black text-highlight-purple text-right pt-4 text-sm uppercase tracking-widest group-hover:scale-110 transition-transform">FROM</div>
                            <div className="flex-1 bg-surface p-5 rounded-2xl border-l-[6px] border-highlight-purple shadow-sm text-sm text-text-body transition-all hover:shadow-md hover:border-l-[12px]">
                                <p className="font-bold text-text-primary">Especifica la <span className="text-highlight-purple underline">tabla</span> o conjunto de tablas de donde provienen los datos.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start group">
                            <div className="flex-none w-28 font-black text-highlight-purple text-right pt-4 text-sm uppercase tracking-widest group-hover:scale-110 transition-transform">WHERE</div>
                            <div className="flex-1 bg-surface p-5 rounded-2xl border-l-[6px] border-highlight-purple shadow-sm text-sm text-text-body transition-all hover:shadow-md hover:border-l-[12px]">
                                <p className="font-bold text-text-primary mb-2">Aplica un <span className="text-highlight-purple underline">filtro</span> horizontal.</p>
                                <span className="text-xs text-text-secondary italic">Solo aquellas filas cuya condición evalúe a <span className="text-highlight-green font-black">TRUE</span> serán incluidas.</span>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start group">
                            <div className="flex-none w-28 font-black text-highlight-purple text-right pt-4 text-sm uppercase tracking-widest group-hover:scale-110 transition-transform">ORDER BY</div>
                            <div className="flex-1 bg-surface p-5 rounded-2xl border-l-[6px] border-highlight-purple shadow-sm text-sm text-text-body transition-all hover:shadow-md hover:border-l-[12px]">
                                <p className="font-bold text-text-primary">Define el <span className="text-highlight-purple underline">orden</span> de los resultados (ASC/DESC).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. OPERADORES Y TESTS DE BÚSQUEDA */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Filter className="text-highlight-green" /> 5. Tests de Búsqueda
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-surface border border-border rounded-2xl shadow-sm hover:border-highlight-green/50 hover:translate-y-[-4px] transition-all duration-300">
                            <h4 className="font-black text-[10px] mb-4 text-highlight-green uppercase tracking-[0.2em]">Comparación</h4>
                            <p className="text-xs font-mono text-text-primary bg-surface-elevated p-2 rounded-lg border border-border/50 text-center font-black">=, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=</p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-2xl shadow-sm hover:border-highlight-green/50 hover:translate-y-[-4px] transition-all duration-300">
                            <h4 className="font-black text-[10px] mb-4 text-highlight-green uppercase tracking-[0.2em]">Rangos</h4>
                            <p className="text-xs font-mono text-text-primary bg-surface-elevated p-2 rounded-lg border border-border/50 text-center font-black">BETWEEN x AND y</p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-2xl shadow-sm hover:border-highlight-green/50 hover:translate-y-[-4px] transition-all duration-300">
                            <h4 className="font-black text-[10px] mb-4 text-highlight-green uppercase tracking-[0.2em]">Patrones</h4>
                            <p className="text-xs font-mono text-text-primary bg-surface-elevated p-2 rounded-lg border border-border/50 text-center font-black">LIKE 'cadena%'</p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-2xl shadow-sm hover:border-highlight-green/50 hover:translate-y-[-4px] transition-all duration-300">
                            <h4 className="font-black text-[10px] mb-4 text-highlight-green uppercase tracking-[0.2em]">Conjuntos</h4>
                            <p className="text-xs font-mono text-text-primary bg-surface-elevated p-2 rounded-lg border border-border/50 text-center font-black">IN (a, b, c)</p>
                        </div>
                    </div>
                </section>

                {/* 6. EJEMPLOS DE LA EMPRESA CONSTRUCTORA */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Terminal className="text-highlight-green" /> 6. Ejemplos de Resolución
                    </h2>

                    <div className="space-y-8">
                        {/* Ejemplo 1 */}
                        <div className="bg-surface-elevated rounded-3xl p-8 border border-border transition-colors duration-300 shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 bg-highlight-green/10 rounded-bl-3xl font-black text-[10px] text-highlight-green uppercase tracking-[0.2em]">Operador LIKE</div>
                            <h4 className="text-highlight-green font-black mb-4 uppercase text-xs tracking-widest">Consulta de Personal</h4>
                            <p className="text-sm mb-6 text-text-body font-medium italic">"Listar todos los datos de empleados cuyo nombre comience con 'M' y tengan salario mayor a 3000"</p>
                            <div className="bg-black/90 p-6 rounded-2xl font-mono text-highlight-green text-sm leading-relaxed border border-white/5 shadow-2xl">
                                <span className="text-highlight-purple font-bold italic">SELECT</span> * <br />
                                <span className="text-highlight-purple font-bold italic">FROM</span> empleados <br />
                                <span className="text-highlight-purple font-bold italic">WHERE</span> nombre_emp <span className="text-highlight-yellow">LIKE</span> <span className="text-highlight-green">'M%'</span> <br />
                                <span className="ml-4 font-bold text-highlight-purple">AND</span> salario &gt; <span className="text-highlight-yellow">3000</span>;
                            </div>
                        </div>

                        {/* Ejemplo 2 */}
                        <div className="bg-surface-elevated rounded-3xl p-8 border border-border transition-colors duration-300 shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 bg-highlight-purple/10 rounded-bl-3xl font-black text-[10px] text-highlight-purple uppercase tracking-[0.2em]">BETWEEN + ORDER BY</div>
                            <h4 className="text-highlight-purple font-black mb-4 uppercase text-xs tracking-widest">Control de Obras</h4>
                            <p className="text-sm mb-6 text-text-body font-medium italic">"Listar códigos de obras iniciadas en 2023, ordenadas de más reciente a más antigua"</p>
                            <div className="bg-black/90 p-6 rounded-2xl font-mono text-highlight-green text-sm leading-relaxed border border-white/5 shadow-2xl">
                                <span className="text-highlight-purple font-bold italic">SELECT</span> cod_obra, fecha_inicio <br />
                                <span className="text-highlight-purple font-bold italic">FROM</span> obras <br />
                                <span className="text-highlight-purple font-bold italic">WHERE</span> fecha_inicio <span className="text-highlight-yellow">BETWEEN</span> <span className="text-highlight-green">'2023-01-01'</span> <br />
                                <span className="ml-4 font-bold text-highlight-purple ">AND</span> <span className="text-highlight-green">'2023-12-31'</span> <br />
                                <span className="text-highlight-purple font-bold italic">ORDER BY</span> fecha_inicio <span className="text-highlight-yellow font-bold">DESC</span>;
                            </div>
                        </div>

                        {/* Ejemplo 3 */}
                        <div className="bg-surface-elevated rounded-3xl p-8 border border-border transition-colors duration-300 shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 bg-highlight-green/10 rounded-bl-3xl font-black text-[10px] text-highlight-green uppercase tracking-[0.2em]">IS NULL</div>
                            <h4 className="text-highlight-green font-black mb-4 uppercase text-xs tracking-widest">Gestión de Clientes</h4>
                            <p className="text-sm mb-6 text-text-body font-medium italic">"Obtener el nombre de clientes sin ciudad de residencia registrada"</p>
                            <div className="bg-black/90 p-6 rounded-2xl font-mono text-highlight-green text-sm leading-relaxed border border-white/5 shadow-2xl">
                                <span className="text-highlight-purple font-bold italic">SELECT</span> nombre_cli <br />
                                <span className="text-highlight-purple font-bold italic">FROM</span> clientes <br />
                                <span className="text-highlight-purple font-bold italic">WHERE</span> ciudad_cli <span className="text-highlight-yellow font-bold">IS NULL</span>;
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bibliografía y Cierre */}
                {/* <footer className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-text-secondary text-center sm:text-left">
                        <p className="mb-2 text-text-primary border-b border-highlight-purple w-fit">SBD I - Conferencia 10</p>
                        <p className="text-[8px] opacity-40 italic lowercase">sql . select . where . null . operators</p>
                    </div>
                    <div className="flex gap-4 items-center bg-surface-elevated p-4 rounded-2xl border border-border shadow-md">
                        <div className="w-10 h-10 rounded-full bg-highlight-purple/20 flex items-center justify-center text-highlight-purple">
                            <CheckCircle2 size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-text-primary uppercase tracking-widest italic decoration-highlight-purple underline decoration-2 underline-offset-4">Material Completo</span>
                            <span className="text-[9px] text-text-secondary font-bold font-mono">Bases de Datos I</span>
                        </div>
                    </div>
                </footer> */}
            </main>
        </>
    );
}

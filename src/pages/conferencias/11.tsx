import {
    SortAsc,
    Sigma,
    Rows,
    Filter,
    Database,
    AlertCircle,
    ArrowDownWideNarrow
} from 'lucide-react';
import { Fragment } from 'react';

export function SQLOrdenamientoAgrupamiento() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* 1. CLAUSULA ORDER BY */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <SortAsc className="text-highlight-purple" /> 1. Ordenamiento (ORDER BY)
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300 hover:shadow-md">
                        <p className="text-sm mb-8 text-text-body font-medium leading-relaxed">
                            Por defecto, el orden de las filas en el resultado de una consulta es <span className="text-highlight-yellow font-bold uppercase tracking-tighter">impredecible</span>. La cláusula <span className="text-highlight-purple font-black">ORDER BY</span> permite definir un criterio específico basado en valores.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-surface-elevated p-6 rounded-2xl border-l-[6px] border-highlight-purple shadow-inner transition-colors duration-300">
                                <h4 className="font-black text-[10px] uppercase mb-4 text-highlight-purple tracking-[0.2em]">Sintaxis Estándar</h4>
                                <div className="bg-black/20 p-3 rounded-lg border border-border/50 mb-4">
                                    <code className="text-xs font-mono text-text-primary">ORDER BY columna [<span className="text-highlight-green">ASC</span> | <span className="text-highlight-yellow">DESC</span>]</code>
                                </div>
                                <ul className="text-xs space-y-2 text-text-body">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-highlight-green" />
                                        <strong className="text-text-primary">ASC:</strong> Ascendente (por defecto).
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-highlight-yellow" />
                                        <strong className="text-text-primary">DESC:</strong> Descendente.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-surface-elevated p-6 rounded-2xl border-l-[6px] border-highlight-purple shadow-inner transition-colors duration-300">
                                <h4 className="font-black text-[10px] uppercase mb-4 text-highlight-purple tracking-[0.2em]">Uso por Posición</h4>
                                <p className="text-xs text-text-body mb-4">Se puede ordenar indicando el número de la columna definida en el <strong>SELECT</strong>:</p>
                                <div className="bg-black/20 p-3 rounded-lg border border-border/50">
                                    <code className="text-xs font-mono text-text-primary">ORDER BY <span className="text-highlight-purple font-black underline">2</span> DESC;</code>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/95 p-6 rounded-2xl font-mono text-xs border border-white/5 shadow-2xl overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-3 bg-white/5 text-[9px] uppercase tracking-widest text-white/30">SQL Script</div>
                            <p className="text-white/40 mb-2">-- Ejemplo: Ordenar empleados por salario y nombre</p>
                            <p className="text-highlight-purple font-bold italic">SELECT <span className="text-white">nombre, salario</span> FROM <span className="text-white">empleados</span></p>
                            <p className="text-highlight-purple font-bold italic">ORDER BY <span className="text-highlight-yellow">salario DESC</span>, <span className="text-highlight-green">nombre ASC</span>;</p>
                        </div>
                    </div>
                </section>

                {/* 2. FUNCIONES INTEGRADAS O DE COLUMNA */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Sigma className="text-highlight-green" /> 2. Agregación (Funciones de Columna)
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300">
                        <p className="text-sm mb-10 italic text-text-body font-medium border-l-4 border-highlight-green pl-4">
                            Estas funciones operan sobre un conjunto de valores de una columna y devuelven un <span className="text-highlight-green underline decoration-2 underline-offset-4">único valor resumen</span>.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
                            {[
                                { name: 'SUM', desc: 'Suma total', icon: '+' },
                                { name: 'AVG', desc: 'Promedio', icon: '÷' },
                                { name: 'MIN', desc: 'Mínimo', icon: '↓' },
                                { name: 'MAX', desc: 'Máximo', icon: '↑' },
                                { name: 'COUNT', desc: 'Contar filas', icon: '#' },
                            ].map((func) => (
                                <div key={func.name} className="relative group overflow-hidden p-6 bg-surface-elevated border border-border rounded-2xl text-center hover:border-highlight-green/50 transition-all duration-500 shadow-sm hover:translate-y-[-4px]">
                                    <div className="absolute top-[-10px] right-[-10px] text-4xl font-black text-black/5 group-hover:text-highlight-green/10 transition-colors uppercase">{func.icon}</div>
                                    <span className="block font-black text-lg text-text-primary mb-1 group-hover:text-highlight-green transition-colors">{func.name}</span>
                                    <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold font-mono">{func.desc}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-highlight-yellow/5 border border-highlight-yellow/20 p-6 rounded-2xl flex gap-5 items-start mb-10 transition-colors duration-300 shadow-sm">
                            <div className="p-2 bg-highlight-yellow/20 rounded-xl">
                                <AlertCircle className="text-highlight-yellow" size={24} />
                            </div>
                            <div>
                                <h4 className="font-black text-text-primary text-sm uppercase tracking-wider mb-2">Comportamiento con Nulos</h4>
                                <p className="text-sm text-text-body leading-relaxed">
                                    Todas las funciones de agregación (excepto <code className="font-bold bg-highlight-yellow/20 px-2 py-0.5 rounded text-highlight-yellow">COUNT(*)</code>) ignoran los valores <code className="font-bold bg-highlight-yellow/20 px-2 py-0.5 rounded text-highlight-yellow">NULL</code> automáticamente.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-black/95 p-6 rounded-2xl font-mono text-xs text-white border border-white/5 shadow-xl">
                                <p className="text-highlight-green mb-2">-- Salario promedio y máximo de la empresa</p>
                                <p className="text-white font-black italic"><span className="text-highlight-purple">SELECT</span> <span className="text-highlight-green">AVG</span>(salario), <span className="text-highlight-green">MAX</span>(salario) <br /><span className="text-highlight-purple">FROM</span> empleados;</p>
                            </div>
                            <div className="bg-black/95 p-6 rounded-2xl font-mono text-xs text-white border border-white/5 shadow-xl">
                                <p className="text-highlight-green mb-2">-- Contar ciudades únicas de clientes</p>
                                <p className="text-white font-black italic"><span className="text-highlight-purple">SELECT</span> <span className="text-highlight-green">COUNT</span>(<span className="text-highlight-yellow">DISTINCT</span> ciudad) <br /><span className="text-highlight-purple">FROM</span> clientes;</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. AGRUPAMIENTO (GROUP BY) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Rows className="text-highlight-purple" /> 3. Agrupamiento (GROUP BY)
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300">
                        <p className="text-sm mb-10 text-text-body font-medium leading-relaxed">
                            Permite dividir las filas en subconjuntos (grupos) basados en valores comunes, para luego aplicar <span className="text-highlight-green font-bold italic">funciones de agregación</span> a cada grupo de forma independiente.
                        </p>

                        <div className="bg-surface-elevated p-8 rounded-3xl mb-10 border border-highlight-purple/30 relative overflow-hidden shadow-sm">
                            <div className="absolute top-0 left-0 w-2 h-full bg-highlight-purple" />
                            <h4 className="font-black text-sm mb-4 uppercase tracking-[0.2em] text-highlight-purple">Regla de Oro del Agrupamiento</h4>
                            <p className="text-sm text-text-body leading-relaxed max-w-2xl">
                                Si incluyes una columna individual junto a una función de agregación (ej: <code className="bg-highlight-purple/10 px-2 py-1 rounded font-mono text-highlight-purple font-bold">depto, AVG(salario)</code>), esa columna <span className="underline decoration-highlight-purple decoration-2 underline-offset-4 font-black">DEVE</span> aparecer obligatoriamente en la cláusula <span className="text-highlight-purple font-black uppercase">GROUP BY</span>.
                            </p>
                        </div>

                        <div className="bg-black/95 p-8 rounded-2xl font-mono text-sm text-white border border-white/5 shadow-2xl">
                            <p className="text-highlight-green mb-4">-- Salario promedio por departamento</p>
                            <p className="text-highlight-purple font-bold italic uppercase tracking-widest">SELECT <span className="text-white">cod_depto,</span> <span className="text-highlight-green">AVG</span><span className="text-white">(salario)</span></p>
                            <p className="text-highlight-purple font-bold italic uppercase tracking-widest">FROM <span className="text-white">empleados</span></p>
                            <p className="text-highlight-purple font-bold italic uppercase tracking-widest">GROUP BY <span className="text-highlight-yellow font-black">cod_depto</span>;</p>
                        </div>
                    </div>
                </section>

                {/* 4. FILTRADO DE GRUPOS (HAVING) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Filter className="text-highlight-yellow" /> 4. Condición de Grupos (HAVING)
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300">
                        <p className="text-sm mb-10 text-text-body font-medium leading-relaxed">
                            Mientras que <span className="text-highlight-purple font-black">WHERE</span> filtra filas <span className="italic">antes</span> del agrupamiento, <span className="text-highlight-yellow font-black">HAVING</span> filtra los <span className="underline font-black">resultados finales</span> basándose en agregaciones.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="p-6 rounded-2xl bg-surface-elevated border-2 border-border/50 group hover:border-highlight-purple/30 transition-all shadow-sm">
                                <h4 className="text-[10px] font-black text-highlight-purple uppercase mb-4 tracking-widest flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-highlight-purple" /> WHERE (Filtro Horizontal)
                                </h4>
                                <p className="text-xs text-text-body font-medium italic">Se aplica a las filas base. No admite funciones como SUM o AVG.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-surface-elevated border-2 border-border/50 group hover:border-highlight-yellow/40 transition-all shadow-sm">
                                <h4 className="text-[10px] font-black text-highlight-yellow uppercase mb-4 tracking-widest flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-highlight-yellow" /> HAVING (Filtro Agregado)
                                </h4>
                                <p className="text-xs text-text-body font-medium italic">Se aplica a los grupos generados. Específico para cálculos de agregación.</p>
                            </div>
                        </div>

                        <div className="bg-black/95 p-8 rounded-3xl font-mono text-sm shadow-2xl border border-white/5">
                            <p className="text-highlight-green mb-4">-- Departamentos con salario promedio {'>'} 3500</p>
                            <p className="text-highlight-purple font-black italic uppercase tracking-widest">SELECT <span className="text-white">cod_depto,</span> <span className="text-highlight-green">AVG</span><span className="text-white">(salario)</span></p>
                            <p className="text-highlight-purple font-black italic uppercase tracking-widest">FROM <span className="text-white">empleados</span></p>
                            <p className="text-highlight-purple font-black italic uppercase tracking-widest">GROUP BY <span className="text-white">cod_depto</span></p>
                            <p className="text-highlight-purple font-black italic uppercase tracking-widest">HAVING <span className="text-highlight-yellow">AVG(salario) {'>'} 3500</span>;</p>
                        </div>
                    </div>
                </section>

                {/* 5. RESUMEN DE EJECUCIÓN (ORDEN LÓGICO) */}
                <section className="mb-20">
                    <h2 className="text-[10px] font-black mb-12 text-center text-text-secondary uppercase tracking-[0.4em]">Orden Lógico de Ejecución SQL</h2>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {['FROM', 'WHERE', 'GROUP BY', 'HAVING', 'SELECT', 'ORDER BY'].map((step, index) => (
                            <Fragment key={step}>
                                <div className="p-[2px] rounded-full bg-gradient-to-r from-highlight-purple to-highlight-green shadow-lg">
                                    <div className="bg-surface px-6 py-3 rounded-full text-xs font-black text-text-primary whitespace-nowrap">
                                        <span className="text-highlight-purple mr-2">{index + 1}.</span> {step}
                                    </div>
                                </div>
                                {index < 5 && <ArrowDownWideNarrow className="rotate-90 text-border hidden md:block" size={20} />}
                            </Fragment>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-20 pt-10 border-t border-border flex justify-between items-start text-[9px] text-text-secondary font-black uppercase tracking-[0.2em]">
                    <div>
                        <p className="mb-1 text-text-primary">SBD I - Conferencia 11</p>
                        <p className="font-medium text-highlight-purple opacity-70 italic lowercase">sql.ordenamiento.agrupamiento</p>
                    </div>
                    <div className="flex gap-4 items-center bg-surface-elevated p-3 rounded-2xl border border-border shadow-sm">
                        <Database size={16} className="text-highlight-purple" />
                        <span className="text-text-primary">Dataset: Empresa Constructora</span>
                    </div>
                </footer>

            </main>
        </>
    );
}

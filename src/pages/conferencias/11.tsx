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
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <SortAsc className="text-blue-600 dark:text-blue-400" /> 1. Ordenamiento de Resultados (ORDER BY)
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 text-slate-700 dark:text-slate-300">
                            Por defecto, el orden de las filas en el resultado de una consulta es impredecible. La cláusula <code className="font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-1 rounded">ORDER BY</code> permite definir un criterio específico.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600 transition-colors duration-300">
                                <h4 className="font-bold text-xs uppercase mb-3 text-blue-800 dark:text-blue-400">Sintaxis</h4>
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">ORDER BY columna [ASC | DESC]</code>
                                <ul className="text-[11px] mt-3 space-y-1 text-slate-700 dark:text-slate-300">
                                    <li>• <strong className="text-blue-700 dark:text-blue-400">ASC:</strong> Ascendente (por defecto).</li>
                                    <li>• <strong className="text-blue-700 dark:text-blue-400">DESC:</strong> Descendente.</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600 transition-colors duration-300">
                                <h4 className="font-bold text-xs uppercase mb-3 text-blue-800 dark:text-blue-400">Uso por posición</h4>
                                <p className="text-[11px] text-slate-700 dark:text-slate-300">Se puede ordenar indicando el número de la columna en el SELECT:</p>
                                <code className="text-xs font-mono text-slate-700 dark:text-slate-300">ORDER BY 2 DESC;</code>
                            </div>
                        </div>

                        <div className="bg-slate-900 dark:bg-slate-950 text-emerald-400 dark:text-emerald-300 p-4 rounded-xl font-mono text-xs border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                            <p className="text-slate-400 dark:text-slate-500 mb-2">-- Ejemplo: Empleados por salario (mayor a menor)</p>
                            <p>SELECT nombre, salario FROM empleados</p>
                            <p>ORDER BY salario DESC, nombre ASC;</p>
                        </div>
                    </div>
                </section>

                {/* 2. FUNCIONES INTEGRADAS O DE COLUMNA */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Sigma className="text-blue-600 dark:text-blue-400" /> 2. Funciones de Columna (Agregación)
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 italic text-slate-700 dark:text-slate-300">
                            Estas funciones operan sobre un conjunto de valores de una columna y devuelven un único valor resumen.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                            {[
                                { name: 'SUM', desc: 'Suma total' },
                                { name: 'AVG', desc: 'Promedio' },
                                { name: 'MIN', desc: 'Valor mínimo' },
                                { name: 'MAX', desc: 'Valor máximo' },
                                { name: 'COUNT', desc: 'Contar filas' },
                            ].map((func) => (
                                <div key={func.name} className="p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg text-center hover:shadow-md transition-all duration-300">
                                    <span className="block font-black text-blue-800 dark:text-blue-400">{func.name}</span>
                                    <span className="text-[10px] text-blue-700 dark:text-blue-300">{func.desc}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-xl border border-blue-200 dark:border-blue-800 flex gap-4 items-start mb-6 transition-colors duration-300">
                            <AlertCircle className="text-blue-600 dark:text-blue-400 flex-none" />
                            <div>
                                <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm">Regla de los Nulos</h4>
                                <p className="text-xs text-blue-800 dark:text-blue-200">
                                    Todas las funciones (excepto <code className="font-bold bg-slate-200 dark:bg-slate-700 px-1 rounded">COUNT(*)</code>) ignoran los valores <code className="font-bold bg-slate-200 dark:bg-slate-700 px-1 rounded">NULL</code> antes de realizar el cálculo.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl font-mono text-xs text-white border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                                <p className="text-emerald-400 dark:text-emerald-300">-- ¿Cuál es el salario promedio y máximo de la empresa?</p>
                                <p className="text-slate-200 dark:text-slate-300">SELECT AVG(salario), MAX(salario) FROM empleados;</p>
                            </div>
                            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl font-mono text-xs text-white border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                                <p className="text-emerald-400 dark:text-emerald-300">-- Contar cuántas ciudades diferentes tienen nuestros clientes</p>
                                <p className="text-slate-200 dark:text-slate-300">SELECT COUNT(DISTINCT ciudad) FROM clientes;</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. AGRUPAMIENTO (GROUP BY) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Rows className="text-blue-600 dark:text-blue-400" /> 3. Agrupamiento de Resultados (GROUP BY)
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 text-slate-700 dark:text-slate-300">
                            Permite dividir las filas de una tabla en subconjuntos (grupos) basados en valores comunes de una o más columnas, para luego aplicar funciones de agregación a cada grupo.
                        </p>

                        <div className="bg-blue-900 dark:bg-blue-950 text-blue-50 dark:text-blue-100 p-6 rounded-xl mb-8 border border-blue-800 dark:border-blue-900 transition-colors duration-300">
                            <h4 className="font-bold text-sm mb-3 uppercase tracking-widest text-blue-300 dark:text-blue-200">Restricción Crítica</h4>
                            <p className="text-xs leading-relaxed">
                                Si una consulta incluye una función de columna y una columna individual (ej: <code className="bg-blue-800 dark:bg-blue-900 px-2 py-1 rounded font-mono">SELECT depto, AVG(salario)</code>), esa columna individual <strong>DEBE</strong> aparecer obligatoriamente en la cláusula <code className="font-bold">GROUP BY</code>.
                            </p>
                        </div>

                        <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl font-mono text-xs text-white border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                            <p className="text-emerald-400 dark:text-emerald-300">-- Salario promedio por cada departamento</p>
                            <p className="text-slate-200 dark:text-slate-300">SELECT cod_depto, AVG(salario)</p>
                            <p className="text-slate-200 dark:text-slate-300">FROM empleados</p>
                            <p><span className="text-pink-400 dark:text-pink-300">GROUP BY</span> <span className="text-slate-200 dark:text-slate-300">cod_depto;</span></p>
                        </div>
                    </div>
                </section>

                {/* 4. FILTRADO DE GRUPOS (HAVING) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Filter className="text-blue-600 dark:text-blue-400" /> 4. Condición de Grupos (HAVING)
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                        <p className="text-sm mb-6 text-slate-700 dark:text-slate-300">
                            Mientras que <code className="font-bold italic bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">WHERE</code> filtra filas individuales, <code className="font-bold italic bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">HAVING</code> filtra los resultados <strong>después</strong> del agrupamiento, basándose en el resultado de una función de columna.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            <div className="border-2 border-red-200 dark:border-red-800 p-4 rounded-lg bg-red-50 dark:bg-red-950 transition-colors duration-300">
                                <h4 className="text-xs font-bold text-red-700 dark:text-red-400 uppercase mb-2">WHERE (Antes)</h4>
                                <p className="text-[11px] text-red-800 dark:text-red-300">Se aplica a las filas antes de agrupar. No admite funciones de columna.</p>
                            </div>
                            <div className="border-2 border-blue-200 dark:border-blue-800 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 transition-colors duration-300">
                                <h4 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase mb-2">HAVING (Después)</h4>
                                <p className="text-[11px] text-blue-800 dark:text-blue-300">Se aplica a los grupos resultantes. Permite condiciones con SUM, AVG, etc.</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl font-mono text-xs text-white border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                            <p className="text-emerald-400 dark:text-emerald-300">-- Departamentos cuyo salario promedio sea mayor a 3500</p>
                            <p className="text-slate-200 dark:text-slate-300">SELECT cod_depto, AVG(salario)</p>
                            <p className="text-slate-200 dark:text-slate-300">FROM empleados</p>
                            <p className="text-slate-200 dark:text-slate-300">GROUP BY cod_depto</p>
                            <p><span className="text-pink-400 dark:text-pink-300">HAVING</span> <span className="text-slate-200 dark:text-slate-300">AVG(salario) {'>'} 3500;</span></p>
                        </div>
                    </div>
                </section>

                {/* 5. RESUMEN DE EJECUCIÓN (ORDEN LÓGICO) */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-10 text-center text-blue-900 dark:text-blue-300 uppercase tracking-widest transition-colors duration-300">Orden de Ejecución de una Consulta SQL</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-2">
                        {['FROM', 'WHERE', 'GROUP BY', 'HAVING', 'SELECT', 'ORDER BY'].map((step, index) => (
                            <Fragment key={step}>
                                <div className="bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-700 px-4 py-2 rounded-full text-xs font-bold text-blue-800 dark:text-blue-400 shadow-sm hover:shadow-md transition-all duration-300">
                                    {index + 1}. {step}
                                </div>
                                {index < 5 && <ArrowDownWideNarrow className="rotate-90 text-slate-300 dark:text-slate-600 hidden md:block" />}
                            </Fragment>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest transition-colors duration-300">
                    <div>SBD I - Conferencia 11 (SQL II)</div>
                    <div className="flex gap-3 items-center">
                        <Database size={16} className="text-blue-600 dark:text-blue-400" />
                        <span>Material: Empresa Constructora</span>
                    </div>
                </footer>

            </main>
        </>
    );
}

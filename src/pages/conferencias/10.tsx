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
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Layout className="text-blue-600 dark:text-blue-400" /> 1. Generalidades y Sintaxis
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <h3 className="font-bold text-blue-800 dark:text-blue-400 mb-4">Identificadores (Nombres)</h3>
                            <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                                <li>• Máximo 18 caracteres (estándar antiguo) o 128 (actuales).</li>
                                <li>• Deben comenzar con una letra.</li>
                                <li>• No pueden contener espacios ni carácteres especiales (excepto _).</li>
                            </ul>
                        </div>
                        <div className="bg-blue-900 dark:bg-blue-950 text-white p-6 rounded-xl shadow-md transition-colors duration-300">
                            <h3 className="font-bold mb-4 text-blue-100 dark:text-blue-200">Sentencias Principales</h3>
                            <div className="grid grid-cols-2 gap-3 text-[11px] font-mono">
                                <div className="bg-blue-800 dark:bg-blue-900 p-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">SELECT (Consulta)</div>
                                <div className="bg-blue-800 dark:bg-blue-900 p-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">INSERT (Adición)</div>
                                <div className="bg-blue-800 dark:bg-blue-900 p-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">UPDATE (Modif.)</div>
                                <div className="bg-blue-800 dark:bg-blue-900 p-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">DELETE (Borrado)</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. TIPOS DE DATOS Y CONSTANTES */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Type className="text-blue-600 dark:text-blue-400" /> 2. Tipos de Datos y Constantes SQL
                    </h2>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-sm mb-4 text-blue-800 dark:text-blue-400 pb-2 border-b-2 border-blue-200 dark:border-blue-800">Numéricos</h4>
                                <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                                    <li><strong className="text-blue-700 dark:text-blue-400">INTEGER:</strong> Enteros de 32 bits.</li>
                                    <li><strong className="text-blue-700 dark:text-blue-400">SMALLINT:</strong> Enteros de 16 bits.</li>
                                    <li><strong className="text-blue-700 dark:text-blue-400">DECIMAL(p,q):</strong> Precisión fija.</li>
                                    <li><strong className="text-blue-700 dark:text-blue-400">FLOAT:</strong> Coma flotante.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm mb-4 text-blue-800 dark:text-blue-400 pb-2 border-b-2 border-blue-200 dark:border-blue-800">Cadenas y Tiempo</h4>
                                <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
                                    <li><strong className="text-blue-700 dark:text-blue-400">CHAR(n):</strong> Longitud fija (rellena).</li>
                                    <li><strong className="text-blue-700 dark:text-blue-400">VARCHAR(n):</strong> Longitud variable.</li>
                                    <li><strong className="text-blue-700 dark:text-blue-400">DATE:</strong> 'YYYY-MM-DD'.</li>
                                    <li><strong className="text-blue-700 dark:text-blue-400">TIME:</strong> 'HH:MM:SS'.</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                                <h4 className="font-bold text-sm mb-3 text-blue-800 dark:text-blue-400">Constantes</h4>
                                <p className="text-[11px] text-blue-700 dark:text-blue-300 leading-relaxed">
                                    Las cadenas y fechas siempre van entre <span className="font-mono font-bold">comillas simples</span>: <code className="text-red-600 dark:text-red-400 bg-slate-100 dark:bg-slate-800 px-1 rounded">'Cienfuegos'</code>.
                                    Los números van sin comillas: <code className="text-red-600 dark:text-red-400 bg-slate-100 dark:bg-slate-800 px-1 rounded">2500.50</code>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. EL VALOR NULO Y LÓGICA TRIVALENTE */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <AlertTriangle className="text-blue-600 dark:text-blue-400" /> 3. Tratamiento de Nulos (NULL)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                            <h3 className="font-bold text-blue-800 dark:text-blue-400 mb-3">Definición de NULL</h3>
                            <p className="text-sm leading-relaxed text-blue-700 dark:text-blue-300">
                                Representa información "desconocida" o "inexistente".
                                <br /><strong className="block mt-2">Regla de oro:</strong> Cualquier operación aritmética con un nulo (ej. 10 + NULL) devuelve <span className="font-bold text-red-600 dark:text-red-400">NULL</span>.
                            </p>
                        </div>
                        <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 rounded-xl font-mono text-xs border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                            <h3 className="text-blue-400 dark:text-blue-300 mb-4 tracking-widest uppercase font-bold text-[11px]">Tabla de Verdad (AND)</h3>
                            <div className="space-y-2 leading-relaxed">
                                <p>TRUE AND UNKNOWN <span className="text-amber-400">=</span> <span className="text-amber-400 font-bold">UNKNOWN</span></p>
                                <p>FALSE AND UNKNOWN <span className="text-red-400">=</span> <span className="text-red-400 font-bold">FALSE</span></p>
                                <p>UNKNOWN AND UNKNOWN <span className="text-amber-400">=</span> <span className="text-amber-400 font-bold">UNKNOWN</span></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. SENTENCIA SELECT PASO A PASO */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Code2 className="text-blue-600 dark:text-blue-400" /> 4. Anatomía de la Consulta (DML)
                    </h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="flex-none w-28 font-bold text-blue-700 dark:text-blue-400 text-right transition-colors duration-300">SELECT</div>
                            <div className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600 text-sm text-slate-700 dark:text-slate-300 transition-colors duration-300">
                                Determina las <strong>columnas</strong> que se mostrarán.
                                <br /><span className="text-xs text-slate-500 dark:text-slate-400 italic block mt-1">• Use <strong>DISTINCT</strong> para eliminar filas idénticas.</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex-none w-28 font-bold text-blue-700 dark:text-blue-400 text-right transition-colors duration-300">FROM</div>
                            <div className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600 text-sm text-slate-700 dark:text-slate-300 transition-colors duration-300">
                                Especifica la <strong>tabla</strong> o tablas de donde provienen los datos.
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex-none w-28 font-bold text-blue-700 dark:text-blue-400 text-right transition-colors duration-300">WHERE</div>
                            <div className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600 text-sm text-slate-700 dark:text-slate-300 transition-colors duration-300">
                                Aplica un <strong>filtro</strong>. Solo las filas que evalúen a TRUE pasan el test.
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex-none w-28 font-bold text-blue-700 dark:text-blue-400 text-right transition-colors duration-300">ORDER BY</div>
                            <div className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600 text-sm text-slate-700 dark:text-slate-300 transition-colors duration-300">
                                Define el <strong>orden</strong> de los resultados (ASC por defecto, DESC opcional).
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. OPERADORES Y TESTS DE BÚSQUEDA */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Filter className="text-blue-600 dark:text-blue-400" /> 5. Tests de Búsqueda Detallados
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-xs mb-3 text-blue-800 dark:text-blue-400 uppercase tracking-wide">Comparación</h4>
                            <p className="text-[11px] font-mono text-slate-700 dark:text-slate-300">=, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-xs mb-3 text-blue-800 dark:text-blue-400 uppercase tracking-wide">Rangos</h4>
                            <p className="text-[11px] font-mono text-slate-700 dark:text-slate-300"><strong>BETWEEN</strong> val1 <strong>AND</strong> val2</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-xs mb-3 text-blue-800 dark:text-blue-400 uppercase tracking-wide">Patrones</h4>
                            <p className="text-[11px] font-mono text-slate-700 dark:text-slate-300"><strong>LIKE</strong> 'A%' <br /> <strong>LIKE</strong> '_B%'</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <h4 className="font-bold text-xs mb-3 text-blue-800 dark:text-blue-400 uppercase tracking-wide">Conjuntos</h4>
                            <p className="text-[11px] font-mono text-slate-700 dark:text-slate-300"><strong>IN</strong> ('A', 'B', 'C')</p>
                        </div>
                    </div>
                </section>

                {/* 6. EJEMPLOS DE LA EMPRESA CONSTRUCTORA */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-900 dark:text-blue-300 transition-colors duration-300">
                        <Terminal className="text-blue-600 dark:text-blue-400" /> 6. Ejemplos de Resolución (Caso Real)
                    </h2>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Ejemplo 1 */}
                        <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 text-white overflow-hidden border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-blue-400 dark:text-blue-300 font-bold text-xs uppercase tracking-widest">Consulta 1</span>
                                <span className="bg-blue-600 dark:bg-blue-700 px-3 py-1 rounded-full text-[10px] font-semibold">OPERADOR LIKE</span>
                            </div>
                            <p className="text-sm mb-4 text-slate-200">"Listar todos los datos de empleados cuyo nombre comience con 'M' y tengan salario mayor a 3000"</p>
                            <pre className="bg-slate-950 dark:bg-slate-900 p-4 rounded-lg font-mono text-emerald-400 dark:text-emerald-300 text-xs leading-relaxed border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                                {`SELECT * FROM empleados 
WHERE nombre_emp LIKE 'M%' 
  AND salario > 3000;`}
                            </pre>
                        </div>

                        {/* Ejemplo 2 */}
                        <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 text-white overflow-hidden border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-blue-400 dark:text-blue-300 font-bold text-xs uppercase tracking-widest">Consulta 2</span>
                                <span className="bg-blue-600 dark:bg-blue-700 px-3 py-1 rounded-full text-[10px] font-semibold">BETWEEN + ORDER BY</span>
                            </div>
                            <p className="text-sm mb-4 text-slate-200">"Listar códigos de obras iniciadas en 2023, ordenadas de más reciente a más antigua"</p>
                            <pre className="bg-slate-950 dark:bg-slate-900 p-4 rounded-lg font-mono text-emerald-400 dark:text-emerald-300 text-xs leading-relaxed border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                                {`SELECT cod_obra, fecha_inicio 
FROM obras 
WHERE fecha_inicio BETWEEN '2023-01-01' 
  AND '2023-12-31' 
ORDER BY fecha_inicio DESC;`}
                            </pre>
                        </div>

                        {/* Ejemplo 3 */}
                        <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 text-white overflow-hidden border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-blue-400 dark:text-blue-300 font-bold text-xs uppercase tracking-widest">Consulta 3</span>
                                <span className="bg-blue-600 dark:bg-blue-700 px-3 py-1 rounded-full text-[10px] font-semibold">IS NULL</span>
                            </div>
                            <p className="text-sm mb-4 text-slate-200">"Obtener el nombre de clientes sin ciudad de residencia registrada"</p>
                            <pre className="bg-slate-950 dark:bg-slate-900 p-4 rounded-lg font-mono text-emerald-400 dark:text-emerald-300 text-xs leading-relaxed border border-slate-700 dark:border-slate-600 transition-colors duration-300">
                                {`SELECT nombre_cli 
FROM clientes 
WHERE ciudad_cli IS NULL;`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Bibliografía y Cierre */}
                <footer className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center transition-colors duration-300">
                    <div className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-bold tracking-widest">
                        SBD I - Conferencia 10 - Beatriz López Porrero
                    </div>
                    <div className="flex gap-3 items-center">
                        <CheckCircle2 className="text-blue-600 dark:text-blue-400" size={20} />
                        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Material Completo</span>
                    </div>
                </footer>

            </main>
        </>
    );
}

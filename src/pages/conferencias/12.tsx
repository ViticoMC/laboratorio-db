import {
    Database,
    Search,
    Layers,
    ArrowRightLeft,
    AlertTriangle,
    Code,
    GitMerge
} from 'lucide-react';

export function ConsultasMultitablasPage() {
    return (
        <>
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">

                {/* 1. FUNDAMENTOS DE LA UNIÓN (JOIN) */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <GitMerge className="text-highlight-purple" /> 1. Unión de Tablas (Equicomposiciones)
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300 hover:shadow-md">
                        <p className="text-sm mb-10 leading-relaxed text-text-body font-medium">
                            En el modelo relacional, la información está normalizada para evitar redundancias. Para recuperar datos combinados, utilizamos la <span className="text-highlight-purple font-black">condición de reunión (JOIN)</span> en la cláusula <span className="text-highlight-purple font-mono font-bold italic underline decoration-highlight-purple/30">WHERE</span>.
                        </p>

                        <div className="bg-surface-elevated p-8 rounded-3xl mb-10 border border-highlight-purple/30 relative overflow-hidden group shadow-sm transition-all hover:border-highlight-purple/60">
                            <div className="absolute top-0 left-0 w-2 h-full bg-highlight-purple" />
                            <h4 className="font-black text-[10px] mb-4 uppercase tracking-[0.2em] text-highlight-purple flex items-center gap-2">
                                <AlertTriangle size={14} className="text-highlight-yellow animate-pulse" /> La Regla de Oro del Join
                            </h4>
                            <p className="text-sm text-text-body leading-relaxed max-w-3xl">
                                Para unir <span className="text-highlight-purple font-black underline underline-offset-4 Decoration-2">n</span> tablas, se necesitan al menos <span className="text-highlight-purple font-black underline underline-offset-4 Decoration-2 text-lg">n-1</span> condiciones de unión precisas. Omitir esto genera un <span className="text-highlight-yellow font-black">Producto Cartesiano</span> catastrófico.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-black text-[10px] text-text-secondary flex items-center gap-2 uppercase tracking-widest">
                                <Code size={16} className="text-highlight-green" /> Ejemplo Práctico (Empresa Constructora)
                            </h3>
                            <div className="bg-black/95 p-8 rounded-2xl font-mono text-xs text-white border border-white/5 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 bg-white/5 text-[9px] uppercase tracking-widest text-white/40">Equijoin</div>
                                <p className="text-highlight-green mb-4">-- Listar oficios de trabajadores del edificio '435'</p>
                                <p className="text-highlight-purple font-black italic uppercase tracking-widest leading-loose">
                                    <span className="text-highlight-yellow">SELECT DISTINCT</span> <span className="text-white">oficio</span> <br />
                                    <span className="text-highlight-yellow">FROM</span> <span className="text-white">trabajador, asignacion</span> <br />
                                    <span className="text-highlight-yellow">WHERE</span> <span className="text-highlight-green">trabajador.id_trabajador = asignacion.id_trabajador</span> <br />
                                    <span className="ml-4 font-bold text-highlight-purple underline">AND</span> <span className="text-white">id_edificio = <span className="text-highlight-green">'435'</span></span>;
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SUBCONSULTAS: NO CORRELACIONADAS */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Layers className="text-highlight-green" /> 2. Subconsultas (No Correlacionadas)
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300 hover:shadow-md">
                        <p className="text-sm mb-10 text-text-body font-medium leading-relaxed">
                            Es una consulta anidada cuya lógica es <span className="text-highlight-green font-black underline decoration-2 underline-offset-4">independiente</span>. En el caso No Correlacionado, el motor de BD la ejecuta **una sola vez** y entrega el resultado final a la consulta principal.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="bg-surface-elevated p-8 rounded-2xl border-l-[6px] border-highlight-green shadow-inner">
                                <h4 className="font-black text-[10px] mb-6 text-highlight-green uppercase tracking-[0.2em]">Flujo de Ejecución</h4>
                                <ol className="text-xs space-y-6 text-text-body font-medium">
                                    <li className="flex gap-4 items-center">
                                        <div className="flex-none bg-highlight-green text-surface-elevated w-6 h-6 rounded-full flex items-center justify-center font-black">1</div>
                                        Se resuelve la <span className="text-highlight-green font-black italic">Inner Query</span> y se obtiene un valor/lista.
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="flex-none bg-highlight-green text-surface-elevated w-6 h-6 rounded-full flex items-center justify-center font-black">2</div>
                                        El resultado sustituye a la subconsulta en la <span className="text-highlight-purple font-black italic">Outer Query</span>.
                                    </li>
                                </ol>
                            </div>
                            <div className="bg-black/95 p-8 rounded-2xl font-mono text-xs text-white border border-white/5 shadow-2xl flex flex-col justify-center">
                                <p className="text-highlight-green mb-4">-- ¿Quiénes ganan más que el promedio?</p>
                                <p className="leading-relaxed"><span className="text-highlight-purple font-black uppercase italic">SELECT</span> <span className="text-white">nomb_trabajador</span> <span className="text-highlight-purple font-black uppercase italic">FROM</span> <span className="text-white">trabajador</span></p>
                                <p className="leading-relaxed"><span className="text-highlight-purple font-black uppercase italic">WHERE</span> <span className="text-white">tarifa_hr {">"} (</span></p>
                                <p className="pl-6 text-highlight-yellow italic font-black uppercase"><span className="underlineDecoration-2">SELECT</span> AVG(tarifa_hr) <span className="underlineDecoration-2">FROM</span> trabajador</p>
                                <p className="text-white">);</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. SUBCONSULTAS CORRELACIONADAS */}
                <section className="mb-14">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <ArrowRightLeft className="text-highlight-purple" /> 3. Subconsultas Correlacionadas
                    </h2>
                    <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border transition-all duration-300 hover:shadow-md">
                        <p className="text-sm mb-10 text-text-body font-medium leading-relaxed">
                            Aquí, la consulta interna hace referencia a columnas de la consulta externa. Se comporta como un bucle: se ejecuta <span className="text-highlight-purple font-black uppercase underline decoration-2 underline-offset-4 tracking-tighter text-lg">una vez por cada fila</span> de la tabla externa.
                        </p>

                        <div className="bg-highlight-purple/5 border border-highlight-purple/20 p-6 rounded-2xl flex gap-5 items-start mb-10 transition-all hover:bg-highlight-purple/10">
                            <div className="p-2 bg-highlight-purple/20 rounded-xl">
                                <GitMerge className="text-highlight-purple" size={24} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-black text-text-primary text-sm uppercase tracking-wider mb-2">Requisito Vital: Alias</h4>
                                <p className="text-sm text-text-body leading-relaxed">
                                    Es obligatorio el uso de <span className="text-highlight-purple font-black underline uppercase">Alias</span> semánticos (ej: <code className="font-black bg-surface-elevated px-2 py-0.5 rounded text-highlight-purple">trabajador <span className="text-highlight-yellow">t</span></code>) para diferenciar instancias de la misma tabla en el ámbito de la consulta.
                                </p>
                            </div>
                        </div>

                        <div className="bg-black/95 p-8 rounded-3xl font-mono text-sm text-white shadow-2xl border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 bg-highlight-purple/10 text-[9px] text-highlight-purple font-black uppercase tracking-widest italic decoration-highlight-purple">Iteración Fila-a-Fila</div>
                            <p className="text-highlight-green mb-4">-- Trabajadores que ganan más que su propio supervisor</p>
                            <div className="space-y-1">
                                <p><span className="text-highlight-purple font-black uppercase">SELECT</span> <span className="text-white">t.nomb_trabajador</span></p>
                                <p><span className="text-highlight-purple font-black uppercase">FROM</span> <span className="text-white italic">trabajador</span> <span className="text-highlight-yellow font-black">t</span></p>
                                <p><span className="text-highlight-purple font-black uppercase">WHERE</span> <span className="text-white">t.tarifa_hr {'>'} (</span></p>
                                <p className="pl-8"><span className="text-highlight-yellow font-black uppercase italic underline">SELECT</span> <span className="text-white">s.tarifa_hr</span></p>
                                <p className="pl-8"><span className="text-highlight-yellow font-black uppercase italic underline">FROM</span> <span className="text-white italic">trabajador</span> <span className="text-highlight-yellow font-black underline">s</span></p>
                                <p className="pl-8"><span className="text-highlight-yellow font-black uppercase italic underline">WHERE</span> <span className="text-white">s.id_trabajador = <span className="text-highlight-yellow font-black">t</span>.id_supv</span></p>
                                <p className="text-white uppercase font-black">);</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. TESTS PARA SUBCONSULTAS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-text-heading transition-colors duration-300">
                        <Search className="text-highlight-yellow" /> 4. Operadores de Cuantificación
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-8 bg-surface border border-border rounded-3xl hover:border-highlight-yellow/40 hover:translate-y-[-4px] transition-all duration-300 shadow-sm flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-2xl bg-highlight-yellow/10 flex items-center justify-center mb-6 text-highlight-yellow font-black text-xl group-hover:scale-110 transition-transform"> ∈ </div>
                            <h4 className="font-black text-sm text-text-primary mb-3 uppercase tracking-tighter">IN / NOT IN</h4>
                            <p className="text-xs text-text-secondary leading-relaxed font-medium italic">Verificación de pertenencia a un conjunto estático o dinámico.</p>
                        </div>
                        <div className="p-8 bg-surface border border-border rounded-3xl hover:border-highlight-green/40 hover:translate-y-[-4px] transition-all duration-300 shadow-sm flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-2xl bg-highlight-green/10 flex items-center justify-center mb-6 text-highlight-green font-black text-xl group-hover:scale-110 transition-transform"> ∃ </div>
                            <h4 className="font-black text-sm text-text-primary mb-3 uppercase tracking-tighter">EXISTS</h4>
                            <p className="text-xs text-text-secondary leading-relaxed font-medium italic">Alta eficiencia: TRUE si la subconsulta retorna al menos una fila.</p>
                        </div>
                        <div className="p-8 bg-surface border border-border rounded-3xl hover:border-highlight-purple/40 hover:translate-y-[-4px] transition-all duration-300 shadow-sm flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-2xl bg-highlight-purple/10 flex items-center justify-center mb-6 text-highlight-purple font-black text-xl group-hover:scale-110 transition-transform"> ∨ </div>
                            <h4 className="font-black text-sm text-text-primary mb-3 uppercase tracking-tighter">ANY / SOME</h4>
                            <p className="text-xs text-text-secondary leading-relaxed font-medium italic">Comparación "Existencial": True si cumple con un elemento.</p>
                        </div>
                        <div className="p-8 bg-surface border border-border rounded-3xl hover:border-highlight-purple/40 hover:translate-y-[-4px] transition-all duration-300 shadow-sm flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-2xl bg-highlight-purple/10 flex items-center justify-center mb-6 text-highlight-purple font-black text-xl group-hover:scale-110 transition-transform"> ∀ </div>
                            <h4 className="font-black text-sm text-text-primary mb-3 uppercase tracking-tighter">ALL</h4>
                            <p className="text-xs text-text-secondary leading-relaxed font-medium italic">Comparación "Universal": True solo si cumple con todos.</p>
                        </div>
                    </div>
                </section>

                {/* 5. RESUMEN DE DIFERENCIAS */}
                <section className="mb-16">
                    <div className="bg-surface p-10 rounded-3xl border border-border transition-colors duration-300 shadow-sm">
                        <h3 className="text-[10px] font-black mb-10 text-center text-text-secondary uppercase tracking-[0.4em]">Subconsultas: Análisis de Ejecución</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left">
                                <thead>
                                    <tr className="border-b-2 border-border text-text-primary font-black uppercase tracking-widest text-[10px]">
                                        <th className="pb-4 px-4 w-1/3">Característica</th>
                                        <th className="pb-4 px-4 text-highlight-green">No Correlacionada</th>
                                        <th className="pb-4 px-4 text-highlight-purple">Correlacionada</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    <tr className="group">
                                        <td className="py-6 px-4 font-black uppercase tracking-tighter text-text-secondary group-hover:text-text-primary transition-colors">Dependencia</td>
                                        <td className="py-6 px-4 text-text-body font-medium italic">Totalmente independiente del padre</td>
                                        <td className="py-6 px-4 text-text-body font-medium italic">Acoplada a los alias del padre</td>
                                    </tr>
                                    <tr className="group">
                                        <td className="py-6 px-4 font-black uppercase tracking-tighter text-text-secondary group-hover:text-text-primary transition-colors">Ejecución</td>
                                        <td className="py-6 px-4">
                                            <span className="bg-highlight-green/10 text-highlight-green px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Single run (1x)</span>
                                        </td>
                                        <td className="py-6 px-4">
                                            <span className="bg-highlight-purple/10 text-highlight-purple px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Iterativa (N veces)</span>
                                        </td>
                                    </tr>
                                    <tr className="group">
                                        <td className="py-6 px-4 font-black uppercase tracking-tighter text-text-secondary group-hover:text-text-primary transition-colors">Rendimiento</td>
                                        <td className="py-6 px-4 text-highlight-green font-black uppercase tracking-widest">Alta - Muy Eficiente</td>
                                        <td className="py-6 px-4 text-highlight-yellow font-black uppercase tracking-widest">Variable - Costosa en tablas grandes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Footer */}


            </main>
        </>
    );
}

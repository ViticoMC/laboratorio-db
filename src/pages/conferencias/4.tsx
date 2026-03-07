import {
    Database,
    Table as TableIcon,
    Layers,
    Boxes,
    Info,
    CheckCircle2,
    ChevronRight
} from 'lucide-react';

export function TransformacionERPage() {
    return (
        <>
            <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">

                {/* Principios Fundamentales */}
                <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-highlight-purple-soft p-4 rounded-lg border border-highlight-purple transition-colors duration-300">
                        <h3 className="font-bold text-sm mb-1 uppercase text-highlight-purple">Principio 1</h3>
                        <p className="text-sm text-text-body">Todo tipo de entidad se convierte en una relación[cite: 13].</p>
                    </div>
                    <div className="bg-highlight-purple-soft p-4 rounded-lg border border-highlight-purple transition-colors duration-300">
                        <h3 className="font-bold text-sm mb-1 uppercase text-highlight-purple">Principio 2</h3>
                        <p className="text-sm text-text-body">Toda interrelación M:M se transforma en una relación[cite: 13].</p>
                    </div>
                    <div className="bg-highlight-purple-soft p-4 rounded-lg border border-highlight-purple transition-colors duration-300">
                        <h3 className="font-bold text-sm mb-1 uppercase text-highlight-purple">Principio 3</h3>
                        <p className="text-sm text-text-body">Las interrelaciones 1:M se traducen en propagación de clave o nueva relación[cite: 13].</p>
                    </div>
                </section>

                {/* Reglas del Modelo Básico */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-text-heading border-l-4 border-primary pl-4 transition-colors duration-300">
                        <Database /> Reglas del Modelo Básico
                    </h2>

                    <div className="space-y-6">
                        {/* Dominios y Entidades */}
                        <div className="bg-surface p-6 rounded-xl shadow-sm border border-border transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
                                <TableIcon size={20} /> 1-3. Dominios, Entidades y Atributos
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="text-primary shrink-0" size={18} />
                                    <span className="text-text-body"><strong>Dominios:</strong> Son objetos en el Modelo Relacional[cite: 14].</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="text-primary shrink-0" size={18} />
                                    <span className="text-text-body"><strong>Entidades:</strong> Cada tipo se convierte en una relación[cite: 14].</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="text-primary shrink-0" size={18} />
                                    <span className="text-text-body"><strong>Atributos:</strong> Se convierten en columnas de la relación[cite: 14].</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="text-primary shrink-0" size={18} />
                                    <span className="text-text-body"><strong>AIP:</strong> Los Atributos Identificadores Principales se convierten en Clave Primaria[cite: 14].</span>
                                </li>
                            </ul>
                        </div>

                        {/* Interrelaciones M:M */}
                        <div className="bg-surface p-6 rounded-xl shadow-sm border border-border transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-2 text-primary">4.1 Interrelaciones M:M</h3>
                            <p className="text-sm mb-4 text-text-body">Se transforma en una relación cuya <strong>Clave Primaria</strong> son los AIP (juntos) de las entidades que relaciona[cite: 15].</p>
                            <div className="bg-surface-elevated p-4 rounded-lg border-l-4 border-primary text-sm text-text-body">
                                Cada AIP se convierte individualmente en una <strong>Clave Ajena</strong> referenciando a las entidades participantes[cite: 15].
                            </div>
                        </div>

                        {/* Interrelaciones 1:N */}
                        <div className="bg-surface p-8 rounded-2xl shadow-md border-t-8 border-highlight-purple transition-colors duration-300">
                            <h3 className="font-extrabold text-2xl mb-4 text-highlight-purple flex items-center gap-2">
                                <Layers size={28} /> 4.2 Interrelaciones 1:N
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-highlight-purple-soft p-5 rounded-xl border border-highlight-purple/30 group hover:bg-highlight-purple/10 transition-colors">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-highlight-purple text-white flex items-center justify-center font-bold text-sm">A</div>
                                        <h4 className="font-bold text-highlight-purple uppercase tracking-wider">Propagación</h4>
                                    </div>
                                    <p className="text-xs text-text-body font-medium leading-relaxed">
                                        Los AIP de la entidad "1" se transfieren a la entidad "N" como <strong>Clave Ajena</strong>. Se incluyen también los atributos de la interrelación.
                                    </p>
                                </div>
                                <div className="bg-highlight-purple-soft p-5 rounded-xl border border-highlight-purple/30 group hover:bg-highlight-purple/10 transition-colors">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-highlight-purple text-white flex items-center justify-center font-bold text-sm">B</div>
                                        <h4 className="font-bold text-highlight-purple uppercase tracking-wider">Crear Relación</h4>
                                    </div>
                                    <p className="text-xs text-text-body font-medium leading-relaxed">
                                        Se usa cuando el número de ocurrencias es pequeño (0,1), hay atributos importantes o se prevé un cambio a N:M en el futuro.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interrelaciones 1:1 */}
                        <div className="bg-surface p-6 rounded-xl shadow-sm border border-border transition-colors duration-300">
                            <h3 className="font-bold text-lg mb-2 text-primary">4.3 Interrelaciones 1:1</h3>
                            <ul className="text-sm space-y-2 list-disc list-inside text-text-body">
                                <li>Si ambas son <strong>(0,1)</strong>: Se recomienda crear una relación independiente[cite: 17].</li>
                                <li>Si es <strong>(0,1)</strong> y <strong>(1,1)</strong>: Se traslada la clave de la entidad (1,1) a la (0,1)[cite: 17].</li>
                                <li>Si ambas son <strong>(1,1)</strong>: Se traslada la clave en cualquier dirección[cite: 18].</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Reglas del Modelo Extendido */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-text-heading border-l-4 border-primary pl-4 transition-colors duration-300">
                        <Layers /> Reglas del Modelo Extendido
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Interrelaciones Débiles */}
                        <div className="p-6 bg-primary text-primary-foreground rounded-xl transition-colors duration-300">
                            <h3 className="font-bold mb-4 flex items-center gap-2 underline">
                                <Info size={18} /> Entidades Débiles
                            </h3>
                            <p className="text-sm leading-relaxed">
                                Para dependencias en identificación y existencia: Utilizar mecanismos de propagación de clave y plantear la clave ajena con nulos no permitidos (<strong>NOT NULL</strong>)[cite: 18, 19].
                            </p>
                        </div>

                        {/* Jerarquías y Subtipos */}
                        <div className="p-6 bg-surface border border-border rounded-xl transition-colors duration-300">
                            <h3 className="font-bold text-primary mb-4">7. Jerarquías (Tipos y Subtipos)</h3>
                            <div className="space-y-2 text-xs text-text-body">
                                <div className="flex gap-2"><strong>a)</strong><span>Todos los atributos (supertipo y subtipos) en una sola relación[cite: 20].</span></div>
                                <div className="flex gap-2"><strong>b)</strong><span>Una relación para el supertipo y tantas relaciones como subtipos existan[cite: 20].</span></div>
                                <div className="flex gap-2"><strong>c)</strong><span>Relaciones distintas para cada subtipo con atributos comunes incluidos[cite: 21].</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Transformación de Agregación */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-text-heading border-l-4 border-primary pl-4 transition-colors duration-300">
                        <Boxes /> Transformación de la Agregación
                    </h2>
                    <div className="bg-surface p-6 rounded-xl border border-border shadow-sm transition-colors duration-300">
                        <p className="text-sm mb-4 text-text-body">Se transforma en una relación cuyos atributos son los AIP de las entidades contenidas en la agregación.</p>
                        <ul className="text-sm space-y-2 list-disc list-inside text-text-body">
                            <li>Los atributos AIP juntos forman la <strong>Clave Primaria</strong>.</li>
                            <li>Cada uno se convierte individualmente en <strong>Clave Ajena</strong>.</li>
                            <li>Se añaden los atributos propios de la agregación como columnas.</li>
                        </ul>
                    </div>
                </section>


                {/* Casos Prácticos de Transformación */}
                <section className="mb-12">
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-text-heading">
                        <CheckCircle2 size={32} className="text-highlight-green" /> Casos de Estudio Rápidos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[12px]">
                        <div className="p-5 bg-highlight-green-soft border-l-4 border-highlight-green rounded-xl shadow-sm hover:translate-y-[-4px] transition-transform">
                            <strong className="text-highlight-green block mb-2 text-sm uppercase">Matrimonio (1:1)</strong>
                            <p className="text-text-body font-medium italic underline decoration-highlight-green/30">Hombre(Cod-h), Mujer(Cod-m) → Matrimonio(Cod-h, Cod-m)</p>
                        </div>
                        <div className="p-5 bg-highlight-green-soft border-l-4 border-highlight-green rounded-xl shadow-sm hover:translate-y-[-4px] transition-transform">
                            <strong className="text-highlight-green block mb-2 text-sm uppercase">Pertenece (1:N)</strong>
                            <p className="text-text-body font-medium italic underline decoration-highlight-green/30">Editorial(Cod-E) → Libro(..., Cod-E)</p>
                        </div>
                        <div className="p-5 bg-highlight-green-soft border-l-4 border-highlight-green rounded-xl shadow-sm hover:translate-y-[-4px] transition-transform">
                            <strong className="text-highlight-green block mb-2 text-sm uppercase">Recursiva (0,1)</strong>
                            <p className="text-text-body font-medium italic underline decoration-highlight-green/30">Tema(Cod-Tema, ..., Cod-Tema-Sup)</p>
                        </div>
                        <div className="p-5 bg-highlight-green-soft border-l-4 border-highlight-green rounded-xl shadow-sm hover:translate-y-[-4px] transition-transform">
                            <strong className="text-highlight-green block mb-2 text-sm uppercase">Responsable (1:1)</strong>
                            <p className="text-text-body font-medium italic underline decoration-highlight-green/30">Depto(Cod-d, ..., Cod-e_responsable)</p>
                        </div>
                    </div>
                </section>

                <footer className="mt-20 pt-8 border-t border-border text-center text-text-secondary text-xs transition-colors duration-300">
                    <p>Material de Apoyo: Universidad de Ciencias Informáticas (UCI) - Sistemas de Bases de Datos I</p>
                    <p className="mt-2 uppercase tracking-widest opacity-50">Conferencia 4 - Profesor Ramiro Pérez Vázquez [cite: 31]</p>
                </footer>
            </main>
        </>
    );
}

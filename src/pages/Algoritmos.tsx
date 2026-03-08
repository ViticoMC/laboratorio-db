import { useState, useEffect } from "react";
import { Relation, FullFdSet, Attribute } from "@/types/database";
import { DF } from "@/types/df";
import { relationService } from "@/services/relation.service";
import { fdSetService } from "@/services/fdSet.service";
import { attributeService } from "@/services/attribute.service";
import {
    Search,
    Equal,
    Layers,
    ShieldCheck,
    Key,
    Calculator,
    ChevronRight,
    RotateCcw,
    LayoutGrid,
    Info,
    Terminal,
} from "lucide-react";
import { RelationSetSelector } from "@/componentes/Algoritmos/RelationSetSelector";
import { AlgorithmCard, ResultPanel, AttributeBadge, DFDisplay } from "@/componentes/Algoritmos/AlgorithmCommon";

// Algoritmos
import { aspirina } from "@/utils/algoritmos/aspirina";
import { getIrreducible } from "@/utils/algoritmos/isIrreducible";
import { isCandidatClave } from "@/utils/algoritmos/isCandidatKey";

type AlgorithmType = "clausura" | "equivalencia" | "inclusion" | "irreducible" | "claves";

export function Algoritmos() {
    const [relaciones, setRelaciones] = useState<Relation[]>([]);
    const [selectedRelId, setSelectedRelId] = useState<number | null>(null);
    const [fdSets, setFdSets] = useState<FullFdSet[]>([]);
    const [selectedSetId, setSelectedSetId] = useState<number | null>(null);
    const [attributes, setAttributes] = useState<Attribute[]>([]);
    const [selectedAlg, setSelectedAlg] = useState<AlgorithmType | null>(null);
    const [loading, setLoading] = useState(true);

    // Estados específicos para cada algoritmo
    const [selectedX, setSelectedX] = useState<number[]>([]);
    const [result, setResult] = useState<any>(null);
    const [steps, setSteps] = useState<string[]>([]);

    useEffect(() => {
        loadRelaciones();
    }, []);

    useEffect(() => {
        if (selectedRelId) {
            loadFdSets(selectedRelId);
            loadAttributes(selectedRelId);
            setSelectedSetId(null);
            setResult(null);
        }
    }, [selectedRelId]);

    async function loadRelaciones() {
        try {
            const data = await relationService.getAll();
            setRelaciones(data);
        } catch (error) {
            console.error("Error loading relations:", error);
        } finally {
            setLoading(false);
        }
    }

    async function loadFdSets(relId: number) {
        try {
            const data = await fdSetService.getByRelationId(relId);
            setFdSets(data as FullFdSet[]);
        } catch (error) {
            console.error("Error loading FD sets:", error);
        }
    }

    async function loadAttributes(relId: number) {
        try {
            const data = await attributeService.getByRelationId(relId);
            setAttributes(data);
        } catch (error) {
            console.error("Error loading attributes:", error);
        }
    }

    const currentSet = fdSets.find(s => s.id === selectedSetId);
    const currentRel = relaciones.find(r => r.id === selectedRelId);

    const getDFFormat = (set: FullFdSet): DF[] => {
        console.log("Convirtiendo conjunto de dependencias al formato DF:", set);
        if (!set || !set.dependencies) {
            console.warn("El conjunto seleccionado no tiene dependencias cargadas.");
            return [];
        }
        return set.dependencies.map(d => ({
            implicantes: d.lhs ? d.lhs.map(a => a.name) : [],
            implicados: d.rhs ? d.rhs.map(a => a.name) : []
        }));
    };

    const handleRunAlgorithm = () => {
        if (!selectedSetId || !selectedAlg) return;

        // Buscamos el conjunto completo en el estado fdSets
        const setFull = fdSets.find(s => s.id === selectedSetId);
        if (!setFull || !setFull.dependencies) {
            console.error("No se pudo encontrar el conjunto completo con sus dependencias.");
            return;
        }

        const dfSet = getDFFormat(setFull);
        const newSteps: string[] = [];

        newSteps.push(`Iniciando algoritmo: ${selectedAlg.toUpperCase()}`);
        newSteps.push(`Cargando conjunto de dependencias: "${setFull.name}"`);

        switch (selectedAlg) {
            case "clausura":
                if (selectedX.length === 0) return;
                const implicantes = selectedX.map(id => attributes.find(a => a.id === id)!.name);
                newSteps.push(`Calculando clausura para el conjunto X = { ${implicantes.join(", ")} }`);
                newSteps.push("Aplicando Axiomas de Armstrong (Reflexividad, Aumentación y Transitividad)...");
                const clausura = aspirina({ df: implicantes, conjuntoDF: dfSet });
                newSteps.push(`Proceso finalizado. Se encontraron ${clausura.length} atributos dependientes.`);
                setResult(clausura);
                break;
            case "irreducible":
                newSteps.push("Paso 1: Descomponer lados derechos (Regla de Descomposición).");
                newSteps.push("Paso 2: Eliminar atributos extraños en los lados izquierdos.");
                newSteps.push("Paso 3: Eliminar dependencias funcionales redundantes.");
                const irreducible = getIrreducible(dfSet);
                newSteps.push(`Conjunto irreducible generado con ${irreducible.length} reglas optimizadas.`);
                setResult(irreducible);
                break;
            case "claves":
                if (selectedX.length === 0) return;
                const clave = selectedX.map(id => attributes.find(a => a.id === id)!.name);
                newSteps.push(`Verificando minimalidad y capacidad de cobertura para { ${clave.join(", ")} }`);
                newSteps.push("Calculando clausura del candidato sobre el conjunto de DF...");
                const resClave = isCandidatClave({
                    posibleClaveCAndidata: clave,
                    conjuntoDF: dfSet,
                    relacion: {
                        ...currentRel!,
                        attributes: attributes.map(a => a.name)
                    } as any
                });
                newSteps.push(resClave.sucess ? "Minimalidad confirmada: Es una clave candidata." : `Validación fallida: ${resClave.message}`);
                setResult(resClave);
                break;
        }
        setSteps(newSteps);
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-background">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="p-8 min-h-screen bg-background transition-colors duration-300 pt-24 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-extrabold text-text-heading mb-2">
                        Motor de <span className="text-primary">Algoritmos</span>
                    </h1>
                    <p className="text-text-secondary text-lg">
                        Ejecuta operaciones sobre tus relaciones y conjuntos de dependencias.
                    </p>
                </div>
                <button
                    onClick={() => {
                        setSelectedRelId(null);
                        setSelectedSetId(null);
                        setSelectedAlg(null);
                        setResult(null);
                        setSelectedX([]);
                        setSteps([]);
                    }}
                    className="p-3 bg-surface border border-border rounded-2xl hover:bg-primary/10 hover:border-primary text-text-secondary hover:text-primary transition-all shadow-sm flex items-center gap-2 font-bold"
                >
                    <RotateCcw size={18} /> Reiniciar
                </button>
            </div>

            {/* Paso 1 y 2: Selección */}
            <RelationSetSelector
                relaciones={relaciones}
                selectedRelId={selectedRelId}
                onSelectRel={setSelectedRelId}
                fdSets={fdSets}
                selectedSetId={selectedSetId}
                onSelectSet={setSelectedSetId}
            />

            {/* Paso 3: Selección de Algoritmo */}
            <div className="mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
                <h2 className="text-xs font-black uppercase tracking-widest text-text-secondary mb-6 flex items-center gap-2">
                    <Calculator size={14} className="text-accent" /> 3. Elige el Algoritmo
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <AlgorithmCard
                        title="Clausura"
                        description="Determina todos los atributos dependientes de un conjunto."
                        icon={<Search size={22} />}
                        color="primary"
                        isSelected={selectedAlg === "clausura"}
                        onClick={() => { setSelectedAlg("clausura"); setResult(null); }}
                    />
                    <AlgorithmCard
                        title="Irreducible"
                        description="Encuentra el conjunto equivalente mínimo sin redundancias."
                        icon={<Layers size={22} />}
                        color="secondary"
                        isSelected={selectedAlg === "irreducible"}
                        onClick={() => { setSelectedAlg("irreducible"); setResult(null); }}
                    />
                    <AlgorithmCard
                        title="Claves"
                        description="Verifica si un conjunto de atributos es clave candidata."
                        icon={<Key size={22} />}
                        color="accent"
                        isSelected={selectedAlg === "claves"}
                        onClick={() => { setSelectedAlg("claves"); setResult(null); }}
                    />
                    <AlgorithmCard
                        title="Equivalencia"
                        description="Pronto: Compara si dos conjuntos de DF son iguales."
                        icon={<Equal size={22} />}
                        color="success"
                        isSelected={selectedAlg === "equivalencia"}
                        onClick={() => { setSelectedAlg("equivalencia"); setResult(null); }}
                    />
                    <AlgorithmCard
                        title="Inclusión"
                        description="Pronto: Verifica si un conjunto está dentro de otro."
                        icon={<ShieldCheck size={22} />}
                        color="warning"
                        isSelected={selectedAlg === "inclusion"}
                        onClick={() => { setSelectedAlg("inclusion"); setResult(null); }}
                    />
                </div>
            </div>

            {/* Panel de Configuración Específica */}
            {
                selectedAlg && selectedSetId && (
                    <div className="mt-8 bg-surface p-8 rounded-[2.5rem] border-2 border-primary/20 shadow-xl animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black">Configurar {selectedAlg.charAt(0).toUpperCase() + selectedAlg.slice(1)}</h3>
                                    <p className="text-text-secondary font-medium">Completa los datos necesarios para el cálculo.</p>
                                </div>
                            </div>
                            <button
                                disabled={(selectedAlg === "clausura" || selectedAlg === "claves") && selectedX.length === 0}
                                onClick={handleRunAlgorithm}
                                className="px-8 py-3 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                            >
                                Ejecutar Algoritmo <ChevronRight size={18} />
                            </button>
                        </div>

                        {(selectedAlg === "clausura" || selectedAlg === "claves") && (
                            <div className="space-y-4">
                                <label className="text-sm font-black uppercase text-text-secondary">Selecciona los Atributos Implicantes (X)</label>
                                <div className="flex flex-wrap gap-2 p-4 bg-background border border-border rounded-2xl">
                                    {attributes.map(attr => (
                                        <button
                                            key={attr.id}
                                            onClick={() => {
                                                setSelectedX(prev =>
                                                    prev.includes(attr.id) ? prev.filter(id => id !== attr.id) : [...prev, attr.id]
                                                );
                                            }}
                                            className={`px-4 py-2 rounded-xl border-2 font-bold transition-all ${selectedX.includes(attr.id)
                                                ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                                                : "bg-surface border-border text-text-secondary hover:border-primary/50"
                                                }`}
                                        >
                                            {attr.name}
                                        </button>
                                    ))}
                                    {attributes.length === 0 && (
                                        <p className="text-text-secondary italic">No hay atributos definidos para esta relación.</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {selectedAlg === "irreducible" && (
                            <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-2xl text-secondary flex items-start gap-4">
                                <Layers className="mt-1 shrink-0" />
                                <p className="text-sm font-medium">
                                    Este algoritmo procesará el conjunto <strong>"{currentSet?.name}"</strong> para encontrar su cubrimiento irreducible (mínimo). No requiere entrada adicional.
                                </p>
                            </div>
                        )}
                    </div>
                )}

            {/* Resultados */}
            {result && (
                <div className="space-y-6">
                    {/* Historial de Pasos */}
                    <div className="mt-8 bg-surface-elevated p-8 rounded-[2.5rem] border border-border shadow-inner animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-text-secondary">
                            <Terminal size={20} className="text-primary" /> Historial de Ejecución
                        </h3>
                        <div className="space-y-3 font-mono text-sm border-l-2 border-primary/20 pl-6 ml-2">
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-4 animate-in fade-in slide-in-from-left-2 duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                                    <span className="text-primary/40 font-bold w-4">{i + 1}</span>
                                    <span className="text-text-primary/80 italic">{step}</span>
                                </div>
                            ))}
                            <div className="flex gap-4 text-success font-bold mt-4">
                                <span className="w-4">✓</span>
                                <span>Cálculo completado exitosamente.</span>
                            </div>
                        </div>
                    </div>

                    <ResultPanel title={`Resultado Final: ${selectedAlg}`}>
                        {selectedAlg === "clausura" && (
                            <div className="space-y-4">
                                <p className="font-bold text-text-secondary">Clausura de {selectedX.map(id => attributes.find(a => a.id === id)?.name).join(", ")}:</p>
                                <div className="flex flex-wrap gap-2">
                                    {(result as string[]).map(attrName => (
                                        <AttributeBadge key={attrName} name={attrName} color="primary" />
                                    ))}
                                </div>
                                <p className="text-xs text-text-secondary italic mt-4">Total de atributos en la clausura: {(result as string[]).length}</p>
                            </div>
                        )}

                        {selectedAlg === "irreducible" && (
                            <div className="space-y-4">
                                <p className="font-bold text-text-secondary">Conjunto Irreducible Equivalente:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {(result as DF[]).map((df, idx) => (
                                        <DFDisplay key={idx} df={df} index={idx} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {selectedAlg === "claves" && (
                            <div className="space-y-4">
                                <div className={`p-4 rounded-2xl flex items-center gap-4 ${result.sucess ? "bg-success/10 border border-success/30 text-success" : "bg-red-500/10 border border-red-500/30 text-red-500"}`}>
                                    <ShieldCheck size={28} />
                                    <div>
                                        <p className="text-lg font-black">{result.sucess ? "¡Es una Clave Candidata!" : "No es Clave Candidata"}</p>
                                        <p className="font-medium opacity-90">{result.message}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ResultPanel>
                </div>
            )}
            {
                !selectedRelId && (
                    <div className="mt-10 p-12 border-4 border-dashed border-border rounded-[3rem] flex flex-col items-center justify-center text-center bg-surface/30">
                        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                            <LayoutGrid className="h-10 w-10 text-primary opacity-20" />
                        </div>
                        <h3 className="text-2xl font-black text-text-heading">Configuración de Laboratorio</h3>
                        <p className="text-text-secondary max-w-sm mt-3 font-medium">
                            Selecciona una relación de tu repositorio para desbloquear las herramientas de análisis y algoritmos de bases de datos.
                        </p>
                    </div>
                )
            }
        </div >
    );
}


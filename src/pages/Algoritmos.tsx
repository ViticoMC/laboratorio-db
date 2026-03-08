import { useState, useEffect } from "react";
import { Relation, FullFdSet, Attribute } from "@/types/database";
import { DF } from "@/types/df";
import { ExecutionStep } from "@/types/executionStep";
import { relationService } from "@/services/relation.service";
import { attributeService } from "@/services/attribute.service";
import { databaseService } from "@/services/database.service";
import {
    Search,
    Equal,
    Layers,
    ShieldCheck,
    Key,
    Calculator,
    RotateCcw,
    LayoutGrid,
    Info,
    CheckCircle2,
} from "lucide-react";
import { RelationSetSelector } from "@/componentes/Algoritmos/RelationSetSelector";
import { AlgorithmCard, ResultPanel, AttributeBadge, DFDisplay } from "@/componentes/Algoritmos/AlgorithmCommon";
import { ExecutionTraceViewer } from "@/componentes/Algoritmos/ExecutionTraceViewer";

// Algoritmos
import { aspirina } from "@/utils/algoritmos/aspirina";
import { getIrreducible } from "@/utils/algoritmos/isIrreducible";
import { isCandidatClave } from "@/utils/algoritmos/isCandidatKey";
import { sonEquivalentes } from "@/utils/algoritmos/areEquivalentes";
import { obtenerSubconjuntos } from "@/utils/algoritmos/obtenerSubconjunto";
import { areDFArraysEqual } from "@/utils/algoritmos/compararCDF";

type AlgorithmType = "clausura" | "equivalencia" | "inclusion" | "irreducible" | "claves";
type CandidateKeyResult = { sucess: boolean; message: string };
type AlgorithmResult =
    | { kind: "clausura"; data: string[] }
    | { kind: "irreducible"; data: { irreducibleSet: DF[]; isAlreadyIrreducible: boolean } }
    | { kind: "claves"; data: CandidateKeyResult }
    | { kind: "equivalencia"; data: { isEquivalent: boolean; comparedAgainst: string } }
    | { kind: "inclusion"; data: { included: boolean; details: string } }
    | { kind: "info"; data: string }
    | null;

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
    const [selectedComparisonSetId, setSelectedComparisonSetId] = useState<number | null>(null);
    const [inclusionLhs, setInclusionLhs] = useState<number[]>([]);
    const [inclusionRhs, setInclusionRhs] = useState<number[]>([]);
    const [result, setResult] = useState<AlgorithmResult>(null);

    useEffect(() => {
        loadRelaciones();
    }, []);

    useEffect(() => {
        if (selectedRelId) {
            loadFdSets(selectedRelId);
            loadAttributes(selectedRelId);
            setSelectedSetId(null);
            setSelectedX([]);
            setSelectedComparisonSetId(null);
            setInclusionLhs([]);
            setInclusionRhs([]);
            setResult(null);
        }
    }, [selectedRelId]);

    useEffect(() => {
        setResult(null);
    }, [selectedSetId, selectedAlg]);

    useEffect(() => {
        if (selectedComparisonSetId === selectedSetId) {
            setSelectedComparisonSetId(null);
        }
    }, [selectedComparisonSetId, selectedSetId]);

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
            const fullRelation = await databaseService.getFullRelation(relId);
            setFdSets(fullRelation?.fdSets ?? []);
        } catch (error) {
            console.error("Error loading FD sets:", error);
            setFdSets([]);
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
    const selectedComparisonSet = fdSets.find(set => set.id === selectedComparisonSetId);

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

    const getSelectedSetData = () => {
        if (!selectedSetId) return null;
        const setFull = fdSets.find(s => s.id === selectedSetId);
        if (!setFull) return null;
        return {
            setFull,
            dfSet: getDFFormat(setFull),
        };
    };

    const getAttributeNameById = (id: number) => attributes.find(a => a.id === id)?.name;

    const getAttrNames = (ids: number[]) =>
        ids
            .map(id => getAttributeNameById(id))
            .filter((name): name is string => Boolean(name));

    const toggleInclusionLhs = (attrId: number) => {
        setInclusionLhs(prev => {
            const isSelected = prev.includes(attrId);
            if (isSelected) return prev.filter(id => id !== attrId);
            return [...prev, attrId];
        });
        setInclusionRhs(prev => prev.filter(id => id !== attrId));
    };

    const toggleInclusionRhs = (attrId: number) => {
        setInclusionRhs(prev => {
            const isSelected = prev.includes(attrId);
            if (isSelected) return prev.filter(id => id !== attrId);
            return [...prev, attrId];
        });
        setInclusionLhs(prev => prev.filter(id => id !== attrId));
    };

    const toStep = (step: ExecutionStep): ExecutionStep => step;

    const closureAlgorithm = {
        async handleExecuteAlgorithm(): Promise<ExecutionStep[]> {
            const steps: ExecutionStep[] = [];
            const selectedData = getSelectedSetData();
            const implicantes = selectedX
                .map(id => attributes.find(a => a.id === id)?.name)
                .filter((name): name is string => Boolean(name));

            steps.push(toStep({
                type: "init",
                content: "Inicio del algoritmo de Clausura.",
                highlight: `Conjunto base X = { ${implicantes.join(", ")} }`,
                color: "blue",
            }));

            if (!selectedData || implicantes.length === 0) {
                const message = "No se pudo ejecutar Clausura: selecciona un conjunto DF y atributos implicantes.";
                setResult({ kind: "info", data: message });
                steps.push(toStep({ type: "result", content: message, color: "red" }));
                return steps;
            }

            const closure = new Set<string>(implicantes);
            let iteration = 0;
            let changed = true;

            while (changed) {
                iteration += 1;
                changed = false;
                steps.push(toStep({
                    type: "iteration",
                    iteration,
                    content: `Iteracion ${iteration}: clausura actual = { ${Array.from(closure).join(", ")} }`,
                    color: "violet",
                }));

                selectedData.dfSet.forEach((df, index) => {
                    steps.push(toStep({
                        type: "check",
                        iteration,
                        content: `Revisando DF #${index + 1}: ${df.implicantes.join(", ")} -> ${df.implicados.join(", ")}`,
                        color: "amber",
                    }));

                    const canApply = df.implicantes.every(attr => closure.has(attr));
                    if (!canApply) return;

                    const nuevos = df.implicados.filter(attr => !closure.has(attr));
                    if (nuevos.length === 0) {
                        steps.push(toStep({
                            type: "info",
                            iteration,
                            content: "La DF aplica, pero no agrega nuevos atributos.",
                            color: "blue",
                        }));
                        return;
                    }

                    nuevos.forEach(attr => closure.add(attr));
                    changed = true;
                    steps.push(toStep({
                        type: "match",
                        iteration,
                        content: `Se aplico la DF y se agregaron ${nuevos.length} atributos.`,
                        highlight: `Nuevos: ${nuevos.join(", ")}`,
                        color: "green",
                    }));
                });
            }

            const closureResult = Array.from(closure).sort();
            setResult({ kind: "clausura", data: closureResult });
            steps.push(toStep({
                type: "result",
                content: `Clausura final con ${closureResult.length} atributos.`,
                highlight: `{ ${closureResult.join(", ")} }`,
                color: "green",
            }));
            return steps;
        }
    };

    const irreducibleAlgorithm = {
        async handleExecuteAlgorithm(): Promise<ExecutionStep[]> {
            const steps: ExecutionStep[] = [];
            const selectedData = getSelectedSetData();

            steps.push(toStep({
                type: "init",
                content: "Inicio del algoritmo de Cubrimiento Irreducible.",
                color: "blue",
            }));

            if (!selectedData) {
                const message = "No se pudo ejecutar Irreducible: selecciona un conjunto DF valido.";
                setResult({ kind: "info", data: message });
                steps.push(toStep({ type: "result", content: message, color: "red" }));
                return steps;
            }

            selectedData.dfSet.forEach((df, index) => {
                steps.push(toStep({
                    type: "check",
                    content: `DF #${index + 1}: ${df.implicantes.join(", ")} -> ${df.implicados.join(", ")}`,
                    color: "amber",
                }));
                if (df.implicados.length > 1) {
                    steps.push(toStep({
                        type: "match",
                        content: "Se detecto lado derecho compuesto; se descompone.",
                        highlight: `RHS original: ${df.implicados.join(", ")}`,
                        color: "green",
                    }));
                }
            });

            steps.push(toStep({
                type: "iteration",
                iteration: 1,
                content: "Aplicando eliminacion de atributos extranos y dependencias redundantes.",
                color: "violet",
            }));

            const irreducible = getIrreducible(selectedData.dfSet);
            const isAlreadyIrreducible = areDFArraysEqual(selectedData.dfSet, irreducible);
            setResult({
                kind: "irreducible",
                data: { irreducibleSet: irreducible, isAlreadyIrreducible },
            });

            steps.push(toStep({
                type: "result",
                content: isAlreadyIrreducible
                    ? "El conjunto original ya es irreducible."
                    : "El conjunto original NO es irreducible; se muestra su version irreducible.",
                highlight: irreducible.map(df => `${df.implicantes.join("")}->${df.implicados.join("")}`).join(" | "),
                color: isAlreadyIrreducible ? "green" : "red",
            }));
            return steps;
        }
    };

    const candidateKeyAlgorithm = {
        async handleExecuteAlgorithm(): Promise<ExecutionStep[]> {
            const steps: ExecutionStep[] = [];
            const selectedData = getSelectedSetData();
            const candidate = selectedX
                .map(id => attributes.find(a => a.id === id)?.name)
                .filter((name): name is string => Boolean(name));

            steps.push(toStep({
                type: "init",
                content: "Inicio del algoritmo de Verificacion de Clave Candidata.",
                highlight: `Candidato: { ${candidate.join(", ")} }`,
                color: "blue",
            }));

            if (!selectedData || !currentRel || candidate.length === 0) {
                const message = "No se pudo ejecutar Claves: selecciona un conjunto DF y un candidato no vacio.";
                setResult({ kind: "info", data: message });
                steps.push(toStep({ type: "result", content: message, color: "red" }));
                return steps;
            }

            const relationAttrs = attributes.map(attr => attr.name);
            const closure = aspirina({ df: candidate, conjuntoDF: selectedData.dfSet });
            steps.push(toStep({
                type: "check",
                content: "Se calculo la clausura del candidato para verificar cobertura.",
                highlight: `X+ = { ${closure.join(", ")} }`,
                color: "amber",
            }));

            const coversAll = relationAttrs.every(attr => closure.includes(attr));
            if (!coversAll) {
                const failResult: CandidateKeyResult = {
                    sucess: false,
                    message: "No es clave candidata porque no cubre todos los atributos",
                };
                setResult({ kind: "claves", data: failResult });
                steps.push(toStep({ type: "result", content: failResult.message, color: "red" }));
                return steps;
            }

            steps.push(toStep({
                type: "match",
                content: "El candidato cubre todos los atributos de la relacion.",
                color: "green",
            }));

            const subsets = obtenerSubconjuntos(candidate).filter(sub => sub.length > 0 && sub.length < candidate.length);
            let isMinimal = true;

            subsets.forEach((subset, index) => {
                if (!isMinimal) return;
                const subsetClosure = aspirina({ df: subset, conjuntoDF: selectedData.dfSet });
                steps.push(toStep({
                    type: "iteration",
                    iteration: index + 1,
                    content: `Probando minimalidad con subconjunto { ${subset.join(", ")} }`,
                    color: "violet",
                }));
                const subsetCoversAll = relationAttrs.every(attr => subsetClosure.includes(attr));
                steps.push(toStep({
                    type: "check",
                    iteration: index + 1,
                    content: subsetCoversAll ? "El subconjunto tambien cubre toda la relacion." : "El subconjunto NO cubre toda la relacion.",
                    highlight: `Clausura subconjunto: { ${subsetClosure.join(", ")} }`,
                    color: subsetCoversAll ? "red" : "amber",
                }));

                if (subsetCoversAll) {
                    isMinimal = false;
                    steps.push(toStep({
                        type: "match",
                        iteration: index + 1,
                        content: "Se encontro un subconjunto menor con cobertura completa.",
                        highlight: `{ ${subset.join(", ")} }`,
                        color: "red",
                    }));
                }
            });

            const strictValidation = isCandidatClave({
                posibleClaveCAndidata: candidate,
                conjuntoDF: selectedData.dfSet,
                relacion: {
                    ...currentRel,
                    attributes: relationAttrs,
                },
            });

            const finalResult: CandidateKeyResult = {
                sucess: strictValidation.sucess && isMinimal,
                message: strictValidation.sucess && isMinimal
                    ? "Es clave candidata"
                    : "No es clave candidata porque existe un subconjunto menor que cubre todos los atributos",
            };

            setResult({ kind: "claves", data: finalResult });
            steps.push(toStep({
                type: "result",
                content: finalResult.message,
                color: finalResult.sucess ? "green" : "red",
            }));
            return steps;
        }
    };

    const equivalenceAlgorithm = {
        async handleExecuteAlgorithm(): Promise<ExecutionStep[]> {
            const steps: ExecutionStep[] = [];
            const selectedData = getSelectedSetData();
            const comparisonSet = fdSets.find(set => set.id === selectedComparisonSetId);
            const comparisonDfSet = comparisonSet ? getDFFormat(comparisonSet) : [];

            steps.push(toStep({
                type: "init",
                content: "Inicio del algoritmo de Equivalencia.",
                color: "blue",
            }));

            if (!selectedData || !comparisonSet || selectedSetId === selectedComparisonSetId) {
                const message = "No se pudo ejecutar Equivalencia: selecciona dos conjuntos DF distintos de la misma relacion.";
                setResult({ kind: "info", data: message });
                steps.push(toStep({ type: "result", content: message, color: "red" }));
                return steps;
            }

            steps.push(toStep({
                type: "check",
                content: "Se valida si cada DF de F se deduce de G y viceversa.",
                highlight: `F: ${selectedData.setFull.name || `Conjunto ${selectedData.setFull.id}`} | G: ${comparisonSet.name || `Conjunto ${comparisonSet.id}`}`,
                color: "amber",
            }));

            const isEquivalent = sonEquivalentes(selectedData.dfSet, comparisonDfSet);

            steps.push(toStep({
                type: "iteration",
                iteration: 1,
                content: "Comprobando F ⊆ G mediante clausuras de implicantes.",
                color: "violet",
            }));

            steps.push(toStep({
                type: "iteration",
                iteration: 2,
                content: "Comprobando G ⊆ F mediante clausuras de implicantes.",
                color: "violet",
            }));

            setResult({
                kind: "equivalencia",
                data: {
                    isEquivalent,
                    comparedAgainst: comparisonSet.name || `Conjunto ${comparisonSet.id}`,
                },
            });

            steps.push(toStep({
                type: "result",
                content: isEquivalent
                    ? "Los dos conjuntos son equivalentes."
                    : "Los conjuntos no son equivalentes.",
                color: isEquivalent ? "green" : "red",
            }));
            return steps;
        }
    };

    const inclusionAlgorithm = {
        async handleExecuteAlgorithm(): Promise<ExecutionStep[]> {
            const steps: ExecutionStep[] = [];
            const selectedData = getSelectedSetData();
            const lhsNames = getAttrNames(inclusionLhs);
            const rhsNames = getAttrNames(inclusionRhs);
            const targetDf: DF = { implicantes: lhsNames, implicados: rhsNames };

            steps.push(toStep({
                type: "init",
                content: "Inicio del algoritmo de Inclusion.",
                highlight: `${lhsNames.join(", ")} -> ${rhsNames.join(", ")}`,
                color: "blue",
            }));

            if (!selectedData || lhsNames.length === 0 || rhsNames.length === 0) {
                const message = "No se pudo ejecutar Inclusion: selecciona un conjunto DF y construye una DF con implicantes e implicados.";
                setResult({ kind: "info", data: message });
                steps.push(toStep({ type: "result", content: message, color: "red" }));
                return steps;
            }

            const closure = aspirina({ df: targetDf.implicantes, conjuntoDF: selectedData.dfSet });
            const included = targetDf.implicados.every(attr => closure.includes(attr));

            steps.push(toStep({
                type: "check",
                content: "Se calcula la clausura de los implicantes respecto al conjunto seleccionado.",
                highlight: `Clausura(${targetDf.implicantes.join(", ")}) = { ${closure.join(", ")} }`,
                color: "amber",
            }));

            if (included) {
                steps.push(toStep({
                    type: "match",
                    content: "Todos los implicados de la DF objetivo estan contenidos en la clausura.",
                    color: "green",
                }));
            }

            const details = included
                ? "La DF objetivo esta incluida (es implicada) por el conjunto seleccionado."
                : "La DF objetivo NO esta incluida en el conjunto seleccionado.";

            setResult({ kind: "inclusion", data: { included, details } });
            steps.push(toStep({ type: "result", content: details, color: included ? "green" : "red" }));
            return steps;
        }
    };

    const algorithmExecutorMap: Record<AlgorithmType, { handleExecuteAlgorithm: () => Promise<ExecutionStep[]> }> = {
        clausura: closureAlgorithm,
        irreducible: irreducibleAlgorithm,
        claves: candidateKeyAlgorithm,
        equivalencia: equivalenceAlgorithm,
        inclusion: inclusionAlgorithm,
    };

    async function handleExecuteSelectedAlgorithm(): Promise<ExecutionStep[]> {
        if (!selectedAlg) {
            return [
                {
                    type: "init",
                    content: "No hay algoritmo seleccionado.",
                    color: "red",
                },
                {
                    type: "result",
                    content: "Selecciona un algoritmo antes de ejecutar.",
                    color: "red",
                }
            ];
        }
        return algorithmExecutorMap[selectedAlg].handleExecuteAlgorithm();
    }

    const canExecute = Boolean(
        selectedSetId &&
        selectedAlg &&
        (
            (selectedAlg === "clausura" || selectedAlg === "claves")
                ? selectedX.length > 0
                : selectedAlg === "equivalencia"
                    ? Boolean(selectedComparisonSetId && selectedComparisonSetId !== selectedSetId)
                    : selectedAlg === "inclusion"
                        ? inclusionLhs.length > 0 && inclusionRhs.length > 0
                        : true
        )
    );

    function renderAlgorithmResult() {
        if (!result || !selectedAlg) return null;

        return (
            <ResultPanel title="Resultado Final:">
                {result.kind === "clausura" && (
                    <div className="space-y-4">
                        <p className="font-bold text-text-secondary">
                            Clausura de {selectedX.map(id => attributes.find(a => a.id === id)?.name).filter(Boolean).join(", ")}:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {result.data.map(attrName => (
                                <AttributeBadge key={attrName} name={attrName} color="primary" />
                            ))}
                        </div>
                        <p className="text-xs text-text-secondary italic mt-4">
                            Total de atributos en la clausura: {result.data.length}
                        </p>
                    </div>
                )}

                {result.kind === "irreducible" && (
                    <div className="space-y-4">
                        <p className={`font-bold ${result.data.isAlreadyIrreducible ? "text-green-600" : "text-red-600"}`}>
                            {result.data.isAlreadyIrreducible
                                ? "El conjunto ingresado ya es irreducible."
                                : "El conjunto ingresado no es irreducible."}
                        </p>
                        <p className="font-bold text-text-secondary">
                            Version irreducible equivalente:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {result.data.irreducibleSet.map((df, idx) => (
                                <DFDisplay key={idx} df={df} index={idx} />
                            ))}
                        </div>
                    </div>
                )}

                {result.kind === "claves" && (
                    <div className="space-y-4">
                        <div className={`p-4 rounded-2xl flex items-center gap-4 ${result.data.sucess ? "bg-success/10 border border-success/30 text-success" : "bg-red-500/10 border border-red-500/30 text-red-500"}`}>
                            <ShieldCheck size={28} />
                            <div>
                                <p className="text-lg font-black">{result.data.sucess ? "Es una Clave Candidata" : "No es Clave Candidata"}</p>
                                <p className="font-medium opacity-90">{result.data.message}</p>
                            </div>
                        </div>
                    </div>
                )}

                {result.kind === "equivalencia" && (
                    <div className="space-y-3">
                        <p className="font-bold text-text-secondary">Comparacion ejecutada contra:</p>
                        <p className="font-mono text-sm p-3 bg-surface rounded-xl border border-border">{result.data.comparedAgainst}</p>
                        <p className={result.data.isEquivalent ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                            {result.data.isEquivalent ? "Los conjuntos son equivalentes." : "Los conjuntos no son equivalentes."}
                        </p>
                    </div>
                )}

                {result.kind === "inclusion" && (
                    <div className="space-y-3">
                        <p className={result.data.included ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                            {result.data.included ? "Inclusion verificada." : "Inclusion no verificada."}
                        </p>
                        <p className="text-text-secondary">{result.data.details}</p>
                    </div>
                )}

                {result.kind === "info" && (
                    <p className="font-medium text-text-secondary">{result.data}</p>
                )}
            </ResultPanel>
        );
    }

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
                        setSelectedComparisonSetId(null);
                        setInclusionLhs([]);
                        setInclusionRhs([]);
                    }}
                    className="p-3 bg-surface border border-border rounded-2xl hover:bg-primary/10 hover:border-primary text-text-secondary hover:text-primary transition-all shadow-sm flex items-center gap-2 font-bold"
                >
                    <RotateCcw size={18} /> Reiniciar
                </button>
            </div>

            {/* Paso 1 y 2: Selección */}


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
                        description="Compara equivalencia semantica con su cubrimiento irreducible."
                        icon={<Equal size={22} />}
                        color="success"
                        isSelected={selectedAlg === "equivalencia"}
                        onClick={() => { setSelectedAlg("equivalencia"); setResult(null); }}
                    />
                    <AlgorithmCard
                        title="Inclusión"
                        description="Verifica inclusion estructural contra su version irreducible."
                        icon={<ShieldCheck size={22} />}
                        color="warning"
                        isSelected={selectedAlg === "inclusion"}
                        onClick={() => { setSelectedAlg("inclusion"); setResult(null); }}
                    />
                </div>
            </div>

            <RelationSetSelector
                relaciones={relaciones}
                selectedRelId={selectedRelId}
                onSelectRel={setSelectedRelId}
                fdSets={fdSets}
                selectedSetId={selectedSetId}
                onSelectSet={setSelectedSetId}
            />

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
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                            <div className="p-4 rounded-2xl border border-primary/20 bg-primary/5">
                                <p className="text-xs font-black uppercase tracking-wide text-primary">Relacion Principal</p>
                                <p className="text-lg font-black text-text-primary mt-1">
                                    {currentRel?.name || "Relacion sin nombre"}
                                </p>
                                <p className="text-xs font-black uppercase tracking-wide text-text-secondary mt-3 mb-2">
                                    Atributos de la relacion
                                </p>
                                {attributes.length === 0 ? (
                                    <p className="text-sm text-text-secondary italic">No hay atributos definidos.</p>
                                ) : (
                                    <div className="flex flex-wrap gap-2">
                                        {attributes.map(attr => (
                                            <span
                                                key={`rel-attr-${attr.id}`}
                                                className="px-3 py-1 rounded-lg text-xs font-black border border-primary/30 bg-primary/10 text-primary"
                                            >
                                                {attr.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="p-4 rounded-2xl border border-secondary/20 bg-secondary/5">
                                <p className="text-xs font-black uppercase tracking-wide text-secondary">Conjunto Principal</p>
                                <p className="text-lg font-black text-text-primary mt-1">
                                    {currentSet?.name || `Conjunto ${currentSet?.id ?? "-"}`}
                                </p>
                                <p className="text-xs font-black uppercase tracking-wide text-text-secondary mt-3 mb-2">
                                    Dependencias funcionales del conjunto base
                                </p>
                                {!currentSet || currentSet.dependencies.length === 0 ? (
                                    <p className="text-sm text-text-secondary italic">Este conjunto no tiene dependencias funcionales.</p>
                                ) : (
                                    <div className="space-y-1 max-h-40 overflow-auto pr-1">
                                        {currentSet.dependencies.map((dependency, index) => {
                                            const lhs = dependency.lhs.map(attr => attr.name).join(", ");
                                            const rhs = dependency.rhs.map(attr => attr.name).join(", ");
                                            return (
                                                <div
                                                    key={`main-set-dependency-${dependency.id}`}
                                                    className="text-sm font-mono rounded-lg px-3 py-2 border border-secondary/30 bg-secondary/10"
                                                >
                                                    <span className="font-black mr-2 opacity-80">{index + 1}.</span>
                                                    <span>{lhs || "-"} -&gt; {rhs || "-"}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
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

                        {selectedAlg === "equivalencia" && (
                            <div className="space-y-4">
                                <label className="text-sm font-black uppercase text-text-secondary">
                                    Selecciona el segundo conjunto de DF para comparar
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {fdSets
                                        .filter(set => set.id !== selectedSetId)
                                        .map(set => (
                                            <button
                                                key={set.id}
                                                onClick={() => setSelectedComparisonSetId(set.id)}
                                                className={`p-4 rounded-xl border text-left transition-all ${selectedComparisonSetId === set.id
                                                    ? "bg-success/10 border-success text-success ring-2 ring-success/30 shadow-md shadow-success/10"
                                                    : "bg-surface border-border hover:border-success/50 text-text-primary"
                                                    }`}
                                            >
                                                <div className="flex items-start justify-between gap-2">
                                                    <div>
                                                        <p className="font-bold">{set.name || `Conjunto ${set.id}`}</p>
                                                        <p className="text-xs opacity-70 mt-1">{set.dependencies.length} dependencias</p>
                                                    </div>
                                                    {selectedComparisonSetId === set.id && (
                                                        <CheckCircle2 size={18} className="text-success shrink-0" />
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                </div>
                                {selectedComparisonSet && (
                                    <div className="p-4 rounded-2xl border border-success/30 bg-success/5 text-success">
                                        <p className="text-xs font-black uppercase tracking-wide">Conjunto Comparado Seleccionado</p>
                                        <p className="text-lg font-black mt-1">
                                            {selectedComparisonSet.name || `Conjunto ${selectedComparisonSet.id}`}
                                        </p>
                                        <p className="text-sm opacity-90 mt-1">
                                            {selectedComparisonSet.dependencies.length} dependencias funcionales cargadas.
                                        </p>
                                        <div className="mt-3 space-y-2">
                                            <p className="text-xs font-black uppercase tracking-wide opacity-80">Dependencias Funcionales</p>
                                            {selectedComparisonSet.dependencies.length === 0 ? (
                                                <p className="text-sm opacity-80">Este conjunto no tiene dependencias funcionales.</p>
                                            ) : (
                                                <div className="space-y-1 grid sm:grid-cols-2  md:grid-cols-3 gap-4 h-">
                                                    {selectedComparisonSet.dependencies.map((dependency, index) => {
                                                        const lhs = dependency.lhs.map(attr => attr.name).join(", ");
                                                        const rhs = dependency.rhs.map(attr => attr.name).join(", ");
                                                        return (
                                                            <div
                                                                key={`comparison-dependency-${dependency.id}`}
                                                                className="h-10 text-sm font-mono bg-success/10 border border-success/20 rounded-lg px-3 py-2"
                                                            >
                                                                <span className="font-black mr-2 opacity-80">{index + 1}.</span>
                                                                <span>{lhs || "-"} -&gt; {rhs || "-"}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                                {fdSets.filter(set => set.id !== selectedSetId).length === 0 && (
                                    <p className="text-text-secondary italic">
                                        Necesitas al menos dos conjuntos de DF en esta relacion para calcular equivalencia.
                                    </p>
                                )}
                            </div>
                        )}

                        {selectedAlg === "inclusion" && (
                            <div className="space-y-5">
                                <p className="text-sm font-black uppercase text-text-secondary">
                                    Construye la DF objetivo a verificar (X -&gt; Y)
                                </p>

                                <div className="space-y-2">
                                    <p className="font-bold text-text-secondary">Implicantes (X)</p>
                                    <div className="flex flex-wrap gap-2 p-4 bg-background border border-border rounded-2xl">
                                        {attributes.map(attr => (
                                            <button
                                                key={`lhs-${attr.id}`}
                                                onClick={() => toggleInclusionLhs(attr.id)}
                                                className={`px-4 py-2 rounded-xl border-2 font-bold transition-all ${inclusionLhs.includes(attr.id)
                                                    ? "bg-primary border-primary text-white"
                                                    : "bg-surface border-border text-text-secondary hover:border-primary/50"
                                                    }`}
                                            >
                                                {attr.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="font-bold text-text-secondary">Implicados (Y)</p>
                                    <div className="flex flex-wrap gap-2 p-4 bg-background border border-border rounded-2xl">
                                        {attributes.map(attr => (
                                            <button
                                                key={`rhs-${attr.id}`}
                                                onClick={() => toggleInclusionRhs(attr.id)}
                                                className={`px-4 py-2 rounded-xl border-2 font-bold transition-all ${inclusionRhs.includes(attr.id)
                                                    ? "bg-secondary border-secondary text-white"
                                                    : "bg-surface border-border text-text-secondary hover:border-secondary/50"
                                                    }`}
                                            >
                                                {attr.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 bg-surface-elevated border border-border rounded-2xl">
                                    <p className="text-xs font-black uppercase text-text-secondary mb-1">DF Objetivo</p>
                                    <p className="font-mono text-sm text-text-primary">
                                        {getAttrNames(inclusionLhs).join(", ") || "-"} -&gt; {getAttrNames(inclusionRhs).join(", ") || "-"}
                                    </p>
                                </div>
                            </div>
                        )}

                        <ExecutionTraceViewer
                            key={`${selectedAlg}-${selectedSetId}-${selectedRelId}`}
                            title={`Ejecucion Paso a Paso: ${selectedAlg}`}
                            canExecute={canExecute}
                            onExecute={handleExecuteSelectedAlgorithm}
                            onReset={() => setResult(null)}
                            renderResult={renderAlgorithmResult}
                        />
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


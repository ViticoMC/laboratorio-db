import React from 'react';
import { Relation, FullFdSet } from "@/types/database";
import { Database, ListChecks, CheckCircle2 } from "lucide-react";

interface SelectorProps {
    relaciones: Relation[];
    selectedRelId: number | null;
    onSelectRel: (id: number) => void;
    fdSets: FullFdSet[];
    selectedSetId: number | null;
    onSelectSet: (id: number) => void;
}

export const RelationSetSelector: React.FC<SelectorProps> = ({
    relaciones,
    selectedRelId,
    onSelectRel,
    fdSets,
    selectedSetId,
    onSelectSet
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Selector de Relación */}
            <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary flex items-center gap-2">
                    <Database size={14} className="text-primary" /> 1. Selecciona Relación
                </label>
                <div className="grid grid-cols-1 gap-2 max-h-50 overflow-y-auto pr-2 custom-scrollbar">
                    {relaciones.map((rel) => (
                        <button
                            key={rel.id}
                            onClick={() => onSelectRel(rel.id)}
                            className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left ${selectedRelId === rel.id
                                ? "bg-primary/10 border-primary shadow-sm"
                                : "bg-surface border-border hover:border-primary/50"
                                }`}
                        >
                            <span className={`font-bold ${selectedRelId === rel.id ? "text-primary" : "text-text-primary"}`}>
                                {rel.name}
                            </span>
                            {selectedRelId === rel.id && <CheckCircle2 size={16} className="text-primary" />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Selector de Conjunto de DF */}
            <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary flex items-center gap-2">
                    <ListChecks size={14} className="text-secondary" /> 2. Selecciona Conjunto de DF
                </label>
                <div className="p-4 bg-surface border border-border rounded-xl">
                    {selectedRelId ? (
                        fdSets.length > 0 ? (
                            <div className="space-y-2">
                                <select
                                    value={selectedSetId ?? ""}
                                    onChange={(e) => onSelectSet(Number(e.target.value))}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl outline-none text-text-primary font-bold focus:border-secondary/60"
                                >
                                    <option value="" disabled>
                                        Elige un conjunto principal...
                                    </option>
                                    {fdSets.map((set) => (
                                        <option key={set.id} value={set.id}>
                                            {set.name || `Conjunto ${set.id}`}
                                        </option>
                                    ))}
                                </select>
                                {selectedSetId && (
                                    <p className="text-xs font-bold text-secondary">
                                        Conjunto seleccionado: {fdSets.find(set => set.id === selectedSetId)?.name || `Conjunto ${selectedSetId}`}
                                    </p>
                                )}
                            </div>
                        ) : (
                            <div className="p-4 bg-surface/50 border border-dashed border-border rounded-xl text-center text-text-secondary text-sm">
                                No hay conjuntos para esta relación
                            </div>
                        )
                    ) : (
                        <div className="p-4 bg-surface/50 border border-dashed border-border rounded-xl text-center text-text-secondary text-sm">
                            Selecciona una relación primero
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

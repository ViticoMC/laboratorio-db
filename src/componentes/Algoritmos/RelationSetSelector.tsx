import React from 'react';
import { Relation, FullFdSet } from "@/types/database";
import { Database, ListChecks, CheckCircle2, ChevronRight } from "lucide-react";

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
                <div className="grid grid-cols-1 gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
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
                <div className="grid grid-cols-1 gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                    {selectedRelId ? (
                        fdSets.length > 0 ? (
                            fdSets.map((set) => (
                                <button
                                    key={set.id}
                                    onClick={() => onSelectSet(set.id)}
                                    className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left ${selectedSetId === set.id
                                            ? "bg-secondary/10 border-secondary shadow-sm"
                                            : "bg-surface border-border hover:border-secondary/50"
                                        }`}
                                >
                                    <span className={`font-bold ${selectedSetId === set.id ? "text-secondary" : "text-text-primary"}`}>
                                        {set.name || `Conjunto ${set.id}`}
                                    </span>
                                    {selectedSetId === set.id && <CheckCircle2 size={16} className="text-secondary" />}
                                </button>
                            ))
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

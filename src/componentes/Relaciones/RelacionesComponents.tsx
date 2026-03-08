import { Database, GitBranch, ListChecks, ArrowRight, Tags, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { FullRelation } from "@/hooks/useRelaciones";

interface RelationCardProps {
  relation: FullRelation;
  isSelected: boolean;
  onSelect: () => void;
}

export function RelationCard({ relation, isSelected, onSelect }: RelationCardProps) {
  return (
    <div 
      onClick={onSelect}
      className={`
        p-5 rounded-2xl border cursor-pointer transition-all duration-300
        ${isSelected 
          ? "bg-primary/5 border-primary shadow-md ring-1 ring-primary/20" 
          : "bg-surface border-border hover:border-primary/50 hover:shadow-sm"
        }
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
            <Database size={20} />
          </div>
          <div>
            <h3 className={`font-bold text-lg ${isSelected ? "text-primary" : "text-text-primary"}`}>
              {relation.name}
            </h3>
            <p className="text-text-secondary text-sm line-clamp-1">{relation.description || "Sin descripción"}</p>
          </div>
        </div>
        <div className={`transition-transform duration-300 ${isSelected ? "rotate-90 text-primary" : "text-text-secondary"}`}>
          <ArrowRight size={18} />
        </div>
      </div>

      <div className="mt-4 flex gap-3 text-xs font-semibold">
        <div className="flex items-center gap-1 text-secondary">
          <Tags size={14} /> {relation.attributes.length} Atributos
        </div>
        <div className="flex items-center gap-1 text-accent">
          <ListChecks size={14} /> {relation.fdSets.length} Conjuntos
        </div>
      </div>

      {isSelected && (
        <div className="mt-4 pt-4 border-t border-primary/10 animate-in fade-in slide-in-from-top-2 duration-300">
          <Link
            to={`/relaciones/gestionar?id=${relation.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-full py-2.5 bg-primary text-white font-black rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/30 flex items-center justify-center gap-2 group/btn active:scale-95"
          >
            <Settings2 size={16} className="group-hover/btn:rotate-180 transition-transform duration-500" />
            <span>Gestionar Relación</span>
          </Link>
        </div>
      )}
    </div>
  );
}

interface RelationDetailProps {
  relation: FullRelation;
}

export function RelationDetail({ relation }: RelationDetailProps) {
  return (
    <div className="bg-surface border border-border rounded-3xl p-8 shadow-sm">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
          <Database size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-text-heading">{relation.name}</h2>
          <p className="text-text-secondary text-lg">{relation.description || "Esta relación no tiene una descripción detallada."}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Atributos */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
            <Tags className="text-secondary" size={20} />
            Esquema (Atributos)
          </h3>
          <div className="flex flex-wrap gap-2">
            {relation.attributes.length > 0 ? (
              relation.attributes.map((attr) => (
                <span 
                  key={attr.id}
                  className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-xl font-bold text-sm"
                >
                  {attr.name}
                </span>
              ))
            ) : (
              <p className="text-text-secondary italic text-sm">No se han definido atributos todavía.</p>
            )}
          </div>
        </div>

        {/* Dependencias Funcionales */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
            <ListChecks className="text-accent" size={20} />
            Dependencias Funcionales
          </h3>
          <div className="space-y-4">
            {relation.fdSets.length > 0 ? (
              relation.fdSets.map((set) => (
                <div key={set.id} className="p-4 bg-background border border-border rounded-2xl">
                  <h4 className="font-bold text-text-primary mb-3 flex items-center gap-2">
                    <GitBranch size={16} className="text-accent" />
                    {set.name || `Conjunto ${set.id}`}
                  </h4>
                  <div className="space-y-2">
                    {set.dependencies.length > 0 ? (
                      set.dependencies.map((dep) => (
                        <div key={dep.id} className="flex items-center gap-2 text-sm bg-surface p-2 rounded-lg border border-border/50">
                          <span className="font-mono text-primary font-bold">
                            {dep.lhs.map(a => a.name).join(", ")}
                          </span>
                          <ArrowRight size={14} className="text-text-secondary" />
                          <span className="font-mono text-accent font-bold">
                            {dep.rhs.map(a => a.name).join(", ")}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-text-secondary text-xs italic">Sin dependencias en este conjunto.</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-text-secondary italic text-sm">No hay conjuntos de dependencias definidos.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-border rounded-3xl">
      <div className="p-4 bg-surface rounded-full mb-4 shadow-sm">
        <Database size={48} className="text-text-secondary opacity-30" />
      </div>
      <h3 className="text-2xl font-bold text-text-heading">Selecciona una relación</h3>
      <p className="text-text-secondary max-w-sm mt-2">
        Elige una relación del panel izquierdo para ver sus atributos y dependencias funcionales detalladamente.
      </p>
    </div>
  );
}

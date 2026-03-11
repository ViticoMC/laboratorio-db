import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, Database, Search, Filter, ArrowUpRight } from "lucide-react";
import { useRelaciones } from "@/hooks/useRelaciones";
import { RelationCard, RelationDetail, EmptyState } from "@/componentes/relaciones/RelacionesComponents";

export function Relaciones() {
    const { relaciones, loading, error, refresh } = useRelaciones();
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const selectedRelation = relaciones.find(r => r.id === selectedId);

    const filteredRelaciones = relaciones.filter(r =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <p className="text-text-primary font-bold text-xl animate-pulse">Cargando relaciones...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center bg-accent/5 border border-accent/20 rounded-3xl m-8">
                <Database size={48} className="text-accent mb-4" />
                <h2 className="text-2xl font-black text-text-heading mb-2">¡Oops! Algo salió mal</h2>
                <p className="text-text-secondary text-lg mb-6 max-w-md">{error}</p>
                <button
                    onClick={refresh}
                    className="px-6 py-3 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
                >
                    Intentar de nuevo
                </button>
            </div>
        );
    }

    return (
        <div className="p-8 min-h-screen  max-w-400 mx-auto transition-colors duration-300">
            {/* Header / Intro */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div className="space-y-2">
                    <h1 className="text-5xl font-black text-text-heading tracking-tight">
                        Relaciones <span className="text-primary italic">& Conjuntos de DF</span>
                    </h1>
                    <p className="text-text-secondary text-xl max-w-2xl font-medium">
                        Administra tus relaciones, visualiza atributos y agrega dependencias funcionales dinámicamente.
                    </p>
                </div>

                <Link
                    to="/relaciones/nueva"
                    className="group relative px-6 py-3 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 overflow-hidden"
                >
                    <PlusCircle size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    <span>Añadir Relación</span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <ArrowUpRight size={16} className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                </Link>
            </div>

            {/* Main Interactive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Panel: Selection Menu */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar relaciones..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-primary text-lg shadow-sm"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-2 py-1 bg-background border border-border rounded-lg text-text-secondary text-xs font-bold">
                            <Filter size={12} /> {filteredRelaciones.length}
                        </div>
                    </div>

                    <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                        {filteredRelaciones.length > 0 ? (
                            filteredRelaciones.map((rel) => (
                                <RelationCard
                                    key={rel.id}
                                    relation={rel}
                                    isSelected={selectedId === rel.id}
                                    onSelect={() => setSelectedId(rel.id)}
                                />
                            ))
                        ) : (
                            <div className="py-20 text-center bg-surface/50 border border-dashed border-border rounded-3xl">
                                <Search size={32} className="mx-auto text-text-secondary opacity-30 mb-3" />
                                <p className="text-text-secondary font-bold">No se encontraron relaciones que coincidan con tu búsqueda.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Panel: Active Content Detail */}
                <div className="lg:col-span-8 sticky top-24">
                    {selectedRelation ? (
                        <RelationDetail relation={selectedRelation} />
                    ) : (
                        <EmptyState />
                    )}
                </div>
            </div>

            {/* Bottom Actions Banner */}
            <div className="mt-20 p-1 bg-linear-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-[2.5rem] shadow-xl">
                <div className="bg-surface rounded-[2.1rem] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-3xl font-black text-text-heading">¿Necesitas expandir tu relación?</h2>
                        <p className="text-text-secondary text-lg max-w-xl">
                            Añade más atributos a tus relaciones, define llaves candidatas o crea complejos conjuntos de dependencias para normalizar tu diseño.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/relaciones/gestionar"
                            className="px-10 py-4 bg-text-heading text-background font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <PlusCircle size={20} />
                            Gestionar Relaciones
                        </Link>
                    </div>
                </div>
            </div>

            {/* Styles for scrollbar */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: var(--border-base);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: var(--brand-primary);
                }
            `}</style>
        </div>
    );
}

import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
    ArrowLeft, Database, Plus, Trash2, Tag,
    ChevronRight, LayoutGrid, ListChecks, AlertCircle
} from "lucide-react";
import { relationService } from "@/services/relation.service";
import { attributeService } from "@/services/attribute.service";
import { fdSetService } from "@/services/fdSet.service";
import { getDb } from "@/lib/db";
import type { Relation, Attribute, FdSet } from "@/types/database";
import { useToast } from "@/componentes/ToastProvider";
import { useConfirm } from "@/componentes/ConfirmProvider";

export function GestionarRelaciones() {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { confirm } = useConfirm();
    const [searchParams] = useSearchParams();
    const editId = searchParams.get("id");

    const [relations, setRelations] = useState<Relation[]>([]);
    const [selectedRelId, setSelectedRelId] = useState<number | null>(editId ? parseInt(editId) : null);
    const [newRelName, setNewRelName] = useState("");
    const [newRelDesc, setNewRelDesc] = useState("");
    const [attributes, setAttributes] = useState<Attribute[]>([]);
    const [newAttrName, setNewAttrName] = useState("");
    const [fdSets, setFdSets] = useState<(FdSet & { isEmpty?: boolean })[]>([]);
    const [newFdSetName, setNewFdSetName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await relationService.getAll();
            setRelations(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedRelId) {
            loadRelationDetails(selectedRelId);
        }
    }, [selectedRelId]);

    const loadRelationDetails = async (id: number) => {
        try {
            const [attrs, sets] = await Promise.all([
                attributeService.getByRelationId(id),
                fdSetService.getByRelationId(id)
            ]);
            const db = await getDb();
            const setsWithStatus = await Promise.all(sets.map(async (s) => {
                const deps = await db.select<any[]>("SELECT id FROM functional_dependencies WHERE fd_set_id = $1 LIMIT 1", [s.id]);
                return { ...s, isEmpty: deps.length === 0 };
            }));
            setAttributes(attrs);
            setFdSets(setsWithStatus);
        } catch (err) { console.error(err); }
    };

    const handleCreateRelation = async () => {
        if (!newRelName.trim()) { showToast("warning", "Nombre requerido", "La relación debe tener un nombre."); return; }
        try {
            const id = await relationService.create(newRelName, newRelDesc);
            showToast("success", "Relación creada", "Esquema listo.");
            const data = await relationService.getAll();
            setRelations(data);
            setSelectedRelId(id);
            setNewRelName(""); setNewRelDesc("");
        } catch (err) { showToast("error", "Error", "Fallo al crear."); }
    };

    const handleAddAttribute = async () => {
        if (!newAttrName.trim() || !selectedRelId) return;

        const isDuplicate = attributes.some(
            (attr) => attr.name.toLowerCase() === newAttrName.trim().toLowerCase()
        );

        if (isDuplicate) {
            showToast("error", "Atributo duplicado", "Este atributo ya existe en la relación actual.");
            return;
        }

        try {
            await attributeService.create(newAttrName.trim(), selectedRelId);
            showToast("success", "Atributo añadido", "Listo.");
            setNewAttrName(""); loadRelationDetails(selectedRelId);
        } catch (err) { showToast("error", "Error", "Fallo al añadir."); }
    };

    const handleAddFdSet = async () => {
        if (!selectedRelId) return;
        try {
            const name = newFdSetName.trim() || "Conjunto #" + (fdSets.length + 1);
            await fdSetService.create(selectedRelId, name);
            showToast("success", "Conjunto creado", "Listo.");
            setNewFdSetName(""); loadRelationDetails(selectedRelId);
        } catch (err) { showToast("error", "Error", "Fallo al crear conjunto."); }
    };

    const handleDeleteRelation = async (id: number) => {
        const rel = relations.find(r => r.id === id);
        const ok = await confirm({
            title: "¿Eliminar Relación?",
            message: `Esta acción borrará permanentemente el esquema "${rel?.name || ""}" y todos sus atributos asociados.`,
            confirmText: "Eliminar Todo",
            variant: "danger"
        });

        if (ok) {
            try {
                await relationService.delete(id);
                showToast("info", "Relación eliminada", "El esquema ha sido borrado físicamente.");
                const data = await relationService.getAll();
                setRelations(data);
                if (selectedRelId === id) setSelectedRelId(null);
            } catch (err) { showToast("error", "Error al eliminar", "Algo salió mal."); }
        }
    };

    const handleDeleteFdSet = async (id: number) => {
        const set = fdSets.find(s => s.id === id);
        const ok = await confirm({
            title: "¿Eliminar Conjunto?",
            message: `¿Estás seguro de eliminar el conjunto "${set?.name || "sin nombre"}"? Se perderán todas sus dependencias funcionales.`,
            confirmText: "Eliminar",
            variant: "danger"
        });

        if (ok) {
            try {
                await fdSetService.delete(id);
                showToast("info", "Conjunto eliminado", "El conjunto de dependencias ha sido borrado.");
                if (selectedRelId) loadRelationDetails(selectedRelId);
            } catch (err) { showToast("error", "Error", "No se pudo eliminar el conjunto."); }
        }
    };

    return (
        <div className="p-8 min-h-screen max-w-7xl mx-auto  text-text-primary">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <button onClick={() => navigate("/relaciones")} className="flex items-center gap-2 text-primary font-bold mb-2 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Volver
                    </button>
                    <h1 className="text-4xl font-black">Configuración de <span className="text-primary italic">Relaciones</span></h1>
                </div>
                {selectedRelId && (
                    <div className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-2xl border border-primary/20 animate-in fade-in slide-in-from-right-4 duration-500">
                        <Database className="text-primary" size={20} />
                        <div>
                            <p className="text-[10px] uppercase font-black text-primary/60 tracking-widest">Relación Seleccionada</p>
                            <p className="text-xl font-black text-text-primary leading-none">
                                {relations.find(r => r.id === selectedRelId)?.name}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="space-y-6">
                    <section className="bg-surface p-6 rounded-3xl border border-border">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus size={20} className="text-primary" /> Nueva Relación</h2>
                        <div className="space-y-4">
                            <input type="text" placeholder="Nombre" value={newRelName} onChange={(e) => setNewRelName(e.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-xl outline-none" />
                            <textarea placeholder="Descripción" value={newRelDesc} onChange={(e) => setNewRelDesc(e.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-xl h-24 outline-none" />
                            <button onClick={handleCreateRelation} className="w-full py-3 bg-primary text-white font-black rounded-xl hover:bg-primary/90 transition-all shadow-md">Crear</button>
                        </div>
                    </section>
                    <section className="bg-surface p-6 rounded-3xl border border-border">
                        {
                            relations.length > 0
                                ? <h2 className="text-xl font-bold mb-4">Relaciones Existentes</h2>
                                : <h2 className="text-xl font-bold">No hay relaciones</h2>
                        }

                        <div className="space-y-2">
                            {relations.map(rel => (
                                <div key={rel.id} className={"p-3 rounded-xl border flex items-center justify-between group cursor-pointer transition-all " + (selectedRelId === rel.id ? "border-primary bg-primary/5" : "border-border hover:bg-background")} onClick={() => setSelectedRelId(rel.id)}>
                                    <div className="flex items-center gap-2">
                                        <Database size={16} className={selectedRelId === rel.id ? "text-primary" : "text-text-secondary"} />
                                        <span className={"font-bold " + (selectedRelId === rel.id ? "text-primary" : "")}>{rel.name}</span>
                                    </div>
                                    <button onClick={(e) => { e.stopPropagation(); handleDeleteRelation(rel.id); }} className="p-2 text-text-secondary hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <div className="lg:col-span-2">
                    {selectedRelId ? (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <section className="bg-surface p-8 rounded-3xl border border-border">
                                <h2 className="text-2xl font-black flex items-center gap-3 mb-8"><Tag className="text-secondary" /> Atributos</h2>
                                <div className="flex gap-2 mb-6">
                                    <input type="text" placeholder="Nombre" value={newAttrName} onChange={(e) => setNewAttrName(e.target.value)} className="flex-1 px-4 py-3 bg-background border border-border rounded-xl outline-none" />
                                    <button onClick={handleAddAttribute} className="px-6 py-3 bg-secondary text-white font-black rounded-xl hover:bg-secondary/90 transition-all flex items-center gap-2"><Plus size={20} /> Añadir</button>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {attributes.map(attr => (
                                        <div key={attr.id} className="p-4 bg-background border border-border rounded-2xl flex items-center justify-between group">
                                            <span className="font-bold">{attr.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <section className="bg-surface p-8 rounded-3xl border border-border">
                                <h2 className="text-2xl font-black flex items-center gap-3 mb-8"><ListChecks className="text-accent" /> Dependencias</h2>
                                <div className="flex gap-2 mb-8">
                                    <input type="text" placeholder="Nombre (Opcional)" value={newFdSetName} onChange={(e) => setNewFdSetName(e.target.value)} className="flex-1 px-4 py-3 bg-background border border-border rounded-xl outline-none" />
                                    <button onClick={handleAddFdSet} className="px-6 py-3 bg-accent text-white font-black rounded-xl hover:bg-accent/90 transition-all flex items-center gap-2"><Plus size={20} /> Crear Conjunto</button>
                                </div>
                                <div className="space-y-4">
                                    {fdSets.map(set => (
                                        <div key={set.id} className="p-6 bg-background border border-border rounded-3xl flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent relative">
                                                    <LayoutGrid size={24} />
                                                    {set.isEmpty && <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center ring-2 ring-background animate-pulse"><AlertCircle size={12} className="text-white" /></div>}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-black text-lg">{set.name || "Conjunto #" + set.id}</h3>
                                                        {set.isEmpty && <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase font-bold">Sin Reglas</span>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleDeleteFdSet(set.id)}
                                                    className="p-3 text-text-secondary hover:text-accent hover:bg-accent/10 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                                <Link to={"/relaciones/fd-editor?setId=" + set.id + "&relId=" + selectedRelId} className="p-3 bg-surface border border-border text-text-secondary hover:text-primary hover:border-primary rounded-xl transition-all">
                                                    <ChevronRight size={20} />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    ) : (
                        <div className="h-full min-h-100 flex flex-col items-center justify-center border-4 border-dashed border-border rounded-[3rem] p-12 text-center text-text-secondary opacity-50">
                            <Database size={64} className="mb-6" />
                            <h2 className="text-3xl font-black">Personalización de Relaciones</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
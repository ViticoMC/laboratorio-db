import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    ArrowLeft, ListPlus, Trash2, ArrowRight, Save,
    Terminal, Database, Info
} from "lucide-react";
import { attributeService } from "@/services/attribute.service";
import { fdService } from "@/services/fd.service";
import { getDb } from "@/lib/db";
import type { Attribute } from "@/types/database";
import { useToast } from "@/componentes/ToastProvider";
import { useConfirm } from "@/componentes/ConfirmProvider";

export function FdEditor() {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { confirm } = useConfirm();
    const [params] = useSearchParams();
    const setId = params.get("setId");
    const relId = params.get("relId");

    const [attributes, setAttributes] = useState<Attribute[]>([]);
    const [currentFds, setCurrentFds] = useState<any[]>([]);

    // New FD state
    const [newLhs, setNewLhs] = useState<number[]>([]);
    const [newRhs, setNewRhs] = useState<number[]>([]);

    useEffect(() => {
        if (!setId || !relId) return;
        loadData();
    }, [setId, relId]);

    const loadData = async () => {
        try {
            const attrs = await attributeService.getByRelationId(parseInt(relId!));
            setAttributes(attrs);

            const db = await getDb();
            const deps = await db.select<any[]>(
                "SELECT id FROM functional_dependencies WHERE fd_set_id = $1",
                [parseInt(setId!)]
            );

            const fullDeps = await Promise.all(
                deps.map(async (d) => {
                    const lhs = await db.select<any[]>("SELECT attribute_id FROM dependency_left WHERE dependency_id = $1", [d.id]);
                    const rhs = await db.select<any[]>("SELECT attribute_id FROM dependency_right WHERE dependency_id = $1", [d.id]);
                    return {
                        id: d.id,
                        lhs: attrs.filter(a => lhs.some(l => l.attribute_id === a.id)),
                        rhs: attrs.filter(a => rhs.some(r => r.attribute_id === a.id))
                    };
                })
            );
            setCurrentFds(fullDeps);
        } catch (err) {
            console.error("Error loading FD data:", err);
        }
    };

    const handleAddFd = async () => {
        if (newLhs.length === 0 || newRhs.length === 0) {
            showToast('warning', 'Campos incompletos', 'Debes seleccionar al menos un atributo en cada lado.');
            return;
        }

        // Validar duplicados
        const isDuplicate = currentFds.some(fd => {
            const fdLhsIds = fd.lhs.map((a: any) => a.id).sort();
            const fdRhsIds = fd.rhs.map((a: any) => a.id).sort();
            const currentLhsIds = [...newLhs].sort();
            const currentRhsIds = [...newRhs].sort();

            return JSON.stringify(fdLhsIds) === JSON.stringify(currentLhsIds) &&
                JSON.stringify(fdRhsIds) === JSON.stringify(currentRhsIds);
        });

        if (isDuplicate) {
            showToast('error', 'Regla Duplicada', 'Esta dependencia funcional ya existe en el conjunto actual.');
            return;
        }

        try {
            await fdService.create(parseInt(setId!), newLhs, newRhs);
            showToast('success', 'Regla Guardada', 'La dependencia funcional ha sido agregada correctamente.');
            setNewLhs([]);
            setNewRhs([]);
            loadData();
        } catch (err) {
            showToast('error', 'Error al guardar', 'No se pudo guardar la dependencia. Revisa la consola para más detalles.');
            console.error(err);
        }
    };

    const handleDeleteFd = async (id: number) => {
        const ok = await confirm({
            title: "¿Eliminar Dependencia?",
            message: "Esta regla se borrará permanentemente del conjunto.",
            confirmText: "Eliminar",
            variant: "danger"
        });

        if (ok) {
            await fdService.delete(id);
            loadData();
            showToast("info", "Regla eliminada", "La dependencia ha sido removida.");
        }
    };

    const toggleLhs = (id: number) => {
        setNewLhs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const toggleRhs = (id: number) => {
        setNewRhs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    return (
        <div className="px-3 min-h-screen  mx-auto">

            <button onClick={() => navigate(`/relaciones/gestionar?id=${relId}`)} className="flex items-center gap-2 text-primary font-bold mb-6 group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Volver a Gestión
            </button>
            <div className="bg-surface p-10 rounded-[3rem] border border-border shadow-xl">
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-4 bg-accent/10 text-accent rounded-3xl">
                        <Terminal size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-text-heading">Editor de Dependencias</h1>
                        <p className="text-text-secondary text-lg">Define las reglas lógicas para el esquema seleccionado.</p>
                    </div>
                </div>

                {/* CREATOR */}
                <section className="bg-background p-8 rounded-3xl border border-border mb-10">
                    <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                        <ListPlus className="text-primary" /> Crear Nueva Dependencia
                    </h2>
                    {
                        attributes.length === 0 && (
                            <div className="rounded-3xl mb-6 border-highlight-yellow p-6 flex flex-col md:flex-row items-start md:items-center justify-between border-2 border-dashed bg-highlight-yellow/5 gap-4">
                                <div className="flex items-start gap-4">
                                    <Info className="text-highlight-yellow shrink-0" size={32} />
                                    <div>
                                        <p className="text-text-primary font-bold">Esquema sin atributos</p>
                                        <p className="text-text-secondary text-sm">No hay atributos disponibles para crear dependencias. Agrega atributos al esquema primero.</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => navigate(`/relaciones/gestionar?id=${relId}`)}
                                    className="px-6 py-2 bg-highlight-yellow text-background font-black rounded-xl hover:scale-105 transition-all text-sm shadow-lg shrink-0"
                                >
                                    Ir a Agregar Atributos
                                </button>
                            </div>
                        )
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-3">
                            <p className="font-black text-text-secondary text-sm uppercase tracking-widest">Lado Izquierdo (Determinante)</p>
                            <div className="flex flex-wrap gap-2">
                                {attributes.map(attr => (
                                    <button
                                        key={attr.id}
                                        onClick={() => toggleLhs(attr.id)}
                                        className={`px-4 py-2 rounded-xl font-bold text-sm transition-all border ${newLhs.includes(attr.id) ? "bg-primary border-primary text-white" : "bg-surface border-border text-text-secondary"}`}
                                    >
                                        {attr.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="font-black text-text-secondary text-sm uppercase tracking-widest">Lado Derecho (Dependiente)</p>
                            <div className="flex flex-wrap gap-2">
                                {attributes.map(attr => (
                                    <button
                                        key={attr.id}
                                        onClick={() => toggleRhs(attr.id)}
                                        className={`px-4 py-2 rounded-xl font-bold text-sm transition-all border ${newRhs.includes(attr.id) ? "bg-accent border-accent text-white" : "bg-surface border-border text-text-secondary"}`}
                                    >
                                        {attr.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-surface rounded-2xl border border-border">
                        <div className="flex items-center gap-4 overflow-x-auto">
                            <span className="px-3 py-1 bg-primary/10 text-primary font-bold rounded-lg truncate">{newLhs.length > 0 ? attributes.filter(a => newLhs.includes(a.id)).map(a => a.name).join(", ") : "?"}</span>
                            <ArrowRight className="text-text-secondary shrink-0" />
                            <span className="px-3 py-1 bg-accent/10 text-accent font-bold rounded-lg truncate">{newRhs.length > 0 ? attributes.filter(a => newRhs.includes(a.id)).map(a => a.name).join(", ") : "?"}</span>
                        </div>
                        <button
                            onClick={handleAddFd}
                            className="px-8 py-3 bg-primary text-white font-black rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shrink-0"
                        >
                            <Save size={18} /> Guardar Regla
                        </button>
                    </div>
                </section>

                {/* LIST */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                        <Database size={20} className="text-text-secondary" /> Reglas Registradas
                    </h2>
                    <div className="grid grid-cols-1 gap-3">
                        {currentFds.map(fd => (
                            <div key={fd.id} className="p-5 bg-background border border-border rounded-2xl flex items-center justify-between group hover:shadow-sm transition-all">
                                <div className="flex items-center gap-4 font-mono">
                                    <div className="text-primary font-black text-lg">{fd.lhs.map((a: any) => a.name).join(", ")}</div>
                                    <ArrowRight className="text-text-secondary opacity-50" size={20} />
                                    <div className="text-accent font-black text-lg">{fd.rhs.map((a: any) => a.name).join(", ")}</div>
                                </div>
                                <button
                                    onClick={() => handleDeleteFd(fd.id)}
                                    className="p-3 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded-xl transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                        {currentFds.length === 0 && (
                            <div className="text-center py-12 bg-background border-2 border-dashed border-border rounded-3xl">
                                <Info className="mx-auto text-text-secondary opacity-20 mb-3" size={32} />
                                <p className="text-text-secondary">No hay dependencias funcionales creadas.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

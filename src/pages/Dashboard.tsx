import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Database, BookOpen, Clock, Activity, ListChecks, UserCircle, Settings } from "lucide-react";
import { relationService } from "@/services/relation.service";
import { fdSetService } from "@/services/fdSet.service";
import type { Relation } from "@/types/database";

export function Dashboard() {
    const [relaciones, setRelaciones] = useState<Relation[]>([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalFdSets: 0,
        totalRelaciones: 0
    });

    useEffect(() => {
        async function loadData() {
            try {
                const data = await relationService.getAll();
                setRelaciones(data);

                let totalSets = 0;
                for (const rel of data) {
                    const sets = await fdSetService.getByRelationId(rel.id);
                    totalSets += sets.length;
                }

                setStats({
                    totalRelaciones: data.length,
                    totalFdSets: totalSets
                });
            } catch (error) {
                console.error("Error loading dashboard data:", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-background">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="p-8 min-h-screen  bg-background transition-colors duration-300">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold text-text-heading mb-2">
                    Bienvenido de nuevo, <span className="text-primary">Estudiante</span>
                </h1>
                <p className="text-text-secondary text-lg">
                    Panel de control del Laboratorio de Bases de Datos
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {/* Active Relations Card */}
                <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm hover:border-primary transition-all group">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Database className="h-6 w-6" />
                        </div>
                    </div>
                    <h3 className="text-text-secondary text-xs font-bold uppercase tracking-wider mb-1">Relaciones Creadas</h3>
                    <p className="text-4xl font-bold text-text-primary">{stats.totalRelaciones}</p>
                </div>

                {/* FD Sets Card */}
                <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm hover:border-secondary transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                            <ListChecks className="h-6 w-6" />
                        </div>
                    </div>
                    <h3 className="text-text-secondary text-xs font-bold uppercase tracking-wider mb-1">Conjuntos de Atributos</h3>
                    <p className="text-4xl font-bold text-text-primary">{stats.totalFdSets}</p>
                </div>

                {/* Quick Docs Card */}
                <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm hover:border-accent transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                            <BookOpen className="h-6 w-6" />
                        </div>
                    </div>
                    <h3 className="text-text-secondary text-xs font-bold uppercase tracking-wider mb-1">Documentación</h3>
                    <Link to="/documentacion" className="text-accent text-sm font-medium flex items-center gap-1 hover:underline">
                        Ver guías de estudio <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Projects List */}
                <div className="lg:col-span-2 p-6 rounded-2xl bg-surface border border-border shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-text-heading flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Relaciones Recientes
                        </h2>
                        <Link to="/relaciones" className="text-primary text-sm font-semibold hover:underline">
                            Administrar todas
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {relaciones.length > 0 ? (
                            relaciones.slice(0, 5).map((rel) => (
                                <Link
                                    key={rel.id}
                                    to={`/relaciones/gestionar?id=${rel.id}`}
                                    className="flex items-center justify-between p-4 bg-background hover:bg-surface-elevated border border-border rounded-xl transition-all group"
                                >
                                    <div>
                                        <p className="font-bold text-text-primary group-hover:text-primary transition-colors">
                                            {rel.name}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            {rel.description || "Sin descripción"}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <ArrowRight className="h-5 w-5 text-text-secondary group-hover:translate-x-1 group-hover:text-primary transition-all" />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-12 border-2 border-dashed border-border rounded-xl">
                                <Database className="h-10 w-10 text-text-secondary mx-auto mb-3 opacity-20" />
                                <p className="text-text-secondary">No hay relaciones creadas aún.</p>
                                <Link to="/relaciones" className="text-primary text-sm font-bold hover:underline mt-2 inline-block">
                                    Crear mi primera relación
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar / Info */}
                <div className="space-y-6">
                    <div className="p-6 rounded-4xl bg-linear-to-br from-secondary to-accent text-white shadow-xl overflow-hidden relative group border border-white/10">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
                                    <UserCircle size={24} />
                                </div>
                                <h3 className="text-xl font-black">Mi Perfil</h3>
                            </div>
                            <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                Gestiona tu información personal, preferencias de tema y configuración de la cuenta.
                            </p>
                            <div className="flex flex-col gap-2">
                                <Link
                                    to="/perfil"
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-accent font-black rounded-xl hover:bg-neutral-100 transition-all shadow-lg active:scale-95"
                                >
                                    Ir al Perfil
                                </Link>
                                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all text-sm backdrop-blur-sm border border-white/10">
                                    <Settings size={14} /> Preferencias
                                </button>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
                        <Settings className="absolute -top-4 -right-4 w-24 h-24 text-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                    </div>

                    <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm">
                        <h3 className="font-bold text-text-heading mb-4">Estado del Sistema</h3>
                        <div className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-text-secondary flex items-center gap-1">
                                <Activity className="h-3 w-3" /> Base de Datos SQLite activa
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

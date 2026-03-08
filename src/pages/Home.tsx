import { Link } from "react-router-dom";
import {
    ArrowRight,
    BookOpen,
    Database,
    FileCode2,
    Layers,
    LayoutDashboard,
    Share2,
    Sparkles,
    Zap,
} from "lucide-react";

const seccionesPrincipales = [
    {
        titulo: "Dashboard",
        descripcion: "Visualiza estadísticas, actividad reciente y estado general de tu laboratorio.",
        to: "/dashboard",
        icono: LayoutDashboard,
        badge: "Panel",
        color: "from-primary/20 via-primary/10 to-transparent",
    },
    {
        titulo: "Relaciones",
        descripcion: "Crea y gestiona relaciones, atributos y su contexto académico en un solo lugar.",
        to: "/relaciones",
        icono: Share2,
        badge: "Modelado",
        color: "from-secondary/25 via-secondary/10 to-transparent",
    },
    {
        titulo: "Algoritmos",
        descripcion: "Ejecuta utilidades para análisis y transformación sobre dependencias funcionales.",
        to: "/algoritmos",
        icono: Zap,
        badge: "Cálculo",
        color: "from-accent/25 via-accent/10 to-transparent",
    },
    {
        titulo: "Documentación",
        descripcion: "Accede a conferencias, guías y material de apoyo para reforzar conceptos clave.",
        to: "/documentacion",
        icono: BookOpen,
        badge: "Aprendizaje",
        color: "from-highlight-yellow/25 via-highlight-yellow/10 to-transparent",
    },
];

const resumenFuncional = [
    {
        titulo: "Gestión integral de relaciones",
        detalle: "Administra estructuras relacionales y dependencias funcionales con flujos claros y rápidos.",
        icono: Layers,
    },
    {
        titulo: "Soporte para trabajo académico",
        detalle: "Organiza ejercicios, experimentos y explicaciones para avanzar de teoría a práctica.",
        icono: FileCode2,
    },
    {
        titulo: "Motor local con Tauri + SQLite",
        detalle: "Ejecuta de forma ligera y estable en tu equipo, sin depender de servicios externos.",
        icono: Database,
    },
];

export function Home() {
    return (
        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute top-48 -left-16 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            </div>

            <section className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
                <div className="rounded-3xl border border-border bg-surface/90 p-7 shadow-sm backdrop-blur-md md:p-10">
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                        <Sparkles size={14} />
                        Laboratorio DB
                    </p>

                    <h1 className="max-w-3xl text-3xl font-black leading-tight text-text-heading md:text-5xl">
                        Diseña, analiza y comprende bases de datos relacionales en un entorno moderno.
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                        Esta aplicación integra gestión de relaciones, análisis de dependencias funcionales y material de estudio
                        para que puedas practicar y validar conceptos de forma ágil.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                            to="/dashboard"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Ir al Dashboard <ArrowRight size={16} />
                        </Link>
                        <Link
                            to="/documentacion"
                            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-elevated px-5 py-3 text-sm font-bold text-text-primary transition-colors hover:border-primary/30 hover:text-primary"
                        >
                            Ver documentación <BookOpen size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-4 pb-5 md:px-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {seccionesPrincipales.map((seccion) => {
                        const Icono = seccion.icono;
                        return (
                            <Link
                                key={seccion.to}
                                to={seccion.to}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
                            >
                                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${seccion.color} opacity-90`} />
                                <div className="relative z-10">
                                    <span className="mb-4 inline-flex rounded-full border border-border/70 bg-surface-elevated px-2.5 py-1 text-xs font-semibold text-text-secondary">
                                        {seccion.badge}
                                    </span>
                                    <div className="mb-3 flex items-center justify-between gap-4">
                                        <h2 className="text-xl font-extrabold text-text-heading">{seccion.titulo}</h2>
                                        <div className="rounded-xl bg-surface-elevated p-2 text-text-secondary transition-colors group-hover:text-primary">
                                            <Icono size={20} />
                                        </div>
                                    </div>
                                    <p className="text-sm leading-relaxed text-text-secondary">{seccion.descripcion}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                                        Explorar sección
                                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
                <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8">
                    <h3 className="text-2xl font-black text-text-heading">¿Por qué usar Laboratorio DB?</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-secondary md:text-base">
                        Combina herramientas prácticas y apoyo teórico para reforzar el aprendizaje de diseño relacional.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {resumenFuncional.map((item) => {
                            const Icono = item.icono;
                            return (
                                <article key={item.titulo} className="rounded-2xl border border-border bg-surface-elevated p-4">
                                    <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                                        <Icono size={18} />
                                    </div>
                                    <h4 className="text-base font-bold text-text-primary">{item.titulo}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.detalle}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

import { Link } from "react-router-dom";
import {
    ArrowRight,
    BookOpen,
    Sparkles,
} from "lucide-react";
import SectionCard from "@/componentes/home/SectionCard";
import { seccionesByHome } from "@/data/secciones-by-home";
import { resumenFuncional } from "@/data/resumen-funciones";
import ResumenCard from "@/componentes/home/ResumenCard";





export function Home() {
    return (
        <div className="relative overflow-hidden">
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
                    {seccionesByHome.map((section) => <SectionCard section={section} />)}
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
                <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8">
                    <h3 className="text-2xl font-black text-text-heading">¿Por qué usar Laboratorio DB?</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-secondary md:text-base">
                        Combina herramientas prácticas y apoyo teórico para reforzar el aprendizaje de diseño relacional.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {resumenFuncional.map((item) => <ResumenCard item={item} />)}
                    </div>
                </div>
            </section>
        </div>
    );
}

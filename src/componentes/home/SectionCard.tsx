import { TypeSection } from '@/data/secciones-by-home'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SectionCard({ section }: {
    section: TypeSection
}) {

    const Icon = section.icon
    return (
        <Link
            key={section.to}
            to={section.to}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
        >
            <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${section.color} opacity-90`} />
            <div className="relative z-10">
                <span className="mb-4 inline-flex rounded-full border border-border/70 bg-surface-elevated px-2.5 py-1 text-xs font-semibold text-text-secondary">
                    {section.badge}
                </span>
                <div className="mb-3 flex items-center justify-between gap-4">
                    <h2 className="text-xl font-extrabold text-text-heading">{section.titulo}</h2>
                    <div className="rounded-xl bg-surface-elevated p-2 text-text-secondary transition-colors group-hover:text-primary">
                        <Icon size={20} />
                    </div>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">{section.descripcion}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Explorar sección
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    )
}

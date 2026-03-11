import { TypeResumenFuncional } from "@/data/resumen-funciones"

interface Props {
    item: TypeResumenFuncional
}

export default function ResumenCard({ item }: Props) {
    const Icon = item.icon
    return (
        <article key={item.titulo} className="rounded-2xl border border-border bg-surface-elevated p-4">
            <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                <Icon size={18} />
            </div>
            <h4 className="text-base font-bold text-text-primary">{item.titulo}</h4>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.detalle}</p>
        </article>
    )
}

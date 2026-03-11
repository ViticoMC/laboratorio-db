import { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface Props {
    icon: LucideIcon
    data: string
    title: string
    url?: string
    color: "secondary" | "primary" | "accent"
}
export function MainCard({
    icon, title, data, url, color
}: Props) {
    const Icon = icon
    return (
        <div className={`px-6 py-2 rounded-2xl bg-surface border border-border shadow-sm hover:border-${color} transition-all`}>
            <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-${color}/10 text-${color}`}>
                    <Icon className="h-6 w-6" />
                </div>
            </div>
            <h3 className={`text-${color} text-xs font-bold uppercase tracking-wider mb-4`}>{title}</h3>
            <Link to={url || ""} className={`${url ? "text-md" : "text-4xl cursor-default"} font-bold text-${color}`}>{data}</Link>
        </div>
    )
}

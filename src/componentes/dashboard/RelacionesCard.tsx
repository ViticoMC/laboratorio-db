import { Relation } from "@/types";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RelacionesCard({ rel }: { rel: Relation }) {
    return (
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
    )
}

import React from 'react';
import { DF } from "@/types/df";

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: "primary" | "secondary" | "accent" | "success" | "warning";
    isSelected: boolean;
    onClick: () => void;
}

const cardColorStyles: Record<CardProps["color"], {
    selected: string;
    icon: string;
    title: string;
    dot: string;
}> = {
    primary: {
        selected: "bg-primary/10 border-primary shadow-lg ring-1 ring-primary/20",
        icon: "bg-primary/10 text-primary",
        title: "text-primary",
        dot: "bg-primary",
    },
    secondary: {
        selected: "bg-secondary/10 border-secondary shadow-lg ring-1 ring-secondary/20",
        icon: "bg-secondary/10 text-secondary",
        title: "text-secondary",
        dot: "bg-secondary",
    },
    accent: {
        selected: "bg-accent/10 border-accent shadow-lg ring-1 ring-accent/20",
        icon: "bg-accent/10 text-accent",
        title: "text-accent",
        dot: "bg-accent",
    },
    success: {
        selected: "bg-green-500/10 border-green-500 shadow-lg ring-1 ring-green-500/20",
        icon: "bg-green-500/10 text-green-600",
        title: "text-green-600",
        dot: "bg-green-500",
    },
    warning: {
        selected: "bg-amber-500/10 border-amber-500 shadow-lg ring-1 ring-amber-500/20",
        icon: "bg-amber-500/10 text-amber-600",
        title: "text-amber-600",
        dot: "bg-amber-500",
    },
};

export const AlgorithmCard: React.FC<CardProps> = ({ title, description, icon, color, isSelected, onClick }) => {
    const styles = cardColorStyles[color];

    return (
        <button
            onClick={onClick}
            className={`p-6 rounded-2xl border text-left transition-all group relative overflow-hidden h-full flex flex-col ${isSelected
                ? styles.selected
                : "bg-surface border-border hover:border-primary/50 shadow-sm"
                }`}
        >
            <div className={`p-2 w-fit rounded-lg mb-4 transition-transform group-hover:scale-110 ${styles.icon}`}>
                {icon}
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isSelected ? styles.title : "text-text-primary"}`}>{title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">{description}</p>
            {isSelected && (
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse ${styles.dot}`}></div>
            )}
        </button>
    );
};

interface ResultProps {
    title: string;
    children: React.ReactNode;
}

export const ResultPanel: React.FC<ResultProps> = ({ title, children }) => (
    <div className="mt-8 bg-surface p-8 rounded-[2.5rem] border border-border shadow-soft animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-primary rounded-full"></span>
            {title}
        </h3>
        <div className="p-6 bg-background rounded-3xl border border-border">
            {children}
        </div>
    </div>
);

export const AttributeBadge: React.FC<{ name: string; color?: string }> = ({ name, color = "primary" }) => (
    <span className={`px-3 py-1 bg-${color}/10 text-${color} border border-${color}/20 rounded-lg text-xs font-black shadow-sm`}>
        {name}
    </span>
);

export const DFDisplay: React.FC<{ df: DF; index: number }> = ({ df, index }) => (
    <div className="flex items-center gap-4 p-3 bg-surface/50 border border-border rounded-xl">
        <span className="text-xs font-black text-text-secondary/50">{index + 1}</span>
        <div className="flex flex-wrap gap-1.5">
            {df.implicantes.map(a => <AttributeBadge key={a} name={a} color="primary" />)}
        </div>
        <span className="text-primary font-black">→</span>
        <div className="flex flex-wrap gap-1.5">
            {df.implicados.map(a => <AttributeBadge key={a} name={a} color="secondary" />)}
        </div>
    </div>
);

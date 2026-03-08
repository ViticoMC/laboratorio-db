import React from 'react';
import { Attribute } from "@/types/database";
import { DF } from "@/types/df";

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    isSelected: boolean;
    onClick: () => void;
}

export const AlgorithmCard: React.FC<CardProps> = ({ title, description, icon, color, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={`p-6 rounded-2xl border text-left transition-all group relative overflow-hidden h-full flex flex-col ${isSelected
                ? `bg-${color}/10 border-${color} shadow-lg ring-1 ring-${color}/20`
                : "bg-surface border-border hover:border-primary/50 shadow-sm"
            }`}
    >
        <div className={`p-2 w-fit rounded-lg bg-${color}/10 text-${color} mb-4 transition-transform group-hover:scale-110`}>
            {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isSelected ? `text-${color}` : "text-text-primary"}`}>{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        {isSelected && (
            <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-${color} animate-pulse`}></div>
        )}
    </button>
);

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

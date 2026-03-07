import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { conferencias } from '../data/conferencias';

const colorThemes: Record<string, { bg: string; border: string; text: string; textDark: string }> = {
    blue: { bg: 'bg-blue-conf-bg', border: 'border-blue-conf-border', text: 'text-blue-conf-text', textDark: 'dark:text-blue-conf-text-dark' },
    indigo: { bg: 'bg-indigo-conf-bg', border: 'border-indigo-conf-border', text: 'text-indigo-conf-text', textDark: 'dark:text-indigo-conf-text-dark' },
    emerald: { bg: 'bg-emerald-conf-bg', border: 'border-emerald-conf-border', text: 'text-emerald-conf-text', textDark: 'dark:text-emerald-conf-text-dark' },
    orange: { bg: 'bg-orange-conf-bg', border: 'border-orange-conf-border', text: 'text-orange-conf-text', textDark: 'dark:text-orange-conf-text-dark' },
    purple: { bg: 'bg-purple-conf-bg', border: 'border-purple-conf-border', text: 'text-purple-conf-text', textDark: 'dark:text-purple-conf-text-dark' },
    cyan: { bg: 'bg-cyan-conf-bg', border: 'border-cyan-conf-border', text: 'text-cyan-conf-text', textDark: 'dark:text-cyan-conf-text-dark' },
    rose: { bg: 'bg-rose-conf-bg', border: 'border-rose-conf-border', text: 'text-rose-conf-text', textDark: 'dark:text-rose-conf-text-dark' },
    teal: { bg: 'bg-teal-conf-bg', border: 'border-teal-conf-border', text: 'text-teal-conf-text', textDark: 'dark:text-teal-conf-text-dark' },
    amber: { bg: 'bg-amber-conf-bg', border: 'border-amber-conf-border', text: 'text-amber-conf-text', textDark: 'dark:text-amber-conf-text-dark' },
    pink: { bg: 'bg-pink-conf-bg', border: 'border-pink-conf-border', text: 'text-pink-conf-text', textDark: 'dark:text-pink-conf-text-dark' },
    violet: { bg: 'bg-violet-conf-bg', border: 'border-violet-conf-border', text: 'text-violet-conf-text', textDark: 'dark:text-violet-conf-text-dark' },
    lime: { bg: 'bg-lime-conf-bg', border: 'border-lime-conf-border', text: 'text-lime-conf-text', textDark: 'dark:text-lime-conf-text-dark' },
    sky: { bg: 'bg-sky-conf-bg', border: 'border-sky-conf-border', text: 'text-sky-conf-text', textDark: 'dark:text-sky-conf-text-dark' },
    fuchsia: { bg: 'bg-fuchsia-conf-bg', border: 'border-fuchsia-conf-border', text: 'text-fuchsia-conf-text', textDark: 'dark:text-fuchsia-conf-text-dark' },
};

export function Documentacion() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
            <header className="max-w-7xl mx-auto mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                    Documentación del Laboratorio
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
                    Explora los fundamentos teóricos y prácticos del diseño de bases de datos a través de nuestras conferencias magistrales.
                </p>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conferencias.map((conf) => {
                    const Icon = conf.icon;
                    const colorKey = conf.color.bg.split('-')[1];
                    const theme = colorThemes[colorKey] || colorThemes.blue;

                    return (
                        <Link
                            key={conf.id}
                            to={`/documentacion/conferencia/${conf.id}`}
                            className={`group block p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${theme.bg} dark:bg-slate-800 ${theme.border} dark:border-slate-800`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`${theme.text} ${theme.textDark}`}>
                                    <Icon className="w-12 h-12" />
                                </div>
                                <ChevronRight className="w-6 h-6 text-slate-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                {conf.titulo}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {conf.descripcion}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}




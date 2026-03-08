import { Link } from 'react-router-dom';
import { conferencias } from '../data/conferencias';

const highlightThemes = [
    { bg: 'bg-highlight-green-soft', border: 'border-highlight-green', text: 'text-highlight-green' },
    { bg: 'bg-highlight-purple-soft', border: 'border-highlight-purple', text: 'text-highlight-purple' },
    { bg: 'bg-highlight-yellow-soft', border: 'border-highlight-yellow', text: 'text-highlight-yellow' },
];

export function Documentacion() {
    return (
        <div className="min-h-screen bg-background p-6">
            <header className="max-w-7xl mx-auto mb-12">
                <h1 className="text-4xl font-extrabold text-text-heading mb-4">
                    Documentación del Laboratorio
                </h1>
                <p className="text-xl text-text-secondary max-w-3xl">
                    Explora los fundamentos teóricos y prácticos del diseño de bases de datos a través de nuestras conferencias magistrales.
                </p>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conferencias.map((conf, index) => {
                    const Icon = conf.icon;
                    const theme = highlightThemes[index % highlightThemes.length];

                    return (
                        <Link
                            key={conf.id}
                            to={`/documentacion/conferencia/${conf.id}`}
                            className={`group relative block p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${theme.bg} dark:bg-surface-elevated ${theme.border} dark:border-border overflow-hidden`}
                        >
                            <div className={`absolute -top-2 -right-2 w-16 h-16 flex items-center justify-center rotate-12 transition-transform group-hover:rotate-0`}>
                                <div className={`absolute inset-0 bg-foreground/20  backdrop-blur-md rounded-full`} />
                                <span className={`relative text-2xl font-black ${theme.text} opacity-60 group-hover:opacity-100 transition-opacity`}>
                                    {conf.id}
                                </span>
                            </div>

                            <div className="flex justify-between items-start mb-6">
                                <div className={`${theme.text}`}>
                                    <Icon className="w-12 h-12" />
                                </div>
                                {/* <ChevronRight className="w-6 h-6 text-text-secondary opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" /> */}
                            </div>
                            <h3 className="text-xl font-bold text-text-heading mb-2 leading-tight">
                                {conf.titulo}
                            </h3>
                            <p className="text-text-body text-sm leading-relaxed">
                                {conf.descripcion}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}




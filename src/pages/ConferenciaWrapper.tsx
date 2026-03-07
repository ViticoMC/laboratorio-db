import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import * as Conferencias from './conferencias';
import { conferencias } from '@/data/conferencias';

export function ConferenciaWrapper() {
    const { id } = useParams<{ id: string }>();

    const conferenciaMap: Record<string, any> = {
        '1': Conferencias.Conf1,
        '2': Conferencias.Conf2,
        '3': Conferencias.Conf3,
        '4': Conferencias.Conf4,
        '5': Conferencias.Conf5,
        '6': Conferencias.Conf6,
        '7': Conferencias.Conf7,
        '8': Conferencias.Conf8,
        '9': Conferencias.Conf9,
        '10': Conferencias.Conf10,
        '11': Conferencias.Conf11,
        '12': Conferencias.Conf12,
        '13': Conferencias.Conf13,
        '14': Conferencias.Conf14,
    };

    const { titulo, smallTitulo } = conferencias.find(conf => conf.id === Number(id)) || {};


    const ConferenciaComponent = id ? conferenciaMap[id] : null;
    window.scrollTo(0, 0); // Asegura que la página se desplace al top al cargar una conferencia

    if (!ConferenciaComponent || !titulo || !smallTitulo) {
        return (
            <div className="p-8 text-center pt-20 bg-surface min-h-screen">
                <h2 className="text-2xl font-bold mb-4 text-text-primary">Conferencia no encontrada</h2>
                <Link to="/documentacion" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center gap-2">
                    <ArrowLeft size={20} /> Volver a la documentación
                </Link>
            </div>
        );
    }

    return (
        <ConferenciaLayout titulo={titulo} smallTitulo={smallTitulo} id={Number(id)}>
            <ConferenciaComponent />
        </ConferenciaLayout>
    );
}

interface ConferenciaLayoutProps {
    titulo: string;
    smallTitulo: string;
    children: React.ReactNode;
    id: number;
}

function ConferenciaLayout({ titulo, smallTitulo, children, id }: ConferenciaLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans scroll-smooth">
            {/* Header con botón atrás */}
            <header className=" py-20 px-6 shadow-lg">
                <div className="max-w-5xl mx-auto">
                    <Link to="/documentacion" className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-all mb-6 hover:scale-[1.1]">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
                            Conferencia {id} : {titulo}
                        </h1>
                        <p className="text-2xl  font-light">
                            {smallTitulo}
                        </p>
                    </div>
                </div>
            </header>
            {children}
            <div className="mt-12 py-6 border-y border-border-base/30 flex flex-col items-center">
                <p className="text-text-secondary text-[10px] uppercase tracking-widest">
                    Sistemas de Bases de Datos I
                </p>
                <p className="text-text-secondary text-[10px] opacity-50 mt-1">© 2026 Material Académico</p>
            </div>
        </div>
    );
}

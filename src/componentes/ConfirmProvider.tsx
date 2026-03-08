import React, { createContext, useContext, useState, useCallback } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmOptions {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'warning' | 'info';
}

interface ConfirmContextType {
    confirm: (options: ConfirmOptions) => Promise<boolean>;
}

const ConfirmContext = createContext<ConfirmContextType | undefined>(undefined);

export const useConfirm = () => {
    const context = useContext(ConfirmContext);
    if (!context) {
        throw new Error('useConfirm must be used within a ConfirmProvider');
    }
    return context;
};

export const ConfirmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        options: ConfirmOptions;
        resolve: (value: boolean) => void;
    } | null>(null);

    const confirm = useCallback((options: ConfirmOptions) => {
        return new Promise<boolean>((resolve) => {
            setModalState({
                isOpen: true,
                options,
                resolve,
            });
        });
    }, []);

    const handleClose = (value: boolean) => {
        if (modalState) {
            modalState.resolve(value);
            setModalState(null);
        }
    };

    return (
        <ConfirmContext.Provider value={{ confirm }}>
            {children}
            {modalState && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
                        onClick={() => handleClose(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-md bg-surface border border-border rounded-[2rem] shadow-2xl p-8 animate-in zoom-in-95 fade-in duration-200">
                        <button
                            onClick={() => handleClose(false)}
                            className="absolute top-4 right-4 p-2 text-text-secondary hover:text-text-primary transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className={`p-4 rounded-2xl mb-6 ${modalState.options.variant === 'danger' ? 'bg-rose-500/10 text-rose-500' :
                                    modalState.options.variant === 'warning' ? 'bg-amber-500/10 text-amber-500' :
                                        'bg-primary/10 text-primary'
                                }`}>
                                <AlertTriangle size={32} />
                            </div>

                            <h3 className="text-2xl font-black text-text-heading mb-2">
                                {modalState.options.title}
                            </h3>
                            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                                {modalState.options.message}
                            </p>

                            <div className="flex gap-3 w-full">
                                <button
                                    onClick={() => handleClose(false)}
                                    className="flex-1 px-6 py-3 bg-surface border border-border text-text-primary font-bold rounded-xl hover:bg-background transition-all"
                                >
                                    {modalState.options.cancelText || 'Cancelar'}
                                </button>
                                <button
                                    onClick={() => handleClose(true)}
                                    className={`flex-1 px-6 py-3 text-white font-black rounded-xl transition-all shadow-lg ${modalState.options.variant === 'danger' ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20' :
                                            modalState.options.variant === 'warning' ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20' :
                                                'bg-primary hover:bg-primary/90 shadow-primary/20'
                                        }`}
                                >
                                    {modalState.options.confirmText || 'Continuar'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ConfirmContext.Provider>
    );
};
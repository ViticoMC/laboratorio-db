import React, { useState, createContext, useContext, useCallback } from 'react';
import { CheckCircle2, AlertCircle, XCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
    id: string;
    type: ToastType;
    title: string;
    message?: string;
}

interface ToastContextType {
    showToast: (type: ToastType, title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((type: ToastType, title: string, message?: string) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, type, title, message }]);

        // Auto remove after 5 seconds
        setTimeout(() => {
            removeToast(id);
        }, 5000);
    }, []);

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-9999 flex flex-col gap-3 pointer-events-none">
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem: React.FC<{ toast: Toast; onRemove: () => void }> = ({ toast, onRemove }) => {
    const icons = {
        success: <CheckCircle2 className="text-emerald-500 w-5 h-5" />,
        error: <XCircle className="text-rose-500 w-5 h-5" />,
        warning: <AlertCircle className="text-amber-500 w-5 h-5" />,
        info: <Info className="text-sky-500 w-5 h-5" />,
    };

    const bgStyles = {
        success: 'bg-emerald-500/10 border-emerald-500/20',
        error: 'bg-rose-500/10 border-rose-500/20',
        warning: 'bg-amber-500/10 border-amber-500/20',
        info: 'bg-sky-500/10 border-sky-500/20',
    };

    return (
        <div
            className={`pointer-events-auto flex items-start gap-4 p-4 rounded-2xl border backdrop-blur-md shadow-2xl animate-in slide-in-from-right duration-300 min-w-[320px] max-w-md ${bgStyles[toast.type]}`}
            role="alert"
        >
            <div className="mt-0.5">{icons[toast.type]}</div>
            <div className="flex-1">
                <h4 className="font-bold text-text-primary text-sm leading-tight">{toast.title}</h4>
                {toast.message && <p className="text-text-secondary text-xs mt-1 leading-relaxed">{toast.message}</p>}
            </div>
            <button
                onClick={onRemove}
                className="text-text-secondary hover:text-text-primary transition-colors p-1"
            >
                <X size={14} />
            </button>
        </div>
    );
};
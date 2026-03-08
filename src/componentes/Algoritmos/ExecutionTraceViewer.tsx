import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, Play, RotateCcw, ListChecks } from "lucide-react";
import type { ExecutionStep } from "@/types/executionStep";

interface ExecutionTraceViewerProps {
  title?: string;
  canExecute?: boolean;
  executeLabel?: string;
  onExecute: () => Promise<ExecutionStep[]>;
  renderResult: () => ReactNode;
  onReset?: () => void;
}

const typeLabel: Record<ExecutionStep["type"], string> = {
  init: "Init",
  iteration: "Iteracion",
  check: "Check",
  match: "Match",
  result: "Result",
  info: "Info",
};

const typeColorClass: Record<NonNullable<ExecutionStep["color"]>, string> = {
  blue: "bg-blue-500/10 text-blue-600 border-blue-500/30",
  green: "bg-green-500/10 text-green-600 border-green-500/30",
  amber: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  red: "bg-red-500/10 text-red-600 border-red-500/30",
  violet: "bg-violet-500/10 text-violet-600 border-violet-500/30",
};

const defaultColorClass = "bg-primary/10 text-primary border-primary/30";

export function ExecutionTraceViewer({
  title = "Ejecucion Paso a Paso",
  canExecute = true,
  executeLabel = "Ejecutar Algoritmo",
  onExecute,
  renderResult,
  onReset,
}: ExecutionTraceViewerProps) {
  const [steps, setSteps] = useState<ExecutionStep[]>([]);
  const [running, setRunning] = useState(false);

  async function handleExecute() {
    setRunning(true);
    try {
      const executionSteps = await onExecute();
      setSteps(executionSteps);
    } finally {
      setRunning(false);
    }
  }

  function handleReset() {
    setSteps([]);
    onReset?.();
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <button
          disabled={!canExecute || running}
          onClick={handleExecute}
          className="px-6 py-3 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
        >
          <Play size={16} /> {running ? "Ejecutando..." : executeLabel}
        </button>

        <button
          disabled={steps.length === 0 && !running}
          onClick={handleReset}
          className="px-6 py-3 bg-surface border border-border text-text-secondary font-bold rounded-xl hover:border-primary/40 hover:text-primary transition-all disabled:opacity-50"
        >
          <span className="inline-flex items-center gap-2">
            <RotateCcw size={16} /> Limpiar Traza
          </span>
        </button>
      </div>

      {steps.length > 0 && (
        <div className="bg-surface-elevated p-6 rounded-3xl border border-border shadow-inner animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-xl font-black mb-5 flex items-center gap-3 text-text-secondary">
            <ListChecks size={20} className="text-primary" /> {title}
          </h3>

          <div className="space-y-3">
            {steps.map((step, index) => {
              const colorClass = step.color ? typeColorClass[step.color] : defaultColorClass;
              return (
                <details
                  key={`${step.type}-${index}-${step.content}`}
                  className="group p-4 bg-background rounded-2xl border border-border"
                  open={index >= Math.max(steps.length - 2, 0)}
                >
                  <summary className="list-none flex items-start justify-between gap-3 cursor-pointer">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2.5 py-1 rounded-md border text-xs font-black uppercase tracking-wide ${colorClass}`}>
                          {typeLabel[step.type]}
                        </span>
                        {typeof step.iteration === "number" && (
                          <span className="text-xs font-bold text-text-secondary">
                            Iteracion {step.iteration}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-text-primary">{step.content}</p>
                    </div>
                    <ChevronDown size={16} className="text-text-secondary transition-transform group-open:rotate-180 shrink-0 mt-1" />
                  </summary>

                  {step.highlight && (
                    <div className="mt-3 p-3 bg-surface border border-border rounded-xl">
                      <p className="text-xs font-black uppercase text-text-secondary mb-1">Detalle</p>
                      <p className="font-mono text-sm text-text-primary">{step.highlight}</p>
                    </div>
                  )}
                </details>
              );
            })}
          </div>

          <div className="mt-6">{renderResult()}</div>
        </div>
      )}
    </div>
  );
}

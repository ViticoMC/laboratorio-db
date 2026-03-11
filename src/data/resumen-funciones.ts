import { Database, FileCode2, Layers } from "lucide-react";

export const resumenFuncional = [
  {
    titulo: "Gestión integral de relaciones",
    detalle:
      "Administra estructuras relacionales y dependencias funcionales con flujos claros y rápidos.",
    icon: Layers,
  },
  {
    titulo: "Soporte para trabajo académico",
    detalle:
      "Organiza ejercicios, experimentos y explicaciones para avanzar de teoría a práctica.",
    icon: FileCode2,
  },
  {
    titulo: "Motor local con Tauri + SQLite",
    detalle:
      "Ejecuta de forma ligera y estable en tu equipo, sin depender de servicios externos.",
    icon: Database,
  },
];

export type TypeResumenFuncional = (typeof resumenFuncional)[0];

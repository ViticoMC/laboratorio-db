import { BookOpen, LayoutDashboard, Share2, Zap } from "lucide-react";

export const seccionesByHome = [
  {
    titulo: "Dashboard",
    descripcion:
      "Visualiza estadísticas, actividad reciente y estado general de tu laboratorio.",
    to: "/dashboard",
    icon: LayoutDashboard,
    badge: "Panel",
    color: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    titulo: "Relaciones",
    descripcion:
      "Crea y gestiona relaciones, atributos y su contexto académico en un solo lugar.",
    to: "/relaciones",
    icon: Share2,
    badge: "Modelado",
    color: "from-secondary/25 via-secondary/10 to-transparent",
  },
  {
    titulo: "Algoritmos",
    descripcion:
      "Ejecuta utilidades para análisis y transformación sobre dependencias funcionales.",
    to: "/algoritmos",
    icon: Zap,
    badge: "Cálculo",
    color: "from-accent/25 via-accent/10 to-transparent",
  },
  {
    titulo: "Documentación",
    descripcion:
      "Accede a conferencias, guías y material de apoyo para reforzar conceptos clave.",
    to: "/documentacion",
    icon: BookOpen,
    badge: "Aprendizaje",
    color: "from-highlight-yellow/25 via-highlight-yellow/10 to-transparent",
  },
];

export type TypeSection = (typeof seccionesByHome)[0];

import {
  Database,
  BookOpen,
  Table2,
  ArrowRightLeft,
  Calculator,
  SquareFunction,
  LucideIcon,
} from "lucide-react";

interface Conferencia {
  id: number;
  titulo: string;
  smallTitulo: string;
  descripcion: string;
  icon: LucideIcon;
  color: {
    bg: string;
    darkBg: string;
    border: string;
    darkBorder: string;
    text: string;
  };
}

export const conferencias: Conferencia[] = [
  {
    id: 1,
    titulo: "Introducción a las Bases de Datos",
    smallTitulo: "Modelo Entidad/Interrelación (E/R)",
    descripcion:
      "Fundamentos del Modelo Entidad/Interrelación (E/R), sistemas de bases de datos y arquitectura ANSI/SPARC",
    icon: Database,
    color: {
      bg: "bg-blue-50",
      darkBg: "dark:bg-slate-800",
      border: "border-blue-200",
      darkBorder: "dark:border-blue-800",
      text: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    id: 2,
    titulo: "Modelo Entidad Interrelación Extendido (EE/R)",
    smallTitulo:
      "Extensiones para el diseño conceptual avanzado de bases de datos",
    descripcion:
      "Semántica avanzada, cardinalidades, interrelaciones débiles y jerarquías de generalización/especialización",
    icon: BookOpen,
    color: {
      bg: "bg-indigo-50",
      darkBg: "dark:bg-slate-800",
      border: "border-indigo-200",
      darkBorder: "dark:border-indigo-800",
      text: "text-indigo-600 dark:text-indigo-400",
    },
  },
  {
    id: 3,
    titulo: "El Modelo Relacional",
    smallTitulo: "Estructuras, Claves y Restricciones de Integridad",
    descripcion:
      "Estructura de relaciones, dominios, atributos, tipos de claves y restricciones de integridad",
    icon: Table2,
    color: {
      bg: "bg-emerald-50",
      darkBg: "dark:bg-slate-800",
      border: "border-emerald-200",
      darkBorder: "dark:border-emerald-800",
      text: "text-emerald-600 dark:text-emerald-400",
    },
  },
  {
    id: 4,
    titulo: "Transformación E/R a Relacional",
    smallTitulo: "Diagrama E/R → Esquema Relacional",
    descripcion:
      "Reglas de conversión de entidades, interrelaciones M:M, 1:N y atributos al esquema relacional",
    icon: ArrowRightLeft,
    color: {
      bg: "bg-orange-50",
      darkBg: "dark:bg-slate-800",
      border: "border-orange-200",
      darkBorder: "dark:border-orange-800",
      text: "text-orange-600 dark:text-orange-400",
    },
  },
  {
    id: 5,
    titulo: "Álgebra Relacional",
    smallTitulo: "Lenguajes Relacionales y Álgebra Relacional",
    descripcion:
      "Álgebra Relacional: operaciones monádicas (selección, proyección) y operaciones de conjunto (unión, intersección)",
    icon: Calculator,
    color: {
      bg: "bg-purple-50",
      darkBg: "dark:bg-slate-800",
      border: "border-purple-200",
      darkBorder: "dark:border-purple-800",
      text: "text-purple-600 dark:text-purple-400",
    },
  },
  {
    id: 6,
    titulo: "Cálculo Relacional",
    smallTitulo:
      "Lenguajes No Procedimentales basados en la Lógica de Predicados",
    descripcion:
      "Lenguajes no procedimentales basados en lógica de predicados: cálculo de tuplas y dominios",
    icon: SquareFunction,
    color: {
      bg: "bg-cyan-50",
      darkBg: "dark:bg-slate-800",
      border: "border-cyan-200",
      darkBorder: "dark:border-cyan-800",
      text: "text-cyan-600 dark:text-cyan-400",
    },
  },
  {
    id: 7,
    titulo: "Teoría del Diseño",
    smallTitulo: "Normalización de Bases de Datos Relacionales",
    descripcion:
      "Normalización de bases de datos: dependencias funcionales, problemas de mal diseño y anomalías",
    icon: Database,
    color: {
      bg: "bg-rose-50",
      darkBg: "dark:bg-slate-800",
      border: "border-rose-200",
      darkBorder: "dark:border-rose-800",
      text: "text-rose-600 dark:text-rose-400",
    },
  },
  {
    id: 8,
    titulo: "Propiedades de las DF",
    smallTitulo: "Clausura, Equivalencia y Cubrimiento Minimal",
    descripcion:
      "Clausura de atributos, equivalencia de dependencias y cubrimiento minimal",
    icon: Table2,
    color: {
      bg: "bg-teal-50",
      darkBg: "dark:bg-slate-800",
      border: "border-teal-200",
      darkBorder: "dark:border-teal-800",
      text: "text-teal-600 dark:text-teal-400",
    },
  },
  {
    id: 9,
    titulo: "Descomposición de Relaciones",
    smallTitulo: "Propiedades de un Diseño Lógico Correcto",
    descripcion:
      "Propiedades de un diseño lógico correcto: acople sin pérdida y preservación de dependencias funcionales",
    icon: BookOpen,
    color: {
      bg: "bg-amber-50",
      darkBg: "dark:bg-slate-800",
      border: "border-amber-200",
      darkBorder: "dark:border-amber-800",
      text: "text-amber-600 dark:text-amber-400",
    },
  },
  {
    id: 10,
    titulo: "SQL Estándar (DML)",
    smallTitulo: "Dominio total de Consultas Simples y Estructura de Datos",
    descripcion:
      "Dominio total de consultas simples: sentencias SELECT, INSERT, UPDATE, DELETE y tipos de datos SQL",
    icon: Calculator,
    color: {
      bg: "bg-pink-50",
      darkBg: "dark:bg-slate-800",
      border: "border-pink-200",
      darkBorder: "dark:border-pink-800",
      text: "text-pink-600 dark:text-pink-400",
    },
  },
  {
    id: 11,
    titulo: "SQL Avanzado (DML)",
    smallTitulo: "Ordenamiento, Funciones de Columna y Agrupamiento",
    descripcion:
      "Ordenamiento de resultados (ORDER BY), funciones de agregación (SUM, AVG, MIN, MAX, COUNT) y agrupamiento (GROUP BY, HAVING)",
    icon: SquareFunction,
    color: {
      bg: "bg-violet-50",
      darkBg: "dark:bg-slate-800",
      border: "border-violet-200",
      darkBorder: "dark:border-violet-800",
      text: "text-violet-600 dark:text-violet-400",
    },
  },
  {
    id: 12,
    titulo: "Consultas Multitablas",
    smallTitulo: "Uniones de Tablas y Subconsultas Correlacionadas",
    descripcion:
      "Uniones de tablas (JOINs), subconsultas no correlacionadas y subconsultas correlacionadas",
    icon: ArrowRightLeft,
    color: {
      bg: "bg-lime-50",
      darkBg: "dark:bg-slate-800",
      border: "border-lime-200",
      darkBorder: "dark:border-lime-800",
      text: "text-lime-600 dark:text-lime-400",
    },
  },
  {
    id: 13,
    titulo: "Modificación y Vistas en SQL",
    smallTitulo: "Actualización de Datos y Seguridad Lógica",
    descripcion:
      "Actualización de datos (INSERT, UPDATE, DELETE), creación de vistas (CREATE VIEW) y seguridad lógica",
    icon: Database,
    color: {
      bg: "bg-sky-50",
      darkBg: "dark:bg-slate-800",
      border: "border-sky-200",
      darkBorder: "dark:border-sky-800",
      text: "text-sky-600 dark:text-sky-400",
    },
  },
  {
    id: 14,
    titulo: "Vistas y Seguridad",
    smallTitulo: "Mecanismos de Protección y Control de Acceso",
    descripcion:
      "Mecanismos de protección, seguridad física y lógica, autorización (GRANT/REVOKE) y control de acceso",
    icon: BookOpen,
    color: {
      bg: "bg-fuchsia-50",
      darkBg: "dark:bg-slate-800",
      border: "border-fuchsia-200",
      darkBorder: "dark:border-fuchsia-800",
      text: "text-fuchsia-600 dark:text-fuchsia-400",
    },
  },
];

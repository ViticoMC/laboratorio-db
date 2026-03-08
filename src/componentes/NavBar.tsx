import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/componentes/ThemeToggle";
import { Home, LayoutDashboard, User, Share2, FileText, Zap } from "lucide-react";

export default function NavBar() {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { to: "/relaciones", label: "Relaciones", icon: <Share2 size={18} /> },
    { to: "/algoritmos", label: "Algoritmos", icon: <Zap size={18} /> },
    { to: "/documentacion", label: "Documentación", icon: <FileText size={18} /> },
    { to: "/perfil", label: "Perfil", icon: <User size={18} /> },
  ];

  return (
    <nav className="p-4 border-b border-border flex items-center justify-between bg-surface/80 backdrop-blur-md shadow-sm transition-all duration-300
      fixed w-full top-0 left-0 z-50 h-16
      ">
      <div className="flex gap-2 items-center">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200
                ${isActive
                  ? "bg-primary/10 text-primary shadow-xs"
                  : "text-secondary hover:bg-secondary/10 hover:text-primary"
                }
              `}
            >
              <span className={`${isActive ? "scale-110" : "group-hover:scale-110"} transition-transform`}>
                {link.icon}
              </span>
              <span className="hidden md:inline">{link.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  )
}

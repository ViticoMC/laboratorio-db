import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Dashboard, Perfil, Relaciones, Documentacion, ConferenciaWrapper } from "./pages";
import "./App.css";
import ThemeToggle from "@/componentes/ThemeToggle";

function App() {

  return (
    <Router>
      <nav className="p-4 border-b border-gray-300 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900 shadow-sm transition-colors duration-300
      fixed w-full top-0 left-0 z-50 h-16
      ">
        <div className="flex gap-4 ">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">Home</Link>
          <Link to="/dashboard" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">Dashboard</Link>
          <Link to="/perfil" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">Perfil</Link>
          <Link to="/relaciones" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">Relaciones</Link>
          <Link to="/documentacion" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">Documentación</Link>
        </div>
        <ThemeToggle />
      </nav>

      <main className="p-0  min-h-screen bg-surface transition-colors duration-300 pt-16">
        <Routes>
          <Route path="/" element={<div className="p-4"><Home /></div>} />
          <Route path="/dashboard" element={<div className="p-4"><Dashboard /></div>} />
          <Route path="/perfil" element={<div className="p-4"><Perfil /></div>} />
          <Route path="/relaciones" element={<div className="p-4"><Relaciones /></div>} />
          <Route path="/documentacion" element={<Documentacion />} />
          <Route path="/documentacion/conferencia/:id" element={<ConferenciaWrapper />} />
        </Routes>
      </main>
    </Router>
  );
}


export default App;

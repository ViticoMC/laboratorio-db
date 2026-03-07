import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Dashboard, Perfil, Relaciones, Documentacion, ConferenciaWrapper } from "./pages";
import "./App.css";
import ThemeToggle from "@/componentes/ThemeToggle";
import NavBar from "@/componentes/NavBar";

function App() {

  return (
    <Router>
      <NavBar/>
     

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

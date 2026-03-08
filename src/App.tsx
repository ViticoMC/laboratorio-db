import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Dashboard, Perfil, Relaciones, Documentacion, ConferenciaWrapper, Algoritmos, GestionarRelaciones, FdEditor } from "./pages";
import "./App.css";
import NavBar from "@/componentes/NavBar";
import { ToastProvider } from "@/componentes/ToastProvider";
import { ConfirmProvider } from "@/componentes/ConfirmProvider";

function App() {

  return (
    <Router>
      <ToastProvider>
        <ConfirmProvider>
          <NavBar />


          <main className="p-0  min-h-screen bg-surface transition-colors duration-300 pt-16">
            <Routes>
              <Route path="/" element={<div className="p-4"><Home /></div>} />
              <Route path="/dashboard" element={<div className="p-4"><Dashboard /></div>} />
              <Route path="/perfil" element={<div className="p-4"><Perfil /></div>} />
              <Route path="/relaciones" element={<div className="p-4"><Relaciones /></div>} />
              <Route path="/relaciones/nueva" element={<div className="p-4"><GestionarRelaciones /></div>} />
              <Route path="/relaciones/gestionar" element={<div className="p-4"><GestionarRelaciones /></div>} />
              <Route path="/relaciones/fd-editor" element={<div className="p-4"><FdEditor /></div>} />
              <Route path="/algoritmos" element={<div className="p-4"><Algoritmos /></div>} />
              <Route path="/documentacion" element={<Documentacion />} />
              <Route path="/documentacion/conferencia/:id" element={<ConferenciaWrapper />} />
            </Routes>
          </main>
        </ConfirmProvider>
      </ToastProvider>
    </Router>
  );
}


export default App;

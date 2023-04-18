import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import { PanelDeMantenimiento } from "./pages/PanelDeMantenimiento";
import { Landing } from "./pages/Landing";
import { UserPanel } from "./pages/UserPanel";
import { Calculadoras } from "./pages/Calculadoras";
import { Control } from "./components/Control";
import { Navbar } from "./components/Navbar";
import { Mantenimiento } from "./components/Mantenimiento";
import Bitacora from "./components/Bitacora";
import Utilidades from "./components/Utilidades";
import HistorialUsuarios from "./components/HistorialUsuarios";
import { Checklist } from "./components/Checklist";



function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="Aqua_React/" element={<Landing />} />
          <Route path="/panel" element={<UserPanel />} />
          <Route path="/panel/control-usuario" element={<Control/>}/>
          <Route path="/panel/mantenimiento" element={<Mantenimiento/>}/>
          <Route path="/panel/mantenimiento/lista-de-tareas" element={<Checklist/>}/>
          <Route path="/panel/utilidades" element={<Utilidades/>}/>
          <Route path="/panel/utilidades/historial/usuarios" element={<HistorialUsuarios/>}/>
          <Route path="/panel/bitacora" element={<Bitacora/>} />
          <Route path="/mantenimiento" element={<PanelDeMantenimiento />} />
          <Route path="/calcular" element={<Calculadoras/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

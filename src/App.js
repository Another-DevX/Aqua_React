import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import { PanelDeMantenimiento } from "./pages/PanelDeMantenimiento";
import { Landing } from "./pages/Landing";
import { UserPanel } from "./pages/UserPanel";
import { Calculadoras } from "./pages/Calculadoras";
import { Control } from "./components/Control";
import { Navbar } from "./components/Navbar";
import { Mantenimiento } from "./components/Mantenimiento";



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
          <Route path="/panel/utilidades"/>
          <Route path="/panel/bitacoras" />
          <Route path="/mantenimiento" element={<PanelDeMantenimiento />} />
          <Route path="/calcular" element={<Calculadoras/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import { PanelDeMantenimiento } from "./pages/PanelDeMantenimiento";
import { Landing } from "./pages/Landing";
import { UserPanel } from "./pages/UserPanel";
import { Calculadoras } from "./pages/Calculadoras";



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="Aqua_React/" element={<Landing />} />
          <Route path="/panel" element={<UserPanel />} />
          <Route path="/mantenimiento" element={<PanelDeMantenimiento />} />
          <Route path="/calcular" element={<Calculadoras/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

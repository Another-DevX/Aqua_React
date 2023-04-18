import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Utilidades() {
  return (
    <div className="h-screen flex back_gradient justify-center items-center pt-10 ">
      <Accordion className="w-5/6">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Calculadoras</Accordion.Header>
          <Accordion.Body>
            <div className="flex flex-col justify-evenly w-full text-center gap-2">
              <a href="/calcular" className="p-2 rounded-md text-white bg-blue-400 hover:bg-blue-600">
                PH
              </a>
              <button onClick={()=>alert("Aun no esta disponible")} className="p-2 rounded-md text-white bg-blue-400 hover:bg-blue-600">
                Litros de agua piscina
              </button>
              <button onClick={()=>alert("Aun no esta disponible")} className="p-2 rounded-md text-white bg-blue-400 hover:bg-blue-600">
                Cloro
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Historiales</Accordion.Header>
          <Accordion.Body>
            <div className="flex flex-col justify-evenly w-full text-center gap-2">
              <a href="/panel/utilidades/historial/usuarios" className="p-2 rounded-md text-white bg-blue-400 hover:bg-blue-600">
                Control de usuarios
              </a>
              <button className="p-2 rounded-md text-white bg-blue-400 hover:bg-blue-600">
                Bitacoras
              </button>
              <button className="p-2 rounded-md text-white bg-blue-400 hover:bg-blue-600">
                Mantenimientos
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Galeria</Accordion.Header>
          <Accordion.Body>
            <div className="flex flex-col justify-evenly w-full text-center gap-2">
              <button onClick={()=> alert("Esta funcionalidad estara disponible en un futuro")} className="p-2 rounded-md text-white bg-blue-400 hover:bg-blue-600">
                Tutoriales
              </button>
              <button onClick={()=> alert("Esta funcionalidad estara disponible en un futuro")} className="p-2 rounded-md text-white bg-blue-400 hover:bg-blue-600">
                Paso a paso
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className=""></div>
    </div>
  );
}

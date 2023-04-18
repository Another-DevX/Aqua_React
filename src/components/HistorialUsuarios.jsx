import React from "react";

const historial = [
  {
    nombre: "Luis Diaz",
    apto: "101",
    lt12: false,
    visitante: false,
    nombreAcompañante: "",
  },
  {
    nombre: "Andrea Gomez",
    apto: "202",
    lt12: false,
    visitante: true,
    nombreAcompañante: "Marta Diaz",
  },
  {
    nombre: "Carlos Perez",
    apto: "801",
    lt12: false,
    visitante: false,
    nombreAcompañante: "",
  },
  {
    nombre: "Mateo Ortiz",
    apto: "903",
    lt12: false,
    visitante: false,
    nombreAcompañante: "",
  },
  {
    nombre: "Sofia Reyes",
    apto: "1001",
    lt12: true,
    visitante: false,
    nombreAcompañante: "Miguel Ortiz",
  },
  {
    nombre: "Alejandro Martinez",
    apto: "102",
    lt12: false,
    visitante: false,
    nombreAcompañante: "",
  },
];
export default function HistorialUsuarios() {
  return (
    <div className="min-h-screen flex justify-center items-center pt-20 back_gradient">
      <div className="m-10 flex bg-white rounded-md w-2/6 flex-col gap-2">
        {historial.map((usuario) => (
          <div className="flex bg-white flex-col gap-2 p-5 m-2 shadow-md   rounded-lg">
            <aside>
              <h1 className="font-bold">Nombre: </h1> <p>{usuario.nombre}</p>
            </aside>
            <aside>
              <h1 className="font-bold">Apto: </h1> <p>{usuario.apto}</p>
            </aside>
            {usuario.lt12 && (
              <>
                <h1 className="font-bold">Menor de 12 años</h1>
                <aside>
                  <h1>Acompañante: </h1> <p>{usuario.apto}</p>
                </aside>
              </>
            )}
            {usuario.visitante && (
              <>
                <h1 className="italic">Visitante</h1>
                <aside>
                  <h1 className="font-bold">Acompañante: </h1> <p>{usuario.apto}</p>
                </aside>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

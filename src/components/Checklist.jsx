import React from "react";
import { CheckItem } from "./CheckItem";

const todos = [
  { link:"" ,func: false, text: "Quita todas las hojas, bichos y suciedad de la superficie del agua con un saca hojas.", title: "Pasa el saca hojas" },
  { link:"" ,func: false, text: "1. Introduce el Aspira-Fondos (Aspiradora)\n2. Introduce la manguera de manera vertical para que no quede aire atrapado en la manguera. \n", title: "Aspira la piscina" },
  { link:"" ,func: false, text: "Esto es un texto de prueba", title: "Mide el nivel de cloro y PH" },
  { link:"/calcular" , func: true, text: "Esto es un texto de prueba", title: "Ajusta el PH entre 7.2 y 7.6" },
  { link:"",func: true, text: "Esto es un texto de prueba", title: "Añade cloro a la piscina" },
  { link:"",func: false, text: "Esto es un texto de prueba", title: "Filtra el agua de la piscina" },
  { link:"",func: false, text: "Esto es un texto de prueba", title: "Cubre tu piscina al final del dia" },
];

function Checklist() {
  return (
    <>
      <div className="flex flex-col items-center rounded-md gap-4 m-8 p-5 w-5/6 max-w-md bg-white shadow-xl  ">
        <h1 className="text-2xl font-bold text-center text-blue-500">
          Mantenimiento diario
        </h1>
        <ul className="flex flex-col gap-4 ">
          {todos.map((item) => (
            <CheckItem item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export { Checklist };

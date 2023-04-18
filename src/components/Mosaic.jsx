import React from "react";

const a__styles =
  "text-center active:translate-y-2  text-blue-600 transition-all ease-in-out duration-200 hover:text-white hover:bg-gradient-to-tl hover:from-blue-200 hover:via-blue-400 hover:to-blue-600 font-bold shadow-lg  flex justify-center items-center bg-white rounded-md w-36 h-36 sm:h-48 sm:w-48 md:w-64 lg:h-60 lg:w-60 lg:text-lg";

export default function Mosaic() {
  return (
    <>
      <div className="grid  grid-cols-2 grid-rows-2 gap-4">
        <a href="/panel/control-usuario" className={a__styles}>
          Control de usuarios
        </a>
        <a href="/panel/mantenimiento" className={a__styles}>
          Mantenimiento
        </a>
        <a href="/panel/utilidades" className={a__styles}>
          Utilidades
        </a>
        <a href="/panel/bitacora" className={a__styles}>
          Bitacora
        </a>
      </div>
    </>
  );
}

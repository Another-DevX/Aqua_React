import React, { useState } from "react";

function ModalForm({setLitros, setIsOpen}) {
  const [largo, setLargo] = useState(null);
  const [ancho, setAncho] = useState(null);
  const [alto, setAlto] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLitros(largo * ancho * alto * 1000)
    setIsOpen(false)
  };

  return (
    <>
      <h1 className="text-center ">Calcular L de agua</h1>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-2">
        <label htmlFor="">Metros de largo</label>
        <input
        required
          className="indent-2 border-gray-500 shadow-sm border-[1px]  rounded-sm"
          type="number"
          name="Largo"
          onChange={(e) => setLargo(e.target.value)}
        />
        <label htmlFor="">Metros de ancho</label>
        <input
        required
          className="indent-2 border-gray-500 shadow-sm border-[1px]  rounded-sm"
          type="number"
          name="Ancho"
          onChange={(e) => setAncho(e.target.value)}
        />
        <label htmlFor="">Metros de altura media</label>
        <input
        required
          className="indent-2 border-gray-500 shadow-sm border-[1px]  rounded-sm"
          type="number"
          name="Alto"
          onChange={(e) => setAlto(e.target.value)}
        />
        <button
          className="border-0 p-1 px-4 rounded-lg my-1 self-center bg-blue-500 text-white shadow-lg"
          type="submit"
        >
          Calcular
        </button>
      </form>
    </>
  );
}
export { ModalForm };

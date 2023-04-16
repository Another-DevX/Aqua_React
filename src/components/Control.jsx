import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const aptos = [
  { apto: "101", moroso: false },
  { apto: "102", moroso: false },
  { apto: "103", moroso: true },
  { apto: "104", moroso: false },
  { apto: "105", moroso: true },
  { apto: "106", moroso: false },
];

function Control() {
  const [visitante, setVisitante] = useState(false);
  const [lt12, setLt12] = useState(false);
  const [moroso, setMoroso] = useState(false);
  const [apto, setApto] = useState(101);
  const handleChangeVisitante = () => {
    setVisitante(!visitante);
  };
  const handleChangeLt12 = () => {
    setLt12(!lt12);
  };

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(apto);
    aptos.forEach((element) => {
      console.log(element);
      if (element.apto == apto && element.moroso == true) {
        setMoroso(true);
      }
      if (element.apto == apto && element.moroso == false) {
        alert("Registrado con exito!");
      }
    });
  };
  useEffect(() => {
    const handleClick = () => {
      setMoroso(false);
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [moroso]);
  return (
    <div className="h-screen flex justify-center items-center pt-10 back_gradient">
      <div className="flex flex-col justify-center items-center rounded-md m-8 p-5 w-5/6 max-w-md bg-white shadow-xl ">
        <h1 className="text-2xl font-bold text-blue-500">Control de ingreso</h1>
        <form
          action=""
          className="flex flex-col items-start w-4/5 my-2 gap-2 mx-2"
          onSubmit={handleOnSubmit}
        >
          <label htmlFor="">Nombre</label>
          <input
          required
            type="text"
            placeholder="Lucho Diaz"
            className="w-full border-b-[1px] border-black bg-transparent"
          />
          <label htmlFor="">Apto</label>
          <select
            className="p-1 w-full text-center bg-blue-500 text-white"
            value={apto}
            onChange={(e) => setApto(e.target.value)}
          >
            {aptos.map((item) => (
              <option value={item.apto}>{item.apto}</option>
            ))}
          </select>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className=""
              name="lt12"
              onChange={handleChangeLt12}
            />
            Menor de 12 años
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className=""
              name="visitante"
              onChange={handleChangeVisitante}
            />
            Visitante
          </label>

          {(visitante || lt12) && (
            <>
              <label htmlFor="">Nombre acompañante</label>
              <input
              required
                type="text"
                className="w-full border-b-[1px] border-black"
              />
            </>
          )}
          <button
            type="submit"
            className="border-0 p-2 rounded-lg my-5 self-center bg-blue-500 hover:bg-blue-700 ease-in-out duration-150 text-white shadow-lg"
          >
            Registrar
          </button>
        </form>
        <AnimatePresence>
          {moroso && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="ModalBackground"
              >
                <motion.div
                  initial={{ scale: "0%" }}
                  animate={{ scale: "100%" }}
                  exit={{ scale: "0%" }}
                  className="flex flex-col items-center m-10 p-5 rounded-lg text-black bg-white"
                >
                  <h1 className="text-lg font-bold">Upps...</h1>
                  <p>
                    Lamentablemente estas en mora, paga tu cuota de
                    administracion para hacer uso de las zonas humedas
                  </p>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export { Control };

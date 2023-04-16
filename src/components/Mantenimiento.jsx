import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Mantenimiento() {
  const [cantAgua, setCantAgua] = useState(200);
  const [muestra, setMuestra] = useState(false);
  const navigate = useNavigate()

    const handleOnSubmit = (e)=>{
      e.preventDefault()
        setMuestra(false);
    }

  return (
    <>
      <div className="flex flex-col items-center rounded-md m-8 p-5 w-5/6 max-w-md gap-2 bg-white shadow-xl ">
        <h1 className="text-2xl font-bold text-blue-500">Mantenimiento</h1>
        <p>{cantAgua} lts</p>
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-lg">Tomar muestras</h4>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => setMuestra(true)}
              className="bg-blue-500 p-2 text-white rounded-md shadow-lg text-sm"
            >
              Muestra 1
            </button>
            <button
              onClick={() => setMuestra(true)}
              className="bg-blue-500 p-2 text-white rounded-md shadow-lg text-sm"
            >
              Muestra 2
            </button>
            <button
              onClick={() => setMuestra(true)}
              className="bg-blue-500 p-2 text-white rounded-md shadow-lg text-sm"
            >
              Muestra 3
            </button>
          </div>
          <button
          onClick={()=>alert("Aun no se encuentra disponible")}
          className="bg-blue-500 p-2 text-white rounded-md shadow-lg text-sm">
            Observaciones
          </button>
          <button
          onClick={()=>navigate("/mantenimiento")}
          className="bg-blue-500 p-2 text-white rounded-md shadow-lg text-sm">
            Acciones de mantenimiento basico
          </button>
        </div>
      </div>
      <AnimatePresence>
        {muestra && (
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
              <span onClick={()=>setMuestra(false)} className="cursor-pointer absolute top-2 right-4">X</span>
              <h1 className="text-lg font-bold">Instrucciones</h1>
              <p>
                Introduce el stick o el dispositivo de medición en la piscina
                durante 5 segundos y retirelo para obeter los 4 valores químicos
                que indicarán la calidad del agua PH, control de cloro,
                alcalinidad, ácido isociánurico
              </p>
              <form
                onSubmit={handleOnSubmit}
                className="flex flex-col gap-3 p-2 border-0 rounded-md shadow-xl md:w-5/6"
              >
                <h2 className="text-center font-bold text-blue-500 text-lg">
                  Datos obtenidos
                </h2>
                <input
                  required
                  type="number"
                  className="indent-2 border-gray-500 shadow-sm border-[1px]  rounded-sm"
                  placeholder="PH"
                />
                <input
                  required
                  type="number"
                  className="indent-2 border-gray-500 shadow-sm border-[1px]  rounded-sm"
                  placeholder="Control de cloro"
                />
                <input
                  required
                  type="number"
                  className="indent-2 border-gray-500 shadow-sm border-[1px]  rounded-sm"
                  placeholder="Alcalinidad"
                />
                <input
                  required
                  type="number"
                  className="indent-2 border-gray-500 shadow-sm border-[1px]  rounded-sm"
                  placeholder="Acido isociánurico"
                />
                <button
                  type="submit"
                  className="border-0 p-2 px-10 font-bold rounded-lg self-center bg-blue-500 text-white shadow-lg"
                >
                  Listo!
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export { Mantenimiento };

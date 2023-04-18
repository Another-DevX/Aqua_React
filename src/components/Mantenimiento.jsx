import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const button_style = "hover:bg-blue-700 ease-in-out duration-150 bg-blue-500 p-2 text-white rounded-md shadow-lg text-sm"

function Mantenimiento() {
  const [cantAgua, setCantAgua] = useState(200);
  const [muestra, setMuestra] = useState(false);
  const [observaciones, setObservaciones] = useState(false);
  const navigate = useNavigate()

    const handleOnSubmit = (e)=>{
      e.preventDefault()
        setMuestra(false);
    }
    const handleOnSubmitObservaciones = (e)=>{
      e.preventDefault()
      setObservaciones(false)
    }

  return (
    <div className="h-screen flex justify-center items-center pt-10 back_gradient">
      <div className="flex flex-col items-center rounded-md m-8 p-5 w-5/6 max-w-md gap-2 bg-white shadow-xl ">
        <h1 className="text-2xl font-bold text-blue-500">Mantenimiento</h1>
        <p>{cantAgua} lts</p>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">Tomar muestras</h4>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => setMuestra(true)}
              className={button_style}
            >
              Muestra 1
            </button>
            <button
              onClick={() => setMuestra(true)}
              className={button_style}
            >
              Muestra 2
            </button>
            <button
              onClick={() => setMuestra(true)}
              className={button_style}
            >
              Muestra 3
            </button>
          </div>
          <button
          onClick={()=>setObservaciones(true)}
          className={button_style}>
            Observaciones
          </button>
          <button
          onClick={()=>navigate("/panel/mantenimiento/lista-de-tareas")}
          className={button_style}>
            Acciones de mantenimiento basico
          </button>
        </div>
      </div>
      <AnimatePresence>
        {observaciones && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ModalBackground--global"
          >
            <motion.div
              initial={{ scale: "0%" }}
              animate={{ scale: "100%" }}
              exit={{ scale: "0%" }}
              className="flex flex-col items-center m-10 p-2 w-5/6 h-5/6 rounded-lg text-black bg-white"
            >
              <span onClick={()=>setObservaciones(false)} className="cursor-pointer absolute top-2 right-4">X</span>
              <form
                onSubmit={handleOnSubmitObservaciones}
                className="flex flex-col gap-3 p-2 border-0  h-full w-full md:w-5/6"
              >
                <h2 className="text-center font-bold text-blue-500 text-lg">
                  Observaciones
                </h2>
                <textarea
                  required
                  type="number"
                  className="p-2 border-gray-500 rounded-md h-full shadow-sm border-[1px] "
                />
                <button
                  type="submit"
                  className="border-0 p-2 w-5/6 font-bold rounded-lg self-center bg-blue-500 text-white shadow-lg"
                >
                  Guardar
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {muestra && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ModalBackground--global"
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
    </div>
  );
}
export { Mantenimiento };

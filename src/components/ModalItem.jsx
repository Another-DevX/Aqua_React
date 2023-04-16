import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ModalItem({isOpen, text, func, link, setIsOpen}){
  const navigate = useNavigate()
  return (
      <AnimatePresence>
        {isOpen && func && (
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
                <span onClick={()=> setIsOpen(false)} className="absolute top-4 right-4 cursor-pointer">X</span>
                <h1 className="text-lg font-bold">Instrucciones.</h1>
                <p>{text}</p>
                <button  onClick={()=>navigate(link)} className="border-0 p-1 px-4 rounded-lg my-1 self-center bg-blue-500 text-white shadow-lg">
                  Calcular
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
        {isOpen && !func && (
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
                <h1 className="text-lg font-bold">Instrucciones.</h1>
                <p>{text}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
}

export {ModalItem}
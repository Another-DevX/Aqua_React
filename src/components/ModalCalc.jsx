import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ModalCalc({ isOpen, text, setIsOpen }) {
  return (
    <AnimatePresence>

      {isOpen && (
        <>
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
                <span onClick={()=>setIsOpen(false)} className="absolute cursor-pointer font-bold top-4 right-4" >x</span>
              <h1 className="text-lg font-bold">Instrucciones</h1>
              {text}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export { ModalCalc };

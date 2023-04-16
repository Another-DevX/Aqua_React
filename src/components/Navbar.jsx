import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useScreenSize } from "../hooks/useMedia";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isCollapse, setIsCollapse] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const width = useScreenSize();

  React.useEffect(() => {
    setIsCollapse(!width);
  }, [width]);

  return (
    <div className={`fixed top-0 h-20 w-full bg-white shadow-xl`}>
      <div className="flex flex-row h-full items-center justify-between mx-12 ">
        <NavLink to={"/Aqua_React"}>
          <img
            src="/Aqua_React/img/logo.png"
            alt=""
            className=" h-20 z-0 bg-none"
          />
        </NavLink>
        <div>
          {isCollapse ? (
            <>
              <FaBars
                onClick={() => {
                  setIsOpen(true);
                }}
                className="text-3xl"
              />
              <AnimatePresence>
                {isOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="ModalBackground"
                    >
                      <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "20%" }}
                        exit={{ x: "100%" }}
                        className="flex items-center justify-center fixed right-0 bottom-0 top-0 h-[110vh] w-[70%] bg-white shadow-2xl"
                      >
                        <span onClick={()=> setIsOpen(false)} className="absolute top-5 left-5 text-bold p-3 bg-blue-500 rounded-md text-white">Cerrar</span>
                        <div className="flex flex-col gap-10 items-start mr-10">
                          <Link onClick={()=> setIsOpen(false)} className="text-black font-bold" to={"/Aqua_React/"}>Inicio</Link>
                          <Link onClick={()=> setIsOpen(false)} className="text-black font-bold" to={"/mantenimiento"}>Mantenimiento</Link>
                          <Link onClick={()=> setIsOpen(false)} className="text-black font-bold" to={"/panel"}>Acciones basicas</Link>
                        </div>
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </>
          ) : (
            <div className="flex flex-row gap-10 w-full">
              <Link to={"/Aqua_React/"}>Inicio</Link>
              <Link to={"/mantenimiento"}>Mantenimiento</Link>
              <Link to={"/panel"}>Acciones basicas</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Navbar };

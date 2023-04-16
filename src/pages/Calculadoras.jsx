import React, { useState } from "react";
import { ModalCalc } from "../components/ModalCalc";
import { ModalForm } from "../components/ModalForm";
import { Navbar } from "../components/Navbar";

function Calculadoras() {
  const [calc, setCalc] = useState("PH");
  const [litros, setLitros] = useState(500);
  const [phInicial, setPhInicial] = useState(7.0);
  const [phObjetivo, setPhObjetivo] = useState(7.0);
  const [alcalinidad, setAlcalinidad] = useState(150);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  //   React.useEffect(() => {
  //     const handleClick = () => {
  //       setModal1(false);
  //       setModal2(false);
  //       setModal3(false);
  //       setModal4(false);
  //     };

  //     document.addEventListener("mousedown", handleClick);

  //     return () => {
  //       document.removeEventListener("mousedown", handleClick);
  //     };
  //   }, []);

  return (
    <>
      <div className="back_gradient min-h-screen">
        <Navbar />
        <div className="flex flex-col  items-center  w-full pt-20 xl:flex-row xl:h-screen xl:justify-center">
          {calc == "PH" && (
            <>
              <div className="flex flex-col items-center rounded-md m-8 p-5 w-5/6 max-w-md bg-white shadow-xl ">
                <h1 className="text-2xl font-bold text-blue-500">
                  Calcula el PH
                </h1>
                <form
                  action=""
                  className="flex flex-col items-start  w-full my-2 gap-2 mx-2"
                >
                  <label className="text-xs lg:text-base rounded-md flex gap-2 flex-row justify-center items-center bg-blue-600 w-full text-white p-2 font-bold shadow-xl">
                    <p className="w-32">Litros de agua</p>
                    <input
                      required
                      type="number"
                      value={litros}
                      onChange={(e) => {
                        setLitros(e.target.value);
                      }}
                      className="w-3/4 text-center h-10  border-blue-200  border-2 rounded-md bg-transparent"
                    />

                    <span
                      onClick={() => setModal1(true)}
                      className="h-full flex items-center justify-center p-2 "
                    >
                      ?
                    </span>
                  </label>
                  <label className="text-xs lg:text-base rounded-md flex gap-2 flex-row justify-center items-center bg-blue-600 w-full text-white p-2 font-bold shadow-xl">
                    <p className="w-32">pH Inicial</p>
                    <input
                      required
                      type="number"
                      value={phInicial}
                      onChange={(e) => setPhInicial(e.target.value)}
                      className="w-3/4 text-center h-10  border-blue-200  border-2 rounded-md bg-transparent"
                    />
                    <span
                      onClick={() => setModal2(true)}
                      className="h-full flex items-center justify-center p-2 "
                    >
                      ?
                    </span>
                  </label>
                  <label className="text-xs lg:text-base rounded-md flex gap-2 flex-row justify-center items-center bg-blue-600 w-full text-white p-2 font-bold shadow-xl">
                    <p className="w-32">pH Objetivo</p>
                    <input
                      required
                      type="number"
                      value={phObjetivo}
                      onChange={(e) => setPhObjetivo(e.target.value)}
                      className="w-3/4 text-center  h-10 border-blue-200  border-2 rounded-md bg-transparent"
                    />
                    <span
                      onClick={() => setModal3(true)}
                      className="h-full flex items-center justify-center p-2 "
                    >
                      ?
                    </span>
                  </label>
                  <label className="text-xs lg:text-base rounded-md flex gap-2 flex-row justify-center items-center bg-blue-600 w-full text-white p-2 font-bold shadow-xl">
                    <p className="w-32">Alcalinidad</p>
                    <input
                      required
                      type="number"
                      value={alcalinidad}
                      onChange={(e) => setAlcalinidad(e.target.value)}
                      className="w-3/4 text-center  h-10 border-blue-200  border-2 rounded-md bg-transparent"
                    />
                    <span
                      onClick={() => setModal4(true)}
                      className="h-full flex items-center justify-center p-2 "
                    >
                      ?
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="border-0 p-1 w-full rounded-xl my-2 self-center bg-blue-500 text-white shadow-xl"
                  >
                    Calcular
                  </button>
                </form>
              </div>
              <ModalCalc
                text={<ModalForm setIsOpen={setModal1} setLitros={setLitros} />}
                setIsOpen={setModal1}
                isOpen={modal1}
              />
              <ModalCalc
                text={
                  <p>
                    Mide el pH del agua de la piscina con algún kit de medición
                    y anota el valor obtenido
                  </p>
                }
                setIsOpen={setModal2}
                isOpen={modal2}
              />
              <ModalCalc
                text={
                  <p>
                    Elige el pH que deseas que alcance el agua, lo ideal es
                    entre 7.2 a 7.6
                  </p>
                }
                setIsOpen={setModal3}
                isOpen={modal3}
              />
              <ModalCalc
                text={
                  <p>
                    Mide y elige la alcalinidad del agua de la piscina. <br />
                    Si no puedes medirla, entonces elige 150 ppm, que es una
                    alcalinidad promedio <br />
                    La alcalinidad se define como la capacidad del agua para
                    neutralizar los acidos <br />
                    A mayor alcalinidad del agua, necesitas más cantidad de
                    acido para reducir el pH. <br />
                    Si necesitas incrementar el pH, no influye la alcalinidad
                    que tenga el agua.
                  </p>
                }
                setIsOpen={setModal4}
                isOpen={modal4}
              />
            </>
          )}
          {calc == "Cloro" && (
            <>
              <h1>Cloro</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export { Calculadoras };

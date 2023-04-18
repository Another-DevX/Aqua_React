import React from "react";
import { useNavigate } from "react-router-dom";

function LandingScreen(){
  const navigate = useNavigate();

    return (
      <div className="flex flex-col items-center  justify-center h-screen lg:items-start ">
        <div className="flex flex-col gap-10 mx-10 lg:mx-20">
          <aside className="flex flex-col gap-2">
            <h2 className="text-2xl title_font sm:text-3xl">
              Todo <br /> es mas facil con
            </h2>
            <h1 className="text-8xl font-bold animation title_font sm:text-9xl">
              AQUA
            </h1>
            <p className="text-lg max-w-lg">
              Con Aqua podras administrar todo lo que respecte a las zonas
              humedas de tu propiedad horizontal, usarla es facil.
            </p>
          </aside>
          <div className="flex flex-col gap-2 items-center justify-center md:flex-row lg:gap-5 lg:w-5/6">
            <button
              // onClick={() => navigate("/register")}
              className="bg-blue-500 text-white font-bold py-3 w-full text-sm rounded-md  "
            >
              Empecemos
            </button>
            <button
              // onClick={() => navigate(`/panel/${id}`)}
              onClick={() => navigate(`/panel`)}
              className="bg-transparent border-[1px] border-black text-black font-bold py-3 w-full text-sm rounded-md  "
            >
              Panel de usuario
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    );
}

export {LandingScreen}
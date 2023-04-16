import React from "react";
import { Navbar } from "../components/Navbar";
import { Control } from "../components/Control";
import { Mantenimiento } from "../components/Mantenimiento";

function UserPanel() {
  return (
    <div className="back_gradient min-h-screen">
      <Navbar />
      <div className="flex flex-col  items-center  w-full pt-20 lg:flex-row lg:h-screen lg:justify-center">
        <Control />
        <Mantenimiento />
      </div>
    </div>
  );
}

export { UserPanel };

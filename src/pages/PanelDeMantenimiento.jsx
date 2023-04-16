import React from "react";
import { Checklist } from "../components/Checklist";
import { Navbar } from "../components/Navbar";

function PanelDeMantenimiento() {
  return (
    <>
      <div className="back_gradient min-h-screen">
        <Navbar />
        <div className="flex flex-col  items-center  w-full pt-20 lg:flex-row lg:h-screen lg:justify-center">
          <Checklist />
        </div>
      </div>
    </>
  );
}

export { PanelDeMantenimiento };

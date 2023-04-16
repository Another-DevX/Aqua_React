import React from "react";
import { Navbar } from "../components/Navbar";
import { Control } from "../components/Control";
import { Mantenimiento } from "../components/Mantenimiento";
import Mosaic from "../components/Mosaic";
import { Route, Routes } from "react-router";

function UserPanel() {
  return (
    <div className="back_gradient min-h-screen">
      <div className="h-screen w-full flex justify-center pt-20 items-center">
        <Mosaic/>
        {/* <Control /> */}
        {/* <Mantenimiento /> */}
      </div>
    </div>
  );
}

export { UserPanel };

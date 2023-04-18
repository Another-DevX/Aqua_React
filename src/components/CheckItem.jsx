import React, { useState, useEffect } from "react";
import { FiCheck } from "react-icons/fi";
import { ModalItem } from "./ModalItem";

function CheckItem({ item }) {
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOnTogleCheck = () => {
    setChecked(!checked)
  };
  const handleOnTogleModal = () => {
    setOpenModal(true)
  }
  useEffect(() => {
    const handleClick = () => {
      setOpenModal(false);
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [openModal]);
  return (
    <>
      {checked ? (
        <li className="flex gap-5 p-4 rounded-lg items-center bg-gray-300 shadow-md cursor-pointer font-bold">
          <span onClick={handleOnTogleCheck}>
            <FiCheck className="text-green-600 text-2xl" />
          </span>
          <p className="text line-through">{item.title}</p>
        </li>
      ) : (
        <>
          <li className="flex gap-2 lg:gap-5 p-4 rounded-lg items-center bg-gray-50 shadow-md cursor-pointer font-bold">
            <span onClick={handleOnTogleCheck}>
              <FiCheck className="text-2xl" />
            </span>
            <p onClick={handleOnTogleModal} className=" cursor-pointer h-full text">{item.title}</p>
          </li>
          <ModalItem link = {item.link} text = {item.text} func = {item.func} isOpen={openModal} />
        </>
      )}
    </>
  );
}

export { CheckItem };

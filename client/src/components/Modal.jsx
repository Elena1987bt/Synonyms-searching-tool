import React from "react";
import { IoMdClose } from "react-icons/io";
import Form from "./Form";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className={`
      fixed inset-0 flex justify-center items-center transition-colors
      ${open ? "visible bg-black/20" : "invisible"}
    `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        bg-white  rounded-xl shadow p-6 transition-all min-w-[90%] md:min-w-[600px] min-h-[600px] h-auto
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
      `}
      >
        <button
          onClick={onClose}
          className="absolute text-xl  top-4 right-4 p-1 rounded-lg text-black bg-white hover:bg-gray-200 hover:text-gray-600"
        >
          <IoMdClose />
        </button>
        <div className="flex flex-col items-center w-56 mx-auto py-10">
          <h1 className="my-10 w-[400px] text-center capitalize font-extrabold tracking-tight leading-4 text-gray-900 text-xl lg:text-3xl">
            🌟 Add a word 🌟 <br /> to our dictionary
          </h1>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Modal;

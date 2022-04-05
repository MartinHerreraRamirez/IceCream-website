import React from "react";
import "./Modal.css";


const Modal = ({ children, modalIsOpen, closeModal }) => {
  return (
    <div
      className={
        (modalIsOpen ? "flex-wrap" : "hidden") +
        " bg-black opacity-60 fixed inset-0 z-50 flex items-center justify-center h-screen"
      }
    >
      <div className="border-8 border-blue-800 rounded-lg bg-zinc-200">
        <div className="flex justify-end ">
          <button
            className="px-2 m-2 font-sans text-white bg-gray-800 border-2 rounded border-cyan-500"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;

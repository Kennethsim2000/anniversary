// components/Modal.js
import React from "react";

const Modal = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
        <div className="bg-white p-8 rounded shadow-lg z-10">
          <span className="absolute top-0 right-0 p-4 cursor-pointer text-gray-500">
            &times;
          </span>
        </div>
      </div>
    </>
  );
};

export default Modal;

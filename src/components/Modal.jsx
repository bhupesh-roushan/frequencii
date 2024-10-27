import React from "react";
import { Button } from "./ui/button";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-blue-200 bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md shadow-blue-200 m-5 relative">
        <Button
          variant="outline"
          className="absolute top-1 bg-white shadow-lg shadow-blue-300 right-1 text-black rounded-lg text-md"
          onClick={() => setIsModalOpen(false)}
        >
          <span className="opacity-50 delay-0 hover:opacity-100 transition-opacity">X</span>
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

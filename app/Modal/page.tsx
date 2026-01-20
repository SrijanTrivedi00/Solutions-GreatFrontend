"use client";
import { useState } from "react";

const Modal = () => {
  const [openmodal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <button
          className="rounded-lg px-3 py-3 text-red-500 bg-gray-50"
          onClick={() => setOpenModal(true)}
        >
          Open Modal
        </button>
      </div>

      {openmodal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-[300px] p-6 rounded-lg text-center">
            <h1 className="text-xl font-semibold mb-4">Modal Opened</h1>

            <button
              className="rounded-lg px-4 py-2 text-white bg-red-500"
              onClick={() => setOpenModal(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

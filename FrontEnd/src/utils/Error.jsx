import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Error = ({ message = "Not Marked, try again!", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-red-500 bg-red-100 rounded-lg shadow-md w-80">
      <AiOutlineCloseCircle className="text-red-500" size={64} />
      <h2 className="text-2xl font-semibold text-gray-800 mt-3">Error!</h2>
      <p className="text-gray-600 text-center mt-2">{message}</p>
      <button
        onClick={onRetry}
        className="mt-4 px-4 py-2 border-2 border-red-500 text-red-500 font-bold rounded hover:bg-red-500 hover:text-white transition duration-300"
      >
        TRY AGAIN
      </button>
    </div>
  );
};

export default Error;

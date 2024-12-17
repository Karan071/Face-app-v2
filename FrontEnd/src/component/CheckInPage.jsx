import React from "react";
import VisionEdge from "../utils/VisionEdge";
import CustomWebcam from "../utils/CustomWebCam";

const CheckInPage = () => {
  return (
    <div>
      <VisionEdge />

      <div className="flex flex-col items-center">
        <p className="text-gray-600 text-2xl sm:text-3xl md:text-4xl mt-6 mb-8 max-w-xl text-center font-thin">
          Smile for the Photograph
        </p>

        {/* Webcam Component */}
        <div className="relative w-full max-w-screen-lg flex justify-center items-center bg-white shadow-md rounded-lg p-4">
          <CustomWebcam /> {/* CustomWebcam component is used here */}
        </div>

        <button
          type="button"
          className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 transition-all duration-200 ease-in-out"
        >
          Capture
        </button>
      </div>
    </div>
  );
};

export default CheckInPage;

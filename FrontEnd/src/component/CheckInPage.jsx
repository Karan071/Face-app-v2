import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import VisionEdge from "../utils/VisionEdge";

const CheckInPage = () => {
  const webcamRef = useRef(null); // Ref for the webcam
  const [capturedImage, setCapturedImage] = useState(null); // State to store captured image

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot(); // Capture the photo
      setCapturedImage(imageSrc); // Store the captured image
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="text-4xl font-semibold text-gray-700 font-poppins mt-8 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            VisionEdge <span className='font-thin text-gray-700 '>Employee Check-In System</span>
          </p>
        </div>

        {/* Webcam Section */}
        <div className="relative w-full max-w-screen-lg flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4 mt-4">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            height={600}
            width={1000}
            className="rounded-lg shadow-md"
          />

          {/* Capture Button */}
          <button
            onClick={capturePhoto}
            type="button"
            className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 transition-all duration-200 ease-in-out"
          >
            Capture Photo
          </button>
        </div>

        {/* Display Captured Image */}
        {/* {capturedImage && (
          <div className="mt-6 flex flex-col items-center">
            <p className="text-gray-600 mb-2 text-center">Captured Photo:</p>
            <img
              src={capturedImage}
              alt="Captured"
              className="rounded-lg shadow-md border border-gray-200"
            />
          </div>
        )
        } */}

      </div>
    </div>
  );
};

export default CheckInPage;


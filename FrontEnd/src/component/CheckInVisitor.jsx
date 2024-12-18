import React, { useRef, useState } from "react";
import Webcam from 'react-webcam';
import VisionEdge from "../utils/VisionEdge";

const CheckInVisitor = () => {
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
        {/* <VisionEdge /> */}
        {/* Header */}
        <div className="flex flex-col items-center">
          {/* <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text mt-6">VisionEdge {" "} <span className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-6 mb-8 max-w-xl text-center font-thin">Visitor Check In System</span>
          </p> */}

        <div className="text-center my-6">
                <p className="text-4xl font-semibold text-gray-700 font-poppins mt-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                VisionEdge <span className='font-thin text-gray-700 '>Visitor Check-In System</span>
                </p>
            </div>



          {/* Webcam Section */}
          <div className="relative w-full max-w-screen-lg flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4">
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
}

export default CheckInVisitor
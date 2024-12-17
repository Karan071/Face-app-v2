// import React from "react";
// import VisionEdge from "../utils/VisionEdge";
// import CustomWebcam from "../utils/CustomWebCam";

// const CheckInPage = () => {
//   return (
//     <div>
//       <VisionEdge />

//       <div className="flex flex-col items-center">
//         <p className="text-gray-600 text-2xl sm:text-3xl md:text-4xl mt-6 mb-8 max-w-xl text-center font-thin">
//           Smile for the Photograph
//         </p>

//         {/* Webcam Component */}
//         <div className="relative w-full max-w-screen-lg flex justify-center items-center bg-white shadow-md rounded-lg p-4">
//           <CustomWebcam />
//         </div>

//         <button
//           type="button"
//           className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 transition-all duration-200 ease-in-out"
//         >
//           Capture
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckInPage;

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
      <VisionEdge />
      {/* Header */}
      <div className="flex flex-col items-center">
        <p className="text-gray-600 text-2xl sm:text-3xl md:text-4xl mt-6 mb-8 max-w-xl text-center font-thin">
          Smile for the Photograph
        </p>

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
};

export default CheckInPage;


// import React from 'react';
// import HoverButton from '../utils/Button';
// import VisionEdge from '../utils/VisionEdge';
// import asset from '../assets/Robot.png';

// const Dashboard = () => {
//   return (
//     <div className="font-poppins">
//       <VisionEdge/>
      
//       <div className="flex justify-center items-center mt-3">
//       <label className="relative inline-flex items-center cursor-pointer">
//         <input className="sr-only peer" value="" type="checkbox" />
//         <div className="peer rounded-full outline-none duration-100 after:duration-500 w-48 h-14 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500 after:content-['Visitor'] after:absolute after:outline-none after:rounded-full after:h-12 after:w-24 after:bg-white after:top-1 after:left-2 after:flex after:justify-center after:items-center after:text-indigo-800 after:font-bold peer-checked:after:translate-x-20 peer-checked:after:content-['Employee'] peer-checked:after:border-white">
//         </div>
//       </label>
//       </div>

//       <div className="text-center">
//         <p className="text-4xl font-semibold text-gray-700 font-poppins mt-20 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//           VisionEdge <span className='font-thin text-gray-700 '>Streamlined and Intelligent Visitor Check-In Solution</span>
//         </p>
//       </div>


//       <div className="flex flex-col md:flex-row justify-center items-center md:items-between md:space-x-16 space-y-8 md:space-y-0 p-6">
//         <div className="flex flex-col items-center space-y-11">
//           <HoverButton
//             text="Check-In"
//             buttonColor="bg-green-200"
//             hoverColor={["bg-green-900", "bg-green-700", "bg-green-600"]}
//             textColor="text-white"
//             width="w-80"
//             height="h-20"
//           />
//           <HoverButton
//             text="Check-Out"
//             buttonColor="bg-red-200"
//             hoverColor={["bg-red-900", "bg-red-700", "bg-red-600"]}
//             textColor="text-white"
//             width="w-80"
//             height="h-20"
//           />
//         </div>

//         {/* Right Section (Image) */}
//         <div className="flex justify-center items-center">
//           <img
//             src={asset}
//             alt="Dashboard"
//             className="max-w-full h-auto md:w-[500px] rounded-sm shadow-sm"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import HoverButton from "../utils/Button";
import VisionEdge from "../utils/VisionEdge";
import CheckInVisitor from "./CheckInVisitor";
import CheckInPage from "./CheckInPage";
import asset from "../assets/Robot.png";

const Dashboard = () => {
  const [isVisitor, setIsVisitor] = useState(true); // State to manage slider (Visitor or Employee)

  const handleToggle = () => {
    setIsVisitor((prevState) => !prevState); // Toggle between Visitor and Employee
  };

  return (
    <div className="font-poppins">
      <VisionEdge />

      {/* Toggle Slider */}
      <div className="flex justify-center items-center mt-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            className="sr-only peer"
            type="checkbox"
            checked={!isVisitor}
            onChange={handleToggle}
          />
          <div className="peer rounded-full outline-none duration-100 after:duration-500 w-48 h-14 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500 after:content-['Visitor'] after:absolute after:outline-none after:rounded-full after:h-12 after:w-24 after:bg-white after:top-1 after:left-2 after:flex after:justify-center after:items-center after:text-indigo-800 after:font-bold peer-checked:after:translate-x-20 peer-checked:after:content-['Employee'] peer-checked:after:border-white">
          </div>
        </label>
      </div>

  
      {/* Title Section */}
      {/* <div className="text-center my-6">
        <p className="text-4xl font-semibold text-gray-700 font-poppins mt-20 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          VisionEdge{" "}
          <span className="font-thin text-gray-700">
            {isVisitor
              ? "Visitor Check-In Solution"
              : "Employee Check-In Solution"}
          </span>
        </p>
      </div> */}

      {/* Dynamic Content */}
       <div className="flex justify-center items-center">
        {isVisitor ? <CheckInVisitor /> : <CheckInPage />}
      </div> 

      {/* Footer Buttons and Image */}
      {!isVisitor && (
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-8 md:space-y-0 p-6">
          <div className="flex flex-col items-center space-y-11">
            <HoverButton
              text="Check-In"
              buttonColor="bg-green-200"
              hoverColor={["bg-green-900", "bg-green-700", "bg-green-600"]}
              textColor="text-white"
              width="w-80"
              height="h-20"
            />
            <HoverButton
              text="Check-Out"
              buttonColor="bg-red-200"
              hoverColor={["bg-red-900", "bg-red-700", "bg-red-600"]}
              textColor="text-white"
              width="w-80"
              height="h-20"
            />
          </div>

          {/* Right Section (Image) */}
          <div className="flex justify-center items-center">
            <img
              src={asset}
              alt="Dashboard"
              className="max-w-full h-auto md:w-[500px] rounded-sm shadow-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

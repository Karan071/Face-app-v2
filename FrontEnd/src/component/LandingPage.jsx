import React from "react";
import logo from "../assets/face-icon.gif";
import logo1 from "../assets/image-p.png";

const LandingPage = () => {
  return (
    <div className="font-poppins">
      <nav className="flex justify-between items-center px-14 py-4 bg-white shadow-sm">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-10 mr-2" />
          <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            VisionEdge
          </p>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
        >
          Try Now
        </button>
      </nav>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-20 ">
        {/* Text Section */}
        <div className="max-w-lg mb-8 md:mb-0">
          <p className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            VisionEdge{" "}
            <span className="font-semibold text-gray-700 text-lg md:text-2xl">
              Redefining Recognition, One Face at a Time
            </span>
          </p>
          <p className="text-gray-600 text-lg md:text-xl mt-6 mb-8 max-w-lg ">
            Your All-in-One Solution for Every Need.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 mt-6"
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={logo1}
            alt="People Illustration"
            className="h-100 w-90 md:h-[40rem] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


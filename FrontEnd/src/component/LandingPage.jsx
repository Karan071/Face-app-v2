// import React from "react";
// import logo from "../assets/face-icon.gif";
// import logo1 from "../assets/image-p.png";

// const LandingPage = () => {
//   return (
//     <div className="font-poppins">
//       <nav className="flex justify-between items-center px-14 py-4 bg-white shadow-sm">
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="h-12 w-13 mr-2" />
//           <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//             VisionEdge
//           </p>
//         </div>
//         <button
//           type="button"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
//         >
//           Try Now
//         </button>
//       </nav>

//       {/* Middle Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-20 ">
//         {/* Text Section */}
//         <div className="max-w-lg mb-8 md:mb-1">
//           <p className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//             VisionEdge{" "}
//           </p>
//           <p className="font-semibold text-gray-700 text-lg md:text-2xl mt-6">
//               Redefining Recognition, One Face at a Time
//             </p>
//           <p className="text-gray-600 text-lg md:text-xl mt-6 mb-8 max-w-lg">
//             Your All-in-One Solution for Every Need.
//           </p>
//           <button
//             type="button"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 mt-6"
//           >
//             Get Started
//           </button>
//         </div>

//         {/* Image Section */}
//         <div>
//           <img
//             src={logo1}
//             alt="People Illustration"
//             className="h-100 w-90 md:h-[40rem] w-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";
import logo from "../assets/face-icon.gif";
import logo1 from "../assets/image-p.png";

const LandingPage = () => {
  return (
    <div className="font-poppins">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center px-6 md:px-14 py-4 bg-white shadow-sm">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
          <p className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            VisionEdge
          </p>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 md:px-6 md:py-3.5 mt-2 md:mt-0"
        >
          Try Now
        </button>
      </nav>

      {/* Middle Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 gap-y-8 md:gap-x-16">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg w-full md:w-1/2 ">
          <p className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            VisionEdge
          </p>
          <p className="font-thin text-gray-700 text-xl md:text-4xl mt-4">
            Redefining Recognition, One Face at a Time
          </p>
          <p className="text-gray-600 text-lg md:text-2xl mt-4 mb-6">
            Your All-in-One Solution for Every Need.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg md:text-xl px-6 py-3 md:px-8 md:py-4"
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={logo1}
            alt="People Illustration"
            className="max-w-full h-auto md:max-h-[28rem] lg:max-h-[32rem] xl:max-h-[36rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

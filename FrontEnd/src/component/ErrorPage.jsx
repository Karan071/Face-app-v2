import React from "react";
import Error from "../utils/Error";
import VisionEdge from "../utils/VisionEdge";

const CheckIn = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="w-full">
        <VisionEdge />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold text-gray-700 mb-4">
          Check In Failed
        </p>
        <Error />
      </div>
    </div>
  );
};

export default CheckIn;

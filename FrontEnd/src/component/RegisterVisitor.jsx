import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import VisionEdge from "../utils/VisionEdge"

const RegisterVisitor = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    contactNo: "",
    purpose: "",
    description: ""
  });
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const webcamRef = useRef(null);

  const capturePhoto = () => {
    const photoSrc = webcamRef.current.getScreenshot();
    setCapturedPhoto(photoSrc);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const photoBlob = await fetch(capturedPhoto).then((res) => res.blob());
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("purpose", formData.purpose);
    formDataObj.append("photo", photoBlob, "photo.jpg");

    // const response = await fetch("http://127.0.0.1:8000/register/", {
    //   method: "POST",
    //   body: formDataObj,
    // });

    const result = await response.json();
    console.log(result);
    alert(result.message);
  };

  return (
    <>
    <VisionEdge/>
    <div className="font-poppins bg-gray-50 min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-center mb-6 ">Visitor Check-In registration </h1>

        {/* Webcam or captured photo */}
        {!capturedPhoto ? (
          <div className="flex justify-center mb-6">
            <Webcam
              audio={false}
              ref={webcamRef}j
              screenshotFormat="image/jpeg"
              className="border-2 rounded-lg w-[320px] h-[240px]"
            />
          </div>
        ) : (
          <div className="flex justify-center mb-6">
            <img
              src={capturedPhoto}
              alt="Captured"
              className="w-32 h-32 rounded-lg object-cover border-2 border-gray-300 shadow-md"
            />
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="Gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>


          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Purpose of Visit</option>
            <option value="Meeting">Meeting</option>
            <option value="Delivery">Delivery</option>
            <option value="Interview">Interview</option>
            <option value="others">Others</option>
          </select>

          <input
              type="text"
              name="description"
              placeholder="Additional Information"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

          {/* Buttons */}
          {!capturedPhoto ? (
            <div className="flex justify-center">
              <button
                onClick={capturePhoto}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
              >
                Capture Photo
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
    </>
  );
};

export default RegisterVisitor;

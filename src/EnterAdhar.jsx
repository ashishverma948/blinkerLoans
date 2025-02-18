import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const OTP = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{ background: "radial-gradient(circle, #B20000 0%, #4C0000 100%)" }}
      >
        <div className="bg-[#58050f] p-10 rounded-xl shadow-lg w-[500px] text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Enter Aadhar <span className="text-yellow-400">Number</span>
          </h2>
          <div className="mb-6 text-left">
            <label className="text-white block mb-2 text-lg">Aadhar number</label>
            <input
              type="text"
              placeholder="Enter Aadhar number"
              className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
            />
          </div>
          <div className="mb-6 text-left">
            <label className="text-white block mb-2 text-lg">Enter mail</label>
            <input
              type="email"
              placeholder="Enter mail"
              className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
            />
          </div>
          <button className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg hover:bg-red-700 border border-white">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OTP;

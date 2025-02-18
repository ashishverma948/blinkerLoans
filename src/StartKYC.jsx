import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const StartKYC = () => {
  const navigate = useNavigate(); 
  const [pan, setPan] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);
  const validatePhone = (phone) => /[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validatePAN(pan)) {
      newErrors.pan = "Invalid PAN format (ABCDE1234F).";
    }
    if (!validatePhone(phone)) {
      newErrors.phone = "Invalid phone number (must start with 91 and be 12 digits).";
    }
    if (!isChecked) {
      newErrors.checkbox = "You must agree to the Terms & Conditions.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      navigate("/Otp"); // Redirect to the OTP page
    }
  };

  return (
    <>
      <div
        className="w-full min-h-[100vh] flex items-center justify-center p-4"
        style={{ background: "radial-gradient(circle, #B20000 0%, #4C0000 100%)" }}
      >
        <Navbar />

        <div className="bg-[#580610] p-6 rounded-2xl shadow-lg w-full max-w-[598px] h-[550px] mt-20 flex flex-col justify-center text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Start to your <span className="text-yellow-400">KYC</span>
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="w-100ll">
              <label className="block text-white mr-80">PAN Card</label>
              <input
                type="text"
                className="w-100 px-3 py-2 bg-[#FFD700] text-black border-none rounded-lg"
                placeholder="XXXXXXXXXX"
                value={pan}
                onChange={(e) => setPan(e.target.value.toUpperCase())}
                required
              />
              {errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}
            </div>
            <div>
  <label className="block text-white mr-70">Phone number</label>

  <div className="flex items-center w-100 ml-19">
    <span className="px-3 py-2 bg-[#F1B307] text-black font-semibold rounded-l-lg">
      +91
    </span>
    <input
      type="text"
      className="w-full px-3 py-2 bg-[#FFD700] text-black border-none rounded-r-lg"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
    />
  </div>

  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
</div>

            <div className="flex items-center text-white text-left">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="ml-34"
              />
              <span className="ml-2">I agree to the Terms & Conditions</span>
            </div>
            {errors.checkbox && <p className="text-red-500 text-sm">{errors.checkbox}</p>}
            <button
              
              type="submit"
              className="w-100 bg-red-600 text-white py-2 rounded-lg border border-white hover:bg-red-700 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StartKYC;

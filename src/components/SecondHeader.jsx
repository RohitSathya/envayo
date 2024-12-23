import React, { useState } from "react";
import {
  FaUser,
  FaBuilding,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import Flag from "react-world-flags";

const SecondHeader = () => {
  const [language, setLanguage] = useState({ code: "GB", label: "English" });
  const [showModal, setShowModal] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);

  const languages = [
    { code: "GB", label: "English" },
    { code: "FR", label: "French" },
    { code: "DE", label: "German" },
    { code: "JP", label: "Japanese" },
  ];

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="bg-black text-white w-full flex justify-between items-center px-6 py-2 text-sm shadow-md relative z-50">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-300 hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          <FaGoogle />
        </a>
      </div>

      {/* Center Section */}
      <div className="flex items-center space-x-6">
        {/* Login/Register */}
        <button
          onClick={toggleModal}
          className="flex items-center text-gray-300 hover:text-white transition"
        >
          <FaUser className="text-orange-500 mr-2" />
          <span>Login or Register</span>
        </button>

        {/* Submit Property */}
        <a
          href="#"
          className="flex items-center text-gray-300 hover:text-white transition"
        >
          <FaBuilding className="text-orange-500 mr-2" />
          <span>Submit Property</span>
        </a>

        {/* Language Selector */}
        <div className="relative group">
          <div className="flex items-center text-gray-300 hover:text-white transition cursor-pointer">
            <Flag code={language.code} className="h-4 w-6 mr-2" />
            <span>{language.label}</span>
            <MdKeyboardArrowDown className="ml-1" />
          </div>
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-1 hidden group-hover:block">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => setLanguage(lang)}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
              >
                <Flag code={lang.code} className="h-4 w-6 mr-2" />
                {lang.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div></div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-black transition"
            >
              <MdClose size={24} />
            </button>

            {/* Tabs */}
            <div className="flex justify-center space-x-4 border-b p-4">
              <button
                onClick={() => setIsLoginView(true)}
                className={`text-lg font-semibold ${
                  isLoginView
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500"
                }`}
              >
                Log in
              </button>
              <button
                onClick={() => setIsLoginView(false)}
                className={`text-lg font-semibold ${
                  !isLoginView
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500"
                }`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              {isLoginView ? (
                <div>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700">Username</label>
                      <input
                        type="text"
                        className="w-full border rounded-lg px-4 py-2"
                        placeholder="Enter your username"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Password</label>
                      <input
                        type="password"
                        className="w-full border rounded-lg px-4 py-2"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox" />
                        <span>Remember me</span>
                      </label>
                      <a href="#" className="text-orange-500">
                        Lost password?
                      </a>
                    </div>
                    <button className="w-full bg-orange-500 text-white py-2 rounded-lg">
                      Login
                    </button>
                  </form>
                </div>
              ) : (
                <div>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700">Username</label>
                      <input
                        type="text"
                        className="w-full border rounded-lg px-4 py-2"
                        placeholder="Enter your username"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        className="w-full border rounded-lg px-4 py-2"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Password</label>
                      <input
                        type="password"
                        className="w-full border rounded-lg px-4 py-2"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="w-full border rounded-lg px-4 py-2"
                        placeholder="Re-enter your password"
                      />
                    </div>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="form-checkbox" />
                      <span>
                        I agree with your{" "}
                        <a href="#" className="text-orange-500">
                          Terms & Conditions
                        </a>
                      </span>
                    </label>
                    <button className="w-full bg-orange-500 text-white py-2 rounded-lg">
                      Register
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondHeader;

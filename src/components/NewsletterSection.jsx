import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const NewsletterSection = () => {
  return (
    <div className="bg-orange-500 py-6 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <HiOutlineMail className="text-white text-6xl" />
          <div>
            <h2 className="text-white text-lg font-semibold tracking-wide">
              OUR
            </h2>
            <h2 className="text-white text-2xl lg:text-3xl font-extrabold tracking-wide">
              NEWSLETTER
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-6 lg:mt-0 flex items-center w-full lg:w-auto">
          <input
            type="email"
            placeholder="Enter your e-mail address..."
            className="flex-1 bg-transparent border-b border-white text-white placeholder-white text-lg px-4 py-2 focus:outline-none focus:border-b-2 focus:border-white transition-transform duration-300"
          />
          <button className="ml-4 bg-white text-orange-500 px-4 py-3 rounded-full text-lg flex items-center justify-center hover:scale-110 hover:shadow-lg transition-transform duration-300">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;

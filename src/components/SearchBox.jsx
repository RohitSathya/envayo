import React from "react";

const SearchBox = () => {
  return (
    <div className="bg-gray-900 text-white p-4 lg:p-6 grid grid-cols-1 gap-4">
      {/* Top Section: Categories */}
      <div className="flex justify-center space-x-4 mb-4">
        <button className="bg-orange-500 px-6 py-2 rounded text-white font-medium hover:bg-orange-600 focus:outline-none">
          For Sale
        </button>
        <button className="bg-gray-800 px-6 py-2 rounded text-white font-medium hover:bg-gray-700 focus:outline-none">
          For Rent
        </button>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Heading */}
        <div className="flex flex-col justify-center items-start space-y-2">
          <h2 className="text-lg md:text-xl font-light">DISCOVER YOUR</h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">DREAM</h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">HOUSE</h1>
        </div>

        {/* Right Section: Form */}
        <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Dropdown Inputs */}
          <select className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none w-full">
            <option>All Types</option>
          </select>
          <input
            type="text"
            placeholder="Title"
            className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none w-full"
          />
          <input
            type="text"
            placeholder="Address"
            className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none w-full"
          />
          <select className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none w-full">
            <option>Any Bedrooms</option>
          </select>
          <select className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none w-full">
            <option>Any Bathrooms</option>
          </select>
          <div className="flex space-x-2 col-span-2">
            <input
              type="text"
              placeholder="Min Price"
              className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="Max Price"
              className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none w-full"
            />
          </div>

          {/* Sliders */}
          <div className="col-span-2">
            <label className="block text-sm mb-1">Size [0 - 1,000] SqFt</label>
            <input type="range" className="w-full accent-orange-500" min="0" max="1000" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm mb-1">Land Area [0 - 1,000] SqFt</label>
            <input type="range" className="w-full accent-orange-500" min="0" max="1000" />
          </div>

          {/* Property ID Input */}
          <input
            type="text"
            placeholder="Property ID"
            className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none w-full"
          />

          {/* Search Button */}
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

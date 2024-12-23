import React from "react";

const FirstHeader = () => {
  return (
    <header className="bg-black w-full flex justify-between items-center px-4 py-2">
      {/* Left Side Logo */}
      <div className="flex items-center">
        <img
          src="https://assets.elements.envato.com/apps/storefront/EnvatoLogoLight-b794a434513b3b975d91.svg" // Replace with your actual logo path
          alt="Envato Market Logo"
          className="h-6"
        />
        <span className="text-white text-lg font-semibold ml-2">
          market
        </span>
      </div>

      {/* Right Side Button */}
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Buy now
      </button>
    </header>
  );
};

export default FirstHeader;

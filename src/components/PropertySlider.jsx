import React, { useState, useEffect } from "react";

const PropertySlider = () => {
  // Array of dummy property data
  const properties = [
    {
      image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-38-1200x600.jpg",
      title: "Apartment 1580 Flat Shoals Rd SE Suite F Atlanta",
      price: "$2,000",
      type: "For Rent",
      size: "500 SqFt",
      bedrooms: 2,
      bathrooms: 2,
      address: "1580 Flat Shoals Rd SE Suite F Atlanta, GA 30316",
    },
    {
      image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-43-1200x600.jpg",
      title: "Villa 4445 Lamont St San Diego, CA 92109",
      price: "$480,000",
      type: "For Sale",
      size: "230 SqFt",
      bedrooms: 4,
      bathrooms: 4,
      address: "4445 Lamont St San Diego, CA 92109",
    },
    {
      image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-42-1200x600.jpg",
      title: "Modern House Downtown Street, New York",
      price: "$1,200,000",
      type: "For Sale",
      size: "1500 SqFt",
      bedrooms: 3,
      bathrooms: 3,
      address: "Downtown Street, New York, NY 10001",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Property Image */}
      <div
        className="absolute w-full h-full bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${properties[currentIndex].image})`,
        }}
      ></div>

      {/* Overlay for content */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="absolute bottom-10 left-10 text-white space-y-4 max-w-lg">
        {/* Property Title */}
        <h2 className="text-3xl font-bold">{properties[currentIndex].title}</h2>
        {/* Price and Type */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">{properties[currentIndex].price}</span>
          <span className="bg-blue-500 px-3 py-1 rounded">{properties[currentIndex].type}</span>
        </div>
        {/* Address */}
        <p className="text-sm flex items-center">
          <span className="material-icons mr-2">place</span>
          {properties[currentIndex].address}
        </p>
        {/* Details */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="material-icons">straighten</span>
            <span>{properties[currentIndex].size}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons">hotel</span>
            <span>{properties[currentIndex].bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons">bathtub</span>
            <span>{properties[currentIndex].bathrooms} Bathrooms</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300"
      >
        &gt;
      </button>
    </div>
  );
};

export default PropertySlider;

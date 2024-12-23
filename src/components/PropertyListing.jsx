import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyListing = () => {
  // Dummy property data
  const properties = [
    {
      image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-44-330x180.jpg",
      title: "4127 18th St San Francisco, CA ...",
      price: "$5,000 / Month",
      address: "4127 18th St San Francisco, CA 94114",
      type: "Store",
      agent: "Aya Magdy",
      time: "8 years ago",
      size: "500 SqFt",
      bedrooms: 4,
      bathrooms: 3,
      badges: ["Featured", "For Rent"],
    },
    {
      image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-42-330x180.jpg",
      title: "Restaurant Austin, TX 78702",
      price: "$1 M",
      address: "Austin, TX 78702",
      type: "Restaurant",
      agent: "Aya Magdy",
      time: "8 years ago",
      size: "200 SqFt",
      bedrooms: 4,
      bathrooms: 4,
      badges: ["Featured", "For Rent"],
    },
    {
      image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-43-330x180.jpg",
      title: "Villa 4445 Lamont St San Diego...",
      price: "$480,000",
      address: "4445 Lamont St San Diego, CA 92109",
      type: "Villa",
      agent: "Arafa El Sherief",
      time: "8 years ago",
      size: "230 SqFt",
      bedrooms: 4,
      bathrooms: 4,
      badges: ["Featured", "For Sale"],
    },
    {
      image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-38-330x180.jpg",
      title: "Apartment 1580 Flat Shoals Ave...",
      price: "$2,000 / Month",
      address: "1580 Flat Shoals Ave SE Atlanta, GA 30316",
      type: "Apartment",
      agent: "Arafa El Sherief",
      time: "8 years ago",
      size: "500 SqFt",
      bedrooms: 2,
      bathrooms: 2,
      badges: ["Featured", "For Rent"],
    },
    {
      image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-50-330x180.jpg",
      title: "Villa 552 Flat Shoals Ave SE Atl...",
      price: "$5 M",
      address: "552 Flat Shoals Ave SE Atlanta, GA 30316",
      type: "Apartment",
      agent: "Fatma Hassan",
      time: "8 years ago",
      size: "500 SqFt",
      bedrooms: 6,
      bathrooms: 4,
      badges: ["Featured", "For Sale"],
    },
    {
      image: "https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-40-1-330x180.jpg",
      title: "House 600 Guerrero St San Fr...",
      price: "$300,000 / Year",
      address: "600 Guerrero St San Francisco, CA 94110",
      type: "House",
      agent: "Fatma Hassan",
      time: "8 years ago",
      size: "300 SqFt",
      bedrooms: 5,
      bathrooms: 4,
      badges: ["Featured", "For Sale"],
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 via-white to-orange-100 overflow-hidden">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">FIND A PROPERTY</h2>
          <p className="text-orange-500 font-medium">BROWSE OUR DREAM HOUSE</p>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
          View All
        </button>
      </div>

      {/* Property Slider */}
      <Slider {...settings}>
        {properties.map((property, index) => (
          <div key={index} className="px-3">
            <div className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 flex space-x-2">
                  {property.badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs text-white rounded ${
                        badge === "Featured" ? "bg-orange-500" : "bg-blue-500"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {property.title}
                </h3>
                <p className="text-orange-500 font-medium">{property.price}</p>
                <p className="text-sm text-gray-600">{property.address}</p>
                <p className="text-sm text-gray-600">{property.type}</p>
                <p className="text-sm text-gray-600">Agent: {property.agent}</p>
                <p className="text-xs text-gray-400">{property.time}</p>
              </div>

              {/* Footer Section */}
              <div className="flex justify-between items-center p-4 bg-gray-50 text-sm">
                <span>{property.size}</span>
                <span>{property.bedrooms} Bedrooms</span>
                <span>{property.bathrooms} Bathrooms</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertyListing;

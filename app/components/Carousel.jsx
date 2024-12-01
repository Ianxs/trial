import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/assets/lechon baboy.jpg",
      title: "Lechon Baboy",
      description:
        "A Filipino roasted pig, crispy on the outside and tender on the inside.",
    },
    {
      src: "/assets/Lumpia shanghai.jpg",
      title: "Lumpia Shanghai",
      description:
        "Crispy and savory Filipino spring rolls filled with pork and vegetables.",
    },
    {
      src: "/assets/kinilaw.jpg",
      title: "Kinilaw",
      description:
        "A Filipino ceviche made with fresh fish marinated in vinegar and spices.",
    },
    {
      src: "/assets/swaki.jpg",
      title: "Swaki",
      description:
        "Sea urchins served fresh, a delicacy from the Philippines' coastal regions.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[200px] lg:h-[400px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Blurred Image */}
      <img
        src={images[currentIndex].src}
        alt={`Background ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110"
      />

      {/* Content Wrapper */}
      <div className="relative z-9 w-full max-w-6xl grid grid-cols-2 items-center jsutify-center ">
        {/* Left Content */}
        <div className="text-white space-y-4 text-justify pl-4 pr-6 lg:pr-14 ">
          <h1 className="text-[18px] lg:text-4xl font-bold">{images[currentIndex].title}</h1>
          <p className="text-[15px] lg:text-lg">{images[currentIndex].description}</p>
        </div>

        {/* Tilted Image on the Right */}
        <div className="relative w-[190px] h-[150px] lg:w-[500px] lg:h-[700px]">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transform lg:rotate-12"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 lg:bottom-4 lg:right-8 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

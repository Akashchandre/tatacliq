import React, { useState, useEffect } from "react";
import Banner1 from "../utils/images/63663948496926.webp";
import Banner2 from "../utils/images/63663950987294.webp";
import Banner3 from "../utils/images/63663950790686.webp";
import Banner4 from "../utils/images/63663948562462.webp";

const banners = [Banner1, Banner2, Banner3, Banner4];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div className="relative w-full h-full rounded-lg">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            className={`absolute block w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Banner ${index + 1}`}
          />
        ))}
      </div>

   
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
          )
        }
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}
      >
        ▶
      </button>
    </div>
  );
};

export default Banner;

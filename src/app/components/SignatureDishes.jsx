"use client";

import React, { useRef } from "react";
import { menuData } from "./Data"; // Adjust the path if necessary
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const SignatureDishes = () => {
  const carouselRef = useRef(null);
  const itemWidth = 300;
  const visibleItems = 4;
  const scrollAmount = itemWidth * visibleItems + (visibleItems - 1) * 24; // Adding gap between items

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container relative w-full max-w-[1248px] mx-auto p-4 bg-transparent rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-16 text-[#A54A69] uppercase tracking-wide">
        Signature Dishes
      </h2>
      <div className="relative">
        <div
          className="carousel-wrapper flex overflow-x-auto scroll-smooth"
          ref={carouselRef}
          aria-label="Carousel of signature dishes"
        >
          <div className="carousel-content flex gap-6">
            {menuData.map((item) => (
              <div
                key={item.id}
                className="border border-[#A54A69] w-[300px] flex-shrink-0 text-center flex flex-col"
                role="group"
                aria-labelledby={`item-${item.id}`}
                style={{ height: "400px" }} // Fixed height for each item
              >
                {/* Title */}
                <div className="p-4 border-b border-[#A54A69]">
                  <h3
                    id={`item-${item.id}`}
                    className="text-lg font-bold text-[#A54A69]"
                    style={{ whiteSpace: "normal" }}
                  >
                    {item.name}
                  </h3>
                </div>

                {/* Image */}
                <div className="flex-grow flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={`Image of ${item.name}`}
                    className="w-full h-64 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Carousel buttons and Menu button */}
        <div className="flex justify-between items-center w-full px-4 mt-4">
          <button
            className="bg-transparent border border-[#A54A69] rounded-full p-2 shadow-md hover:bg-[#A54A69] hover:text-white transition-colors duration-300"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-[#A54A69]" />
          </button>
          <Link
            href="/menu"
            className="bg-transparent border border-[#A54A69] rounded-full py-2 px-4 shadow-md text-[#A54A69] hover:bg-[#A54A69] hover:text-white transition-colors duration-300 lg:mt-5"
            aria-label="View Menu"
          >
            Menu
          </Link>
          <button
            className="bg-transparent border border-[#A54A69] rounded-full p-2 shadow-md hover:bg-[#A54A69] hover:text-white transition-colors duration-300"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-[#A54A69]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureDishes;

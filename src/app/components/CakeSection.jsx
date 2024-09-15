"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/CartProvider";

const CakeSection = ({ title, cakes }) => {
  const { addItemToCart } = useCart();

  return (
    <section className="px-4 sm:px-6 lg:px-20 mt-12">
      <hr className="border-t-2 border-[#A54A69] mb-4" />
      <h2 className="text-xl uppercase font-bold text-[#A54A69] text-center">
        {title}
      </h2>
      <hr className="border-t-2 border-[#A54A69] mt-4 mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cakes.map((item) => (
          <div
            key={item.id}
            className="border border-[#A54A69] flex flex-col text-center shadow-lg transition-transform transform hover:scale-105 w-full max-w-[280px] mx-auto"
            role="group"
            aria-labelledby={`item-${item.id}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain rounded-t-lg"
              loading="lazy"
            />
            <div className="p-3 flex-grow flex flex-col justify-between">
              <h3
                id={`item-${item.id}`}
                className="text-lg font-bold text-[#A54A69] mb-1"
              >
                {item.name}
              </h3>
              <div
                className="flex justify-center mb-3"
                aria-label={`Rating for ${item.name}`}
              >
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-[#A54A69] text-xl font-bold mb-4">
                {item.price}
              </p>
              <button
                className="text-[#A54A69] py-1.5 px-4 border border-[#A54A69] transition-transform duration-300 hover:bg-[#A54A69] hover:text-white hover:scale-105"
                aria-label={`Add ${item.name} to cart`}
                onClick={() => addItemToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CakeSection;

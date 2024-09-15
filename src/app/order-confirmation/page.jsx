import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5EDED]">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-2xl font-bold text-[#A54A69] mb-4">
          Order Confirmed
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for your order! Your order has been confirmed.
        </p>
        <Link
          href=""
          className="bg-[#A54A69] text-white px-4 py-2 rounded-lg hover:bg-[#bc7a90] transition duration-200"
        >
          Track Your Order
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;

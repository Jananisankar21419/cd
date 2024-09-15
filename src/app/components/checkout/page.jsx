"use client";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();

  const handleCheckoutComplete = () => {
   
    router.push("/order-confirmation"); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-[#A54A69]">
        Checkout
      </h1>
    

      <button
        onClick={handleCheckoutComplete}
        className="block w-full mt-8 bg-red-500 text-white py-2 rounded-md"
      >
        Complete Checkout
      </button>
    </div>
  );
}

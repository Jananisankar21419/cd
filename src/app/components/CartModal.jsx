"use client";
import React, { useState, useMemo, useEffect } from "react";
import { FaTimes, FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../context/CartProvider";
import { useRouter } from "next/navigation";

const CartModal = () => {
  const { cartItems, setIsCartOpen, removeItemFromCart, updateItemQuantity } =
    useCart();
  const router = useRouter();

  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [error, setError] = useState("");
  const [quantityErrors, setQuantityErrors] = useState({});
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [animateTotal, setAnimateTotal] = useState(false);

  const MAX_QUANTITY = 10;

  const calculateSubtotal = useMemo(() => {
    return cartItems.reduce(
      (acc, item) =>
        acc + parseFloat(item.price.replace("₹", "")) * item.quantity,
      0
    );
  }, [cartItems]);

  const calculateTotal = useMemo(() => {
    if (appliedDiscount) {
      return appliedDiscount.type === "fixed"
        ? Math.max(calculateSubtotal - appliedDiscount.value, 0)
        : calculateSubtotal * (1 - appliedDiscount.value / 100);
    }
    return calculateSubtotal;
  }, [calculateSubtotal, appliedDiscount]);

  const handleDiscount = (code) => {
    setError("");
    if (code === "FIXED10") {
      setAppliedDiscount({ type: "fixed", value: 10 });
      setAnimateTotal(true);
    } else if (code === "PERCENT10") {
      setAppliedDiscount({ type: "percentage", value: 10 });
      setAnimateTotal(true);
    } else {
      setError('Invalid discount code. Please enter "FIXED10" or "PERCENT10".');
    }
  };

  const handleClearDiscount = () => {
    setAppliedDiscount(null);
    setDiscountCode("");
    setError("");
    setAnimateTotal(true);
  };

  const handleCheckout = () => {
    if (!discountCode) {
      setError("Please enter a discount code before proceeding to checkout.");
      return;
    }

    setCheckoutMessage("Successfully added to cart.");

    // Close the modal
    setIsCartOpen(false);

    // Redirect to order confirmation page
    router.push("/order-confirmation");
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > MAX_QUANTITY) {
      setQuantityErrors((prevErrors) => ({
        ...prevErrors,
        [id]: `Maximum quantity for this item is ${MAX_QUANTITY}.`,
      }));
    } else {
      setQuantityErrors((prevErrors) => {
        const { [id]: removedError, ...restErrors } = prevErrors;
        return restErrors;
      });
      updateItemQuantity(id, newQuantity);
    }
  };

  useEffect(() => {
    if (animateTotal) {
      const timer = setTimeout(() => setAnimateTotal(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animateTotal]);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-9 sm:p-6">
      <div className="bg-[#F5EDED] p-6 rounded-lg w-full max-w-lg relative max-h-[90vh] overflow-y-auto shadow-lg">
        <button
          aria-label="Close cart"
          className="absolute top-4 right-2 text-gray-500 hover:text-gray-900 transition-colors duration-200"
          onClick={() => setIsCartOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-[#A54A69] text-center uppercase">
          Cart
        </h2>

        <div className="overflow-y-auto max-h-[400px] mb-4">
          <ul className="space-y-4">
            {cartItems.length === 0 ? (
              <li className="text-[#A54A69] text-center">
                Your cart is empty.
              </li>
            ) : (
              cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-2 border-b border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg shadow-sm"
                    />
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-sm font-medium text-[#A54A69]">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#A54A69]">{item.price}</p>
                      <div className="flex items-center mt-2 space-x-2 text-[#A54A69]">
                        <button
                          aria-label="Decrease quantity"
                          className="p-1 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-200"
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                        >
                          <FaMinus size={16} />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              Math.max(1, Number(e.target.value))
                            )
                          }
                          className="w-12 text-center border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                          aria-label={`Quantity for ${item.name}`}
                        />
                        <button
                          aria-label="Increase quantity"
                          className="p-1 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-200"
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              Math.min(MAX_QUANTITY, item.quantity + 1)
                            )
                          }
                        >
                          <FaPlus size={16} />
                        </button>
                        <button
                          aria-label="Remove item"
                          className="ml-4 text-red-500 hover:underline"
                          onClick={() => removeItemFromCart(item.id)}
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </div>
                      {quantityErrors[item.id] && (
                        <p className="text-red-500 text-sm mt-2">
                          {quantityErrors[item.id]}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="mt-6">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500 text-[#A54A69]"
            placeholder="Discount code"
            aria-label="Discount code input"
          />
          <button
            className="mt-4 w-full bg-[#A54A69] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
            onClick={() => handleDiscount(discountCode)}
          >
            Apply Discount
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <p className="mt-4 text-gray-600">Valid codes: FIXED10, PERCENT10</p>
          {appliedDiscount && (
            <button
              className="mt-2 text-[#A54A69] hover:underline"
              onClick={handleClearDiscount}
              aria-label="Clear discount"
            >
              Clear Discount
            </button>
          )}
        </div>

        <div className="mt-4 border-t border-[#A54A69] pt-4">
          <div className="flex justify-between text-lg text-[#A54A69]">
            <span>Subtotal:</span>
            <span>₹{calculateSubtotal.toFixed(2)}</span>
          </div>
          {appliedDiscount && (
            <div className="flex justify-between text-lg text-[#A54A69] mt-2">
              <span>Discount:</span>
              <span>
                {appliedDiscount.type === "fixed"
                  ? `₹${appliedDiscount.value}`
                  : `${appliedDiscount.value}%`}
              </span>
            </div>
          )}
          <div className="flex justify-between text-xl font-bold text-[#A54A69] mt-2">
            <span>Total:</span>
            <span
              className={`${
                animateTotal ? "animate-pulse" : ""
              } text-[#A54A69]`}
            >
              ₹{calculateTotal.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-[#A54A69] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          {checkoutMessage && (
            <p className="mt-2 text-green-500">{checkoutMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

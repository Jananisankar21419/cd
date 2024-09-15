"use client";
import React, { useState } from "react";
import CakeSection from "../components/CakeSection";
import { chocolatelovers, fruity, cheesecakes } from "../components/Data";
import Navbar from "../components/Navbar/Navbar";
import CartModal from "../components/CartModal"; // Assume you have a CartModal component

const Menu = () => {
  const [cartItems, setCartItems] = useState([]); // Cart state
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // Control modal visibility

  // Toggle cart modal visibility
  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  // Add item to cart
  const addToCart = (cake) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === cake.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...cake, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-[#F5EDED] min-h-screen">
      {/* Pass cartItems and toggleCartModal to Navbar */}
      <Navbar cartItems={cartItems} toggleCartModal={toggleCartModal} />

      {/* Cake sections */}
      <CakeSection
        title="Chocolate Lovers"
        cakes={chocolatelovers}
        addToCart={addToCart}
      />
      <CakeSection
        title=" Fruity Delights"
        cakes={fruity}
        addToCart={addToCart}
      />
      <CakeSection
        title="Cheesecakes"
        cakes={cheesecakes}
        addToCart={addToCart}
      />

      {/* Cart Modal */}
      {isCartModalOpen && (
        <CartModal
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          onClose={toggleCartModal}
        />
      )}
    </div>
  );
};

export default Menu;

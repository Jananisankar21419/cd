"use client";
import { useState, Suspense, lazy } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useCart } from "../../context/CartProvider";

// Lazy load components
const EncryptButton = lazy(() => import("../Button/Button"));
const CartModal = lazy(() => import("../CartModal"));

const Navbar = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeItemFromCart,
    updateItemQuantity,
  } = useCart(); // Use global cart state

  // Toggle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle cart modal visibility
  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-4 mt-2 w-full z-10 bg-[#F5EDED]">
        <div className="flex items-center w-full max-w-screen-xl mx-auto px-4">
          {/* Mobile menu */}
          <div
            id="mobile-menu"
            className={`md:hidden flex flex-col items-center space-y-7 absolute top-16 left-0 w-full bg-[#F5EDED] shadow-md ${
              isMenuOpen ? "block" : "hidden"
            }`}
            style={{ zIndex: 20 }} // Ensure it's above other content
          >
            <Link href="/menu" passHref>
              <Suspense fallback={<div>Loading...</div>}>
                <EncryptButton>Menu</EncryptButton>
              </Suspense>
            </Link>
            <Link href="/about" passHref>
              <Suspense fallback={<div>Loading...</div>}>
                <EncryptButton>About</EncryptButton>
              </Suspense>
            </Link>
            <Link href="/contact" passHref>
              <Suspense fallback={<div>Loading...</div>}>
                <EncryptButton>Contact</EncryptButton>
              </Suspense>
            </Link>
            {/* Cart Button inside Mobile Menu */}
            <div
              onClick={toggleCartModal}
              className="text-[#A54A69]"
              aria-label="Open cart"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <EncryptButton>Cart </EncryptButton>
              </Suspense>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex space-x-12 flex-shrink-0 lg:gap-28">
              <Link href="/menu" passHref>
                <Suspense fallback={<div>Loading...</div>}>
                  <EncryptButton>Menu</EncryptButton>
                </Suspense>
              </Link>
              <div className="flex items-center">
                <Link href="/about" passHref>
                  <Suspense fallback={<div>Loading...</div>}>
                    <EncryptButton>About</EncryptButton>
                  </Suspense>
                </Link>
              </div>
            </div>

            <div className="flex items-center flex-1 justify-center px-4 xl:pl-24">
              <Link href="/" passHref>
                <Image src="/lo1.svg" alt="Logo" width={35} height={35} />
              </Link>
            </div>

            <div className="flex space-x-4 flex-shrink-0 xl:gap-4">
              <div className="flex items-center lg:mr-44">
                <Link href="/contact" passHref>
                  <Suspense fallback={<div>Loading...</div>}>
                    <EncryptButton>Contact</EncryptButton>
                  </Suspense>
                </Link>
              </div>
              {/* Cart Button for Desktop */}
              <div
                onClick={toggleCartModal}
                className="text-[#A54A69]"
                aria-label="Open cart"
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <EncryptButton>Cart </EncryptButton>
                </Suspense>
              </div>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#A54A69]"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <Suspense fallback={<div>Loading Cart...</div>}>
          <CartModal
            cartItems={cartItems}
            onClose={toggleCartModal}
            onRemoveItem={removeItemFromCart}
            onQuantityChange={updateItemQuantity}
          />
        </Suspense>
      )}
    </>
  );
};

export default Navbar;

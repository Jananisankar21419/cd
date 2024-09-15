"use client";

import { CartProvider } from "./context/CartProvider";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing";
import SignatureDishes from "./components/SignatureDishes";
import Intro from "./components/Intro";
import Description from "./components/Description";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Wheel from "./components/Wheel";

export default function Page() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Landing />
          <section className="py-16 px-4 bg-[#F5EDED]">
            <SignatureDishes />
          </section>
          <Intro />
          <Wheel />
          <Description />
          <Section />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

import React from "react";

import Contactus from "../components/Contact/Contactus";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer";
import Cake from "../components/Cake";

const page = () => {
  return (
    <div className="h-screen w-full bg-[#F5EDED] ">
      <Navbar />
      <Cake />
      <Contactus />
      <Footer />
    </div>
  );
};

export default page;

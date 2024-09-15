import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5EDED] border-t border-[#A54A69] py-16 sm:py-20 md:py-24 lg:py-44 relative text-center">
      <h1 className="text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[9vw] xl:text-[15vw] font-bold text-[#A54A69] mb-4 transition-all duration-300">
        cakedilim©
      </h1>

      <div className="flex justify-center items-center mt-4 text-[#A54A69] text-sm sm:text-base lg:text-base space-x-12">
        <span>
          Handcrafted by{" "}
          <a
            href="https://janani-portfolio.vercel.app/"
            className="font-bold hover:text-[#A54A69]"
            target="_blank"
            rel="noopener noreferrer"
          >
            JANANI
          </a>
        </span>
        <span>©2024</span>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 sm:p-4 md:p-3 lg:p-4">
        <div className="w-full flex justify-between items-start">
          <span className="text-sm sm:text-sm md:text-base lg:text-lg text-[#A54A69] uppercase lg:pb-28">
            food
          </span>
          <span className="text-sm sm:text-sm md:text-base lg:text-lg text-[#A54A69] uppercase">
            quality
          </span>
          <span className="text-sm sm:text-sm md:text-base lg:text-lg text-[#A54A69] uppercase">
            cakes
          </span>
        </div>

        <div className="w-full flex justify-between items-end">
          <span className="text-sm sm:text-sm md:text-base lg:text-lg text-[#A54A69] uppercase">
            ready
          </span>
          <span className="text-sm sm:text-sm md:text-base lg:text-lg text-[#A54A69] uppercase">
            to
          </span>
          <span className="text-sm sm:text-sm md:text-base lg:text-lg text-[#A54A69] uppercase">
            serve
          </span>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none">
        <div className="w-full h-px bg-[#A54A69] mt-8 sm:mt-10 md:mt-12 lg:mt-16"></div>
        <div className="w-full h-px bg-[#A54A69] mb-8 sm:mb-10 md:mb-12 lg:mb-16"></div>
      </div>
    </footer>
  );
};

export default Footer;

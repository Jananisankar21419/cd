import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Background from "../../../public/cup2.webp";

const Cake = () => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center bg-[#F5EDED] border-t border-[#A54A69]">
      {/* Left Section with Text and Button */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8">
        <div className="text-center mb-4 md:mb-10">
          <p className="text-base md:text-3xl lg:text-3xl font-bold text-[#A54A69]">
            FOR CUSTOMIZED CAKES AND GIFTS <br />
            BOOK A CALL
          </p>
        </div>
        <button className="flex items-center border border-[#A54A69] text-[#A54A69] px-4 py-2 rounded-full bg-transparent hover:bg-[#A54A69] hover:text-white transition-colors focus:outline-none focus:ring-4 focus:ring-[#A54A69]">
          9791528365
          <GoArrowRight className="ml-2" />
        </button>
      </div>

      {/* Vertical Divider Line */}
      <div className="w-[1px] bg-[#A54A69] h-full"></div>

      {/* Right Section with Image */}
      <div className="flex-1 relative h-full">
        <Image
          src={Background}
          fill
          alt="Background Image"
          style={{ objectFit: "cover", borderRadius: "0 0 0 10px" }}
        />
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full border-t border-[#A54A69]"></div>
    </div>
  );
};

export default Cake;

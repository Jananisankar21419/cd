import Image from "next/image";
import Background from "../../../public/mmm.webp";

const Description = () => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center bg-[#F5EDED] border-t border-[#A54A69]">
      {/* Left Section with Image */}
      <div className="flex-1 relative h-full">
        <Image
          src={Background}
          fill
          alt="Background Image"
          loading="lazy"
          className="object-cover rounded-[10px_0_0_10px]"
        />
      </div>

      {/* Vertical Divider Line */}
      <div className="w-[1px] lg:ml-32 bg-[#A54A69] h-full"></div>

      {/* Right Section with Text */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8">
        <div className="text-center">
          <p className="text-2xl md:text-5xl lg:text-6xl font-bold text-[#A54A69]">
            FOOOOODIES <br />
            ASSEMBLE!!!
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full border-t border-[#A54A69]"></div>
    </div>
  );
};

export default Description;

import Image from "next/image";
import Background from "../../../../public/cup.webp";

const About = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center bg-[#F5EDED] border-t border-[#A54A69]">
      {/* Left Section with Text and Lines */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8">
        <div className="text-center mb-4 md:mb-10">
          <p className="text-sm md:text-xl lg:text-xl font-semibold text-[#A54A69]">
            At CakeDilim, we believe that every slice tells a story. <br />
            From the rich, decadent flavors to the delicate, artistic designs
            our cakes are crafted with passion and precision.
          </p>
        </div>
      </div>

      {/* Vertical Divider Line */}
      <div className="w-[1px] bg-[#A54A69] h-full"></div>

      {/* Right Section with Image */}
      <div className="flex-1 relative h-full">
        <Image
          src={Background}
          fill
          alt="Delicious cake display in a shop"
          style={{ objectFit: "cover", borderRadius: "0 0 0 10px" }}
        />
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full border-t border-[#A54A69]"></div>
    </section>
  );
};

export default About;

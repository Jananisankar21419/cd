import Image from "next/image";
import Background from "../../../public/mmm.webp";

const AboutCake = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center bg-[#F5EDED] border-t border-[#A54A69]">
      {/* Left Section with Image */}
      <div className="flex-1 relative h-full">
        <Image
          src={Background}
          fill
          alt="A beautifully decorated cake"
          loading="lazy"
          className="object-cover rounded-[10px_0_0_10px]"
        />
      </div>

      {/* Vertical Divider Line */}
      <div className="w-[1px] lg:ml-32 bg-[#A54A69] h-full"></div>

      {/* Right Section with Text */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 text-[#A54A69] font-semibold">
        <div className="text-center text-sm md:text-xl lg:text-xl xl:text-xl">
          <p className="mb-4">
            Our journey began with a simple love for baking and has grown into a
            haven for cake lovers who appreciate the finer things in life. We
            use only the finest ingredients to create our confections, ensuring
            each bite is a memorable experience.
          </p>
          <p>
            Whether you are celebrating a special occasion or simply indulging
            your sweet tooth, CakeDilim is here to make your moments sweeter.
            Join us in our love for cakes and discover why we are the ultimate
            destination for cake enthusiasts.
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full border-t border-[#A54A69]"></div>
    </section>
  );
};

export default AboutCake;

"use client";
import Image from "next/image";
import Background from "../../../public/000.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      aria-label="Scrolling section with background image "
      className="relative flex items-center justify-center h-screen overflow-hidden bg-[#F5EDED]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 p-20 text-[#A54A69] w-full h-full flex flex-col justify-center items-center">
        {/* Horizontal line above the text */}
        <div
          className="w-[40vw] border-t-2 border-[#A54A69] mb-4"
          role="separator"
        ></div>

        {/* Text */}
        <p className="w-full text-[5vw]  lg:text-[3vw] tracking-wide uppercase text-center">
          Stop Scrolling, Lets Eat!
        </p>

        {/* Horizontal line below the text */}
        <div
          className="w-[40vw] border-t-2 border-[#A54A69] mt-4"
          role="separator"
        ></div>
      </div>

      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={Background}
            fill
            alt="Delicious cake with grapes"
            style={{ objectFit: "cover" }}
             className="object-cover sm:object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}

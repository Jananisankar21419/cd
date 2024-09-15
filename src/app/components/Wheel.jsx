"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Picture1 from "../../../public/lo1.svg";

const Wheel = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden bg-[#F5EDED]">
      <div className="h-[1vh]" />
      <div ref={container}>
        <Slide src={Picture1} progress={scrollYProgress} />
      </div>
      <div className="h-[1vh]" />
    </main>
  );
};

const Slide = ({ src, progress }) => {
  const scrollSpeed = 0.5;
  const translateX = useTransform(
    progress,
    [0, 1],
    [`0%`, `${-100 * scrollSpeed}%`]
  );

  return (
    <motion.div style={{ x: translateX }} className="flex whitespace-nowrap">
      {[...Array(35)].map((_, index) => (
        <Phrase key={index} src={src} />
      ))}
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className="flex items-center mx-4">
      <p className="text-[4vw] lg:text-[1.2vw] text-[#A54A69] font-medium md:text-base lg:text-base">
        cake dilim
      </p>
      <span className="relative h-[4vw] w-[4vw] rounded-full overflow-hidden ml-2 lg:h-[1vw] xl:w-[1vw]  md:w-[2vw] md:h-[2vw]  ">
        <Image
          src={src}
          alt="Decorative image of cake"
          fill
          style={{ objectFit: "contain" }}
        />
      </span>
    </div>
  );
};

export default Wheel;

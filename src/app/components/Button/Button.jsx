"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({ children, to }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(children || ""); 

  useEffect(() => {
    // Clear interval when component unmounts
    return () => clearInterval(intervalRef.current);
  }, []);

  const scramble = () => {
    if (!text) return; // Early return if text is not defined

    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(children || ""); // Fallback to empty string if children is undefined
  };

  const handleClick = () => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={handleClick}
      aria-label={children}
      className="relative overflow-hidden rounded-lg px-4 py-2 font-mono font-medium uppercase text-[#AD4A69] transition-colors hover:text-[#963838]"
    >
      <span>{text}</span>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-t from-black/0 via-black/50 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default EncryptButton;

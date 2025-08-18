import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style.js";
import ComputerCanvas from "./canvas/Computer.jsx";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {fadeIn} from "../utilities/motion.js"

function Hero() {
  const [text] = useTypewriter({
    words: [
      " Designer.",
      " Developer.",
      " Editor.",
      " Builder.",
      " Enthusiast.",
    ],
    loop: 0,
    delaySpeed: 320,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section className="relative max-w-screen-2xl h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-screen-2xl ${styles.paddingX} autogrid items-center gap-5`}
      >
        <motion.div
        variants={fadeIn()}

        className="w-full flex flex-1 flex-col">
          <div className="flex gap-2">
            <div className="flex h-4 justify-center green-pink-gradient w-full rounded mb-2"></div>
            <div className="flex h-4 justify-center violet-gradient w-3/4 rounded mb-2"></div>
          </div>
          <div className="flex gap-2">
            <div className="flex h-4 justify-center orange-gradient w-3/4  rounded mb-2"></div>
            <div className="flex h-4 justify-center violet-gradient w-full rounded mb-2"></div>
          </div>
          <h1
            className={`${styles.heroSubText} text-white paragraphFont font-extralight flex items-center justify-start gap-3`}
          >
            Hi,{" "}
            <div className="flex h-4 justify-center violet-gradient w-3/4 rounded"></div>
          </h1>
          <h1 className={`${styles.heroHeadText} customFont`}>
            I am a
            <span className="text-[#915EFF]">{text}</span>
            <span className="text-[#915EFF]">
              <Cursor />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 paragraphFont font-extralight text-white-100`}>
            I develop eye catching user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          <div className="flex gap-2 mt-2">
            <div className="flex h-4 justify-center green-pink-gradient w-1/4 rounded mb-2"></div>
            <div className="flex h-4 justify-center orange-gradient w-2/5 rounded mb-2"></div>
          </div>
          <div className="flex gap-2">
            <div className="flex h-4 justify-center orange-gradient w-3/4  rounded mb-2"></div>
            <div className="flex h-4 justify-center violet-gradient w-full rounded mb-2"></div>
          </div>
        </motion.div>

        <ComputerCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="arrow mb-1"></div>
            <div className="arrow mb-1"></div>
          </motion.div>
        </a>
      </div>
    </section>
  );
}

export default Hero;

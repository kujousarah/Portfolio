import React from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import Aenon from "../assets/Aenon.png";
import Gracien from "../assets/Gracien.png";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";


function About() {
  return (
    <div
      id="about"
      className={` mx-auto max-w-screen-2xl ${styles.paddingX} w-full items-center gap-5 pt-20`}
    >
      <div
        className={`paragraphFont flex flex-col items-center justify-center mt-20`}
      >
        <p
          className={`${styles.sectionSubText} pink-text-gradient w-fit text-center`}
        >
          Introduction
        </p>
        <h1 className={`${styles.heroHeadText} customFont`}>ABOUT ME.</h1>
        <p
          className={`${styles.sectionSubText} max-w-[850px] w-full text-center`}
        >
         I’m an aspiring developer with a strong willingness to learn. While I may not yet possess all the necessary skills, I’m a fast learner who is eager to explore and adapt to new technologies.
        </p>
      </div>

      <section className="md:flex justify-center gap-8">
        <Tilt
          options={{
            scale: 1,
            max: 35,
            speed: 1000,
            easing: "cubic-bezier(.03,.98,.52,.99)",
          }}
          className="md:mt-16 mt-12  md:block flex justify-center"
        >
          <div className="bg-[#03000C] max-w-[500px]  md:rounded-2xl md:px-10 px-7 py-12 flex items-center md:ml-[40px] rounded-xl md:flex-row flex-col gap-8 md:mt-[256px] shadow-2xl">
            <div className="relative max-w-[180px]  bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-700 md:rounded-xl rounded-[100vmax] md:ml-[-80px]">
              <img src={Gracien} alt="Profile-Pic" className="" />
            </div>
            <div className=" flex flex-col gap-2 w-fit">
              <h1
                className={`${styles.sectionSubText} uppercase paragraphFont md:text-left text-center pink-text-gradient `}
              >
                Sarah Michelle
              </h1>
              <h1
                className={`${styles.subHead} paragraphFont md:text-left text-center`}
              >
                Developer
              </h1>
              <h1
                className={`${styles.textHead} paragraphFont md:text-left text-center`}
              >
                Empowering users through captivating interfaces ideas into
                pixel-perfect realities.
              </h1>
              <div className="mt-6">
                <Link
                  to="/sarah"
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="h-12 border-2 border-white max-w-[250px] rounded-[100vmax] flex items-center justify-center mx-auto text-[1rem] hover:scale-105">
                    <h1 className="paragraphFont pink-text-gradient">
                      More info
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Tilt>
      </section>
    </div>
  );
}

export default About;

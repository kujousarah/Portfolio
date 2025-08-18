import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import UIUXDesign from "../assets/UI Designer.png";
import TechRepairs from "../assets/Technical Repairs.png";
import { Link } from "react-router-dom";
import SocialMedia from "../assets/Social Media.png";
import Design from "../assets/Design.png";
import ContentCreation from "../assets/Content Creation.png";

/*development*/
import Javascript from "../assets/tech-editors-icons/javascript.png";
import Html from "../assets/tech-editors-icons/html.png";
import Css from "../assets/tech-editors-icons/css.png";
import ReactJs from "../assets/tech-editors-icons/react.png";
import Tailwind from "../assets/tech-editors-icons/tailwind.png";
import Bootstrap from "../assets/tech-editors-icons/bootstrap.png";
import Php from "../assets/tech-editors-icons/php.png";
import NodeJs from "../assets/tech-editors-icons/nodejs.png";

/*editors*/
import Figma from "../assets/tech-editors-icons/figma.png";
import Photoshop from "../assets/tech-editors-icons/vecteezy_photoshop-icon-vector-illustration_13403706-removebg-preview 1.png";
import Illustrator from "../assets/tech-editors-icons/vecteezy_adobe-illustrator-logo_13403705-removebg-preview 1.png";
import VsCode from "../assets/tech-editors-icons/vscode.png";
import Canva from "../assets/tech-editors-icons/vecteezy_canva-software-logo_31712153-removebg-preview 1.png";

function Skills() {
  const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 7.25,
          delay: delay,
        },
      },
    };
  };
  return (
    <div className={`${styles.paddingX} mx-auto max-w-screen-2xl w-full pt-20`}>
      <motion.div
        variants={textVariant}
        className="paragraphFont text flex flex-col mt-20 mb-16 "
      >
        <p className={`${styles.sectionSubText} pink-text-gradient w-fit`}>
          Skills
        </p>
        <h1 className={`${styles.sectionSubHeadText} customFont`}>
          WHAT I CAN OFFER.
        </h1>
        <p className={`${styles.sectionSubText} text-secondary`}>
          These are the specific skills and technologies that I can offer and
          might help you.
        </p>
      </motion.div>
      <section className="flex flex-col md:gap-12 gap-28">
        <div className="md:flex-row  flex items-center justify-center flex-col md:gap-8 gap-5">
          <div className="max-w-[450px] w-full">
            <img src={UIUXDesign} alt="" className="w-full" />
          </div>
          <div className="max-w-[500px] w-full flex md:items-start items-center md:justify-start justify-between md:text-start text-center flex-col gap-2">
            <h1
              className={`${styles.sectionSubHeadText} customFont font-light tracking-wider`}
            >
              UI/UX Design
            </h1>
            <p className={`${styles.sectionSubText} paragraphFont`}>
              Interfaces that wow, workflows that flow.
            </p>
            <div className="mt-4 h-12 flex items-center justify-center px-10 rounded-[100vmax] custom-gradient custom-shadow">
              <Link to="" className="paragraphFont text-white">
                Contact now
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex-row-reverse  flex items-center justify-center flex-col gap-5">
          <div className="max-w-[450px] w-full">
            <img src={TechRepairs} alt="" className="w-full" />
          </div>
          <div className="max-w-[500px] w-full flex md:items-start items-center md:justify-start justify-between md:text-start text-center flex-col gap-2">
            <h1
              className={`${styles.sectionSubHeadText} customFont font-light tracking-wider`}
            >
              PC Building/Repair
            </h1>
            <p className={`${styles.sectionSubText} paragraphFont`}>
              I can bring your PC back to life. Upgrading? I've got you covered.
            </p>
            <div className="mt-4 h-12 flex items-center justify-center px-10 rounded-[100vmax] blue-gradient custom-shadow">
              <Link to="" className="paragraphFont text-white ">
                Contact now
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex-row  flex items-center justify-center flex-col md:gap-8 gap-5">
          <div className="max-w-[450px] w-full">
            <img src={SocialMedia} alt="" className="w-full" />
          </div>
          <div className="max-w-[500px] w-full flex md:items-start items-center md:justify-start justify-between md:text-start text-center flex-col gap-2">
            <h1
              className={`${styles.sectionSubHeadText} customFont font-light tracking-wider`}
            >
              Social Media Management
            </h1>
            <p className={`${styles.sectionSubText} paragraphFont`}>
              Social media that works for your business? Unleash the power of
              social media.
            </p>
            <div className="mt-4 h-12 flex items-center justify-center px-10 rounded-[100vmax] orange-gradient custom-shadow">
              <Link to="" className="paragraphFont text-white">
                Contact now
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex-row-reverse  flex items-center justify-center flex-col gap-5">
          <div className="max-w-[450px] w-full">
            <img src={Design} alt="" className="w-full" />
          </div>
          <div className="max-w-[500px] w-full flex md:items-start items-center md:justify-start justify-between md:text-start text-center flex-col gap-2">
            <h1
              className={`${styles.sectionSubHeadText} customFont font-light tracking-wider`}
            >
              Poster/Logo Making
            </h1>
            <p className={`${styles.sectionSubText} paragraphFont`}>
              Get your message seen, heard, and remembered.
            </p>
            <div className="mt-4 h-12 flex items-center justify-center px-10 rounded-[100vmax] green-gradient custom-shadow">
              <Link to="" className="paragraphFont text-white">
                Contact now
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex-row  flex items-center justify-center flex-col md:gap-8 gap-5">
          <div className="max-w-[450px] w-full">
            <img src={ContentCreation} alt="" className="w-full" />
          </div>
          <div className="max-w-[500px] w-full flex md:items-start items-center md:justify-start justify-between md:text-start text-center flex-col gap-2">
            <h1
              className={`${styles.sectionSubHeadText} customFont font-light tracking-wider`}
            >
              Content Creation
            </h1>
            <p className={`${styles.sectionSubText} paragraphFont`}>
              I don't just create content, I create conversations. Content
              that's as unique as you are.
            </p>
            <div className="mt-4 h-12 flex items-center justify-center px-10 rounded-[100vmax] green-pink-gradient custom-shadow">
              <Link to="" className="paragraphFont text-white">
                Contact now
              </Link>
            </div>
          </div>
        </div>

        <div className="autogrid md:autogridTwo md:gap-6 gap-5">
          <div className="bg-[#03000C] md:px-12 px-5 md:py-14 py-10 rounded-xl shadow-xl">
            <div className="flex justify-center flex-col gap-2 text-center items-center">
              <h1
                className={`${styles.subHead} customFont pink-text-gradient w-fit font-semibold`}
              >
                Tools for Development
              </h1>
              <h1
                className={`${styles.textHead} paragraphFont text-secondary w-fit font-light`}
              >
                These are the tools that we use for development.
              </h1>

              <div className="flex flex-1 flex-wrap gap-4 w-full justify-center mt-6">
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Javascript} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Javascript
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Html} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Html
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Css} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Css
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={ReactJs} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    ReactJs
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Tailwind} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Tailwind
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Bootstrap} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Bootstrap
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Php} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    PHP
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={NodeJs} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    NodeJs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#03000C] md:px-12 px-5 md:py-14 py-10 rounded-xl shadow-xl h-fit">
            <div className="flex justify-center flex-col gap-2 text-center items-center">
              <h1
                className={`${styles.subHead} customFont pink-text-gradient w-fit font-semibold`}
              >
                Tools for Editing
              </h1>
              <h1
                className={`${styles.textHead} paragraphFont text-secondary w-fit font-light`}
              >
                These are the tools that we use for editing.
              </h1>

              <div className="flex flex-1 flex-wrap gap-4 w-full justify-center mt-6">
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={VsCode} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    VScode
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Figma} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Figma
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Photoshop} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Photoshop
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Illustrator} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Illustrator
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Canva} alt="" />
                  <p
                    className={`${styles.textHead} paragraphFont text-white`}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;

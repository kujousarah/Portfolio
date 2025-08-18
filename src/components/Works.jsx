import React from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import AProject2 from "../assets/aenonFile/Masskara.png";

import GProject1 from "../assets/gracienFile/1.jpg";

import GPoster1 from "../assets/aenonFile/sksks.png";
import GPoster2 from "../assets/aenonFile/362537558_786406079834108_8395257090740567931_n.png";
import Gposter3 from "../assets/aenonFile/red manok.png";

import HTML from "../assets/tech-editors-icons/html.png";
import Javasctipt from "../assets/tech-editors-icons/javascript.png";
import Css from "../assets/tech-editors-icons/css.png";
import linkIcon from "../assets/link-solid.svg";

function Works() {
  return (
    <section>
      <div className={`${styles.paddingX} pt-20 mx-auto max-w-screen-2xl`}>
        <div className="paragraphFont flex flex-col text-center items-center justify-center mt-20">
          <h1 className={`${styles.sectionSubText} pink-text-gradient w-fit`}>
            Works
          </h1>
          <h1 className={`${styles.sectionHeadText} customFont `}>
            MY PROJECTS
          </h1>
          <p
            className={`${styles.sectionSubText} paragraphFont text-secondary`}
          >
            These are some side projects that I finished.
          </p>
        </div>
        <h1
          className={`${styles.sectionSubHeadText} md:mt-16 mt-12 md:mb-10 mb-8 paragraphFont font-extralight pink-text-gradient w-fit`}
        >
          Web Projects.
        </h1>
        <div className="md:autogridTwo autogrid gap-x-7 gap-y-12">
          <div className="relative overflow-hidden  max-w-[100%] w-full flex flex-col justify-center items-center gap-4">
            <div className=" bg-primary md:p-6 rounded-lg shadow-xl">
              <img src={GProject1} alt="" className="rounded-lg" />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl flex flex-col">
              <h1 className={`${styles.subHead} paragraphFont text-white`}>
                Hotel Transylvania
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>
                dsajk jdksajdk sajdksajdk sajkdj askdjs akjdk sajdksajdk
                asjdksajkdj
              </p>

              <div className="flex gap-4 justify-center flex-wrap mt-6">
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Javasctipt} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    Javascript
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={HTML} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    HTML
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Css} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    CSS
                  </p>
                </div>
              </div>

              <div className="h-12 rounded-lg bg-secondary mt-6 shadow-xl flex items-center justify-center">
                <Link to="#">
                  <img src={linkIcon} alt="" className="h-[24px]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden max-w-[100%] w-full flex flex-col gap-4">
            <div className=" bg-primary md:p-6 rounded-lg shadow-xl">
              <img src={AProject2} alt="" className="rounded-lg" />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl flex flex-col">
              <h1 className={`${styles.subHead} paragraphFont text-white`}>
                Masskara
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>
                A commissioned project from a student that contained information
                about masskara festival.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mt-6">
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Javasctipt} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    Javascript
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={HTML} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    HTML
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Css} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    CSS
                  </p>
                </div>
              </div>

              <div className="h-12 rounded-lg hover:scale-105 custom-gradient mt-6 shadow-xl flex items-center justify-center">
                <Link
                  to="https://massakara.vercel.app/"
                  target="_Blank"
                  className="h-full w-full flex items-center justify-center"
                >
                  <img src={linkIcon} alt="" className="h-[24px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h1
          className={`${styles.sectionSubHeadText} md:mt-16 mt-12 md:mb-10 mb-8 paragraphFont font-extralight pink-text-gradient w-fit`}
        >
          Poster Gallery.
        </h1>

        <div className="flex  justify-center flex-wrap cursor-pointer">
          <div className="relative overflow-hidden max-w-[350px] w-full bg-primary items-center flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={GPoster1} alt="" className=" hover:scale-105 " />
          </div>
          <div className="relative overflow-hidden max-w-[350px] w-full bg-primary items-center bg-cover flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={GPoster2} alt="" className=" hover:scale-105 " />
          </div>
          <div className="relative overflow-hidden max-w-[350px] w-full bg-primary items-center bg-cover flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={Gposter3} alt="" className=" hover:scale-105 " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;

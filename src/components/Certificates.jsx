import React from "react";
import { styles } from "../style";

import ACert from "../assets/SarahFile/Image (41).jpg";
import ACert1 from "../assets/SarahFile/Image (42).jpg";
import ACert2 from "../assets/SarahFile/Image (43).jpg";
import ACert3 from "../assets/SarahFile/Image (44).jpg";
import ACert4 from "../assets/SarahFile/Image (45).jpg";
import ACert5 from "../assets/SarahFile/Image (46).jpg";
import ACert6 from "../assets/SarahFile/Image (47).jpg";

function Certificates() {
  return (
    <div
      className={`${styles.paddingX} max-w-screen-2xl mx-auto relative items-center gap-5 pt-20`}
    >
      <div className={`paragraphFont flex flex-col mt-20`}>
        <p className={`${styles.sectionSubText} pink-text-gradient w-fit `}>
          Certificates
        </p>
        <h1 className={`${styles.heroHeadText} customFont`}>
          OUR CERTIFICATES.
        </h1>
        <p className={`${styles.sectionSubText} max-w-[850px] w-full `}>
          In the digital world, certificates act as trusted credentials, similar
          to passports, verifying the identity of websites and individuals
          online.
        </p>
      </div>

      <div className="md:autogridTwo mx-auto autogrid gap-8 md:mt-16 mt-12">
        <div className="max-w-[900px]  w-full">
          <div className="carousel">
            <div id="slideOne" className="carousel-item relative w-full">
              <img src={ACert} className="w-full" />
              <div className="absolute flex justify-between bottom-8 w-full px-8">
                <a href="#slideSix" className="btn btn-circle shadow-xl">
                  ❮
                </a>
                <a href="#slideTwo" className="btn btn-circle shadow-xl">
                  ❯
                </a>
              </div>
            </div>
            <div id="slideTwo" className="carousel-item relative w-full">
              <img src={ACert1} className="w-full" />
              <div className="absolute flex justify-between bottom-8 w-full px-8">
                <a href="#slideOne" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slideThree" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slideThree" className="carousel-item relative w-full">
              <img src={ACert2} className="w-full" />
              <div className="absolute flex justify-between bottom-8 w-full px-8">
                <a href="#slideTwo" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slideFour" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slideFour" className="carousel-item relative w-full">
              <img src={ACert3} className="w-full" />
              <div className="absolute flex justify-between bottom-8 w-full px-8">
                <a href="#slideThree" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slideFive" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slideFive" className="carousel-item relative w-full">
              <img src={ACert4} className="w-full" />
              <div className="absolute flex justify-between bottom-8 w-full px-8">
                <a href="#slideFour" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slideSix" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slideSix" className="carousel-item relative w-full">
              <img src={ACert5} className="w-full" />
              <div className="absolute flex justify-between bottom-8 w-full px-8">
                <a href="#slideFive" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slideSeven" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slideSeven" className="carousel-item relative w-full">
              <img src={ACert6} className="w-full" />
              <div className="absolute flex justify-between bottom-8 w-full px-8">
                <a href="#slideSix" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slideOne" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;

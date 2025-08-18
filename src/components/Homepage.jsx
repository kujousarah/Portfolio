import React from "react";
import Hero from "./Hero";
import About from "./About"
import Skills from "./Skills";
import Works from "./Works"
import Certificates from "./Certificates"

function Homepage() {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      {/* <Works/> */}
      <Certificates/>
    </>
  );
}

export default Homepage;

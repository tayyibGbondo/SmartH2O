import React from "react";
import AboutUsImg from "../../Assets/Img/group pic.jpg";
import Contact from "./Contact";
import OurTeam from "./OurTeam";

import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
      id="about"
    >
      <div className="md:flex  mt-8 items-center justify-center gap-6 px-10 py-5 ">
        <div className="md:w-[50rem] w-full">
          <img
            src={AboutUsImg}
            alt="About us"
            className="w-full rounded-full"
          />
        </div>
        <div>
          <h1 className="md:text-5xl text-4xl py-5 font-extrabold text-center md:text-left">
            About Us
          </h1>
          <h3 className="text-2xl">Our History</h3>
          <p className="px-9 py-3">
            SMART H20 was founded in 2022 by a group of water treatment experts
            who saw a need for more advanced and efficient water purification
            systems. Since then, we have grown to become a leading provider of
            water purification solutions for homes and businesses.
          </p>
        </div>
      </div>

      <OurTeam />
      <Contact />
    </motion.div>
  );
}

export default AboutUs;

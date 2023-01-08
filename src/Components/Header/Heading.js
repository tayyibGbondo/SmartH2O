import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "flowbite-react";

import Img1 from "../../Assets/Img/p1.jpeg";
import Img2 from "../../Assets/Img/p2.jpg";
import Img3 from "../../Assets/Img/p3.webp";
import Img4 from "../../Assets/Img/p4.jpg";

function Heading() {
  return (
    <header className="h-[100vh] flex flex-col justify-center px-5 py">
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:text-7xl text-3xl w-full md:text-left text-center mb-8 mt-8 h2o"
      >
        <span className="font-extrabold text-blue-100 text-5xl md:text-8xl">
          SMART H20
        </span>
      </motion.h2>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 md:hidden ">
        <Carousel>
          <div className="h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={Img1} alt="" className="w-full" />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={Img2} alt="" className="w-full" />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={Img3} alt="" className="w-full" />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={Img4} alt="" className="w-full" />
          </div>
        </Carousel>
      </div>

      <div>
        <section id="intro">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white font-semibold text-2xl md:w-[50%] md:bg-[#6480fb] text-center md:px-9 md:py-5 rounded-md md:backdrop-blur-2xl pt-5"
          >
            We are a company dedicated to providing innovative solutions for
            detecting impurities in water and purifying it. Our advanced water
            purification systems are designed to provide clean, safe drinking
            water for homes and businesses.
          </motion.p>
        </section>
      </div>
    </header>
  );
}

export default Heading;

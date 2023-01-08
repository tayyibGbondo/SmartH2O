import React from "react";
import SystemIMG from "../../Assets/Img/system.webp";
import TestingIMG from "../../Assets/Img/gif.gif";
import { MdProductionQuantityLimits } from "react-icons/md";

import { motion } from "framer-motion";

import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="product"
    >
      <div className="text-enter flex flex-col justify-center items-center">
        <MdProductionQuantityLimits size={50} className="mt-8" />{" "}
        <h1 className="text-3xl text-center p-3 font-extrabold">
          Our Products and Services
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:flex px-3 md:items-center md:justify-center gap-5 "
      >
        <div class="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-full w-full object-cover md:h-full md:w-48"
                src={SystemIMG}
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Water Purification Systems
              </div>
              <a
                href="#"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Very Easy to maintain and Use
              </a>
              <p class="mt-2 text-slate-500">
                Our water purification systems use advanced filtration
                technology to remove impurities and contaminants from your
                water. Choose from a variety of sizes and styles to find the
                perfect system for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* the second product */}

        <div class="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-full w-full object-cover md:h-full md:w-48"
                src={TestingIMG}
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Water Testing Services
              </div>
              <a
                href="#"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Testing with a Water Testing Services
              </a>
              <p class="mt-2 text-slate-500">
                Not sure what's in your water? Our water testing services can
                help you identify any impurities or contaminants present in your
                water supply. We'll provide a detailed report and recommend the
                best course of action for purifying your water.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <AboutUs />
    </motion.div>
  );
}

export default About;

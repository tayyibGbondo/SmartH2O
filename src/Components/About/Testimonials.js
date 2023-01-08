import React from "react";
import Customer1 from "../../Assets/Img/cee.jpg";
import { Carousel } from "flowbite-react";

import { motion } from "framer-motion";

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="customer"
    >
      <h1 className="text-center text-3xl font-extrabold py-4">
        Customer Testimonials
      </h1>

      <div className="md:flex hidden item-enter justify-center gap-10">
        <div className="relative flex flex-col min-w-0 rounded break-words border bg-blue-400 border-1 border-gray-300 w-[18rem]">
          <img
            src={Customer1}
            className="w-full rounded rounded-t h-[200px] object-cover"
            alt="..."
          />
          <div className="flex-auto p-6">
            <p className="mb-0">
              "I've been using SMART H20's water purification systems for years
              and I've never been happier with the quality of my water. The team
              at SMART H20 is always so helpful and knowledgeable."
            </p>

            <h5 className="text-center text-blue-900">- John, Los Angeles</h5>
          </div>
        </div>

        <div className="relative flex flex-col min-w-0 rounded break-words border bg-blue-400 border-1 border-gray-300  w-[18rem]">
          <img
            src={Customer1}
            className="w-full rounded rounded-t h-[200px] object-cover"
            alt="..."
          />
          <div className="flex-auto p-6">
            <p className="mb-0">
              "SMART H20's water testing services helped us identify a problem
              with our water supply that we didn't even know existed. We were
              able to get the problem fixed and now our water is crystal clear
              and tastes great."
            </p>

            <h5 className="text-center text-blue-900">- John, Los Angeles</h5>
          </div>
        </div>
      </div>

      <div className="h-full sm:h-full xl:h-full 2xl:h-96 md:hidden">
        <Carousel leftControl="left" rightControl="right">
          <div className="relative flex flex-col min-w-0 rounded break-words border bg-gray-400 border-1 border-gray-300 w-full">
            <img
              src={Customer1}
              className="w-full rounded rounded-t h-[200px] object-cover"
              alt="..."
            />
            <div className="flex-auto p-6">
              <p className="mb-0">
                "I've been using SMART H20's water purification systems for
                years and I've never been happier with the quality of my water.
                The team at SMART H20 is always so helpful and knowledgeable."
              </p>

              <h5 className="text-center text-blue-900">- John, Los Angeles</h5>
            </div>
          </div>

          <div className="relative flex flex-col min-w-0 rounded break-words border bg-blue-400 border-1 border-gray-300  w-full">
            <img
              src={Customer1}
              className="w-full rounded rounded-t h-[200px] object-cover"
              alt="..."
            />
            <div className="flex-auto p-6">
              <p className="mb-0">
                "SMART H20's water testing services helped us identify a problem
                with our water supply that we didn't even know existed. We were
                able to get the problem fixed and now our water is crystal clear
                and tastes great."
              </p>

              <h5 className="text-center text-blue-900">- John, Los Angeles</h5>
            </div>
          </div>
        </Carousel>
      </div>
    </motion.div>
  );
}

export default Testimonials;

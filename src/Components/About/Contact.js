import { Label, Textarea, TextInput } from "flowbite-react";
import React from "react";

import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-5 md:w-[500px] md:m-auto"
      id="contact"
    >
      <h1 className="font-bold text-center text-2xl">Contact Us</h1>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="Enter full name"
          required={true}
        />
      </div>

      <div id="textarea">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required={true}
          rows={4}
        />
      </div>

      <div className="py-6 text-3xl font-bold">
        <TextInput id="name" type="Submit" value="Send Message" />
      </div>
    </motion.div>
  );
}

export default Contact;

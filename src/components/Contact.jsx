import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex justify-center items-center py-12 min-h-[80svh] bg-col1"
    >
      <div className="w-full max-w-md p-8 space-y-6 sm:bg-gray-800 rounded-lg sm:shadow-md">
        <h2 className="text-col2 text-4xl font-bold py-4 text-center">
          Contact Me
        </h2>
        <form className="space-y-4 text-white">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              className="w-full px-3 py-2 mt-1 border border-white rounded-md shadow-sm focus:ring-col2 focus:border-col2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border border-white rounded-md shadow-sm focus:ring-col2 focus:border-col2"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message:</label>
            <textarea
              className="w-full px-3 py-2 mt-1 border border-white rounded-md shadow-sm focus:ring-col2 focus:border-col2"
              placeholder="Your message"
              rows="4"
            />
          </div>
          <div className="flex justify-center">
            <motion.button
              className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md"
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

<div
  className="h-[90svh] min-h-[600px] py-12 bg-col1 flex justify-center items-center"
  id="contact"
>
  <div className="mx-auto p-4 max-w-screen-lg">
    {/* <p className="text-col2 text-4xl font-bold py-4 sm:text-left text-center">
    Contact
  </p>
  <p className="text-white">
    Please fill out the form below to contact me:
  </p> */}
    <div className="flex flex-col justify-center items-center bg-gray-800 max-w-screen-sm rounded-md">
      <h2 className="text-col2 text-4xl font-bold py-4 sm:text-left text-center">
        Contact Me
      </h2>
      <form className="flex flex-col rounded-md text-white">
        <p>Name:</p>
        <input type="text" placeholder="Enter your name"></input>
        <p>Email:</p>
        <input type="email" placeholder="Enter your Email"></input>
        <p>Message:</p>
        <textarea placeholder="Enter your message"></textarea>
        <button>Contact me</button>
      </form>
    </div>
  </div>
</div>;

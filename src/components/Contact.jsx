import React from "react";

const Contact = () => {
  return (
    <div className="h-[90svh] min-h-[600px] py-12 bg-col1" id="contact">
      <div className="mx-auto p-4 max-w-screen-lg">
        <p className="text-col2 text-4xl font-bold py-4 sm:text-left text-center">
          Contact
        </p>
        <p className="text-white">
          Please fill out the form below to contact me:
        </p>
        <div className="flex flex-col justify-center items-center bg-gray-800 py-12 mx-12 rounded-md">
          <p className="text-col2 text-4xl font-bold py-4 sm:text-left text-center">
            Contact Me
          </p>
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
    </div>
  );
};

export default Contact;

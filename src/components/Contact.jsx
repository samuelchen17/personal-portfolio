import React from "react";

const Contact = () => {
  return (
    <div
      className="h-[90dvh] min-h-[600px] bg-col1 flex justify-center items-center"
      id="contact"
    >
      <div className="wrapperSmall w-full">
        <p>Contact</p>
        <p>Fill out the form below to contact me</p>
        <div className="flex justify-center items-center">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Enter your name"></input>
            <input type="email" placeholder="Enter your Email"></input>
            <textarea placeholder="Enter your message"></textarea>
            <button>Contact me</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionHeading from "../design/ui-styling/SectionHeading";

const SERVICE_ID = import.meta.env.VITE_REACT_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_REACT_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_REACT_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...", {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.update(toastId, {
            render: "Message sent",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            transition: Bounce,
          });
          console.log("Message sent");
        },
        (error) => {
          toast.update(toastId, {
            render: "Failed to send message",
            type: "error",
            isLoading: false,
            autoClose: 3000,
            transition: Bounce,
          });
          console.log("Message failed to send", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center py-12 min-h-[80svh] bg-col12"
    >
      <div className="w-full max-w-lg p-8 space-y-6">
        <SectionHeading>Contact me</SectionHeading>
        <form className="space-y-4 text-white" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="block text-sm font-medium text-white">
              Name:
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-3 py-2 mt-1 border border-white rounded-md shadow-sm hover:border-col2 bg-colbg"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Email:
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-3 py-2 mt-1 border border-white rounded-md shadow-sm hover:border-col2 bg-colbg"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Message:
            </label>
            <textarea
              name="message"
              required
              className="w-full px-3 py-2 mt-1 border border-white rounded-md shadow-sm hover:border-col2 bg-colbg"
              placeholder="Your message"
              rows="4"
            />
          </div>
          <div className="flex justify-center">
            <motion.button
              className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:text-col2 hover:bg-white"
              type="submit"
              value="Send"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send
            </motion.button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </section>
  );
};

export default Contact;

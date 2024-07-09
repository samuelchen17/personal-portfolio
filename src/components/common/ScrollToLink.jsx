import React from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollToLink = ({ to, children, offset = 0 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");

    setTimeout(() => {
      scroller.scrollTo(to, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: offset,
      });
    }, 100);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default ScrollToLink;

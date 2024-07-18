import React from "react";
import { PuffLoader } from "react-spinners";

const PreLoader = ({ loading }) => {
  return (
    <div
      className="h-dvh fixed w-full z-50 bg-col12 justify-center items-center"
      style={{ display: loading ? "flex" : "none" }}
    >
      <PuffLoader color="#00B27A" size={250} speedMultiplier={1.5} />
    </div>
  );
};

export default PreLoader;

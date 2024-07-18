import React from "react";
import { PuffLoader } from "react-spinners";

const PreLoader = () => {
  return (
    <div className="h-dvh bg-col12 flex justify-center items-center">
      <PuffLoader color="#00B27A" size={250} speedMultiplier={1.5} />
    </div>
  );
};

export default PreLoader;

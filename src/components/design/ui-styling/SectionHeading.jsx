import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <h2 className="text-col2 text-4xl font-bold py-4 sm:text-left text-center uppercase">
      {children}
    </h2>
  );
};

export default SectionHeading;

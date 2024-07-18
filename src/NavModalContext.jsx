import React, { createContext, useContext, useState } from "react";

const NavModalContext = createContext();

export const useNavModal = () => useContext(NavModalContext);

export const NavModalProvider = ({ children }) => {
  const [navModal, setNavModal] = useState(false);

  return (
    <NavModalContext.Provider value={{ navModal, setNavModal }}>
      {children}
    </NavModalContext.Provider>
  );
};

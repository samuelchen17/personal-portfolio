import React, { createContext, useContext, useState } from "react";

const LoadedContext = createContext();

export const useIsLoaded = () => useContext(LoadedContext);

export const LoadedProvider = ({ children }) => {
  const [loaded, setIsLoaded] = useState(false);

  return (
    <LoadedContext.Provider value={{ loaded, setIsLoaded }}>
      {children}
    </LoadedContext.Provider>
  );
};

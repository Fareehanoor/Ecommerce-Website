/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export const AppContext = createContext("");

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ myname: "Fareeha" }}>
      {children}
    </AppContext.Provider>
  );
};
//custom hook

export const useProductContext = () => {
  return useContext(AppContext);
};

import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
   const contextValue = {};

   return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useData = () => {
   const context = useContext(Context);
   if (!context || !context.users) {
      throw new Error("error context");
   }
   return context;
};

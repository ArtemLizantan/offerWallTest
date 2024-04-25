import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../vars";
const Context = createContext();

export const ContextProvider = ({ children }) => {
   const [data, setData] = useState([]);
   const [select, setSelect] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(api);
            setData(response.data);
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();
   }, []);
   const contextValue = { data, setSelect, select };
   console.log(contextValue);
   return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useData = () => {
   const context = useContext(Context);
   if (!context || !context.data) {
      throw new Error("error context");
   }
   return context;
};

import { createContext } from "react";
import { useState, useEffect } from "react";

export const LangContext = createContext();

export const LanguageProvider = ({ children }) => {

   const savedLang = localStorage.getItem('lang') || 'uz';

   const [til, setTil] = useState(savedLang);

   useEffect(() => {
      localStorage.setItem('lang', til);
   }, [til]);

   return (
      <LangContext.Provider value={{ til, setTil }}>
         {children}
      </LangContext.Provider>
   );
};

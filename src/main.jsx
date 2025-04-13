import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LangContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
   <LanguageProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </LanguageProvider>
);

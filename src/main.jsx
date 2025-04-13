import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LangContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoriteProvider } from "./context/FavoriteContext/FavoriteContext.jsx";

createRoot(document.getElementById("root")).render(
   <LanguageProvider>
      <FavoriteProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </FavoriteProvider>
   </LanguageProvider>
);

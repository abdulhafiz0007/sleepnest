import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
   const [favorites, setFavorites] = useState([]);

   const toggleFavorite = (card) => {
      setFavorites((prev) => {
         const isLiked = prev.find((item) => item.title === card.title);
         if (isLiked) {
            return prev.filter((item) => item.title !== card.title);
         } else {
            return [...prev, card];
         }
      });
   };

   return (
      <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
         {children}
      </FavoriteContext.Provider>
   );
};

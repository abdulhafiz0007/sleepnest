import { useFavorites } from "../../context/FavoriteContext/FavoriteContext";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const HeartPage = () => {
   const { favorites } = useFavorites();

   return (
      <>
         <Header />
         <div className="pt-[100px] max-w-[1490px] mx-auto px-4">
            <h1 className="text-2xl font-bold mb-6">Sevimlilar</h1>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
               {favorites.length === 0 ? (
                  <p>No liked cards yet </p>
               ) : (
                  favorites.map((item) => (
                     <Card key={item.title} img={item.img} title={item.title} />
                  ))
               )}
            </ul>
         </div>
         <Footer />
      </>
   );
};

import { HeartIcon } from "../../assets/images/Icons";
import { useFavorites } from "../../context/FavoriteContext/FavoriteContext";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const Card = ({ img, title }) => {
   const { favorites, toggleFavorite } = useFavorites();
   const isLiked = favorites.some((item) => item.title === title);

   return (
      <li className="relative flex flex-col gap-4 items-start pb-[10px] lg:w-[249px] w-full">
         <div
            onClick={() => toggleFavorite({ img, title })}
            className={`absolute top-[5px] right-[5px] z-10 px-[6px] py-[6px] rounded-full cursor-pointer ${
               isLiked ? "bg-red-500" : "bg-slate-300"
            }`}
         >
            <HeartIcon />
         </div>
         <Link to={`/singleCard/${title}`}>
            <img
               className="rounded-[20px] lg:w-[250px] w-full transition-transform duration-300 hover:scale-[1.03]"
               src={img}
               alt=""
            />
         </Link>
         <h2>{title}</h2>
      </li>
   );
};

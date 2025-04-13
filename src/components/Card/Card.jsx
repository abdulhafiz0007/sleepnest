import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ img, title }) => {
   return (
      <li className="flex flex-col gap-4 items-start pb-[10px] lg:w-[249px] w-full ">
         <Link to={`/singleCard/${title}`}>
            <img
               className="rounded-[20px] lg:w-[250px] w-full transition-transform duration-300 hover:scale-[1.03] "
               src={img}
               alt=""
            />
         </Link>
         <h2>{title}</h2>
      </li>
   );
};

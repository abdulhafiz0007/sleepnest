import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NewsImg1 from "../../assets/images/newImg1.png";
import NewsImg2 from "../../assets/images/newImg2.png";
import NewsImg3 from "../../assets/images/newImg3.png";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";

export const News = () => {
   const { til } = useContext(LangContext);

   const newsData = [
      {
         id: 1,
         img: NewsImg1,
         title: lang[til].news.card1Title,
         desc: lang[til].news.card1Desc,
         date: "10/05/2024",
      },
      {
         id: 2,
         img: NewsImg3,
         title: lang[til].news.card2Title,
         desc: lang[til].news.card2Desc,
         date: "10/05/2024",
      },
      {
         id: 3,
         img: NewsImg2,
         title: lang[til].news.card3Title,
         desc: lang[til].news.card3Desc,
         date: "10/05/2024",
      },
   ];

   return (
      <div className="lg:w-[1450px] px-[20px] m-auto pt-[100px]">
         <h2 className="font-bold text-center text-[35px] mb-[20px]">
            {lang[til].news.newsTitle}
         </h2>
         <p className="text-[#A5A1A1] text-center">{lang[til].news.newsDesc}</p>
         <ul className="flex flex-col lg:flex-row items-start justify-between mt-[70px] gap-[35px] lg:gap-6">
            {newsData.map((item) => (
               <li key={item.id} className="pb-[10px] lg:w-[450px]">
                  <Link to={`/newsPage/${item.id}`}>
                     <img
                        className="rounded-[20px] lg:w-[450px] lg:h-[250px] object-cover"
                        src={item.img}
                        alt=""
                     />
                  </Link>
                  <div className="flex items-center gap-[50px] mt-[13px]">
                     <p>{item.date}</p>
                     <p className="text-[#616060] text-[12px]">
                        {lang[til].news.fromAdmin}
                     </p>
                  </div>
                  <h3 className="font-bold text-[18.7px] mt-[28px] mb-[18px]">
                     {item.title}
                  </h3>
                  <p className="text-[#5B5A5A]">{item.desc}</p>
               </li>
            ))}
         </ul>
      </div>
   );
};

import React from "react";
import collectionImg1 from "../../assets/images/autmImg1.jpg";
import collectionImg2 from "../../assets/images/autmimg2.jpg";
import collectionImg3 from "../../assets/images/autmImg3.jpg";
import collectionImg4 from "../../assets/images/autmImg4.jpg";
import collectionImg5 from "../../assets/images/autmImg5.jpg";
import collectionImg6 from "../../assets/images/autmImg6.jpg";
import collectionImg7 from "../../assets/images/autmImg7.jpg";
import collectionImg8 from "../../assets/images/autmImg8.jpg";
import collectionImg9 from "../../assets/images/autmImg9.jpg";
import collectionImg10 from "../../assets/images/autmImg10.jpg";
import { Card } from "../Card/Card";
import { lang } from "../Lang/Lang";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

export const Collection2 = () => {
   const { til } = useContext(LangContext);

   const collections = [
      {
         img: collectionImg1,
         title: lang[til].collection2.card1,
      },
      {
         img: collectionImg2,
         title: lang[til].collection2.card2,
      },
      {
         img: collectionImg3,
         title: lang[til].collection2.card3,
      },
      {
         img: collectionImg4,
         title: lang[til].collection2.card4,
      },
      {
         img: collectionImg5,
         title: lang[til].collection2.card5,
      },
      {
         img: collectionImg6,
         title: lang[til].collection2.card6,
      },
      {
         img: collectionImg7,
         title: lang[til].collection2.card7,
      },
      {
         img: collectionImg8,
         title: lang[til].collection2.card8,
      },
      {
         img: collectionImg9,
         title: lang[til].collection2.card9,
      },
      {
         img: collectionImg10,
         title: lang[til].collection2.card10,
      },
   ];

   return (
      <div className="lg:w-[1450px] px-[20px] m-auto pt-[170px]">
         <h2 className="text-[30px] font-bold text-center mb-[30px]">
            {lang[til].collection2.title2}
         </h2>
         <p className="text-center mb-[80px]">{lang[til].collection2.desc2}</p>
         <ul className="flex flex-wrap items-center justify-between gap-[15px] lg:gap-[30px] ">
            {collections.map((item) => (
               <Card img={item.img} title={item.title} />
            ))}
         </ul>
      </div>
   );
};

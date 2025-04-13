import React from "react";
import collectionImg1 from "../../assets/images/productImg1.jpg";
import collectionImg2 from "../../assets/images/productImg2.jpg";
import collectionImg3 from "../../assets/images/productImg3.jpg";
import collectionImg4 from "../../assets/images/productImg4.jpg";
import collectionImg5 from "../../assets/images/productImg5.jpg";
import collectionImg6 from "../../assets/images/productImg6.jpg";
import collectionImg7 from "../../assets/images/productImg7.jpg";
import collectionImg8 from "../../assets/images/productImg8.jpg";
import collectionImg9 from "../../assets/images/productImg9.jpg";
import collectionImg10 from "../../assets/images/productImg10.jpg";
import { Card } from "../Card/Card";
import { useContext } from "react";
import { lang } from "../Lang/Lang";
import { LangContext } from "../../context/LangContext";

export const Collection1 = () => {

   const {til} = useContext(LangContext);

   const collections = [
      {
         img: collectionImg1,
         title: lang[til].collection1.card1
      },
      {
         img: collectionImg2,
         title: lang[til].collection1.card2
      },
      {
         img: collectionImg3,
         title: lang[til].collection1.card3
      },
      {
         img: collectionImg4,
         title: lang[til].collection1.card4
      },
      {
         img: collectionImg5,
         title: lang[til].collection1.card5
      },
      {
         img: collectionImg6,
         title: lang[til].collection1.card6
      },
      {
         img: collectionImg7,
         title: lang[til].collection1.card7
      },
      {
         img: collectionImg8,
         title:  lang[til].collection1.card8
      },
      {
         img: collectionImg9,
         title:  lang[til].collection1.card9
      },
      {
         img: collectionImg10,
         title:  lang[til].collection1.card10
      },
   ];

   return (
      <div className="lg:w-[1450px] px-[20px] m-auto pt-[170px]">
         <h2 className="text-[30px] font-bold text-center mb-[30px]">
            {lang[til].collection1.title}
         </h2>
         <p className="text-center mb-[80px]">{lang[til].collection1.desc}</p>
         <ul className="flex flex-wrap items-center justify-center gap-[15px] lg:gap-[30px] ">
            {collections.map((item) => (
               <Card img={item.img} title={item.title} />
            ))}
         </ul>
      </div>
   );
};

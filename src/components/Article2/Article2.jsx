import React from "react";
import { useContext } from "react";
import articleImg from '../../assets/images/article2.png';
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";

export const Artice2 = () => {

  const {til} = useContext(LangContext);

   return (
      <div className="lg:w-[1450px] px-[20px] m-auto rounded-[50px] pt-[180px]">
         <div className="relative flex flex-col lg:flex-row items-center justify-between lg:p-[70px] p-[30px] pt-[190px] bg-[#7F54B3] rounded-[50px]">
            <img className="absolute top-[-130px] left-0 lg:left-[220px] lg:w-[870px] right-[380px]" src={articleImg} alt="" />
            <div className="flex flex-col gal-[30px] lg:gap-[60px] mb-[30px] lg:mb-0">
               <h2 className="text-white text-[50px] lg:text-[90px] font-bold">100%</h2>
               <p className="text-white text-[20px]">{lang[til].article2.mQuality}</p>
            </div>
            <div className="flex flex-col w-[250px] text-center lg:text-left items-center lg:items-start gap-[24px] lg:w-[480px]">
               <h2 className="text-white text-[22px] lg:text-[30px]">{lang[til].article2.title}</h2>
               <p className="text-white">
               {lang[til].article2.desc}
               </p>
               <button className="text-[13px] font-light px-[20px] py-[10px] bg-[#EFEFEF] rounded-[20px]">{lang[til].article2.button}</button>
            </div>
         </div>
      </div>
   );
};

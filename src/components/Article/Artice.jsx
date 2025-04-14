import React from "react";
import { useContext } from "react";
import {Link} from 'react-router-dom';
import articleImg from "../../assets/images/Article1Img.png";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";

export const Artice = () => {
   const { til } = useContext(LangContext);

   return (
      <div className="lg:w-[1450px] px-[20px] m-auto rounded-[40px] ">
         <div className="relative flex flex-col md:flex-row items-center justify-between md:p-[70px] p-[30px] pb-[40px] pt-[200px] bg-[#464351] rounded-[40px]">
            <img
               className="absolute top-[-90px] lg:top-[-130px] left-0 lg:left-[200px] md:w-[870px] right-[380px]"
               src={articleImg}
               alt=""
            />
            <div className="flex flex-col gal-[30px] lg:gap-[60px] mb-[30px] lg:mb-0">
               <h2 className="text-white text-[30px] text-center lg:text-[50px] lg:text-[90px]">
                  100%
               </h2>
               <p className="text-white text-[20px]">
                  {lang[til].article1.mQuality}
               </p>
            </div>
            <div className="flex flex-col w-[250px] text-center lg:text-left items-center lg:items-start gap-[24px] lg:w-[480px]">
               <h2 className="text-white text-[22px] lg:text-[30px]">
                  {lang[til].article1.title}
               </h2>
               <p className="text-white">{lang[til].article1.desc}</p>
               <button className="text-[13px] font-light px-[20px] py-[10px] bg-[#EFEFEF] rounded-[20px] cursor-pointer">
                  <Link to="/collection">{lang[til].article1.button}</Link>
               </button>
            </div>
         </div>
      </div>
   );
};

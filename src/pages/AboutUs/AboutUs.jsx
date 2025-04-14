import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import aboutImg from '../../assets/images/aboutUs.png';
import { lang } from "../../components/Lang/Lang";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

export const AboutUs = () => {

   const {til} = useContext(LangContext);

   return (
      <>
         <Header />
         <div className="max-w-[1490px] px-[20px] mx-auto flex flex-col lg:flex-row items-center gap-[50px] pt-[120px]">
            <div className="flex flex-col gap-[15px] w-full lg:w-[580px]">
               <h2 className="text-[#000] text-[35px] font-bold mb-2">{lang[til].about.title}</h2>
               <p className="text-[#696969]">
                  {lang[til].about.text1}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text2}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text3}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text4}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text5}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text6}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text7}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text8}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text9}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text10}
               </p>
               <p className="text-[#696969]">
               {lang[til].about.text11}
               </p>
            </div>
            <div className="shadow-2xl">
              <img className="rounded-[30px]" src={aboutImg} alt="" />
            </div>
         </div>
         <Footer />
      </>
   );
};

import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";
import LogoImg from "../../assets/images/logo.png";

export const Footer = () => {

    const {til} = useContext(LangContext);

   return (
      <footer className="lg:w-full m-auto pt-[170px]">
         <div className="lg:w-[1450px] m-auto flex lg:flex-row flex-col justify-between pb-[66px] px-[20px]">
             <div className="flex flex-col gap-[30px] lg:w-[400px]">
                <img className="w-[300px]" src={LogoImg} alt="" />
                <p className="text-[#908D8D]">
                   “Ekologik Toza Uyqu Mahsulotlat” koʻp yillardan buyon butun
                   dunyoda foydalanish uchun paxta matolari ishlab chiqaradigan
                   kompaniya hisoblanadi.
                </p>
             </div>
             <div className="flex flex-col">
                <h2 className="mb-[20px] font-bold text-[20px]">Menyu</h2>
                 <ul className="flex flex-col items-start gap-4">
                    <li className="text-[#4E4E4E]">
                        <a href="">{lang[til].header.home}</a>
                    </li>
                    <li className="text-[#4E4E4E]">
                        <a href="">{lang[til].header.collection}</a>
                    </li>
                    <li className="text-[#4E4E4E]">
                        <a href="">{lang[til].header.aboutUs}</a>
                    </li>
                    <li className="text-[#4E4E4E]">
                        <a href="">{lang[til].header.contacts}</a>
                    </li>
                 </ul>
             </div>
             <div className="flex flex-col">
                <h2 className="mb-[20px] font-bold text-[20px]">Kontaktlar</h2>
                 <ul className="flex flex-col items-start gap-4">
                    <li className="text-[#4E4E4E]">
                        <a href="">Buxoro, st. Alpomish 80.</a>
                    </li>
                    <li className="text-[#4E4E4E]">
                        <a href="mailto:sleepnest@gamil.com">Email: sleepnest@gamil.com</a>
                    </li>
                    <li className="text-[#4E4E4E]">
                        <a href="">Telegram: sleepnest</a>
                    </li>
                    <li className="text-[#4E4E4E]">
                        <a href="tel:+998 94 033 72 12">+998 94 033 72 12</a>
                    </li>
                 </ul>
             </div>
             <div className="flex flex-col items-start">
                <h2 className="text-[18px] font-bold">Elektron pochtamizga obuna bo'ling</h2>
                <div className="mb-[40px] mt-[21px] relative w-[420px]">
                    <input className="lg:w-[442px] w-full outline-none px-[20px] py-[15px] rounded-[20px] border-2 border-slate-400 placeholder:text-[12px] placeholder:text-[#757575]" type="text" placeholder="Elektron pochtamizga obuna bo'ling"/>
                    <button className="absolute top-[10px] lg:top-[7px] right-[4px] bg-red-600 text-white px-[10px] py-[10px] rounded-[20px] text-[12px] lg:text-[13px]">Obuna Bo'ling</button>
                </div>
                <p className="text-[14px] text-[#4E4E4E]">Kamida bitta roʻyxatni tanlang.</p>
             </div>
         </div>
         <div className="pl-[55px] py-[34px] bg-[#000]">
            <p className="text-[#545454]">© 2024 MChJ Ekologik Toza Uyqu Mahsulotlari Barcha huquqlar himoyalangan.</p>
         </div>
      </footer>
   );
};

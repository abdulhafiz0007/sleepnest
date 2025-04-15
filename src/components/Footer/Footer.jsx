import React, { useContext, useState } from "react";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";
import LogoImg from "../../assets/images/logo.png";

export const Footer = () => {
   const { til } = useContext(LangContext);
   const [email, setEmail] = useState("");
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");

   const handleSubmit = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email.trim()) {
         setError(lang[til].validation.email1);
         setSuccess("");
      } else if (!emailPattern.test(email)) {
         setError(lang[til].validation.email2);
         setSuccess("");
      } else {
         setError("");
         setEmail("");
      }
   };

   return (
      <footer className="lg:w-full m-auto pt-[170px]">
         <div className="lg:w-[1490px] m-auto flex lg:flex-row flex-col justify-between pb-[66px] px-[20px]">
            <div className="flex flex-col gap-[30px] lg:w-[400px]">
               <img className="w-[300px]" src={LogoImg} alt="" />
               <p className="text-[#908D8D]">{lang[til].footer.title}</p>
            </div>

            <div className="flex flex-col">
               <h2 className="mb-[20px] font-bold text-[20px]">{lang[til].footer.menu}</h2>
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
               <h2 className="mb-[20px] font-bold text-[20px]">{lang[til].footer.contacts}</h2>
               <ul className="flex flex-col items-start gap-4">
                  <li className="text-[#4E4E4E]">Buxoro, st. Alpomish 80.</li>
                  <li className="text-[#4E4E4E]">
                     <a href="mailto:sleepnest@gamil.com">Email: sleepnest@gamil.com</a>
                  </li>
                  <li className="text-[#4E4E4E]">Telegram: sleepnest</li>
                  <li className="text-[#4E4E4E]">
                     <a href="tel:+998940337212">+998 94 033 72 12</a>
                  </li>
               </ul>
            </div>

            <div className="flex flex-col items-start lg:w-[450px]">
               <h2 className="text-[18px] font-bold">{lang[til].footer.emailSubs}</h2>
               <div className="mb-[10px] mt-[21px] relative w-full">
                  <input
                     type="text"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder={lang[til].footer.pochtasubs}
                     className="w-full outline-none px-[20px] py-[15px] rounded-[20px] border-2 border-slate-400 placeholder:text-[12px] placeholder:text-[#757575]"
                  />
                  <button
                     onClick={handleSubmit}
                     className="absolute top-[10px] lg:top-[7px] right-[4px] bg-red-600 text-white px-[10px] py-[10px] rounded-[20px] text-[12px] lg:text-[13px]"
                  >
                     {lang[til].footer.subscription}
                  </button>
               </div>
               {error && <p className="text-red-500 text-sm mb-[10px]">{error}</p>}
               {success && <p className="text-green-600 text-sm mb-[10px]">{success}</p>}
               <p className="text-[14px] text-[#4E4E4E]">{lang[til].footer.footerDesc}</p>
            </div>
         </div>

         <div className="pl-[55px] py-[34px] bg-[#000]">
            <p className="text-[#545454]">{lang[til].footer.footerRights}</p>
         </div>
      </footer>
   );
};

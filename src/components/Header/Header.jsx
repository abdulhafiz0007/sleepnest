import React from "react";
import LogoImg from "../../assets/images/logo.png";
import {
   BottomArrow,
   TopArrow,
   MenuIcon,
   CloseIcon,
} from "../../assets/images/Icons";
import RussiaImg from "../../assets/images/russiaImg.webp";
import UzbImg from "../../assets/images/uzbImg.png";
import EnglandImg from "../../assets/images/usaImg.webp";
import MenuImg from "../../assets/images/menu-img.png";
import { useState } from "react";
import { lang } from "../Lang/Lang";
import { useEffect } from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const Header = () => {
   const [langClick, setLangClick] = useState(false);
   const [langActive, setLangActive] = useState("uz");
   const [headerFixed, setHeaderFixed] = useState(false);
   const [arrowActive, setArrowActive] = useState(false);
   const [menuActive, setMenuActive] = useState(false);
   const [closeActive, setCloseActive] = useState(false);
   const langRef = useRef(null);


   const { til, setTil } = useContext(LangContext);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 100) {
            setHeaderFixed(true);
         } else {
            setHeaderFixed(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (langRef.current && !langRef.current.contains(event.target)) {
            setLangClick(false);
            setArrowActive(false);
         }
      };
   
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);
   



   return (
      <header className="bg-white shadow-md py-3 fixed top-0 right-0 left-0 z-40">
         <div className="lg:w-[1490px] px-[20px] m-auto flex items-center justify-between ">
            <a href="#">
               <img className="w-[180px] h-[55px]" src={LogoImg} alt="" />
            </a>
            <div className="flex items-center gap-4">
               <nav className="hidden lg:block">
                  <ul className="flex items-center gap-5">
                     <li className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                        <Link to={"/"} href="home">
                           {lang[til].header.home}
                        </Link>
                     </li>
                     <li className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                        <Link to={"/collection"} href="collection">
                           {lang[til].header.collection}
                        </Link>
                     </li>
                     <li className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                        <Link to={"/about"} href="about">
                           {lang[til].header.aboutUs}
                        </Link>
                     </li>
                     <li className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                        <Link to={"/contacts"} href="contacts">
                           {lang[til].header.contacts}
                        </Link>
                     </li>
                  </ul>
               </nav>
               <div
                  onClick={() => {
                     setLangClick(!langClick);
                     setArrowActive(!arrowActive);
                  }}
                  className="flex items-center gap-4 bg-slate-500 px-2 py-1 rounded cursor-pointer"
               >
                  {langActive === "uz" && (
                     <p className="text-white cursor-pointer">UZ</p>
                  )}
                  {langActive === "ru" && (
                     <p className="text-white cursor-pointer">RU</p>
                  )}
                  {langActive === "en" && (
                     <p className="text-white cursor-pointer">EN</p>
                  )}
                  <button onClick={() => setArrowActive(!arrowActive)}>
                     <BottomArrow
                        langClick={langClick}
                        arrowActive={arrowActive}
                     />
                     <TopArrow
                        langClick={langClick}
                        arrowActive={arrowActive}
                     />
                  </button>
               </div>
               <div
                  onClick={() => setMenuActive(!menuActive)}
                  className={` lg:hidden`}
               >
                  <div onClick={() => setCloseActive(!closeActive)}>
                     <MenuIcon
                        closeActive={closeActive}
                        headerFixed={headerFixed}
                     />
                  </div>
               </div>
               <div
                  className={`fixed top-0 right-0 h-screen w-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
                     menuActive ? "translate-x-0" : "translate-x-full"
                  }`}
               >
                  <div 
                     className="hover:text-slate-600 cursor-pointer"
                     onClick={() => {
                        setCloseActive(!closeActive);
                        setMenuActive(!menuActive);
                     }}
                  >
                     <CloseIcon
                        closeActive={closeActive}
                        headerFixed={headerFixed}
                     />
                  </div>
                  <nav className="mt-[60px]">
                     <ul className="flex flex-col items-center justify-cente gap-[25px] pl-[20px] pt-[10px] pb-[20px]">
                        <li
                           className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all"
                           onClick={() => {
                              setMenuActive(false);
                              setCloseActive(false);
                           }}
                        >
                           <Link to={"/"}>{lang[til].header.home}</Link>
                        </li>
                        <li
                           className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all"
                           onClick={() => {
                              setMenuActive(false);
                              setCloseActive(false);
                           }}
                        >
                           <Link to={"/collection"} >{lang[til].header.collection}</Link>
                        </li>
                        <li
                           className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all"
                           onClick={() => {
                              setMenuActive(false);
                              setCloseActive(false);
                           }}
                        >
                           <Link to={"/about"} >{lang[til].header.aboutUs}</Link>
                        </li>
                        <li
                           className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all"
                           onClick={() => {
                              setMenuActive(false);
                              setCloseActive(false);
                           }}
                        >
                           <Link to={"/contacts"} >{lang[til].header.contacts}</Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div
                  ref={langRef}
                  className={` bg-slate-500  rounded-lg ${
                     langClick
                        ? "fixed lg:top-[60px] top-[60px] lg:right-[33px] right-[59px] z-40"
                        : "hidden"
                  } `}
               >
                  <ul className="flex flex-col items-start gap-2 z">
                     <li
                        onClick={() => {
                           setLangActive("uz");
                           setTil("uz");
                           setLangClick(!langClick);
                        }}
                        className="flex items-center gap-2 text-white hover:bg-slate-600 px-[10px] py-[5px] pt-[5px] cursor-pointer rounded-t-lg"
                     >
                        <img
                           className="w-[16px] h-[16px]"
                           src={UzbImg}
                           alt="Russia img for language"
                        />
                        <p>UZ</p>
                     </li>
                     <li
                        onClick={() => {
                           setLangActive("ru");
                           setTil("ru");
                           setLangClick(!langClick);
                        }}
                        className="flex items-center gap-2 text-white hover:bg-slate-600 px-[10px] py-[5px] cursor-pointer"
                     >
                        <img
                           className="w-[16px] h-[16px]"
                           src={RussiaImg}
                           alt="Russia img for language"
                        />
                        <p>RU</p>
                     </li>
                     <li
                        onClick={() => {
                           setLangActive("en");
                           setTil("en");
                           setLangClick(!langClick);
                        }}
                        className="flex items-center gap-2 text-white hover:bg-slate-600 px-[10px] py-[5px] pb-[5px] cursor-pointer rounded-b-lg"
                     >
                        <img
                           className="w-[16px] h-[16px]"
                           src={EnglandImg}
                           alt="Russia img for language"
                        />
                        <p>EN</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </header>
   );
};

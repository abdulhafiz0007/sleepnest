import React from "react";
import LogoImg from "../../assets/images/logo.png";
import {
   BottomArrow,
   TopArrow,
   MenuIcon,
   CloseIcon,
   HeartIconLIked,
} from "../../assets/images/Icons";
import RussiaImg from "../../assets/images/russiaImg.webp";
import UzbImg from "../../assets/images/uzbImg.png";
import EnglandImg from "../../assets/images/usaImg.webp";
import { useState, useEffect, useRef, useContext } from "react";
import { lang } from "../Lang/Lang";
import { LangContext } from "../../context/LangContext";
import { Link, NavLink } from "react-router-dom";
import { useFavorites } from "../../context/FavoriteContext/FavoriteContext";

export const Header = () => {
   const [langClick, setLangClick] = useState(false);
   const [langActive, setLangActive] = useState("uz");
   const [headerFixed, setHeaderFixed] = useState(false);
   const [arrowActive, setArrowActive] = useState(false);
   const [menuActive, setMenuActive] = useState(false);
   const [closeActive, setCloseActive] = useState(false);
   const langRef = useRef(null);
   const { favorites } = useFavorites();
   const count = favorites.length;

   const { til, setTil } = useContext(LangContext);

   useEffect(() => {
      const handleScroll = () => {
         setHeaderFixed(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (langRef.current && !langRef.current.contains(event.target)) {
            setLangClick(false);
            setArrowActive(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   return (
      <header className="bg-white shadow-md py-3 fixed top-0 right-0 left-0 z-40">
         <div className="lg:w-[1490px] px-[20px] m-auto flex items-center justify-between">
            <a href="#">
               <img className="w-[180px] h-[55px]" src={LogoImg} alt="Logo" />
            </a>
            <div className="flex items-center gap-4">
               <nav className="hidden lg:block">
                  <ul className="flex items-center gap-5">
                     <li className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                        <NavLink className={({isActive}) => isActive ? "text-[#A17F4A]" : ""} to="/">{lang[til].header.home}</NavLink>
                     </li>
                     <li className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                        <NavLink className={({isActive}) => isActive ? "text-[#A17F4A]" : ""} to="/collection">{lang[til].header.collection}</NavLink>
                     </li>
                     <li className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                        <NavLink className={({isActive}) => isActive ? "text-[#A17F4A]" : ""} to="/about">{lang[til].header.aboutUs}</NavLink>
                     </li>
                     <li className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                        <NavLink className={({isActive}) => isActive ? "text-[#A17F4A]" : ""} to="/contacts">{lang[til].header.contacts}</NavLink>
                     </li>
                     <li className="relative text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                        <span className="absolute top-[-13px] right-[-10px] px-[4px] py-[2px] rounded-full text-white bg-black text-[10px]">
                           {count}
                        </span>
                        <Link className="text-[24px]" to="/heartPage">
                           <HeartIconLIked />
                        </Link>
                     </li>
                  </ul>
               </nav>

               {/* 🔽 Language Dropdown Button + List (Updated Part) */}
               <div ref={langRef} className="relative">
                  <div
                     onClick={() => {
                        setLangClick(!langClick);
                        setArrowActive(!arrowActive);
                     }}
                     className="flex items-center gap-4 bg-[#A17F4A] px-2 py-1 rounded cursor-pointer"
                  >
                     <p className="text-white cursor-pointer">
                        {langActive.toUpperCase()}
                     </p>
                     <button>
                        <BottomArrow langClick={langClick} arrowActive={arrowActive} />
                        <TopArrow langClick={langClick} arrowActive={arrowActive} />
                     </button>
                  </div>

                  <div
                     className={`bg-[#A17F4A] rounded-lg ${
                        langClick
                           ? "fixed lg:top-[60px] top-[60px] lg:right-[33px] right-[59px] z-40"
                           : "hidden"
                     }`}
                  >
                     <ul className="flex flex-col items-start gap-2">
                        <li
                           onClick={() => {
                              setLangActive("uz");
                              setTil("uz");
                              setLangClick(false);
                              setArrowActive(false);
                           }}
                           className="flex items-center gap-2 text-white hover:bg-slate-600 px-[10px] py-[5px] cursor-pointer rounded-t-lg"
                        >
                           <img className="w-[16px] h-[16px]" src={UzbImg} alt="UZB" />
                           <p>UZ</p>
                        </li>
                        <li
                           onClick={() => {
                              setLangActive("ru");
                              setTil("ru");
                              setLangClick(false);
                              setArrowActive(false);
                           }}
                           className="flex items-center gap-2 text-white hover:bg-slate-600 px-[10px] py-[5px] cursor-pointer"
                        >
                           <img className="w-[16px] h-[16px]" src={RussiaImg} alt="RU" />
                           <p>RU</p>
                        </li>
                        <li
                           onClick={() => {
                              setLangActive("en");
                              setTil("en");
                              setLangClick(false);
                              setArrowActive(false);
                           }}
                           className="flex items-center gap-2 text-white hover:bg-slate-600 px-[10px] py-[5px] cursor-pointer rounded-b-lg"
                        >
                           <img className="w-[16px] h-[16px]" src={EnglandImg} alt="EN" />
                           <p>EN</p>
                        </li>
                     </ul>
                  </div>
               </div>

               {/* ☰ Mobile Menu Icon */}
               <div onClick={() => setMenuActive(!menuActive)} className="lg:hidden">
                  <div onClick={() => setCloseActive(!closeActive)}>
                     <MenuIcon closeActive={closeActive} headerFixed={headerFixed} />
                  </div>
               </div>

               {/* 📱 Mobile Navigation Panel */}
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
                     <CloseIcon closeActive={closeActive} headerFixed={headerFixed} />
                  </div>
                  <nav className="mt-[60px]">
                     <ul className="flex flex-col items-center gap-[25px] px-[20px] pt-[10px] pb-[20px]">
                        <li
                           className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all"
                           onClick={() => {
                              setMenuActive(false);
                              setCloseActive(false);
                           }}
                        >
                           <Link to="/">{lang[til].header.home}</Link>
                        </li>
                        <li
                           className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all"
                           onClick={() => {
                              setMenuActive(false);
                              setCloseActive(false);
                           }}
                        >
                           <Link to="/collection">{lang[til].header.collection}</Link>
                        </li>
                        <li
                           className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all"
                           onClick={() => {
                              setMenuActive(false);
                              setCloseActive(false);
                           }}
                        >
                           <Link to="/about">{lang[til].header.aboutUs}</Link>
                        </li>
                        <li
                           className="text-[20px] text-[#00000098] hover:text-slate-600 transition-all"
                           onClick={() => {
                              setMenuActive(false);
                              setCloseActive(false);
                           }}
                        >
                           <Link to="/contacts">{lang[til].header.contacts}</Link>
                        </li>
                        <li className="relative text-[20px] text-[#00000098] hover:text-slate-600 transition-all">
                           <span className="absolute top-[-13px] right-[-10px] px-[4px] py-[2px] rounded-full text-white bg-black text-[10px]">
                              {count}
                           </span>
                           <Link className="text-[24px]" to="/heartPage">
                              <HeartIconLIked />
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </header>
   );
};

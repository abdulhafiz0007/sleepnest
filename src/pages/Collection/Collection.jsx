import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { allCollections } from "../../components/AllCollections/Allcollections";
import { Card } from "../../components/Card/Card";
import { SearchIcon } from "../../assets/images/Icons";
import { useRef } from "react";
import { useState } from "react";
import { lang } from "../../components/Lang/Lang";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

export const Collection = () => {
   const { til } = useContext(LangContext);

   const inputRef = useRef();
   const [searchValue, setSearchValue] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("all");

   const handleCategoryClick = (category) => {
      setSelectedCategory(category);
   };

   const handleSearchChange = (evt) => {
      setSearchValue(evt.target.value);
   };

   const filteredData = allCollections.filter((item) => {
      const matchesCategory =
         selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = item.title
         .toLowerCase()
         .includes(searchValue.toLowerCase());
      return matchesCategory && matchesSearch;
   });

   return (
      <>
         <Header />
         <div className="max-w-[1490px] w-full px-4 sm:px-6 md:px-10 mx-auto flex flex-col lg:flex-row items-start justify-between gap-[30px] pt-[140px]">
            <div className="w-full flex flex-col mr-[40px] lg:w-[323px]">
               <form
                  onSubmit={(e) => e.preventDefault()}
                  className="lg:mb-[40px] mb-6 mt-[-20px] lg:mt-[21px] relative w-full lg:w-[323px]"
               >
                  <input
                     value={searchValue}
                     ref={inputRef}
                     onChange={handleSearchChange}
                     className="w-full lg:w-[314px] border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[25px] placeholder:text-[12px] placeholder:text-[#757575]"
                     type="text"
                     placeholder={lang[til].collectionPage.search}
                  />
                  <button
                     type="submit"
                     className="absolute top-[4px] right-[5px] lg:right-[15px] bg-red-600 text-white px-[12px] py-[10px] rounded-full text-[13px]"
                  >
                     <SearchIcon />
                  </button>
               </form>
               <h2 className="font-bold text-[20px] mb-9 hidden lg:block">
                  {lang[til].collectionPage.collection}
               </h2>
               <ul className="flex lg:flex-col gap-5 overflow-x-auto lg:overflow-visible whitespace-nowrap custom-scroll">
                  <li
                     onClick={() => handleCategoryClick("all")}
                     className={`${
                        selectedCategory === "all" ? "bg-red-600" : "bg-black"
                     } px-[16px] py-[8px] text-white rounded-[40px] cursor-pointer transition-all lg:text-[16px] text-[13px]`}
                  >
                     {lang[til].collectionPage.category1}
                  </li>
                  <li
                     onClick={() => handleCategoryClick("Qish")}
                     className={`${
                        selectedCategory === "Qish" ? "bg-red-600" : "bg-black"
                     } px-[16px] py-[8px] text-white rounded-[40px] cursor-pointer transition-all lg:text-[16px] text-[13px]`}
                  >
                     {lang[til].collectionPage.category2}
                  </li>
                  <li
                     onClick={() => handleCategoryClick("Kuz")}
                     className={`${
                        selectedCategory === "Kuz" ? "bg-red-600" : "bg-black"
                     } px-[16px] py-[8px] text-white rounded-[40px] cursor-pointer transition-all lg:text-[16px] text-[13px]`}
                  >
                     {lang[til].collectionPage.category3}
                  </li>
                  <li
                     onClick={() => handleCategoryClick("Yoz")}
                     className={`${
                        selectedCategory === "Yoz" ? "bg-red-600" : "bg-black"
                     } px-[16px] py-[8px] text-white rounded-[40px] cursor-pointer transition-all lg:text-[16px] text-[13px]`}
                  >
                     {lang[til].collectionPage.category4}
                  </li>
               </ul>
            </div>
            <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start lg:gap-x-[50px] gap-[20px]">
               {filteredData.map((item) => (
                  <Card img={item.img} title={item.title} />
               ))}
            </ul>
         </div>
         <Footer />
      </>
   );
};

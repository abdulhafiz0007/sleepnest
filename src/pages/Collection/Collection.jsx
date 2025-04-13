import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { allCollections } from "../../components/AllCollections/Allcollections";
import { Card } from "../../components/Card/Card";
import { SearchIcon } from "../../assets/images/Icons";
import { useRef } from "react";
import { useState } from "react";

export const Collection = () => {

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
      const matchesSearch = item.title.toLowerCase().includes(searchValue);
      return matchesCategory && matchesSearch;
   });

   return (
      <>
         <Header />
         <div className="max-w-[1490px] w-full px-4 sm:px-6 md:px-10 mx-auto flex flex-col lg:flex-row items-start justify-between gap-[30px] pt-[140px]">
            <div className="w-full flex flex-col mr-[40px] lg:w-[323px]">
               <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mb-[40px] mt-[21px] relative w-full lg:w-[323px]"
               >
                  <input
                     value={searchValue}
                     ref={inputRef}
                     onChange={handleSearchChange}
                     className="w-full lg:w-[314px] border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575]"
                     type="text"
                     placeholder="Qidiruv..."
                  />
                  <button
                     type="submit"
                     className="absolute top-[4px] right-[15px] bg-red-600 text-white px-[12px] py-[10px] rounded-full text-[13px]"
                  >
                     <SearchIcon />
                  </button>
               </form>
               <h2 className="font-bold text-[20px] mb-9 hidden lg:block">
                  To'plam
               </h2>
               <ul className="flex lg:flex-col  gap-5 overflow-x-auto lg:overflow-visible whitespace-nowrap custom-scroll">
                  <li
                     onClick={() => handleCategoryClick("all")}
                     value="all"
                     className="px-[12px] py-[6px] lg:p-0 bg-[#000] md:bg-transparent md:text-[#000] text-white rounded-[40px] cursor-pointer hover:text-slate-400 transition-all lg:text-[16px] text-[13px]"
                  >
                     Barcha kategoriyalar
                  </li>
                  <li
                     onClick={() => handleCategoryClick("Qish")}
                     value="Qish"
                     className="px-[12px] py-[6px] lg:p-0 bg-[#000] md:bg-transparent md:text-[#000] text-white rounded-[40px] cursor-pointer hover:text-slate-400 transition-all lg:text-[16px] text-[13px]"
                  >
                     Qish kolleksiyasi
                  </li>
                  <li
                     onClick={() => handleCategoryClick("Kuz")}
                     value="Kuz"
                     className="px-[12px] py-[6px] lg:p-0 bg-[#000] md:bg-transparent md:text-[#000] text-white rounded-[40px] cursor-pointer hover:text-slate-400 transition-all lg:text-[16px] text-[13px]"
                  >
                     Kuz kolleksiyasi
                  </li>
                  <li
                     onClick={() => handleCategoryClick("Yoz")}
                     value="Yoz"
                     className="px-[12px] py-[6px] lg:p-0 bg-[#000] md:bg-transparent md:text-[#000] text-white rounded-[40px] cursor-pointer hover:text-slate-400 transition-all lg:text-[16px] text-[13px]"
                  >
                     Yozgi kolleksiya
                  </li>
               </ul>
            </div>
            <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-x-[50px] gap-[30px]">
               {filteredData.map((item) => (
                  <Card img={item.img} title={item.title} />
               ))}
            </ul>
         </div>
         <Footer />
      </>
   );
};

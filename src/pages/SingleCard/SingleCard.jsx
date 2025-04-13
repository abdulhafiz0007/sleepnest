import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { allCollections } from "../../components/AllCollections/Allcollections";

export const SingleCard = () => {

   const { title } = useParams();
   const item = allCollections.find((item) => item.title === title);

   return (
      <div className="pt-[140px]">
         <Header />
         <div className="max-w-[1490px] mx-auto px-[20px] flex lg:flex-row flex-col items-center gap-[60px]">
            <img className="w-full rounded-[20px]" src={item.img} alt="" />
            <div>
               <h3 className="font-bold text-[25px] mb-7">{item.title}</h3>
               <ul className="flex flex-col lg:w-[710px] border-2 border-slate-400">
                  <li className="flex items-center justify-between  border-b-2 border-slate-400">
                     <h4 className="p-[15px]">Material</h4>
                     <p className="p-[15px] w-[400px] border-s-2 border-slate-400">
                        100% paxta flanel
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-b-2 border-slate-400">
                     <h4 className="p-[15px]">Yostiq kiyimi:</h4>
                     <p className="p-[15px] w-[400px] border-s-2 border-slate-400">
                        50x70 sm (2 dona)
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-b-2 border-slate-400">
                     <h4 className="p-[15px]">Choyshab:</h4>
                     <p className="p-[15px] w-[400px] border-s-2 border-slate-400">
                        260×280 sm (1 dona)
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-b-2 border-slate-400">
                     <h4 className="p-[15px]">Ko'rpa-to'shak:</h4>
                     <p className="p-[15px] w-[400px] border-s-2 border-slate-400">
                        160x220 sm (2 dona)
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-b-2 border-slate-400">
                     <h4 className="p-[15px]">Hajmi:</h4>
                     <p className="p-[15px] w-[400px] border-s-2 border-slate-400">
                        Maxsus o'lcham
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-slate-400">
                     <h4 className="p-[15px]">Ishlab chiqaruvchi:</h4>
                     <p className="p-[15px] w-[400px] border-s-2 border-slate-400">
                        Ekologik Toza Uyqu Mahsulotlat
                     </p>
                  </li>
               </ul>
            </div>
         </div>
         <div className="max-w-[1490px] mx-auto px-[20px] flex items-start justify-between mt-[100px]">
            <div className="">
               <h3 className="font-bold text-[30px] text-center">
                  Mahsulot haqida sharhlar
               </h3>
            </div>
            <div className="flex flex-col lg:w-[690px]">
               <h3 className="font-bold text-[30px] mb-[40px] text-center">
                  O'z sharhingizni qoldiring
               </h3>
               <p>Sizning reytingingiz:</p>
               <img src="" alt="" />
               <label className="mb-2" htmlFor="">
                  Ism*
               </label>
               <input
                  className="outline-none px-[20px] py-[8px] border-2 border-slate-400 rounded-[15px] mb-5"
                  type="text"
                  placeholder=""
               />
               <label className="mb-2" htmlFor="">
                  Elektron pochta *
               </label>
               <input
                  className="outline-none px-[20px] py-[8px] border-2 border-slate-400 rounded-[15px] mb-5"
                  type="text"
                  placeholder=""
               />
               <label className="mb-2" htmlFor="">
                  Sizning sharhingiz *
               </label>
               <textarea
                  className="outline-none resize-none px-[20px] py-[8px] border-2 border-slate-400 rounded-[20px] h-[100px]"
                  type="text"
                  placeholder=""
               />
               <button className="px-[20px] py-[8px] rounded-[20px] text-white bg-red-600 mt-7 text-[14px]">
                  Sharhni yuborish
               </button>
            </div>
         </div>
         <Footer />
      </div>
   );
};

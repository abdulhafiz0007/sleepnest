import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export const Contact = () => {
   return (
      <>
         <Header />
         <div className="lg:w-[1450px] px-[20px] m-auto pt-[140px] flex items-center justify-between">
            <div>
               <h2 className="text-[30px] text-[#000] mb-5">Aloqa</h2>
               <form className="flex flex-col w-[650px] gap-5">
                  <input
                     className="w-full border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575]"
                     type="text"
                     placeholder="Sizning electron pochtangiz"
                  />
                  <input
                     className="w-full border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575]"
                     type="text"
                     placeholder="Telefom raqamingiz"
                  />
                  <textarea 
                     className="w-full resize-none border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575] h-[130px]"
                     type="text"
                     placeholder="Sizning xabaringiz bo'lsa yozing"
                  />
                  <button
                     type="submit"
                     className="w-[170px] bg-red-600 text-white px-[20px] py-[12px] rounded-[20px] text-[13px]"
                  >
                     Yuborish
                  </button>
               </form>
            </div>
            <div className="">
               <iframe
                  className="rounded-[20px]"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1744456952654!5m2!1sen!2sus"
                  width="700"
                  height="450"
               ></iframe>
            </div>
         </div>
         <Footer />
      </>
   );
};

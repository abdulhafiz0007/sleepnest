import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import collectionImg1 from "../../assets/images/productImg1.jpg";
import collectionImg2 from "../../assets/images/productImg2.jpg";
import collectionImg3 from "../../assets/images/productImg3.jpg";
import collectionImg4 from "../../assets/images/productImg4.jpg";
import collectionImg5 from "../../assets/images/productImg5.jpg";
import collectionImg6 from "../../assets/images/productImg6.jpg";
import collectionImg7 from "../../assets/images/productImg7.jpg";
import collectionImg8 from "../../assets/images/productImg8.jpg";
import collectionImg9 from "../../assets/images/productImg9.jpg";
import collectionImg10 from "../../assets/images/productImg10.jpg";
import collectionImg11 from "../../assets/images/autmImg1.jpg";
import collectionImg12 from "../../assets/images/autmImg2.jpg";
import collectionImg13 from "../../assets/images/autmImg3.jpg";
import collectionImg14 from "../../assets/images/autmImg4.jpg";
import collectionImg15 from "../../assets/images/autmImg5.jpg";
import collectionImg16 from "../../assets/images/autmImg6.jpg";
import collectionImg17 from "../../assets/images/autmImg7.jpg";
import collectionImg18 from "../../assets/images/autmImg8.jpg";
import collectionImg19 from "../../assets/images/autmImg9.jpg";
import collectionImg20 from "../../assets/images/autmImg10.jpg";
import collectionImg21 from "../../assets/images/summerImg1.jpg";
import collectionImg22 from "../../assets/images/summerImg2.jpg";
import collectionImg23 from "../../assets/images/summerImg3.jpg";
import collectionImg24 from "../../assets/images/summerImg4.jpg";
import collectionImg25 from "../../assets/images/summerImg5.jpg";
import collectionImg26 from "../../assets/images/summerImg6.jpg";
import collectionImg27 from "../../assets/images/summerImg7.jpg";
import collectionImg28 from "../../assets/images/summerImg8.jpg";
import collectionImg29 from "../../assets/images/summerImg9.jpg";
import collectionImg30 from "../../assets/images/summerImg10.jpg";
import { Card } from "../../components/Card/Card";
import { SearchIcon } from "../../assets/images/Icons";

export const Collection = () => {
   const allCollections = [
      {
         img: collectionImg1,
         title: "Kvadratchalar",
      },
      {
         img: collectionImg2,
         title: "Ikat",
      },
      {
         img: collectionImg3,
         title: "Davralar",
      },
      {
         img: collectionImg4,
         title: "Geometriya ko'k",
      },
      {
         img: collectionImg5,
         title: "Tropik barglar",
      },
      {
         img: collectionImg6,
         title: "Bambi",
      },
      {
         img: collectionImg7,
         title: "Vizantiya",
      },
      {
         img: collectionImg8,
         title: "Kechki bog'",
      },
      {
         img: collectionImg9,
         title: "Pat Markiz",
      },
      {
         img: collectionImg10,
         title: "Lavanda atirgullari",
      },
      {
         img: collectionImg11,
         title: "Safari",
      },
      {
         img: collectionImg12,
         title: "Ko'p rangli ametist",
      },
      {
         img: collectionImg13,
         title: "Shivali bezakchalar",
      },
      {
         img: collectionImg14,
         title: "Zumrad (AB)",
      },
      {
         img: collectionImg15,
         title: "Malaxit qutisi",
      },
      {
         img: collectionImg16,
         title: "Bahorning hidlari",
      },
      {
         img: collectionImg17,
         title: "Kuzgi barglar tushishi (AB)",
      },
      {
         img: collectionImg18,
         title: "Moviy shabada",
      },
      {
         img: collectionImg19,
         title: "Moviy suv",
      },
      {
         img: collectionImg20,
         title: "Plaid",
      },
      {
         img: collectionImg21,
         title: "Vintage uslubi",
      },
      {
         img: collectionImg22,
         title: "tebranayotgan karahindiba",
      },
      {
         img: collectionImg23,
         title: "Fransuz Riviera",
      },
      {
         img: collectionImg24,
         title: "Qo'y Dolli",
      },
      {
         img: collectionImg25,
         title: "Alp tog'lari o'simliklari",
      },
      {
         img: collectionImg26,
         title: "Ilhomlantiruvchi",
      },
      {
         img: collectionImg27,
         title: "Yashil lotus",
      },
      {
         img: collectionImg28,
         title: "Tog'li makkajo'xori",
      },
      {
         img: collectionImg29,
         title: "Sakura filiali",
      },
      {
         img: collectionImg30,
         title: "Zaytun novdasi",
      },
   ];

   return (
      <>
         <Header />
         <div className="lg:w-[1450px] px-[20px] m-auto flex items-start justify-between gap-[40px] pt-[140px]">
            <div className="flex flex-col mr-[40px]">
               <div className="mb-[40px] mt-[21px] relative">
                  <input
                     className="border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575]"
                     type="text"
                     placeholder="Qidiruv..."
                  />
                  <button className="absolute top-[4px] right-[4px] bg-red-600 text-white px-[12px] py-[12px] rounded-full text-[13px]">
                     <SearchIcon />
                  </button>
               </div>
               <h2 className="font-bold text-[20px] mb-9">To'plam</h2>
               <ul className="flex flex-col gap-5">
                  <li>
                     <p>Barcha kategoriyalar</p>
                  </li>
                  <li>
                     <p>Qish kolleksiyasi</p>
                  </li>
                  <li>
                     <p>Kuz kolleksiyasi</p>
                  </li>
                  <li>
                     <p>Yozgi kolleksiya</p>
                  </li>
               </ul>
            </div>
            <ul className="flex flex-wrap items-center gap-[15px]">
               {allCollections.map((item) => (
                  <Card img={item.img} title={item.title} />
               ))}
            </ul>
         </div>
         
         <Footer />
      </>
   );
};

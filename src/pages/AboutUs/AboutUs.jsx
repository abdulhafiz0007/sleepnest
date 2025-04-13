import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import aboutImg from '../../assets/images/aboutUs.png';

export const AboutUs = () => {
   return (
      <>
         <Header />
         <div className="lg:w-[1450px] px-[20px] m-auto flex items-center gap-[50px] pt-[120px]">
            <div className="flex flex-col gap-[15px] w-[580px]">
               <h2 className="text-[#000] text-[35px] font-bold mb-2">Ekologik Toza Uyqu Mahsulotlari</h2>
               <p className="text-[#696969]">
                  Matolarimiz va ekologik sumkalar ishlab chiqaruvchi korxonamiz
                  uzoq yillardan beri paxta matolarini global bozorda yetkazib
                  berib kelmoqda.
               </p>
               <p className="text-[#696969]">
                  Korxonamiz o‘z faoliyatini 17 yil avval boshlagan va shu vaqt
                  ichida mijozlarimiz ishonchini qozonib kelmoqda.
               </p>
               <p className="text-[#696969]">
                  Kompaniyamizning bosh maqsadi — sifatli, bardoshli va ekologik
                  xavfsiz mahsulotlarni yaratishdir
               </p>
               <p className="text-[#696969]">
                  Ishlab chiqarish jarayonlari butunlay ekologik standartlarga
                  mos bo‘lib, atrof-muhitga zarar yetkazmaslikka qaratilgan.
               </p>
               <p className="text-[#696969]">
                  Zamonaviy texnologiyalardan foydalanib, turli xil paxta
                  mahsulotlarini yuqori darajada ishlab chiqarish imkoniyatiga
                  egamiz.
               </p>
               <p className="text-[#696969]">
                  Shuningdek, biz DongJu to‘quv uskunalarining O‘zbekistondagi
                  rasmiy vakili sifatida faoliyat yuritamiz.
               </p>
               <p className="text-[#696969]">
                  Har yili fabrikamizda 80 dan ortiq mahsulot turlari ishlab
                  chiqariladi, buning natijasida kompaniya yuqori sifat va
                  barqaror ishlab chiqarishni ta’minlaydi.
               </p>
               <p className="text-[#696969]">
                  Korxonamizda zamonaviy texnologiyalar asosida 50 dan ortiq
                  to‘quv dastgohlari faoliyat ko‘rsatmoqda.
               </p>
               <p className="text-[#696969]">
                  Bizning ishlab chiqarish jarayonlarimizda faqat sifatli va
                  ekologik xavfsiz mahsulotlar ishlab chiqarishni ta’minlaymiz.
               </p>
               <p className="text-[#696969]">
                  Mijozlarimiz talablariga javoban, ekologik xavfsiz va
                  zamonaviy dizaynli sumkalar ishlab chiqarish yo‘lga qo‘yilgan.
               </p>
               <p className="text-[#696969]">
                  Kompaniyamiz har doim mijozlariga sifatli mahsulot va yuqori
                  darajadagi xizmat ko‘rsatishdan mamnun.
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

import React, { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { lang } from "../../components/Lang/Lang";
import { LangContext } from "../../context/LangContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import NewsImg1 from "../../assets/images/newImg1.png";
import NewsImg2 from "../../assets/images/newImg2.png";
import NewsImg3 from "../../assets/images/newImg3.png";

export const NewsPage = () => {
   const { til } = useContext(LangContext);
   const { id } = useParams();

   const newsData = {
      1: NewsImg1,
      2: NewsImg3,
      3: NewsImg2,
   };

   const emailRef = useRef();
   const phoneRef = useRef();
   const messagRef = useRef();

   const sendMessage = (evt) => {
      evt.preventDefault();
      const token = "YOUR_BOT_TOKEN";
      const chat_id = "YOUR_CHAT_ID";
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const email = emailRef.current.value;
      const phone = phoneRef.current.value;
      const message = messagRef.current.value;
      const messageContent = `Email: ${email} \nTelfon raqam: ${phone}, \nMessage: ${message}`;
      axios({
         url: url,
         method: "POST",
         data: {
            chat_id: chat_id,
            text: messageContent,
         },
      })
         .then((res) => {
            if (res.status === 200) {
               toast.success("Message sent");
               emailRef.current.value = "";
               phoneRef.current.value = "";
               messagRef.current.value = "";
            }
         })
         .catch((err) => toast.error("Message Failed"));
   };

   return (
      <>
         <Header />
         <div className="max-w-[1490px] px-[20px] mx-auto flex flex-col lg:flex-row items-center gap-[160px] pt-[120px]">
            <div className="flex flex-col gap-[15px] w-full lg:w-[580px]">
               <h2 className="text-[#000] text-[35px] font-bold mb-2">
                  {lang[til].newsPage.title}
               </h2>
               <p className="text-[#696969]">{lang[til].newsPage.desc1}</p>
               <p className="text-[#696969]">{lang[til].newsPage.desc2}</p>
            </div>
            <div className="shadow-2xl rounded-[30px]">
               <img
                  className="rounded-[30px] w-full max-w-[600px] object-cover"
                  src={newsData[id] || NewsImg1}
                  alt="News"
               />
            </div>
         </div>

         <div className="max-w-[1450px] px-[20px] mx-auto pt-[140px] flex flex-col lg:flex-row gap-[40px] lg:justify-between lg:items-center">
            <div>
               <h2 className="text-[30px] text-[#000] mb-5">
                  {lang[til].contacts.title}
               </h2>
               <form
                  onSubmit={sendMessage}
                  className="flex flex-col w-full lg:w-[650px] gap-5"
               >
                  <input
                     ref={emailRef}
                     className="w-full border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575]"
                     type="text"
                     placeholder={lang[til].contacts.email}
                  />
                  <input
                     ref={phoneRef}
                     className="w-full border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575]"
                     type="text"
                     placeholder={lang[til].contacts.phone}
                  />
                  <textarea
                     ref={messagRef}
                     className="w-full resize-none border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575] h-[130px]"
                     placeholder={lang[til].contacts.message}
                  />
                  <button
                     type="submit"
                     className="w-[170px] bg-red-600 text-white px-[20px] py-[12px] rounded-[20px] text-[13px]"
                  >
                     {lang[til].contacts.button}
                  </button>
               </form>
            </div>
            <div>
               <iframe
                  className="rounded-[20px] w-full lg:w-[700px]"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1744456952654!5m2!1sen!2sus"
                  width="700"
                  height="450"
                  allowFullScreen
                  loading="lazy"
               ></iframe>
            </div>
         </div>
         <ToastContainer />
         <Footer />
      </>
   );
};

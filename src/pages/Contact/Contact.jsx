import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

export const Contact = () => {
   const emailRef = useRef();
   const phoneRef = useRef();
   const messagRef = useRef();

   const sendMessage = (evt) => {
      evt.preventDefault();
      const token = "7254513625:AAEhMcoF_YjIrcdmoWYfA1MCPwE3SMUd89M";
      const chat_id = 6552496082;
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
               toast.success("Message sent")
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
         <div className="max-w-[1450px] px-[20px] mx-auto pt-[140px] flex flex-col lg:flex-row gap-[40px] lg:justify-between lg:items-center">
            <div>
               <h2 className="text-[30px] text-[#000] mb-5">Aloqa</h2>
               <form
                  onSubmit={sendMessage}
                  className="flex flex-col w-full lg:w-[650px] gap-5"
               >
                  <input
                     ref={emailRef}
                     className="w-full border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575]"
                     type="text"
                     placeholder="Sizning electron pochtangiz"
                  />
                  <input
                     ref={phoneRef}
                     className="w-full border-none bg-[#E6E6E6] outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-[12px] placeholder:text-[#757575]"
                     type="text"
                     placeholder="Telefom raqamingiz"
                  />
                  <textarea
                     ref={messagRef}
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
                  className="rounded-[20px] w-full lg:w-[700px]"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1744456952654!5m2!1sen!2sus"
                  width="700"
                  height="450"
               ></iframe>
            </div>
            <ToastContainer />
         </div>
         <Footer />
      </>
   );
};

import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { allCollections } from "../../components/AllCollections/Allcollections";
import { StarIcon } from "../../assets/images/Icons";
import { useState } from "react";

export const SingleCard = () => {
   const { title } = useParams();
   const item = allCollections.find((item) => item.title === title);
   const [rating, setRating] = useState(0);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [comment, setComment] = useState("");
   const [reviews, setReviews] = useState([]);

   const handleSubmit = (evt) => {
      evt.preventDefault();
      if (!name || !email || !comment || rating === 0) return;

      const newReview = {
         id: Date.now(),
         name,
         email,
         comment,
         rating,
         date: new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
         }),
      };

      setReviews([newReview, ...reviews]);

      setName("");
      setEmail("");
      setComment("");
      setRating(0);
   };

    const handleDeleteBtn = (index) => {
        const updatedReviews = reviews.filter((item, i) => i !== index)
        setReviews(updatedReviews);
    }

   return (
      <div className="pt-[140px]">
         <Header />
         <div className="max-w-[1490px] mx-auto px-[20px] flex lg:flex-row flex-col items-center gap-[60px]">
            <img className="w-full rounded-[20px]" src={item.img} alt="" />
            <div>
               <h3 className="font-bold text-[25px] mb-7">{item.title}</h3>
               <ul className="w-full flex flex-col lg:w-[710px] border-2 border-slate-400">
                  <li className="flex items-center justify-between  border-b-2 border-slate-400">
                     <h4 className="p-[15px] text-[15px]">Material</h4>
                     <p className="p-[15px] lg:w-[400px] w-full max-w-[200px] border-s-2 border-slate-400 text-[15px]">
                        100% paxta flanel
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-b-2 border-slate-400">
                     <h4 className="p-[15px] text-[15px]">Yostiq kiyimi:</h4>
                     <p className="p-[15px] lg:w-[400px]  w-full max-w-[200px] border-s-2 border-slate-400 text-[15px]">
                        50x70 sm (2 dona)
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-b-2 border-slate-400 ">
                     <h4 className="p-[15px] text-[15px]">Choyshab:</h4>
                     <p className="p-[15px] lg:w-[400px] w-full max-w-[200px] border-s-2 border-slate-400 text-[15px]">
                        260×280 sm (1 dona)
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-b-2 border-slate-400">
                     <h4 className="p-[15px] text-[15px]">Ko'rpa-to'shak:</h4>
                     <p className="p-[15px] lg:w-[400px] w-full max-w-[200px] border-s-2 border-slate-400 text-[15px]">
                        160x220 sm (2 dona)
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-b-2 border-slate-400">
                     <h4 className="p-[15px] text-[15px]">Hajmi:</h4>
                     <p className="p-[15px] lg:w-[400px] w-full max-w-[200px] border-s-2 border-slate-400 text-[15px]">
                        Maxsus o'lcham
                     </p>
                  </li>
                  <li className="flex items-center justify-between border-slate-400">
                     <h4 className="p-[15px] text-[15px]">Ishlab chiqaruvchi:</h4>
                     <p className="p-[15px] lg:w-[400px] w-full max-w-[200px] border-s-2 border-slate-400 text-[15px]">
                        Ekologik Toza Uyqu Mahsulotlat
                     </p>
                  </li>
               </ul>
            </div>
         </div>
         <div className="max-w-[1490px] mx-auto px-[20px] flex flex-col lg:flex-row items-start justify-between mt-[100px]">
            <div className="w-full lg:w-[690px] mb-[70px] lg:mb-0">
               <h3 className="font-bold text-[30px] text-center mb-5">
                  Mahsulot haqida sharhlar
               </h3>
               {reviews.length === 0 ? (
                  <p className="text-gray-500 text-center">
                     Sharhlar hali mavjud emas.
                  </p>
               ) : (
                  <ul className="flex flex-col gap-5">
                     {reviews.map((rev, index) => (
                        <li
                           key={rev.id}
                           className="border border-slate-300 rounded-[10px] p-4 break-words max-w-[650px] mx-auto w-full bg-white shadow-md"
                        >
                           <div className="flex justify-between items-center mb-2">
                              <div>
                                 <h4 className="font-semibold">{rev.name}</h4>
                                 <p className="text-sm text-gray-500">
                                    {rev.date}
                                 </p>
                              </div>
                              <div className="flex flex-col items-end">
                                 <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                       <StarIcon
                                          key={star}
                                          isActive={star <= rev.rating}
                                       />
                                    ))}
                                 </div>
                                 <button
                                    onClick={() => handleDeleteBtn(index)}
                                    className="mt-3 px-[12px] py-[6px] bg-red-600 text-white rounded-[10px] text-[14px] font-light"
                                 >
                                    Delete
                                 </button>
                              </div>
                           </div>
                           <p className="text-sm text-gray-700 ">
                              {rev.comment}
                           </p>
                        </li>
                     ))}
                  </ul>
               )}
            </div>
            <form
               onSubmit={handleSubmit}
               className="flex flex-col lg:w-[690px]"
            >
               <h3 className="font-bold text-[30px] mb-[40px] text-center">
                  O'z sharhingizni qoldiring
               </h3>
               <p>Sizning reytingingiz:</p>
               <ul className="flex items-center gap-2 mt-3 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                     <li onClick={() => setRating(star)}>
                        <StarIcon isActive={star <= rating} />
                     </li>
                  ))}
               </ul>

               <label className="mb-2" htmlFor="">
                  Ism*
               </label>
               <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="outline-none px-[20px] py-[8px] border-2 border-slate-400 rounded-[15px] mb-5"
                  type="text"
                  placeholder=""
               />
               <label className="mb-2" htmlFor="">
                  Elektron pochta *
               </label>
               <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none px-[20px] py-[8px] border-2 border-slate-400 rounded-[15px] mb-5"
                  type="text"
                  placeholder=""
               />
               <label className="mb-2" htmlFor="">
                  Sizning sharhingiz *
               </label>
               <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="outline-none resize-none px-[20px] py-[8px] border-2 border-slate-400 rounded-[20px] h-[100px]"
                  type="text"
                  placeholder=""
               />
               <button
                  type="submit"
                  className="px-[20px] py-[10px] rounded-[20px] text-white bg-red-600 mt-7 text-[14px]"
               >
                  Sharhni yuborish
               </button>
            </form>
         </div>
         <Footer />
      </div>
   );
};

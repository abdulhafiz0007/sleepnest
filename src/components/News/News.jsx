import React from 'react';
import NewsImg1 from '../../assets/images/newImg1.png';
import NewsImg2 from '../../assets/images/newImg2.png';
import NewsImg3 from '../../assets/images/newImg3.png';


export const News = () => {
  return (
    <div className='lg:w-[1450px] px-[20px] m-auto pt-[100px]'>
        <h2 className='font-bold text-center text-[35px] mb-[20px]'>Yangiliklar</h2>
        <p className='text-[#A5A1A1] text-center'>Ekologik Toza Uyqu Mahsulotlari</p>
        <ul className='flex flex-col lg:flex-row items-center justify-between mt-[70px] gap-[35px] lg:gap-6'>
            <li className='pb-[10px]'>
                <img className='rounded-[20px]' src={NewsImg1} alt="" />
                <div className='flex items-center gap-[50px] mt-[13px]'>
                    <p>10/05/2024</p>
                    <p className='text-[#616060] text-[12px]'>admin tomonidan</p>
                </div>
                <h3 className='font-bold text-[18.7px]  mt-[28px] mb-[18px]'>Qanday qilib mukammal gadjetlarni tanlash mumkin</h3>
                <p className='text-[#5B5A5A]'>Go'zal vodiyning bug' bilan to'lganda va meridian quyoshi tepalikka urilganda...</p>
            </li>
            <li className='pb-[10px]'>
                <img className='rounded-[20px]' src={NewsImg3} alt="" />
                <div className='flex items-center gap-[50px] mt-[13px]'>
                    <p>10/05/2024</p>
                    <p className='text-[#616060] text-[12px]'>admin tomonidan</p>
                </div>
                <h3 className='font-bold text-[18.7px] mt-[28px] mb-[18px]'>Qanday qilib mukammal gadjetlarni tanlash mumkin</h3>
                <p className='text-[#5B5A5A]'>Go'zal vodiyning bug' bilan to'lganda va meridian quyoshi tepalikka urilganda...</p>
            </li>
            <li className='pb-[10px]'>
                <img className='rounded-[20px]' src={NewsImg2} alt="" />
                <div className='flex items-center gap-[50px] mt-[13px]'>
                    <p>10/05/2024</p>
                    <p className='text-[#616060] text-[12px]'>admin tomonidan</p>
                </div>
                <h3 className='font-bold text-[18.7px] mt-[28px] mb-[18px]'>Qanday qilib mukammal gadjetlarni tanlash mumkin</h3>
                <p className='text-[#5B5A5A]'>Go'zal vodiyning bug' bilan to'lganda va meridian quyoshi tepalikka urilganda...</p>
            </li>
        </ul>
    </div>
  )
}

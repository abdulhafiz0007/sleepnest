import React from 'react';
import { useContext } from 'react';
import NewsImg1 from '../../assets/images/newImg1.png';
import NewsImg2 from '../../assets/images/newImg2.png';
import NewsImg3 from '../../assets/images/newImg3.png';
import { LangContext } from '../../context/LangContext';
import { lang } from '../Lang/Lang';

export const News = () => {

    const {til} = useContext(LangContext);

  return (
    <div className='lg:w-[1450px] px-[20px] m-auto pt-[100px]'>
        <h2 className='font-bold text-center text-[35px] mb-[20px]'>{lang[til].news.newsTitle}</h2>
        <p className='text-[#A5A1A1] text-center'>{lang[til].news.newsDesc}</p>
        <ul className='flex flex-col lg:flex-row items-start justify-between mt-[70px] gap-[35px] lg:gap-6'>
            <li className='pb-[10px] w-[450px]'>
                <img className='rounded-[20px] lg:w-[450px] lg:h-[250px] object-cover' src={NewsImg1} alt="" />
                <div className='flex items-center gap-[50px] mt-[13px]'>
                    <p>10/05/2024</p>
                    <p className='text-[#616060] text-[12px]'>{lang[til].news.fromAdmin}</p>
                </div>
                <h3 className='font-bold text-[18.7px] mt-[28px] mb-[18px]'>{lang[til].news.card1Title}</h3>
                <p className='text-[#5B5A5A]'>{lang[til].news.card1Desc}</p>
            </li>
            <li className='pb-[10px] w-[450px]'>
                <img className='rounded-[20px] lg:w-[450px] lg:h-[250px] object-cover' src={NewsImg3} alt="" />
                <div className='flex items-center gap-[50px] mt-[13px]'>
                    <p>10/05/2024</p>
                    <p className='text-[#616060] text-[12px]'>{lang[til].news.fromAdmin}</p>
                </div>
                <h3 className='font-bold text-[18.7px] mt-[28px] mb-[18px]'>{lang[til].news.card2Title}</h3>
                <p className='text-[#5B5A5A]'>{lang[til].news.card2Desc}</p>
            </li>
            <li className='lg:pb-[30px] w-[450px]'>
                <img className='rounded-[20px] lg:w-[450px] lg:h-[250px] object-cover' src={NewsImg2} alt="" />
                <div className='flex items-center gap-[50px] mt-[13px]'>
                    <p>10/05/2024</p>
                    <p className='text-[#616060] text-[12px]'>{lang[til].news.fromAdmin}</p>
                </div>
                <h3 className='font-bold text-[18.7px] mt-[28px] mb-[18px]'>{lang[til].news.card3Title}</h3>
                <p className='text-[#5B5A5A]'>{lang[til].news.card3Desc}</p>
            </li>
        </ul>
    </div>
  )
}

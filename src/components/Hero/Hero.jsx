import React from 'react';
import { useContext } from 'react';
import HeroImg from '../../assets/images/heroImg.png';
import { LangContext } from '../../context/LangContext';
import { lang } from '../Lang/Lang';


export const Hero = () => {

  const {til} = useContext(LangContext);

  return (
    <div className=' w-full h-[400px] l mt-[100px] px-[20px] rounded-[50px] relative'>
        <div className='bg-[#f5efe6] relative h-[400px] lg:h-[608px]  rounded-[50px] p-[20px]'>
            <img className='absolute top-[40px] right-0 lg:top-[-80px] lg:left-[-200px] lg:h-auto h-[360px] object-cover z-0' src={HeroImg} alt="hero img" />
            <div className='text-right mt-5 relative z-10 mt-[80px]'>
              <h1 className='text-slate-500 text-[20px] font-bold  lg:text-[25px]'>{lang[til].hero.title}</h1>
              <p className='text-slate-500  text-[25px]  lg:text-[55px]'>{lang[til].hero.title2}</p>
              <p className='text-slate-500  text-[35px]  lg:text-[95px]'>{lang[til].hero.title3}</p>
            </div>
        </div>
    </div>
  )
}

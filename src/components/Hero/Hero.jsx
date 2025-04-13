import React from 'react';
import { useContext } from 'react';
import HeroImg from '../../assets/images/heroImg.png';
import { LangContext } from '../../context/LangContext';
import { lang } from '../Lang/Lang';


export const Hero = () => {

  const {til} = useContext(LangContext);

  return (
    <div className=' w-full h-[400px] l mt-[100px] px-[20px] rounded-[50px] relative z-0'>
        <div className='bg-[#f5efe6] relative h-[400px] lg:h-[608px]  rounded-[50px] p-[20px]'>
            <img className='absolute top-[40px] right-[50px] lg:top-[-80px] lg:left-[-200px] ' src={HeroImg} alt="hero img" />
            <div className='text-right mt-5'>
              <h1 className='text-orange-500 text-[20px]  lg:text-[25px]'>{lang[til].hero.title}</h1>
              <p className='text-orange-400 text-[35px]  lg:text-[55px]'>{lang[til].hero.title2}</p>
              <p className='text-orange-400 text-[45px]  lg:text-[95px]'>{lang[til].hero.title3}</p>
            </div>
        </div>
    </div>
  )
}

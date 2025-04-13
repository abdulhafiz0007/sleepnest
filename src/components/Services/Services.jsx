import React from 'react'
import { useContext } from 'react'
import { ServiceIcon1 , ServiceIcon2, ServiceIcon3, ServiceIcon4} from '../../assets/images/Icons'
import { LangContext } from '../../context/LangContext';
import { lang } from '../Lang/Lang';

export const Services = () => {

  const {til} = useContext(LangContext);

  return (
    <div className='lg:w-[1450px] px-[20px] m-auto pt-[96px] pb-[190px] lg:pt-[320px] lg:pb-[150px]'>
        <ul className='flex flex-wrap items-center gap-5 justify-between'>
          <li className='flex items-center gap-[20px]'>
            <ServiceIcon1 />
            <div className='flex flex-col gap-[16px] lg:w-[250px]'>
              <h3 className="font-bold">{lang[til].service.title1}</h3>
              <p className='text-[14px] text-[#AAAAAA]'>{lang[til].service.desc1}</p>
            </div>
          </li>
          <li className='flex items-center gap-[20px]'>
            <ServiceIcon2 />
            <div className='flex flex-col gap-[16px]'>
              <h3 className='font-bold'>{lang[til].service.title2}</h3>
              <p className='text-[14px] text-[#AAAAAA]'>{lang[til].service.desc2}</p>
            </div>
          </li>
          <li className='flex items-center gap-[20px]'>
            <ServiceIcon3 />
            <div className='flex flex-col gap-[16px]'>
              <h3 className="font-bold">{lang[til].service.title3}</h3>
              <p className='text-[14px] text-[#AAAAAA] classname="font-bold"'>{lang[til].service.desc3}</p>
            </div>
          </li>
          <li className='flex items-center gap-[20px]'>
            <ServiceIcon4 />
            <div className='flex flex-col gap-[16px]'>
              <h3 className="font-bold">{lang[til].service.title4}</h3>
              <p className='text-[14px] text-[#AAAAAA]'>{lang[til].service.des4}</p>
            </div>
          </li>
        </ul>
    </div>
  )
}

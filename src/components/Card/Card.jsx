import React from 'react'

export const Card = ({img, title}) => {
  return (
    <li className='flex flex-col gap-4 items-start pb-[10px] lg:w-[250px] w-[185px]'>    
        <img className='rounded-[20px] w-[250px]' src={img} alt="" />
        <h2>{title}</h2>
    </li>
  )
}

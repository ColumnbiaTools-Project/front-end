"use client"

import Image from 'next/image';
import { GrPrevious,GrNext } from 'react-icons/gr';
import { useState } from 'react';

export default function Recommend () {

  const [sildePx, setSlidePx] = useState();


  const toPrev = () => {
    
  }

  const toNext = () => {
    
  }

  return(
    <div className="w-full h-[500px] bg-white flex justify-end">
      <div className="w-[1600px] h-full flex items-center">
        <div className="flex flex-col mr-[80px] mb-[140px]">
          <div className="w-[69px] h-[8px] bg-black mb-3"></div>
          <div className="text-3xl">
          COLUMBIA<br/>
          TOOLS<br/>
          추천 상품
          </div>
        </div>
        <div className="w-full overflow-x-hidden relative">
          <div className='w-screen flex'>
            <div className="w-[280px] h-[280px] mx-3 bg-mainGray flex justify-center items-center">
              <Image src='/product1.png' width={212} height={212} alt='product1'/>
            </div>
            <div className="w-[280px] h-[280px] mx-3 bg-mainGray flex justify-center items-center">
              <Image src='/product2.png' width={212} height={212} alt='product1'/>
            </div>
            <div className="w-[280px] h-[280px] mx-3 bg-mainGray flex justify-center items-center">
              <Image src='/product3.png' width={212} height={212} alt='product1'/>
            </div>
            <div className="w-[280px] h-[280px] mx-3 bg-mainGray flex justify-center items-center">
              <Image src='/product4.png' width={212} height={212} alt='product1'/>
            </div>
            <div className="w-[280px] h-[280px] mx-3 bg-mainGray flex justify-center items-center">
              <Image src='/product1.png' width={212} height={212} alt='product1'/>
            </div>
            <div className="w-[280px] h-[280px] mx-3 bg-mainGray flex justify-center items-center">
              <Image src='/product2.png' width={212} height={212} alt='product1'/>
            </div>
          </div>
          <GrPrevious className="w-10 h-10 absolute left-0 top-0 bottom-0 my-auto" onClick={toPrev}/>
          <GrNext className="w-10 h-10 absolute right-0 top-0 bottom-0 my-auto" onClick={toNext}/>
        </div>
      </div>
    </div>
  )
}
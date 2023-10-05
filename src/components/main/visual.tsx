"use client"

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './swiper.css';

export default function Visual(){
  return(
  <div className="w-full h-screen text-white">
    <Image src="/main/main-visual1.png" fill alt="Main_Image" className="relative"/>
    <div className="flex flex-col absolute top-[140px] left-[80px] text-left">
      <p className="text-3xl text-black">DRYWALL TOOLS</p>
      <p className="text-9xl font-black text-black">Columbia<br/> Tools</p>
    </div>
  </div>
  )
}

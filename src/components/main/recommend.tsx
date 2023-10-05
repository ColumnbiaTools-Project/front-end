"use client"

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './swiper.css';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Recommend () {

  const images = Array.from({ length: 18 }, (_, index) => index + 1);

  return(
    <div className="w-full h-[600px] bg-white flex justify-end">
      <div className="w-[1600px] h-full flex items-center relative">
        <div className="flex flex-col mr-[80px] mb-[140px]">
          <div className="w-[69px] h-[8px] bg-black mb-3"></div>
          <div className="text-[28px]">
          COLUMBIA<br/>
          TOOLS<br/>
          추천 상품
          </div>
        </div>
        <div className="w-[1210px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={true}
            className="mySwiper"
          >
            {
              images.map(index => (
                <SwiperSlide key={index}>
                  <div className="w-[280px] h-[280px] bg-mainGray flex justify-center items-center">
                    <Image src={`/main/main-product${index}.png`} width={212} height={212} alt={`product${index}`} />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}
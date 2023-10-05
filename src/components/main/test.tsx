"use client"

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Test () {

  const images = Array.from({ length: 18 }, (_, index) => index + 1);

  return(
    <div className="w-[1210px]">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        modules={[Pagination, Navigation]}
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
  )
}
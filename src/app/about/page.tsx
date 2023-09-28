"use client"

import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  //AOS 기본설정
  useEffect(()=>{
    AOS.init();
  })

  //스크롤 이벤트 설정
  const [positionY, setPositionY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled100, setIsScrolled100] = useState(false);

  const onScroll = () => {
    setPositionY(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  },[])

  useEffect(()=>{
    if(positionY > 0){
      setIsScrolled(true);
    }else if(positionY >= 100){
      setIsScrolled100(true);
    }else{
      setIsScrolled(false);
    }
  })



  const scrollRef = useRef();

  return (
  <div className="relative">
    <div className="w-full h-screen flex justify-center items-center clip-circle fixed top-[0px] z-[2]"
      data-aos={isScrolled ? "1979-anim" : ""}
      data-aos-duration="1000">
      <div className="text-9xl font-bold text-white z-[3]">1979</div>
      <Image src="/about/1979-main.png" fill alt="1979" />
    </div>
    <div className="w-full h-screen bg-black fixed top-[0px] flex justify-end items-end">
      <div className="text-white">{positionY}</div>
    </div>
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div
      data-aos="fade-left"
      className="text-white text-5xl">
        test
      </div>
    </div>
    <div
    className="w-full h-screen flex justify-center items-center"
    data-aos="example-anim2">
    </div>
  </div>
  )
}

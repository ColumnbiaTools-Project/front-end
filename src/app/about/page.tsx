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
  const [isScrolled500, setIsScrolled500] = useState(false);
  const [isScrolled1000, setIsScrolled1000] = useState(false);
  const [isScrolled900, setIsScrolled900] = useState(false);

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
    if(positionY >= 100){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
  });

  useEffect(()=>{
    if(positionY >= 500){
      setIsScrolled500(true);
    }else{
      setIsScrolled500(false);
    }
  });

  useEffect(()=>{
    if(positionY >= 1000){
      setIsScrolled1000(true);
    }else{
      setIsScrolled1000(false);
    }
  });

  useEffect(()=>{
    if(positionY >= 900){
      setIsScrolled900(true);
    }else{
      setIsScrolled900(false);
    }
  });


  const scrollRef = useRef();

  return (
  <div className="relative">
    {/* <div className="text-testRed fixed bottom-0 right-0 z-[10]">{positionY}</div> */}
    { isScrolled500
      ?
      <div className="w-full h-screen fixed z-[2] bg-white transition-all duration-[1500ms] overflow-x-hidden"
        data-aos={isScrolled1000 ? "2023-fixed" : ""}>
        <div className="w-[1500px] flex justify-between items-center absolute right-0 bottom-0 top-0 my-auto"
          data-aos={isScrolled1000 ? "2023-to-left" : ""}
          data-aos-duration="1000">
          <div className="text-[200px] font-bold">2023</div>
          <div className="text-[24px]">
            Bernie의 고품질 도구는 브랜드에 대한 신뢰를 쌓았고, Columbia Tools는<br/>
            전략적인 장비 투자와 제품 출시를 통해 세계적인 제조업체가 되었습니다.<br/>
            브랜드의 목표는 여전히 최고의 도구를 만드는 것이며,<br/>
            창업자인 Bernie는 지금까지도 신제품 개발에 열정적입니다.
          </div>
        </div>
        <Image src="/about/2023-main.png" width={1010} height={673} alt="2023"
          className="absolute right-0 bottom-0 top-0 my-auto z-[2]" />
      </div>
      :
      <div className="w-full h-screen flex justify-center items-center clip-circle fixed z-[2]"
        data-aos={isScrolled ? "1979-anim" : ""}
        data-aos-duration="1000">
        <div className="text-[200px] font-bold text-white z-[3] translate-x-[440px]"
          data-aos={isScrolled ? "1979-to-left" : ""}
          data-aos-delay="120"
          data-aos-duration="1000">1979</div>
        <div className="text-[26px] text-white z-[3] opacity-0 translate-x-[80px]"
          data-aos={isScrolled ? "1979-to-up" : ""}
          data-aos-dalay="140"
          data-aos-duration="1000">
          Columbia Tools는 밴쿠버 섬 컬럼비아 비치 출신의 Bernie St. James에 의해<br/>
          1979년 설립되었습니다. 종종 자동 테이핑 도구를 대여했던 Bernie는<br/>
          자동 테이핑 도구를 제조하는 회사의 초기 투자자로 시작해<br/>
          마침내 자신이 직접 테스트하고 사용한 맞춤형 도구를 판매하게 되었습니다.
        </div>
        <Image src="/about/1979-main.png"   fill alt="1979" />
      </div>
    }
    <div className={isScrolled1000
      ? `w-full h-screen relative bg-black` : `w-full h-screen fixed bg-black`} >
    </div>
    <div className={isScrolled1000 ? "" : "w-full h-screen bg-black"}>
      
    </div>
    <div className="w-full h-[842px] bg-white flex justify-center items-center">
      <div className="w-[1280px] flex justify-between">
        <Image src="/about/about1.png" width={542} height={542} alt="image1"/>
        <div className="text-left">
          <h3 className="text-[48px] font-bold mb-[16px]">업계 최고 보증</h3>
          <p className="text-[24px] font-medium mb-[44px] pl-[10px]">5년 보증</p>
          <div className="text-[20px] leading-[30px] pl-[10px]">
            Columbia Tools는 5년의 제품 보증을 제공합니다.<br/>
            당사는 건식벽 공구 제조업체 중 최초로 5년 제품 보증을 도입했습니다.<br/>
            Columbia Tools는 제품에 문제가 발생했을 때<br/>
            긴 보증 기간을 통해 최선을 다해 지원할 것입니다.
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-[842px] bg-white flex justify-end items-center overflow-x-hidden">
      <div className="flex">
        <div className="text-right">
          <h3 className="text-[48px] font-bold mb-[16px]">북미 생산</h3>
          <p className="text-[24px] font-medium mb-[44px]">최상의 품질</p>
          <div className="text-[20px] leading-[30px]">
          Columbia Tools는 제품의 내구성과 품질을 보장하기 위해<br/>
          당사만의 제품을 만드는 것이 중요하다고 믿습니다.<br/>
          그래서 당사의 모든 제품은 최상의 품질을 자랑하는 북미산 철강,<br/>
          고무, 플라스틱 및 알루미늄을 사용하여 북미에서 제조해<br/>
          오래도록 사용할 수 있습니다.
          </div>
        </div>
        <Image src="/about/about2.png" width={1052} height={590} alt="image2" className="translate-x-[102px]"/>
      </div>
    </div>
    <div className="w-full h-[842px] bg-white flex justify-start items-center">
      <div className="flex">
        <Image src="/about/about3.png" width={1046} height={654} alt="image3" className=" translate-x-[-184px]"/>
        <div className="text-left translate-x-[-80px]">
          <h3 className="text-[48px] font-bold mb-[16px]">고객과의 소통</h3>
          <p className="text-[24px] font-medium mb-[44px]">Instagram, Facebook, Tik Tok, YouTube</p>
          <div className="text-[20px] leading-[30px]">
          고객과 직접 소통하는 것은 Columbia Tools의 최우선 과제 중 하나입니다.<br/>
          Instagram, Facebook, Tik Tok, YouTube에서<br/>
          당사의 제품을 만나고, 저희와 채팅하실 수 있습니다.<br/>
          여러 소셜 미디어를 통해 Columbia Tools를 만나보세요 !
          </div>
          <div className="w-[360px] flex justify-between pt-[82px]">
            <Image src="/about/Facebook_logo.svg" width={60} height={60} alt="facebook"/>
            <Image src="/about/Instagram_logo.svg" width={60} height={60} alt="instagram"/>
            <Image src="/about/TikTok_logo.svg" width={60} height={60} alt="tiktok"/>
            <Image src="/about/Youtube_logo.svg" width={60} height={60} alt="youtube"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

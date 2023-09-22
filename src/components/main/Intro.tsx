import { AiOutlineSwapRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Intro () {
  return(
    <div className="w-full h-screen bg-white">
    <div className="w-[1280px] h-full mx-auto relative">
      <div className="absolute top-[120px]">
        <p className="text-5xl">OUR<br/>
        DURABILITY AND<br/>
        QUAILTY<br/>
          <span className="text-lg">
            COLUMBIA TOOLS의 높은 내구성과 품질을 경험해보세요.
          </span>
        </p>
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src="/main/main-use1.png" width={650} height={500} alt="use1"/>
      </div>
      <div className="absolute top-[120px] right-0">
        <Image src="/main/main-use2.png" width={542} height={744} alt="use2"/>
      </div>
      <Link href={'/product'} className="absolute bottom-0 right-[34px] flex">
        <p className="text-lg">전체 상품 보기</p>
        <AiOutlineSwapRight className="w-8 h-8 absolute right-[-34px] bottom-[-5px]"/>
      </Link>
    </div>
  </div>
  )
}
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSwapRight } from "react-icons/ai";

export default function Education () {
  return(
    <div className="w-full h-[613px] bg-white relative">
      <div className="absolute bg-gradient-to-l from-white w-full h-full z-[1]">
        <div className="w-[1280px] h-full mx-auto flex justify-end items-center">
          <div >
            <Image src="/main/main-education.png" width={522} height={613} alt="education"/>
          </div>
          <div className="absolute">
            <p className="text-5xl mb-7 font-normal">OFFLINE EDUCATION</p>
            <p className="text-xl mb-9 font-medium">콜롬비아의 고성능 제품을 100% 활용하고 싶으신가요?<br/>
            오프라인 교육을 신청하고 전문가에게 제품 사용법과 팁을 배워보세요.
            </p>
            <Link href="/">
              <p className="text-xl font-medium flex">오프라인 교육 예약하기
                <AiOutlineSwapRight className="w-8 h-8"/>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
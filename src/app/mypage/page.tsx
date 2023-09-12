import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

export default function MyPage() {
  return (
    <div className="flex gap-[calc(100%-886px)]">
      <div className="w-[443px] h-28">
        <h2 className="text-[22px] font-semibold">오프라인 교육</h2>
        <Link
          href="#"
          className="flex justify-between items-center mt-10 pb-2 border-[#d9d9d9] border-b-2 font-medium hover:underline"
        >
          <p>예약 확인 / 변경 / 취소</p>
          <BsChevronRight className="text-[#d9d9d9]" strokeWidth="2px" />
        </Link>
      </div>
      <div className="w-[443px] h-28">
        <h2 className="text-[22px] font-semibold">회원정보</h2>
        <Link
          href="/mypage/edit"
          className="flex justify-between items-center mt-10 pb-2 border-[#d9d9d9] border-b-2 font-medium hover:underline"
        >
          <p>회원정보 수정 / 회원 탈퇴</p>
          <BsChevronRight className="text-[#d9d9d9]" strokeWidth="2px" />
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-y-10 w-44">
      <div className="mb-3">
        <Link href="/bucket" className="font-bold">
          장바구니
        </Link>
      </div>
      <div className="mb-3">
        <h3 className="font-bold">주문관리</h3>
        <Link href="/mypage/orders" className="text-sm hover:underline">
          주문 / 배송 조회
        </Link>
      </div>
      <div className="mb-3 flex flex-col">
        <h3 className="font-bold">오프라인 교육(준비중)</h3>
        <Link href="" className="text-sm hover:underline">
          예약 확인 / 취소
        </Link>
      </div>
      <div className="mb-3">
        <h3 className="font-bold">회원정보</h3>
        <Link href="/mypage/edit" className="text-sm hover:underline">
          회원정보 수정 / 회원 탈퇴
        </Link>
      </div>
    </div>
  );
}

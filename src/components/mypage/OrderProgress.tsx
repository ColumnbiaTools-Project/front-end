import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

export default function OrderProgress() {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-4 items-end">
          <h3 className="mb- font-semibold text-[22px]">주문 / 배송 조회</h3>
          <Link
            href="/mypage/orders"
            className="mb-1 text-[#888888] text-sm flex items-center hover:underline"
          >
            <p>더보기</p> <BsChevronRight className="ml-1" />
          </Link>
        </div>
        <div className="w-full h-[120px] bg-[#f1f1f5]"></div>
      </div>
    </div>
  );
}

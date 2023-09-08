import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { getOrders } from "@/services/firebase/orders";
import { Order } from "@/types/orders";

const orderProgress = [
  "주문접수", //2
  "결제완료", // 1
  "상품준비중", // 1
  "배송중", // 1
  "배송완료", // 1
];

export default async function OrderProgress() {
  const orders = (await getOrders("1234test")) as Order[];

  if (!orders) return console.log("주문이 없습니다.");

  const statusCount: Record<string, number> = {};
  for (const status of orderProgress) {
    // 일치하는 상태를 가진 order를 세기 위해 filter 함수 설정
    if (!statusCount[status]) statusCount[status] = 0;

    const count: number = orders.filter(
      (order: Order) => order.status === status,
    ).length;

    statusCount[status] = count;
  }

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
        <div className="w-full h-[120px] bg-[#f1f1f5] flex justify-around items-center">
          {orderProgress.map(status => (
            <div
              key={status}
              className="flex flex-col justify-center items-center relative font-medium text-lg"
            >
              <p className="mb-2.5">{status}</p>
              <p>{statusCount[status]}</p>
              {status !== "배송완료" && (
                <BsChevronRight className="absolute -right-[68px] text-[#888888]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

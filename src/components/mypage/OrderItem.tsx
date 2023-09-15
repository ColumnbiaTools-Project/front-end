import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import ImageContainer from "@/components/mypage/ImageContainer";

interface OrderItemProps {
  order: Order;
}

export default function OrderItem({ order }: OrderItemProps) {
  return (
    <div className="w-full border-b-2 border-[#EEE] mb-10">
      <div className="flex w-full justify-between border-b-2 border-[#323232] pb-3">
        <h3 className="text-[22px]">
          {order.createdAt.split("T")[0].replaceAll("-", ".")}
        </h3>
        <Link
          href={`/mypage/orders/${order.orderId}`}
          className="flex items-center text-[#888888] text-sm hover:underline"
        >
          <p>주문상세</p> <BsChevronRight />
        </Link>
      </div>
      <div className="h-[170px] py-[10px] flex items-center justify-between">
        <div className="flex justify-center items-center gap-16">
          <ImageContainer image={order.image} />
          <div className="flex flex-col justify-start items-start">
            <p className="text-xl font-medium text-black mb-2">{order.title}</p>
            <p className="text-xl font-medium text-[#888888]">{`${
              order.quantity
            }개 / ${order.price.toLocaleString()}won`}</p>
          </div>
        </div>
        <div>{order.status}</div>
        <div>
          <button className="btn">배송조회</button>
        </div>
      </div>
    </div>
  );
}

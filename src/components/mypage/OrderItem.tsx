import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import ImageContainer from "@/components/mypage/ImageContainer";

interface OrderItemProps {
  order: Order;
}

export default function OrderItem({ order }: OrderItemProps) {
  return (
    <div className="w-full border-b-2 border-[#EEE] mb-10">
      <div className="flex w-full justify-between border-b-2 border-whitegray pb-3">
        <h3>{order.createdAt.split("T")[0].replaceAll("-", ".")}</h3>
        <Link
          href={`/mypage/orders/${order.orderId}`}
          className="flex items-center text-darkgray text-md hover:underline"
        >
          <p>주문상세</p> <BsChevronRight />
        </Link>
      </div>
      <div className="h-[170px] py-[10px] flex items-center justify-between">
        <div className="flex justify-center items-center gap-16 w-1/3">
          <ImageContainer image={order.images} size={150} />
          <div className="flex flex-col justify-start items-start">
            <p className="font-normal text-black mb-2">{order.title}</p>
            <p className="font-normal text-darkgray whitespace-nowrap">{`${
              order.quantity
            }개 / ${order.price.toLocaleString()}won`}</p>
          </div>
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <div className="flex justify-center items-center w-1/2 text-darkgray">
            {order.status}
          </div>
        </div>
        <div className="w-1/3 flex justify-end items-center">
          {order.status === "배송중" && (
            <a
              className="btn_tiny"
              href={"#"}
              // href={`https://tracker.delivery/#/${order.deliveryCompany}/${order.deliveryNumber}`}
              target="_blank"
            >
              배송조회(준비중)
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

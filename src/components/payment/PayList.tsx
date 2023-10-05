import Image from "next/image";
import { usePaymentContext } from "@/context/PaymentContext";
import { DELIVERYMONEY } from "@/Constants/Constant";

type Props = {
  filter: CartProduct[] | undefined;
}

export default function PayList({ filter }: Props) {
  const orderContext = usePaymentContext();
  return (
    <section>
      {filter && filter.map((item) => (
        <ul className={"flex justify-between items-center h-[250px]"}>
          <div className={"flex w-[40%] items-center justify-between"}>
            <div>
              <Image
                src={item.image} width={124} height={60} alt={item.title} />
            </div>
            <div className={"flex flex-col gap-5"}>
              <li className={"text-[20px] font-medium"}>{item.title}</li>
              <li className={"text-[18px] font-medium text-darkgray"}>수량 : {item.quantity} 개</li>
            </div>
          </div>
          <div className={"flex flex-col items-end gap-5"}>
            <div>
              <li className={"text-[26px] font-weight-500"}>{item.price.toLocaleString("kr-KR")} 원</li>
            </div>
            <div>
              <span className={"text-[18px] text-darkgray"}>{DELIVERYMONEY === 0 ? "무료배송" : DELIVERYMONEY}</span>
            </div>
          </div>
        </ul>
      ))}
      <div className={"divider"} />
      <div className={"flex justify-end items-center mt-[100px] "}>
        <div className={"border border-1 w-[445px] h-[104px] flex justify-center items-center bg-mainGray"}>
          <div className={"w-[80%] flex justify-between items-center>"}>
            <p className={'text-[26px] font-medium leading-normal'}>합계: </p>
            <p className={'text-[30px] font-seibold leading-normal'}>{orderContext?.totalPrice?.toLocaleString('kr-KR')} 원</p>
          </div>
        </div>
      </div>
    </section>
  );
}

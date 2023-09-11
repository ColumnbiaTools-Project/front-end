import Image from "next/image";
import Delivery from "@/components/payment/Delivery";

type Props ={
  filter : CartProduct[] | undefined,
}

export default function PaymentItem({filter}: Props) {
  return (
    <>
      {
        filter?.map((item,index)=>{
          return (
            <ul className={'flex justify-between items-center'}>
              <div className={'flex items-center gap-4'}>
                <Image src={item.image} alt={item.title} width={200} height={150} />
                <div className={'flex flex-col'}>
                  <li key={index}>{item.title}</li>
                  <li>{item.quantity}</li>
                </div>
              </div>
              <div className={'mr-[381px]'}>
                <li className={'text-[26px] font-weight-500'}>{item.price.toLocaleString()}</li>
                <Delivery />
              </div>
            </ul>
          )
        })
      }
    </>
  )
}
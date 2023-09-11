import Image from "next/image";
import { ChangeEvent } from "react";

type Props = {
  cartList?: CartProduct[],
  handleCheck?: (e:ChangeEvent<HTMLInputElement>) => void,
}

export default function CartItem({cartList , handleCheck} : Props) {
  return (
    <>
      <div>
        {cartList?.map((item: CartProduct, index: number) => (
          <ul className={"flex justify-center items-center "} key={index}>
            <input
              name={item.id}
              onChange={handleCheck}
              type="checkbox"
              checked={item.checked}
            />
            <Image
              src={item.image}
              width={150}
              height={100}
              alt={item.title}
              className={"ml-5"}
            />
            <li>{item.title}</li>
            <li>{item.price}</li>
            <li>{item.color}</li>
            <li>{item.id}</li>
          </ul>
        ))}
      </div>
    </>
  )
}

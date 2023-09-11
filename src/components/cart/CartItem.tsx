import Image from "next/image";
import { ChangeEvent, } from "react";

type Props = {
  cartList?: CartProduct[],
  handleCheck?: (e:ChangeEvent<HTMLInputElement>) => void,
  handleDelete?: (id:string) => void
}

export default function CartItem({cartList , handleCheck, handleDelete} : Props) {
  return (
    <>
      <div>
        {cartList?.map((item: CartProduct, index: number) => (
          <ul className={"flex justify-center items-center gap-2 "} key={index}>
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
            <li>{item.price.toLocaleString()}</li>
            <li>{item.color}</li>
            <li>{item.id}</li>
            <li>{item.quantity}</li>
            <li>
              <button onClick={() =>handleDelete && handleDelete(item.id)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}

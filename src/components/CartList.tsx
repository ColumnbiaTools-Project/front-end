"use client";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  cartData: CartProduct[]
}

/*2.cartList 에서 주문 리스트를 뿌려준다 - cartList
3.체크 박스 체크 표시가 된 물건을 계산한다. - cartList
4.전체 체크시 전체 물건이 결재 진행된다. - cartList
5.계산된 물건은 판매리스트 db에 날짜 기준으로 업데이트 - cartList / serverPage*/


export default function CartList({ cartData }: Props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [checked, setChecked] = useState(false);

  // useEffect(() => {})
  // 처음 로딩시에는 서버에서 값을 가져온다.
  // 체크 박스 체크시 값을 다시 가져 온다.
  // 그리고 값을 누적하여 보여준다.


  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const { name, value,checked} = event.target;
    console.log(name, checked);
    if (name === "all" && checked) {
      setTotalPrice(cartData.reduce((acc, cur) => acc + cur.price, 0));
    }
    if (!checked){
      setTotalPrice(0)
    }
  }


  return (
    <>
      <div className={"flex"}>
        <input
          onChange={handleCheck}
          name="all"
          className="w-[24px] mr-3"
          type="checkbox"
        />
        <p className={"text-[24px] text-DEFAULT"}>전체 선택</p>
      </div>
      <div>
        {cartData && cartData.map((item, index) => (
          <ul className={"flex justify-center items-center "} key={index}>
            <input
              name={'check'}
              onChange={handleCheck}
              type="checkbox" />
            <Image
              src={item.image}
              width={150} height={100}
              alt={item.title}
              className={"ml-5"}
            />
            <li>{item.title}</li>
            <li>{item.price}</li>
            <li>{item.color}</li>
            <li>{item.id}</li>
          </ul>
        ))}
        <div>
          <p>합계 금액 :</p>
          <p>{totalPrice.toLocaleString()} 원</p>
        </div>
      </div>
    </>
  );
}

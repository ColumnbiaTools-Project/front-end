'use client'
import { ChangeEvent, ChangeEventHandler } from "react";

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>
}
export default function OrderPerson( {handleChange}: Props) {

  return (
    <section className={'flex justify-center item-center'}>
      <div className={'mr-4'}>
        <h1>주문자 정보</h1>
      </div>
      <div className={'flex flex-col mb-4'}>
          <label htmlFor="orderName">주문자명</label>
          <input
            onChange={handleChange}
            className={'w-[300px] border border-1px border-black'}
            type="text" id="orderName" />
          <label htmlFor="orderCellPhone">핸드폰 번호</label>
          <input
            onChange={handleChange}
            className={'w-[300px] border border-1px border-black'}
            type="text" id="orderCellPhone" />
          <label htmlFor="orderEmail">이메일</label>
          <input
            onChange={handleChange}
            className={'w-[300px] border border-1px border-black'}
            type="text" id="orderEmail" />
      </div>
    </section>
  )
}

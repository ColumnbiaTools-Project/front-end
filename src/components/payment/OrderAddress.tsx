import { ChangeEventHandler } from "react";

type Props ={
  handleChange: ChangeEventHandler<HTMLInputElement>
}
export default function OrderAddress({handleChange} : Props) {

  return (
    <section className={'flex justify-center item-center mb-4'}>
      <div className={'mr-4'}>
        <p>배송지 정보</p>
      </div>
      <div className={'flex flex-col'}>
        <label htmlFor="deliveryName">받는 사람</label>
        <input
          onChange={handleChange}
          className={'border border-1px border-black'}
          type="text" id="deliveryName" />
        <label htmlFor="postNuember">우편번호</label>
        <input
          onChange={handleChange}
          className={'border border-1px border-black'}
          type="text" id="postNuember" />
        <label htmlFor="address">주소</label>
        <input
          onChange={handleChange}
          className={'border border-1px border-black'}
          type="text" id="address" />
        <label htmlFor="detailaddress">상세주소</label>
        <input
          onChange={handleChange}
          className={'border border-1px border-black'}
          type="text" id="detailaddress" />
        <label htmlFor="phone">연락처</label>
        <input
          onChange={handleChange}
          className={'border border-1px border-black'}
          type="text" id="phone" />
        <label htmlFor="message">배송요청사항</label>
        <input
          onChange={handleChange}
          className={'border border-1px border-black'}
          type="text" id="message" />
      </div>
    </section>
  )
}

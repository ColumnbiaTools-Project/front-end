"use client";
import { ChangeEvent, ChangeEventHandler, useContext, useState } from "react";

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const LABELSTYLE = "mt-[50px] mb-[22px] text-[20px] text-darkgray";
const INPUTSTYLE = "w-full text-[20px] px-2 border-b-2 border-black";


export default function OrderPerson({ handleChange }: Props) {
  const [data, setData] = useState("");
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
      setData(e.target.value);
  };
  const handleFocus = () => {
    console.log('focus');
  }

  return (
    <section className={"flex justify-between items-start mt-[40px]"}>
      <div>
        <span className={"text-[24px] font-bold"}>주문자 정보</span>
      </div>
      <div className={"w-[50%] flex flex-col mb-4"}>
        <label htmlFor="orderName" className={LABELSTYLE}>주문자명</label>
        <input
          name={"orderName"}
          onChange={handleChange}
          className={INPUTSTYLE}
          type="text" id="orderName" />

        <label htmlFor="orderCellPhone" className={LABELSTYLE}>핸드폰 번호</label>
        <input
          name={"orderCellPhone"}
          onChange={handleChange}
          className={INPUTSTYLE}
          type="text" id="orderCellPhone" />

        <div className={" flex flex-col"}>
          <label htmlFor="orderEmail" className={LABELSTYLE}>이메일</label>
          <div>
            <input
              name={"orderEmail"}
              onChange={handleChange}
              className={"w-[30%] text-[20px] px-2 border-b-2 border-black"}
              type="text" id="orderEmail" />
            <span className={"text-[20px] ml-[5%]  font-bold"}>@</span>
            <input
              name={"orderEmail2"}
              onChange={handleChange}
              className={"w-[30%] text-[20px] mr-[5%] px-2 border-b-2 border-black"}
              type="text" id="orderEmail"
              value={data}
            />
            <select
              name="selectEmail"
              onChange={handleSelect}
              className="w-[20%] text-[20px] px-2 border-b-2 border-black"
              id="selectEmail"
            >
              <option value={'직접입력'}>직접 입력</option>
              <option value="naver.com">네이버</option>
              <option value="daum.net">다음</option>
              <option value="google.com">구글</option>
              <option value="nate.com">네이트</option>
              <option value="hotmail.com">핫메일</option>
              <option value="hanmail.net">한메일</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
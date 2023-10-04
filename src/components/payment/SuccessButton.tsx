"use client";
import Link from "next/link";
import useCart from "@/Hooks/useCart";

export default function SuccessButton() {
  const { cartQuery: { data: cart }, removeItem } = useCart();
  const filter = cart && cart.filter((item) => item.checked);

  function handleClick() {
    filter?.map(item =>{
      removeItem.mutate(item.id)
    })
  }

  return (
    <div  className={'flex justify-center items-center my-[30px]'} >
      <Link href={"/"}>
        <button
          onClick={handleClick}
          className={'w-[444px] py-[13px] px-[36px] bg-black text-white text-[20px]'}
          >
          결재 확인
          </button>
      </Link>
    </div>
  );
}

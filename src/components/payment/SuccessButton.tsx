"use client";
import Link from "next/link";
import useCart from "@/Hooks/useCart";
import { useEffect } from "react";
import useProduct from "@/Hooks/useProduct";
import Button from "@/components/ui/Button";

export default function SuccessButton() {
  const { cartQuery: { data: cart }, removeItem } = useCart();
  const filter = cart && cart.filter((item) => item.checked);
  filter?.map(item =>{
    removeItem.mutate(item.id)
  })

  return (
    <div  className={'flex justify-center items-center my-[30px]'} >
      <Link href={"/"}>
        <Button text={'결재 확인'} type={'big'} />
      </Link>
    </div>
  );
}

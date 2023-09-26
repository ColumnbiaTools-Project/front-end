"use client";
import Link from "next/link";
import useCart from "@/Hooks/useCart";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function SuccessButton() {
  const { cartQuery: { data: cart }, removeItem } = useCart();
  const filter = cart && cart.filter((item) => item.checked);
  // const router = useRouter();

  /*useEffect(() => {
    filter?.map(item =>{
      removeItem.mutate(item.id)
    })
  },[])*/

  function handleClick() {
    // router.push("/");
  }


  return (
    <>
      <Link href={"/"}>
        <button
          onClick={handleClick}
        >결재 확인
        </button>
      </Link>
    </>
  );
}

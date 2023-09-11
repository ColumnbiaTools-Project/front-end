'use client'
import Link from "next/link";

export default function SetOrder() {
  return(
    <>
    <Link href={'/cart/cartorder'}>
      <button
        className={'btn btn-primary block mx-auto'}
      >주문하기</button>
    </Link>
    </>
  )
}

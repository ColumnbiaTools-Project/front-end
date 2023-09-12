'use client'
import Link from "next/link";

export default function SetOrder({checked} :{checked : boolean}) {
  return(
    <div className={'mb-4 block'}>
        <Link href={'/cart/payments'}>
          <button
            className={`btn btn-primary ${checked ? 'flex' : 'hidden'}`}
          >주문하기</button>
        </Link>
    </div>
  )
}

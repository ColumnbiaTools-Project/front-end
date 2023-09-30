"use client";

import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartModal() {
  const router = useRouter();

  const continueShoppingHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };
  const checkCartHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/cart");
  };
  return (
    <dialog id="cart-modal" className="modal">
      <div className="modal-box  w-[520px] h-64 rounded-none flex justify-center items-center">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="w-6 h-6 btn-ghost absolute right-6 top-6">
            <Image src="/X.svg" alt="X" width={24} height={24} />
          </button>
        </form>
        <div className="flex flex-col justify-center items-center">
          <h3 className="mb-12 text-xl text-black">
            장바구니에 추가되었습니다.
          </h3>
          <div className="flex justify-center items-center gap-3">
            <button
              className="btn_small_unfill"
              onClick={continueShoppingHandler}
            >
              쇼핑 계속하기
            </button>
            <button className="btn_small_fill" onClick={checkCartHandler}>
              장바구니 확인
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>X</button>
      </form>
    </dialog>
  );
}

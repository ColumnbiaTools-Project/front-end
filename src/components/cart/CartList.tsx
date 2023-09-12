"use client";
import { ChangeEvent, useEffect, useState } from "react";
import CartItem from "@/components/cart/CartItem";
import CartTotalPayment from "@/components/cart/CartTotalPayment";
import { uid } from "@/Constants/Constant";
import useCart from "@/Hooks/useCart";
import getQueryClient from "@/app/getQueryClient";
import SetOrder from "@/components/cart/SetOrder";

export default function CartList() {
  const [checked, setChecked] = useState<boolean>(false);
  const queryClient = getQueryClient();
  const { cartQuery: { data: cart } } = useCart();
  const { addOrUpdateItem, removeItem } = useCart();

  const hasProducts = cart && cart.length > 0;
  let filter = cart && cart.filter(item => item.checked);
  let totalPrice = filter && filter.reduce((prev, current) =>
    prev + current.price * current.quantity, 0);


  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    //전체 선택시
    if (name === "all") {
      cart && cart.forEach((item) => {
        addOrUpdateItem.mutate({ ...item, checked: checked }
          , {
            onSuccess: () => {
              queryClient.refetchQueries(["cart", uid]);
            }
          });
        setChecked(checked);
      });
    } else if(!checked) { setChecked(false);}

    // 각각 선택시
    const selectedItem
      = cart?.find((item) => item.id === name);
    if (selectedItem) {
      selectedItem.checked = checked;
      setChecked(checked);
      addOrUpdateItem.mutate(selectedItem);
    }
  }

  function handleDelete(id: string) {
    removeItem.mutate(id, {
      onSuccess: () => {
        queryClient.refetchQueries(["cart", uid]);
        alert("삭제 되었습니다.");
      },
      onError: () => {
        console.log("삭제가 실패하였습니다. 관리자에게 문의 하세요");
      }
    });
  }

  return (
    <>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {
        hasProducts && (
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
            <CartItem cartList={cart} handleCheck={handleCheck} handleDelete={handleDelete} />
            <CartTotalPayment totalPrice={totalPrice} />
            <SetOrder checked={checked} />
          </>
        )
      }
    </>
  );
}

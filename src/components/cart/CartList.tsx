'use client'
import { ChangeEvent } from "react";
import { useCart } from "@/Hooks/useCart";
import CartItem from "@/components/cart/CartItem";
import CartTotalPayment from "@/components/cart/CartTotalPayment";
import { useQueryClient } from "@tanstack/react-query";

export default function CartList() {
  const queryClient = useQueryClient();
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
      const filter: CartProduct[] | undefined
        = cart && cart.map((item) => ({ ...item, checked: checked }));
      filter && filter.forEach((item) => {
        addOrUpdateItem.mutate(item,{
          onSuccess: () => {
            queryClient.refetchQueries(["cart"]);
          }
        })
      })
    }
    // 각각 선택시
    const selectedItem
      = cart?.find((item) => item.id === name);
    if (selectedItem) {
      selectedItem.checked = checked;
      addOrUpdateItem.mutate(selectedItem);
    }
  }


  function handleDelete(id: string) {
    removeItem.mutate(id,{
      onSuccess: () => {
        queryClient.refetchQueries(['cart'])
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
          </>
        )
      }
    </>
  );
}

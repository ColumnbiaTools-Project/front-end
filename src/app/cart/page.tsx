"use client";
import CartList from "@/components/cart/CartList";
import SetOrder from "@/components/cart/SetOrder";
import useCart from "@/Hooks/useCart";
import { usePaymentContext } from "@/context/PaymentContext";
import { useEffect } from "react";
import { addOrUpdateToCart } from "@/services/firebase/cart";
import { uid } from "@/Constants/Constant";
import getQueryClient from "@/app/getQueryClient";
import AddCart from "@/components/cart/AddCart";

export default function CartPage() {
  const { cartQuery: { data: cart } } = useCart();
  const queryClient = getQueryClient();
  const { addOrUpdateItem } = useCart();
  const hasProducts = cart && cart.length > 0;
  const paymentContext = usePaymentContext();
  const filter = cart && cart.filter(item => item.checked);

  /*useEffect(() => {
    paymentContext?.setTotalPrice(0);
    paymentContext?.setProductId([]);
    filter && filter.forEach((item) => {
      addOrUpdateItem.mutate({ ...item, checked: false }, {
        onSuccess: () => {
          queryClient.invalidateQueries(["cart", uid]);
          paymentContext?.setTotalPrice(0);
          paymentContext?.setProductId([]);
        }
      });
    });
  }, []);*/


  return (
    <section
      className={"container w-[1280px] border border-1px mx-auto border-gray-200 flex flex-col justify-center items-start"}>
      <h1 className={"text-[40px] "}>장바구니</h1>
      <AddCart />
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {
        hasProducts && (
          <>
            <CartList />
            <SetOrder />
          </>
        )
      }
    </section>
  );
}

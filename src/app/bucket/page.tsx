"use client";
import useCart from "@/Hooks/useCart";
import CartItems from "@/components/bucket/cartItems";
import AllCartDelete from "@/components/bucket/AllcartDelete";
import AllChoice from "@/components/bucket/AllChoice";
import TotalPrice from "@/components/bucket/TotalPrice";
import Link from "next/link";
import AddCart from "@/components/cart/AddCart";

export default function Page() {
  const {
    cartQuery: { data: cart },
  } = useCart();
  const hasProducts = cart && cart.length > 0;

  const handleClick = () => {
    console.log("주문하자");
  };
  return (
    <>
      {!hasProducts && (
        <span className={"h-[300px] flex justify-start items-end"}>
          장바구니에 상품이 없습니다.
        </span>
      )}
      {/*<AddCart />*/}
      {hasProducts && (
        <section className={"container w-[1280px] mx-auto "}>
          <h1
            className={
              "text-[40px] font-bold h-[210px] flex justify-start items-end"
            }
          >
            장바구니
          </h1>

          <div className={"mt-[45px]"}>
            <AllChoice cart={cart} />
            <div className={"divider mt-[30px]"} />
            {cart && cart.map(item => <CartItems item={item} key={item.id} />)}
            <AllCartDelete cart={cart} />
          </div>
          <div className={"divider mt-[160px]"} />
          <TotalPrice />
          <div className={"mt-[167px]"}>
            <Link href={"/cart/payments"}>
              <button
                onClick={handleClick}
                className={
                  "block mx-auto mb-[200px] w-[444px] p-[23px] bg-black text-white text-[20px]"
                }
              >
                주문하기
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

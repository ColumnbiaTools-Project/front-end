import { ChangeEvent, useState } from "react";
import { useCart } from "@/Hooks/useCart";
import CartItem from "@/components/CartItem";
import CartTotalPayment from "@/components/CartTotalPayment";
// import { uid } from "@/constants/constant";

export default function CartList() {
  const { cartQuery: { data: cart } } = useCart();
  // const [allChecked, setAllChecked] = useState<CartProduct | undefined>();
  const { addOrUpdateItem, removeItem } = useCart();

  console.log(cart);
  const hasProducts = cart && cart.length > 0;
  let filter = cart && cart.filter(item => item.checked);
  let totalPrice = filter && filter.reduce((prev, current) =>
    prev + current.price * current.quantity, 0);

  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    console.log(name, checked);
    if (name === "all") {
      const filter: CartProduct[] | undefined = cart && cart.map((item) => ({ ...item, checked: checked }));
      filter && filter.forEach((item) => {
        addOrUpdateItem.mutate(item)
      })
      console.log(filter);
      // totalPrice = filter && filter.reduce((prev:number, current) => prev + current.price * current.quantity, 0);
    }
    const selectedItem = cart?.find((item) => item.id === name);
    if (selectedItem) {
      selectedItem.checked = checked;
      addOrUpdateItem.mutate(selectedItem);
    }
  }

  function handleDelete(id: string) {
    console.log("지우개");
    removeItem.mutate(id);
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
            <p>{totalPrice}</p>
            <CartItem cartList={cart} handleCheck={handleCheck} handleDelete={handleDelete} />
            <CartTotalPayment totalPrice={totalPrice} />
          </>
        )
      }
    </>
  );
}

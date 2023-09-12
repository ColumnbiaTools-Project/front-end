import CartList from "@/components/cart/CartList";
import AddCart from "@/components/cart/AddCart";
import SetOrder from "@/components/cart/SetOrder";

export default function CartPage() {
  return (
        <section>
            <h1 className={'text-[40px] '}>장바구니</h1>
            {/*<AddCart /> - mock data 입력*/}
            <CartList />
            <SetOrder />
        </section>
    )
}

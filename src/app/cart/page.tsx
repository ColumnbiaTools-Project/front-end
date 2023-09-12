import CartList from "@/components/cart/CartList";
import AddCart from "@/components/cart/AddCart";
import SetOrder from "@/components/cart/SetOrder";

export default async function CartPage() {

  return (
        <section className={'container w-[1020px] border border-1px mx-auto border-gray-200 flex flex-col justify-center items-start'}>
            <h1 className={'text-[40px] '}>장바구니</h1>
            {/*<AddCart /> - mock data 입력*/}
            <CartList />
        </section>
    )
}

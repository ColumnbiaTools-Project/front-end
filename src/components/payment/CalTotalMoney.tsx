
import { usePaymentContext } from "@/context/PaymentContext";
import useCart from "@/Hooks/useCart";


export default function CalTotalMoney() {
  const { cartQuery: { data: cart } } = useCart();
  const payContext = usePaymentContext();

  let filter = cart && cart.filter(item => item.checked);
  let totalPrice:number | undefined = filter && filter.reduce((prev, current) =>
    prev + current.price * current.quantity, 0);
  totalPrice && payContext && payContext.setTotalPrice(totalPrice);

  return (
    <div className={"flex justify-end items-center mr-[381px] p-4"}>
      <p>Total: </p>
      <p>{totalPrice?.toLocaleString()}</p>
    </div>
  );
}


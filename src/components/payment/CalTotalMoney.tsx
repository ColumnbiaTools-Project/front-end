import useCart from "@/Hooks/useCart";
import { usePaymentContext } from "@/context/PaymentContext";


export default function CalTotalMoney() {
  const { cartQuery: { data: cart } } = useCart();
  const paymentContext = usePaymentContext();

  let filter = cart && cart.filter(item => item.checked);
  let totalPrice: number | undefined = filter && filter.reduce((prev, current) =>
    prev + current.price * current.quantity, 0);
  totalPrice && paymentContext?.setTotalPrice(totalPrice);

  return (
    <div className={"flex justify-end items-center mr-[381px] p-4"}>
      <p>Total: </p>
      <p>{totalPrice?.toLocaleString()}</p>
    </div>
  );
}

import { useCart } from "@/Hooks/useCart";

export default function CalTotalMoney() {
  const { cartQuery: { data: cart } } = useCart();
  let filter = cart && cart.filter(item => item.checked);
  let totalPrice = filter && filter.reduce((prev, current) =>
    prev + current.price * current.quantity, 0);

  return (
    <div className={"flex justify-end items-center mr-[381px] p-4"}>
      <p>Total: </p>
      <p>{totalPrice?.toLocaleString()}</p>
    </div>
  );
}


import { useCart } from "@/Hooks/useCart";

type Props = {
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>
}
export default function CalTotalMoney({setTotalPrice} : Props) {
  const { cartQuery: { data: cart } } = useCart();
  let filter = cart && cart.filter(item => item.checked);
  let totalPrice:number | undefined = filter && filter.reduce((prev, current) =>
    prev + current.price * current.quantity, 0);
  totalPrice && setTotalPrice(totalPrice);
  return (
    <div className={"flex justify-end items-center mr-[381px] p-4"}>
      <p>Total: </p>
      <p>{totalPrice?.toLocaleString()}</p>
    </div>
  );
}


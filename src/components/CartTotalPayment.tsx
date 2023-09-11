
type Props ={
  totalPrice? : number;
}
export default function CartTotalPayment({totalPrice} :Props) {
  return (
    <>
          <div>
            {totalPrice}
          </div>
    </>
  );
}

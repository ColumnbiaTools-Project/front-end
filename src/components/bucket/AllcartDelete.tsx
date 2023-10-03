import useCart from "@/Hooks/useCart";

type Props = {
  cart : CartProduct[];
}
export default function AllCartDelete({cart} : Props) {
  const {removeItem} = useCart();
  const handleDelete = () => {
    cart && cart.forEach((item) => {
      removeItem.mutate(item.id);
    })

  }
  return (
    <div>
      <button
        onClick={handleDelete}
        className={"w-[198px] py-[13px] px-[36px] border border-black text-[20px] mt-[24px]"}
      >전체상품삭제
      </button>
    </div>
  );
}

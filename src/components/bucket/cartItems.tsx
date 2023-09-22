"use client";
import Image from "next/image";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { DELIVERYMONEY, uid } from "@/Constants/Constant";
import useCart from "@/Hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { usePaymentContext } from "@/context/PaymentContext";

type Props = {
  item: CartProduct;
}
const ICON_CLASS = "flex transition-all cursor-pointer hover:text-brand hover:scale-200 mx-1 ";

export default function CartItems({ item }: Props) {
  const PriceContext = usePaymentContext();
  const queryClient = useQueryClient();
  const { addOrUpdateItem, removeItem, cartQuery: { data: cart } }
    = useCart();
  const filter = cart?.filter((item) => item.checked);
  const price = filter && filter?.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalPrice = price && price + DELIVERYMONEY;
  totalPrice && PriceContext?.setTotalPrice(totalPrice);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    !checked ? PriceContext?.setTotalPrice(0) : null;
    const selectedItem
      = cart?.find((item) => item.id === name);
    if (selectedItem) {
      selectedItem.checked = checked;
      addOrUpdateItem.mutate(selectedItem, {
        onSuccess: () => {
          queryClient.invalidateQueries(["cart"]);
        }
      });
    }
  };

  const handlePlus = (item: CartProduct) => {
    addOrUpdateItem.mutate({ ...item, quantity: item.quantity + 1 }, {
      onSuccess: () => {
        queryClient.refetchQueries(["cart"]);
      }
    });
  };
  const handleMinus = (item: CartProduct) => {
    if (item.quantity < 2) return;
    addOrUpdateItem.mutate({ ...item, quantity: item.quantity - 1 }, {
      onSuccess: () => {
        queryClient.refetchQueries(["cart"]);
      }
    });
  };

  const handleDelete = (item: CartProduct) => {
    removeItem.mutate(item.id, {
      onSuccess: () => {
        queryClient.refetchQueries(["cart"]);
      }
    });
  };

  return (
    <>
      <div>
        <ul
          className={"flex justify-between items-center"}
          key={item.id}
        >
          <div>
            <input
              onChange={handleChange}
              name={item.id}
              className={"mr-[50px] text-[24px]"}
              type="checkbox" />
          </div>
          <div>
            <Image
              src={item.image} width={124} height={60} alt={item.title} />
          </div>
          <div>
            <span className={"ml-[80px] text-[20px] font-normal"}>{item.title}</span>
          </div>
          <div className={"flex justify-center items-center gap-2 text-[20px]"}>
            <AiFillCaretUp
              className={ICON_CLASS}
              onClick={() => handlePlus(item)}
            />
            <span className={"text-[20px] font-normal"}>{item.quantity}</span>
            <AiFillCaretDown
              className={ICON_CLASS}
              onClick={() => handleMinus(item)}
            />
          </div>
          <div>
            <span className={'text-[20px] opacity-[50%]'}>{DELIVERYMONEY === 0 ? '무료배송': DELIVERYMONEY}</span>
          </div>
          <div>
                    <span
                      className={"text-[20px] font-normal"}
                    >{item.price.toLocaleString()} 원</span>
          </div>
          <div className={"flex flex-col gap-2"}>
            <button
              className={"w-[198px] py-[13px] px-[36px] bg-black text-white text-[20px] "}
              onClick={() => console.log(item)}
            >바로구매
            </button>
            <button
              onClick={() => handleDelete(item)}
              className={"w-[198px] py-[13px] px-[36px] border border-black text-[20px]"}
            >삭 제
            </button>
          </div>
        </ul>
      </div>
      <div className={"divider"} />
    </>
  );
}

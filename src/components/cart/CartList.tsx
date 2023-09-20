"use client";
import { ChangeEvent, useState } from "react";
import { uid } from "@/Constants/Constant";
import useCart from "@/Hooks/useCart";
import getQueryClient from "@/app/getQueryClient";
import { usePaymentContext } from "@/context/PaymentContext";
import Image from "next/image";

export default function CartList() {
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const paymentContext = usePaymentContext();
  const queryClient = getQueryClient();
  const { cartQuery: { data: cart } } = useCart();
  const { addOrUpdateItem, removeItem } = useCart();
  let filter = cart && cart.filter(item => item.checked);
  const price =   filter && filter.reduce((prev, current) =>
    prev + current.price * current.quantity, 0)
  //context totalPrice 입력
  price && paymentContext?.setTotalPrice(price);
  console.log(paymentContext?.productId);



  // 전체 check만 해제한다.
  function unChecked() {
    setAllChecked(false);
    filter && filter.forEach((item) => {
      addOrUpdateItem.mutate({ ...item, checked: false }, {
        onSuccess: () => {
          queryClient.invalidateQueries(["cart", uid]);
          paymentContext?.setTotalPrice(0);
          paymentContext?.setProductId([]);
        }
      });
    });
  }

  // 전체 check만 설정하고 해제한다.
  function allCheckbox(checked: boolean) {
    cart && cart.forEach((item) => {
      addOrUpdateItem.mutate({ ...item, checked: checked }, {
        onSuccess: () => {
          queryClient.invalidateQueries(["cart", uid]);
          paymentContext?.setProductId((prev) => [...prev, item.productId]);
          paymentContext?.setCheck(true);
        }
      });
    });
  }

  function handleCheckBox(e:ChangeEvent<HTMLInputElement>){
    // 전체 체크 박스를 체크한다
    const {checked} = e.target;
    paymentContext?.setCheck(checked);
    console.log(checked);
  }

  // 처리를 하는부분
  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    //전체 선택시
    if (name === "all" && checked) {
      allCheckbox(checked);
      setAllChecked(true);
    } else {
      const selectedItem
        = cart?.find((item) => item.id === name);
      if (selectedItem) {
        selectedItem.checked = checked;
        addOrUpdateItem.mutate(selectedItem, {
          onSuccess: () => {
            queryClient.refetchQueries(["cart", uid]);
            paymentContext?.setProductId((prev) => [...prev, selectedItem.productId]);
          }
        });
      }
    }
  }

  function handleClick() {
    unChecked();
    setAllChecked(false);
  }

  function handleDelete(id: string) {
    removeItem.mutate(id, {
      onSuccess: () => {
        queryClient.refetchQueries(["cart", uid]);
        alert("삭제 되었습니다.");
      },
      onError: () => {
        console.log("삭제가 실패하였습니다. 관리자에게 문의 하세요");
      }
    });
  }


  return (
    <>
      <div className={"flex"}>
        <input
          onChange={handleCheckBox}
          name="all"
          className="w-[24px] mr-3"
          type="checkbox"
          checked={allChecked}
        />
        <p className={"text-[24px] text-DEFAULT"}>전체 선택</p>
      </div>
      <div>
        {cart && cart.map((item: CartProduct, index: number) => (
          <ul className={"flex justify-center items-center gap-2 "} key={index}>
            <input
              name={item.id}
              onChange={handleCheck}
              type="checkbox"
              checked={paymentContext?.check && paymentContext?.check ? paymentContext?.check : item.checked}
            />
            <Image
              src={item.image}
              width={124}
              height={60}
              alt={item.title}
              className={"ml-5"}
            />
            <li>{item.title}</li>
            <li>{item.price.toLocaleString()}</li>
            <li>{item.color}</li>
            <li>{item.id}</li>
            {/*마이너스 버튼*/}
            <li>{item.quantity}</li>
            {/*플러스 버튼*/}
            <li>
              <button onClick={() =>handleDelete && handleDelete(item.id)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>
      <button
        className={"btn btn-accent"}
        onClick={handleClick}
      >전체선택해제
      </button>
    </>
  );
}



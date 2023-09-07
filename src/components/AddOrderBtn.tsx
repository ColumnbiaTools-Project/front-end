"use client";
import { addOrder } from "@/services/firebase/orders";
import { getProduct } from "@/services/firebase/product";
import { stringify } from "querystring";
import { v4 } from "uuid";
import { Product } from "@/types/products";

//!!!!!!테스트용 코드입니다. 나중에 지워주세요!!!!!!

export default function AddOrderBtn() {
  const submitHandler = async (e: any) => {
    e.preventDefault();

    const products = await getProduct().then(res => {
      return res;
    });
    const product: Product | undefined = products.find(product => {
      return product.title === "dummy6";
    });
    if (product) {
      await addOrder(
        {
          ...product,
          quantity: 1,
          orderId: v4(),
          createdAt: new Date().toISOString(),
          status: "주문접수",
        },
        "1234test",
      );
    } else {
      alert("상품이 없습니다.");
    }
  };

  return (
    <button onClick={submitHandler} className="btn">
      주문추가
    </button>
  );
}

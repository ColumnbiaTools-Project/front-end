"use client";
import { getOrderList } from "@/services/paymentApi";
import { useEffect, useState } from "react";
import usePayments from "@/Hooks/usePayments";
import useCart from "@/Hooks/useCart";
import { DELIVERYMONEY } from "@/Constants/Constant";

type Props = {
  orderId: string;
  paymentType: string;
  paymentKey: string;
}


export default function AddPayment({ orderId, paymentType, paymentKey }: Props) {
  const [orderList, setOrderList] = useState<Payment | undefined>();
  const { paymentQuery: { data: payment } } = usePayments();
  const { cartQuery: { data: cart }, removeItem } = useCart();
  // const filter = cart && cart.filter((item) => item.checked)

  //후에 프로덕트 를 가져와서 id 값으로 찾으면 될거 같다,
  // cart 자료는 success page 들어왓을때 checked 가 트루인것은 삭제한다.

  const products = payment?.flatMap(item => item.productId) || [];
  const filters = products.map(data => {
    return cart?.filter(item => item.id === data);
  });

  console.log(payment);



  useEffect(() => {
    function fetchOrderList() {
      getOrderList(orderId).then((res) => {
        setOrderList(res);
      });
    }

    fetchOrderList();
  }, []);

  return (
    <div>
      {
        filters && filters.map((item, index) => (
          <>
            <ul
              className={"flex justify-between items-center"}
              key={index}>
              <div className={"w-[60%] flex justify-start items-center"}>
                <img
                  className={"p-[29px]"}
                  src={item && item[0]?.image} alt={item && item[0]?.title} />
                <div className={"ml-[60px]"}>
                  <p className={"text-[16px] font-normal  "}>{item && item[0]?.title}</p>
                  <p className={"text-[16px] font-normal mt-[6px] text-darkgray"}>{item && item[0]?.quantity} 개
                    / {item && item[0]?.price.toLocaleString("kr-KR")} 원</p>
                </div>
              </div>
              <div className={"w-[40%]"}>
                <div className={"flex justify-between items-center"}>
                  <p className={"text-[16px] font-normal text-darkgray"}>결재완료</p>
                  <button
                    className={"text-[16px] px-[35px] py-[11px] font-normal border border-1 mr-4"}>배송조회
                  </button>
                </div>
              </div>
            </ul>
            <div className={"border border-b-2 border-black mt-[95px]"} />
          </>
        ))
      }
        {/*<div>*/}
        {/*  <div className={"mt-[30px] flex justify-start items-start gap-[122px]"}>*/}
        {/*    <div>*/}
        {/*      <p className={"text-[20px] font-bold"}>배송지 정보</p>*/}
        {/*    </div>*/}
        {/*    <div className={"flex flex-col justify-center items-start"}>*/}
        {/*      <div className={"flex justify-start items-center mb-[10px]"}>*/}
        {/*        <p className={"text-[16px] text-darkgray mr-[30px]"}>주문자명: {payment?.orderAddress.deliveryName}</p>*/}
        {/*        <p className={"text-[16px] text-darkgray"}>주문자 연락처: {item.orderAddress.phone}</p>*/}
        {/*      </div>*/}
        {/*      <div className={"flex justify-start items-center mb-[10px]"}>*/}
        {/*        <p className={"text-[16px] text-darkgray mr-[30px]"}>우편번호: [{item.zipCode}]</p>*/}
        {/*        <p className={"text-[16px] text-darkgray"}>배송 요청*/}
        {/*          주소: {item.address} {item.orderAddress.detailAddress}</p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className={"border border-b-2 border-black mt-[150px]"} />*/}
        {/*  <div className={"flex justify-between items-start mt-[30px]"}>*/}
        {/*    <div className={" flex justify-start items-start gap-[122px]"}>*/}
        {/*      <div>*/}
        {/*        <p className={"text-[20px] font-bold"}>주문 결재 정보</p>*/}
        {/*      </div>*/}
        {/*      <div className={"flex flex-col justify-center items-start"}>*/}
        {/*        <div className={"flex justify-start items-center mb-[10px]"}>*/}
        {/*          <p className={"text-[16px] text-darkgray mr-[30px]"}>{paymentType}</p>*/}
        {/*        </div>*/}
        {/*        <div className={"flex justify-start items-center mb-[10px]"}>*/}
        {/*          <p className={"text-[16px] text-darkgray mr-[30px]"}>{orderList?.requestedAt}</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className={"w-[30%] flex flex-col justify-center items-between"}>*/}
        {/*      <div className={"flex justify-between"}>*/}
        {/*        <p className={"text-[20px] font-bold"}>상품 총 금액</p>*/}
        {/*        <p className={"text-[16px] text-darkgray"}>{item.totalPrice.toLocaleString("kr-KR")} 원</p>*/}
        {/*      </div>*/}
        {/*      <div className={"flex mt-[9px] justify-between"}>*/}
        {/*        <p className={"text-[20px] text-darkgray font-bold"}>배송비</p>*/}
        {/*        <p className={"text-[16px] text-darkgray"}><span*/}
        {/*          className={"text-[16px] text-darkgray"}>{DELIVERYMONEY} 원</span></p>*/}
        {/*      </div>*/}
        {/*      <div className={"flex justify-between items-center mt-[42px]"}>*/}
        {/*        <p className={"text-[20px] font-bold"}>총 결재 금액</p>*/}
        {/*        <p className={"text-[24px] text-gold font-semibold"}>{item.totalPrice.toLocaleString("kr-KR")} 원</p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
    </div>
  );
}

{/*     <p>오더 아이디:{orderList?.orderId}</p>
      <p>결재시 사용된 상품 이름:{orderList?.orderName}</p>
      <p>결재 시간:{orderList?.requestedAt}</p>
      <p>결재 상품 : {productId}</p>
      <p>페이먼트키 : 중요 {paymentKey}</p>
      <p>결재 transactionKey:{orderList?.lastTransactionKey}</p>
      <p>결재 금액 {orderList?.totalAmount.toLocaleString()}</p>*/}
import PayList from "@/components/payment/PayList";
import OrderList from "@/components/payment/OrderList";
import CheckOut from "@/components/payment/CheckOut";

export default function Page() {
  return (
    <>
      <div>
        <p className={"text-[40px] mt-4"}>주문 결재</p>
        <div className={"divider"} />
      </div>
      <PayList />
      <OrderList />
      <div className={'divider'} />
      <CheckOut />
    </>
  );
}

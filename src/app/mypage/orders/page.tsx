import PeriodSelector from "@/components/mypage/PeriodSelector";
import OrderList from "@/components/mypage/OrderList";

export default function OrdersPage() {
  return (
    <>
      <div>
        <div className="flex justify-between mb-[30px]">
          <h2 className="text-xl font-semibold">주문 내용</h2>
          <PeriodSelector />
        </div>
        <OrderList />
      </div>
    </>
  );
}

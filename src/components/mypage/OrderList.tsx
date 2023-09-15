"use client";
import { getOrders } from "@/services/firebase/orders";
import OrderItem from "./OrderItem";
import { usePeriodContext } from "@/context/PeriodContext";
import { useOrders } from "@/hooks/useOrders";
import { useEffect } from "react";

export default function OrderList() {
  const userId = "1234test";
  const periodContext = usePeriodContext();
  if (!periodContext) return null;
  const { startDate, endDate } = periodContext;
  const {
    ordersQuery: { data: orders },
  } = useOrders(userId);

  const filteredOrders: Order[] | undefined = orders?.filter(order => {
    const orderDate = new Date(order.createdAt);
    return startDate <= orderDate && orderDate < endDate;
  });

  return (
    <div>
      {filteredOrders &&
        filteredOrders.map(order => {
          return <OrderItem key={order.orderId} order={order} />;
        })}
    </div>
  );
}

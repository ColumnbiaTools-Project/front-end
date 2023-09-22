"use client";

import OrderItem from "./OrderItem";
import { usePeriodContext } from "@/context/PeriodContext";
import { useOrders } from "@/hooks/useOrders";
import { useState } from "react";
import Paginate from "./Paginate";

export default function OrderList() {
  const userId = "1234test";
  const periodContext = usePeriodContext();
  if (!periodContext) return null;
  const { startDate, endDate } = periodContext;
  const {
    ordersQuery: { data: orders },
  } = useOrders(userId);

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const filteredOrders: Order[] | undefined = orders
    ?.filter(order => {
      const orderDate = new Date(order.createdAt);
      return startDate <= orderDate && orderDate < endDate;
    })
    .sort((a, b) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);
      return bDate.getTime() - aDate.getTime();
    });

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders?.slice(
    indexOfFirstOrder,
    indexOfLastOrder,
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentOrders &&
        currentOrders.map(order => {
          return <OrderItem key={order.orderId} order={order} />;
        })}
      {filteredOrders && filteredOrders.length > 10 && (
        <Paginate
          page={currentPage}
          count={filteredOrders?.length || 0}
          setPage={handlePageChange}
        />
      )}
    </div>
  );
}

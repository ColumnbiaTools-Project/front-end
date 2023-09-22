import { useMutation, useQuery } from "@tanstack/react-query";
import getQueryClient from "@/app/getQueryClient";
import {
  addOrder,
  updateOrderStatus,
  getOrders,
  deleteOrder,
  getDetailOrder,
} from "@/services/firebase/orders";
import { v4 } from "uuid";
import { UseQueryResult, UseMutationResult } from "@tanstack/react-query";
// 추후 user정보 가져오기

interface OrdersHookResult {
  ordersQuery: UseQueryResult<Order[], unknown>;
  addItem: UseMutationResult<
    void,
    unknown,
    { order: Order; userId: string },
    unknown
  >;
  updateStatus: UseMutationResult<
    void,
    unknown,
    { order: Order; userId: string; status: Order["status"] },
    unknown
  >;
  removeItem: UseMutationResult<
    void,
    unknown,
    { orderId: string; userId: string },
    unknown
  >;
}

export function useOrders(userId: string = "1234test"): OrdersHookResult {
  const queryClient = getQueryClient();
  const uid = v4();

  const ordersQuery: UseQueryResult<Order[], unknown> = useQuery(
    ["orders"],
    () => getOrders(userId),
    {
      staleTime: 10 * 60,
    },
  );

  // const detailOrderQuery = useQuery(
  //   ["detailOrder"],
  //   () => getDetailOrder(orderId, userId),
  //   {
  //     staleTime: 10 * 60,
  //   },
  // );

  const addItem = useMutation(
    ({ order, userId }: { order: Order; userId: string }) =>
      addOrder(order, userId),
    {
      onSuccess: () => queryClient.refetchQueries(["orders"]),
    },
  );

  const updateStatus = useMutation(
    ({
      order,
      userId,
      status,
    }: {
      order: Order;
      userId: string;
      status: Order["status"];
    }) => updateOrderStatus(order, userId, status),
    {
      onSuccess: () => queryClient.refetchQueries(["orders"]),
    },
  );

  const removeItem = useMutation(
    ({ orderId, userId }: { orderId: string; userId: string }) =>
      deleteOrder(orderId, userId),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["orders"]);
      },
      onError: error => {
        console.error("삭제 실패:", error);
      },
    },
  );

  return { ordersQuery, addItem, updateStatus, removeItem };
}

import { Hydrate } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "@/app/getQueryClient";
import OrderList from "@/components/mypage/OrderList";
import { getOrders } from "@/services/firebase/orders";

export default async function HydratedOrderList() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["orders"], () => getOrders("1234test"));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <OrderList />
    </Hydrate>
  );
}

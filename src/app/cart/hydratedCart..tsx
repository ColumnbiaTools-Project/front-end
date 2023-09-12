import getQueryClient from "@/app/getQueryClient";
import { getCart } from "@/services/firebase/product";
import { dehydrate } from "@tanstack/query-core";
import { Hydrate, useQueryClient } from "@tanstack/react-query";
import CartList from "@/components/cart/CartList";

export default async function HydratedCart() {
  const queryClient = getQueryClient;
  await queryClient.prefetchQuery(["cart"], () => getCart('pelican8118'));
  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <CartList />
    </Hydrate>
  )
}

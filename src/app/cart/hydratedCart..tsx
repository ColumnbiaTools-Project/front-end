import getQueryClient from "@/app/getQueryClient";
import { dehydrate } from "@tanstack/query-core";
import { Hydrate } from "@tanstack/react-query";
import CartList from "@/components/cart/CartList";
import { getCart } from "@/services/firebase/cart";

export default async function HydratedCart() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["cart"], () => getCart('pelican8118'));
  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <CartList />
    </Hydrate>
  )
}

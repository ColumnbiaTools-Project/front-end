import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateToCart, getCart, removeFromCart } from "@/services/firebase/product";
import { uid } from "@/constants/constant";

export function  useCart() {
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["cart"], () => getCart('pelican8118'),{
    staleTime: 10 * 60
  });

  const addOrUpdateItem = useMutation(
    (cartData: CartProduct) => addOrUpdateToCart(uid, cartData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['cart', uid]);
      },
      onError: (error) => {
        console.error("카트 항목 업데이트 실패:", error);
      },
    }
  );

  const removeItem = useMutation((id: string) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cart',uid]);
    },
    onError: (error) => {
      console.error("카트 항목 제거 실패:", error);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
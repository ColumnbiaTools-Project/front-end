import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { uid } from "@/Constants/Constant";
import { usePaymentContext } from "@/context/PaymentContext";
import { addOrUpdateToCart, getCart, removeFromCart } from "@/services/firebase/payment";


export function  useCart() {
  const queryClient = useQueryClient();
  const paymentContext = usePaymentContext()


  const cartQuery = useQuery(["cart"], () => getCart('pelican8118'),{
    staleTime: 10 * 60,
  });


  const addOrUpdateItem = useMutation(
    (cartData: CartProduct) => addOrUpdateToCart(uid, cartData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['cart', uid]);
        paymentContext?.setCheck(!paymentContext.check);
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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addNewProduct,
  addOrUpdateToProduct,
  getProduct, removeFromProduct
} from "@/services/firebase/product";
import { v4 } from "uuid";


export function  useCart() {
  const queryClient = useQueryClient();
  const uid = v4()


  const productQuery = useQuery(["product"], () => getProduct(),{
    staleTime: 10 * 60 * 10,
  });

  const addProduct
    = useMutation(({ product } :{product: Product}) =>
    addNewProduct(product), {
    onSuccess: () => queryClient.refetchQueries(['products']),
  });


  const updateProduct =
    useMutation(({product} :{product:Product}) =>
      addOrUpdateToProduct(product), {
      onSuccess: () =>
        queryClient.refetchQueries(['products']),
    });

  const removeItem = useMutation((id: string) => removeFromProduct(id), {
    onSuccess: () => {
      queryClient.refetchQueries(['product']);
    },
    onError: (error) => {
      console.error("삭제 실패:", error);
    },
  });

  return { productQuery, updateProduct, removeItem, addProduct };
}
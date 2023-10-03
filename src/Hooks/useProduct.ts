"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addNewProduct,
  addOrUpdateToProduct,
  getProduct,
  removeFromProduct,
} from "@/services/firebase/product";
import { v4 } from "uuid";
import getQueryClient from "@/app/getQueryClient";

export default function useProduct() {
  const queryClient = getQueryClient();
  const uid = v4();

  const productQuery = useQuery(["product"], () => getProduct(), {
    staleTime: 10 * 60 * 10,
  });

  const addProduct = useMutation((product: Product) => addNewProduct(product), {
    onSuccess: () => {
      queryClient.refetchQueries(["products"]);
      alert("추가되었습니다.");
    },
  });

  const updateProduct = useMutation(
    ({ product }: { product: Product }) => addOrUpdateToProduct(product),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["products"]);
        alert("수정되었습니다.");
      },
    },
  );

  const removeItem = useMutation((id: string) => removeFromProduct(id), {
    onSuccess: () => {
      queryClient.refetchQueries(["product"]);
    },
    onError: error => {
      console.error("삭제 실패:", error);
    },
  });

  return { productQuery, updateProduct, removeItem, addProduct };
}

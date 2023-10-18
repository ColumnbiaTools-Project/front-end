"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUrls, getDownloadUrl } from "@/services/firebase/storage";
import getQueryClient from "@/app/getQueryClient";

export default function useStorage(dynamicParam: string) {
  // dynamicParam 매개변수 추가
  const queryClient = getQueryClient();

  const storageQuery = useQuery(["storage"], () => getAllUrls("상품"), {
    staleTime: 10 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const categoryImgQuery = useQuery(
    ["categoryImg", dynamicParam],
    () => getDownloadUrl(dynamicParam),
    {
      // dynamicParam 사용
      staleTime: 10 * 60 * 10,
      refetchOnWindowFocus: false,
    },
  );

  return { storageQuery, categoryImgQuery }; // categoryImgQuery 반환
}

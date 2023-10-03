"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUrls } from "@/services/firebase/storage";
import getQueryClient from "@/app/getQueryClient";

export default function useStorage() {
  const queryClient = getQueryClient();

  const storageQuery = useQuery(["storage"], () => getAllUrls("상품"), {
    staleTime: 10 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return { storageQuery };
}

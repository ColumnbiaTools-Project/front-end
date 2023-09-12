"use client";
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PaymentProvider from "@/context/PaymentContext";

type Props = {
  children: ReactNode;
}
export default function Providers({ children }: Props) {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <PaymentProvider>
        {children}
      </PaymentProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
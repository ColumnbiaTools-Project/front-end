'use client'
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
  children: ReactNode;
}
export default function Providers({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  )
  return (
    <QueryClientProvider client={client}>
      {children}
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
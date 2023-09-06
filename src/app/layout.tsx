import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans, Open_Sans } from "next/font/google";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Columbia Tools",
  description: "콜롬비아툴즈"
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang={"ko"} className={sans.className}>
    <body>
    <Header />
    <section className="min-h-content">
      {children}
    </section>
    <Footer />
    </body>
    </html>
  );
}

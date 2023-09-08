import "./globals.css";
import type { Metadata } from "next";

import { Inter, Noto_Sans, Open_Sans } from "next/font/google";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import { QueryClient } from "@tanstack/react-query";
import Providers from "@/app/Provider";



// const sans = Noto_Sans({ subsets: ["latin"], weight: ["700","500","300"] });
const sans = Open_Sans({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Columbia Tools",
  description: "콜롬비아툴즈"
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (

    <html lang={"ko"} className={sans.className}>
    <body>
    <Header />
    <section className="min-h-content">
      <Providers>{children}</Providers>
    </section>
    <Footer />
    </body>

    </html>
  );
}

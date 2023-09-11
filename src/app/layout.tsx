import "./globals.css";
import type { Metadata } from "next";

import { Inter, Noto_Sans, Open_Sans } from "next/font/google";
import Providers from "@/app/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



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

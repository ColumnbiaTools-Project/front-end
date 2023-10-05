import "./globals.css";
import type { Metadata } from "next";

import { Inter, Noto_Sans_KR } from "next/font/google";
import Providers from "@/app/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300"],
});

// export const cls = (...classnames: string[]) => {
//   return classnames.join(" ");
// };

export const metadata: Metadata = {
  title: "Columbia Tools",
  description: "콜롬비아툴즈",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={NotoSansKR.className}>
        <Header />
        <section className="min-h-content">
          <Providers>{children}</Providers>
        </section>
        <Footer />
      </body>
    </html>
  );
}

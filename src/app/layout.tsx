import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html>
      <body>
        <Header />
        <section className="min-h-content">{children}</section>
        <Footer />
      </body>
    </html>
  );
}

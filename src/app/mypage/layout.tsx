import SideBar from "@/components/mypage/SideBar";
import OrderProgress from "@/components/mypage/OrderProgress";
import { auth } from "@/services/firebase/config";
import { redirect } from "next/dist/server/api-utils";
import { NextApiResponse } from "next";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  console.log("user", user);

  return (
    <section className="w-[1280px] mx-auto mb-[200px]">
      <header className="border-b-2 w-full border-whitegray h-[304px] mb-24 box-border flex justify-start items-end">
        <h2 className="text-[40px] font-semibold pb-[30px]">마이페이지</h2>
      </header>
      <div className="flex">
        <div className="mr-44">
          <SideBar />
        </div>
        <div className="w-full flex flex-col gap-y-40">
          {/* @ts-expect-error Async Server Component */}
          <OrderProgress />
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

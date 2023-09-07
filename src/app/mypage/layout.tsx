import SideBar from "@/components/mypage/SideBar";
import OrderProgress from "@/components/mypage/OrderProgress";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="xl:w-[1280px] h-[964px]">
      <header className="border-b-2 w-full border-[#d9d9d9] mt-[70px] mb-24 box-border">
        <h2 className="text-[40px] font-semibold pb-[30px]">마이페이지</h2>
      </header>
      <div className="flex">
        <div className="mr-44">
          <SideBar />
        </div>
        <div className="w-full">
          {/* @ts-expect-error Async Server Component */}
          <OrderProgress />
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

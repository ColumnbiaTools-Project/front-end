import SideBar from "@/components/product/SideBar";
import { getDownloadUrl } from "@/services/firebase/storage";
import Image from "next/image";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  const category = params.category.replaceAll("%20", " ");
  const createPath = (category: string) => {
    return `상품페이지/${category}.png`;
  };

  const categoryImg = await getDownloadUrl(createPath(category));
  return (
    <section className="w-full mx-auto mb-[200px] flex flex-col justify-around items-center">
      <header className="w-full h-[504px] mb-20 mt-[70px] flex flex-col justify-start items-center relative bg-mainGray">
        <div className="w-[1280px] h-[420px] flex justify-between items-end">
          <h2 className="text-6xl font-bold text-black mb-9 whitespace-break-spaces w-[660px] z-10">
            {category.toUpperCase()}
          </h2>
          {categoryImg && (
            <Image
              src={categoryImg}
              alt="img"
              className="absolute -bottom-[73px] z-0"
              loading="lazy"
              fill={true}
            />
          )}
        </div>
        <div className="w-full bg-white h-[84px]" />
      </header>
      <div className="flex gap-[73px] w-[1280px]">
        <SideBar activeParams={category} />
        <section>{children}</section>
      </div>
    </section>
  );
}

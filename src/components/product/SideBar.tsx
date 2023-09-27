import { ProductCategory } from "@/Constants/Constant";
import Link from "next/link";

interface SideBarProps {
  activeParams: string;
}
export default function SideBar({ activeParams }: SideBarProps) {
  return (
    <div>
      <h2 className="mb-9 text-[32px] font-bold">MENU</h2>
      <div className="flex flex-col w-[257px]">
        {ProductCategory.map(category => {
          return (
            <Link
              href={`/product/${category}`}
              key={category}
              className={`mb-8 ${
                activeParams === category ? "font-black" : "font-darkgray"
              } hover:underline`}
            >
              {category.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

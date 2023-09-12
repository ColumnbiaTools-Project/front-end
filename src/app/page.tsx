
import { getProduct } from "@/services/firebase/product";
import AddProductBtn from "@/components/AddProductBtn";
import { Product } from "@/types/products";
import { AiOutlineSwapRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Intro from '@/components/main/Intro';
import Recommend from "@/components/main/Recommend";
import Story from "@/components/main/Story";


export default async function Home() {
  // const products = await getProduct();
  return (
    <>
      <div className="w-full h-screen bg-black text-white">
        <Image src="/Main.png" fill alt="Main_Image" className="relative"/>
        <div className="flex flex-col absolute bottom-[100px] right-[80px] text-right">
          <p className="text-3xl text-black">DRYWALL TOOLS</p>
          <p className="text-9xl font-black text-black">Columbia<br/> Tools</p>
        </div>
      </div>
      <Intro/>
      <Recommend/>
      <Story/>
      
      {/* <div>
        {products.map((product: Product) => {
          return <div key={product.id}>{product.title}</div>;
        })}
      </div>
      <AddProductBtn /> */}
    </>
  );
}

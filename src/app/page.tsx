
import AddProductBtn from "@/components/AddProductBtn";
import Image from "next/image";
import Intro from '@/components/main/Intro';
import Recommend from "@/components/main/recommend";
import Story from "@/components/main/story";


export default async function Home() {
  // const products = await getProduct();
  return (
    <>
      <div className="w-full h-screen text-white">
        <Image src="/main/main-visual1.png" fill alt="Main_Image" className="relative"/>
        <div className="flex flex-col absolute top-[140px] left-[80px] text-left">
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

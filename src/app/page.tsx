import AddProductBtn from "@/components/AddProductBtn";
import Intro from '@/components/main/Intro';
import Recommend from "@/components/main/recommend";
import Story from "@/components/main/story";
import Visual from "@/components/main/visual";


export default async function Home() {
  // const products = await getProduct();
  return (
    <>
      <Visual/>
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

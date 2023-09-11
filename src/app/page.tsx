
import { getProduct } from "@/services/firebase/product";
import AddProductBtn from "@/components/AddProductBtn";
import { Product } from "@/types/products";


export default async function Home() {
  // const products = await getProduct();
  return (
    <>
      <div>Home</div>
      <div>
        {/* {products.map((product: Product) => {
          return <div key={product.id}>{product.title}</div>;
        })} */}
      </div>
      <AddProductBtn />
    </>
  );
}

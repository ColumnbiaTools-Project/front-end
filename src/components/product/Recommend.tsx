import { getDetailProduct } from "@/services/firebase/product";
import EachProduct from "./EachProduct";

interface Props {
  recommends: string[];
}

export default async function Recommend({ recommends }: Props) {
  const recommendProducts: Products = [];
  await Promise.all(
    recommends.map(async recommend => {
      if (recommend) {
        const product = await getDetailProduct(recommend);
        recommendProducts.push(product);
      } else return null;
    }),
  );
  console.log("추천제품", recommendProducts);

  return (
    <div>
      <div className="w-[1280px]">
        <h2 className="text-[40px] text-black font-bold mb-5">Recommend</h2>
        <div className="flex">
          {recommendProducts &&
            recommendProducts.map(product => {
              return <EachProduct product={product} width={260} />;
            })}
        </div>
      </div>
    </div>
  );
}

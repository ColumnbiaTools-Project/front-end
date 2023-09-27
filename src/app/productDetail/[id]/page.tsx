import DetailHeader from "@/components/product/DetailHeader";
import DetailContent from "@/components/product/DetailContent";
import { getProduct, getDetailProduct } from "@/services/firebase/product";

export default async function page({ params }: { params: { id: string } }) {
  //이 구조를 변경하려면 DB구조를 바꿔야함 ㅠㅠ 일단 보류 // 관리자 수정할 때 카테고리와 일치하는 제품의 id 배열을 넣어줘야함.
  const products = await getProduct();
  const thisProduct = await getDetailProduct(params.id);
  const categoryProducts = products.filter(
    product => product.category === thisProduct.category,
  );

  return (
    <section className="w-full mx-auto mb-[200px] flex flex-col justify-around items-center">
      <header className="w-full h-[218px] mb-20 mt-[70px] flex flex-col justify-center items-center bg-mainGray">
        <DetailHeader
          categoryProducts={categoryProducts}
          currentId={params.id}
        />
      </header>
      <div>
        <DetailContent product={thisProduct} />
        {/* <Recommend recommends={thisProduct.recommend}/> */}
      </div>
    </section>
  );
}

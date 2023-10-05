import CarouselContainer from "@/components/product/CarouselContainer";
import QuantityButton from "@/components/product/QuantityButton";
import Recommend from "@/components/product/Recommend";
import VideoPlayer from "@/components/product/VideoPlayer";
import CartBtn from "@/components/product/CartBtn";
import QuickPurchaseBtn from "@/components/product/QuickPurchaseBtn";

interface Props {
  product: Product;
}

export default function DetailContent({ product }: Props) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <CarouselContainer images={product.images} />
        <div className="w-[542px]">
          <h2 className="text-[40px] font-bold mb-[60px]">{product.title}</h2>
          <p className="text-xl mb-10">{product.description}</p>
          <div className="border-whitegray border-y-2 py-10">
            {product.features &&
              product.features?.map(feature => {
                return <p>{feature}</p>;
              })}
          </div>
          <div className="flex justify-start items-center h-[98px] border-b-2 border-whitegray gap-8">
            <p className="text-xl font-bold w-14">수량</p>
            <div className="w-[118px] h-9">
              <QuantityButton />
            </div>
          </div>
          <div className="flex justify-start items-center h-[89px] border-b-2 border-black gap-8">
            <p className="text-xl font-bold w-14">배송비</p>
            <p className="text-xl font-medium">0 원</p>
          </div>
          <div className="flex font-bold py-10 justify-between items-center">
            <h3 className="text-[28px]">상품금액</h3>
            <p className="text-4xl">{product.price.toLocaleString()} won</p>
          </div>
          <div className="flex justify-center items-center gap-[18px]">
            <CartBtn product={product} />
            <QuickPurchaseBtn product={product} />
          </div>
        </div>
      </div>
      <div className="my-[200px] w-full h-[720px] bg-black flex justify-center items-center">
        {product.youtubeURLs && <VideoPlayer video={product.youtubeURLs[0]} />}
      </div>
      {product.recommend && (
        <div className="w-full flex justify-center items-center ">
          <Recommend recommends={product.recommend} />
        </div>
      )}
    </div>
  );
}

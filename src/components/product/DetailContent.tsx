import CarouselContainer from "@/components/product/CarouselContainer";

interface Props {
  product: Product;
}

export default function DetailContent({ product }: Props) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <CarouselContainer images={product.images} />
        <div className="w-[542px]">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div>
            {product.features &&
              product.features?.map(feature => {
                return <p>{feature}</p>;
              })}
          </div>
          <p>{product.price}</p>
          <p>수량</p>
          <p>배송비</p>
          <div>
            <h3>상품금액</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

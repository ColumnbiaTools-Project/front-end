import Link from "next/link";
import Image from "next/image";

interface EachProductProps {
  product: Product;
  width: number;
}

export default function EachProduct({ product, width }: EachProductProps) {
  return (
    <Link
      href={`/productDetail/${product.id}`}
      key={product.id}
      className={`w-${width} block`}
    >
      <div className="bg-[#FAFAFB] hover:bg-mainGray">
        <Image
          src={product.images && product.images[0]}
          alt="image"
          width={width}
          height={width}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+vV7PQAJKgNi9Va8MwAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="text-xl font-medium mt-7 hover:underline">
        {product.title}
      </div>
      {width === 300 && (
        <div className="mt-[6px] hover:underline">
          {product.price && product.price.toLocaleString()}원
        </div>
      )}
    </Link>
  );
}

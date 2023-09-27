import Image from "next/image";
import Link from "next/link";

interface EachProductProps {
  products: Products;
}

export default function EachProduct({ products }: EachProductProps) {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-24">
      {products &&
        products.map(product => (
          <Link
            href={`/productDetail/${product.id}`}
            key={product.id}
            className="w-[300px] h-[395px] block"
          >
            <div className="bg-[#FAFAFB] hover:bg-mainGray">
              <Image
                src={product.images[0]}
                alt="image"
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+vV7PQAJKgNi9Va8MwAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="text-xl font-medium mt-7 hover:underline">
              {product.title}
            </div>
            <div className="mt-[6px] hover:underline">
              {product.price.toLocaleString()}원
            </div>
          </Link>
        ))}
    </div>
  );
}

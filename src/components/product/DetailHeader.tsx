import Link from "next/link";
import Image from "next/image";

interface Props {
  categoryProducts: Products;
  currentId: string;
}

export default function DetailHeader({ categoryProducts, currentId }: Props) {
  return (
    <div className="w-[1280px] flex justify-center items-center gap-[73px]">
      {categoryProducts.map(product => (
        <Link href={`/productDetail/${product.id}`}>
          <Image src={product.images[0]} width={120} height={120} alt="img" />
          <p
            className={`w-[120px] ${
              currentId === product.id ? "font-bold" : ""
            } text-sm whitespace-break-spaces align-middle text-center`}
          >
            {product.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

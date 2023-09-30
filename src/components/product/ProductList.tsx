import EachProduct from "./EachProduct";

interface ProductListProps {
  products: Products;
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-24">
      {products &&
        products.map(product => EachProduct({ product, width: 300 }))}
    </div>
  );
}

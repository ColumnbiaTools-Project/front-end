import { getProduct } from "@/services/firebase/product";
import ProductList from "@/components/product/ProductList";

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProduct();
  const category = params.category.replaceAll("%20", " ");
  const filteredProducts = products.filter(
    product => product.category === category,
  );
  return (
    <div className="mt-1">
      <div className="text-sm breadcrumbs mb-12">
        <ul>
          <li>MENU</li>
          <li className="font-semibold">{category}</li>
        </ul>
      </div>
      <ProductList
        products={category === "all" ? products : filteredProducts}
      />
    </div>
  );
}

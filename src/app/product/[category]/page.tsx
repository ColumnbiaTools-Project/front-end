export default function ProductPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <>
      <h2>Products</h2>
      category : {params.category}
    </>
  );
}

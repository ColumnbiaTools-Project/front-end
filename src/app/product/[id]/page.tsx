export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <h2>Products</h2>
      parameters : {params.id}
    </>
  );
}

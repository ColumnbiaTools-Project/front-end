export default function DetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <h2>Detail!!</h2>
      parameters : {params.id}
    </>
  );
}

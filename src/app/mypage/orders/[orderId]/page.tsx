export default function OrderDetailpage({
  params,
}: {
  params: { orderId: string };
}) {
  return (
    <div>
      page
      <div>params.orderId : {params.orderId}</div>
    </div>
  );
}

import DetailOrder from "@/components/mypage/DetailOrder";

export default function OrderDetailpage({
  params,
}: {
  params: { orderId: string };
}) {
  return (
    <div>
      page
      <div>params.orderId : {params.orderId}</div>
      <DetailOrder orderId={params.orderId} userId="1234test" />
    </div>
  );
}

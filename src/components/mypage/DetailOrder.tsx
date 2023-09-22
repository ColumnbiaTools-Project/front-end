import { getDetailOrder } from "@/services/firebase/orders";

interface Props {
  orderId: string;
  userId: string;
}
export default async function DetailOrder({ orderId, userId }: Props) {
  const order = await getDetailOrder(orderId, userId);
  console.log("order", order);
  return <div>DetailOrder</div>;
}

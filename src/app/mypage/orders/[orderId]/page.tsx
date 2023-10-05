import DetailOrder from "@/components/mypage/DetailOrder";
import { getOrders } from "@/services/firebase/orders";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface OrderDetailPageProps {
  order: Order;
}
interface OrderDetailPageParams extends ParsedUrlQuery {
  orderId: string;
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const orderId = params?.orderId as string;
  const order = await getOrders(orderId);

  return { props: { order } };
};

export default function OrderDetailPage({ order }: OrderDetailPageProps) {
  return (
    <div>
      page
      <div>params.orderId : {order.id}</div>
      <DetailOrder orderId={order.id!} userId="1234test" />
    </div>
  );
}

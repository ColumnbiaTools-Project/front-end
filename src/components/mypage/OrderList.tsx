import { Order } from "@/types/orders";
import { getOrders } from "@/services/firebase/orders";
import OrderItem from "./OrderItem";

export default async function OrderList() {
  const orders = (await getOrders("1234test")) as Order[];
  return (
    <div>
      {orders &&
        orders.map(order => {
          return <OrderItem key={order.orderId} order={order} />;
        })}
    </div>
  );
}

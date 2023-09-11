
declare interface Order extends Product {
  quantity: number;
  orderId: string;
  createdAt: string;
  status: "주문접수" | "결제완료" | "상품준비중" | "배송중" | "배송완료";
}

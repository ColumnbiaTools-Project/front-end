declare interface Order extends Product {
  quantity: number;
  orderId: string;
  createdAt: string;
  status: "주문접수" | "결제완료" | "상품준비중" | "배송중" | "배송완료";
}

declare interface OrderPersonInputType {
  orderName: string;
  productName: string;
  orderEmail: string;
  orderTime: string;
  orderPhone: string;
}

declare interface OrderAddressType {
  deliveryName: string;
  zipCode: string;
  address: string;
  detailAddress: string;
  phone: string;
  message: string;
}

//나중에 사용

// declare interface Order extends PaymentDataType {
//   status: "결제완료" | "배송중" | "배송완료";
//   trackingNum: string | null;
//   deliveryCompany: string | null; // 택배사 코드
//   updatedAt: string;
// }

// type PaymentDataType = {
//   title: string;
//   orderId?: string;
//   productId: string[];
//   totalPrice: number;
//   orderName: string;
//   orderEmail: string;
//   orderTime?: string;
//   orderPhone: string;
//   deliveryName: string;
//   zipCode: string;
//   address: string;
//   detailAddress: string;
//   phone: string;
//   message: string;
// };



declare interface CartProduct {
  productId: string;
  title: string;
  price: number;
  color: string;
  id: string;
  description: string;
  image:string;
  checked: boolean;
  category: string;
  quantity:number;
}

declare interface PayData {
  totalPrice: number,
  orderName: string,
  customerName: string,
  customerEmail: string
} {}

declare interface Payment {
  version: string,
  paymentKey: string,
  type: string,
  orderId: string,
  orderName: string,
  mId:string,
  currency: string,
  method:"카드"|"가상계좌"|'간편결재'|'휴대폰'|'계좌이체'|'문화상품권'|'도서문화상품권'|'게임문화상품권',
  totalAmount: string,
  balanceAmount: number,
  status: string,
  requestedAt: string,
  approvedAt: string,
  useEscrow: boolean,
  lastTransactionKey: string | null,
  suppliedAmount: number,
  vat:number,
  cultureExpense: boolean,
  taxFreeAmount: number,
  taxExemptionAmount: number,
  cancel: [
    cancelAmount: number,
    cancelReason: string,
    taxFreeAmount: number,
    taxExemptionAmount: number,
    refundedAmount: number,
    easyPayDiscount: number,
    cancelAt: string,
    transactionKey: string,
    receipKey: string
    ] | null,
  isPartialCancelable: boolean,
  card: object | null,
  virtualAccount: object | null,
  secret: string | null,
  mobilPhone: object | null,
  giftCertificate: object | null,
  transfer: object | null,
  receipt: object | null,
  checkout: object | null,
  easyPay: object | null,
  country: string,
  failure: object | null,
  cashReceipt: object | null,
  cashReceipts: object | null,
  discount: object | null,
}

declare interface OrderObject {
  orderId: string,
  productId: string,
  totalPrice: number,
  OrderTime: string,
  orderPerson: {
    orderName: string,
    orderEmail: string,
    orderPhone: string,
    orderTime?: string,
  },
  orderAddress: {
    deliveryName: string,
    zipCode: string,
    address: string,
    detailAddress: string,
    phone: string,
    message: string,
  },
}
declare interface OrderType {
  orderId: string,
  productId: string,
  totalPrice: number,
  OrderTime: string,
}
declare interface OrderPerson {
  orderName: string,
  orderEmail: string,
  orderPhone: string,
}
declare interface OrderAddressType {
  deliveryName: string,
  zipCode: string,
  address: string,
  detailAddress: string,
  phone: string,
  message: string,
}
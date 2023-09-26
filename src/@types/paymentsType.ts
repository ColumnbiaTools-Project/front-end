'use client'
import { Dispatch, SetStateAction } from "react";

declare global {
  interface Window {
    daum: any; // 여기에 사용하는 Daum 우편번호 서비스의 타입을 정확하게 명시하세요.
  }
}

export interface PaymentContextType2 {
  title: string;
  orderId:string;
  productId:string[];
  totalPrice: number;
  orderName: string;
  orderEmail: string;
  orderTime: string;
  orderPhone: string;
  check: boolean;
  deliveryName:string;
  zipCode:string;
  address: string,
  detailAddress: string;
  phone: string;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setDetailAddress: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
  setZipCode: Dispatch<SetStateAction<string>>;
  setOrderId: Dispatch<SetStateAction<string>>;
  setProductId: Dispatch<SetStateAction<Array<string>>>;
  setOrderTime: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  setOrderName: Dispatch<SetStateAction<string>>;
  setOrderEmail: Dispatch<SetStateAction<string>>;
  setOrderPhone: Dispatch<SetStateAction<string>>;
  setDeliveryName: Dispatch<SetStateAction<string>>;
  setCheck: Dispatch<SetStateAction<boolean>>;
}

declare type PaymentDataType = {
  title: string;
  orderId?:string;
  productId:string [];
  totalPrice: number;
  orderName: string;
  orderEmail: string;
  orderTime?: string;
  orderPhone: string;
  deliveryName:string;
  zipCode:string;
  address: string,
  detailAddress: string;
  phone: string;
  message: string;
}

declare type PaymentStore = {
  paymentData: PaymentDataType; // PaymentDataType 타입 추가
  setTotalPrice: (totalPrice: number) => void;
};
export type PaymentContextType = {
  productId: string[];
  totalPrice: number;
  updateOrderPerson: OrderPersonType | undefined;
  setUpdateOrderPerson: Dispatch<SetStateAction<OrderPersonType|undefined>>;
  setTotalPrice:Dispatch<SetStateAction<number>>;
  setProductId:Dispatch<SetStateAction<Array<string>>>;
}
export type OrderPersonType = {
  title?:string,
  orderId?: string,
  productName: string,
  productId?: string[];
  totalPrice?: number;
  orderName: string;
  orderEmail: string;
  orderTime?: string;
  orderPhone: string;
  deliveryName:string;
  zipCode:string;
  address: string,
  detailAddress: string;
  phone: string;
  message: string;
}

export type OrderPersonProps = {
  orderPerson: OrderPersonType;
  setOrderPerson: Dispatch<SetStateAction<OrderPersonType>>;
}

export type Test = {
  title?:string,
  orderId?: string,
}
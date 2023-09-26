'use client'
import { Dispatch, SetStateAction } from "react";

export type PaymentContextType = {
  productId: string[];
  totalPrice: number;
  zipCode: string;
  address: string,
  setAddress:Dispatch<SetStateAction<string>>;
  setZipCode: Dispatch<SetStateAction<string>>;
  setTotalPrice:Dispatch<SetStateAction<number>>;
  setProductId:Dispatch<SetStateAction<Array<string>>>;
}

export type UpdateOrderPersonType ={
  orderPerson: OrderPersonInputType;
  orderAddress: OrderAddressType;
  address: string;
  zipCode: string;
  payDate: string;
  totalPrice: number;
  orderId:string;
  productId:string[];
}

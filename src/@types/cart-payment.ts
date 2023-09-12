

declare interface CartProduct {
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


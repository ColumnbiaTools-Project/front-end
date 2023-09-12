import create from "zustand";
export const useOrderStore = create<OrderType>((set) => ({
  orderId: "",
  productId: "",
  totalPrice: 0,
  OrderTime: "",
  setOrderId: ((orderId:string) => set({ orderId:orderId })),
  setProductId: ((productId:string) => set({ productId:productId })),
  setTotalPrice: ((totalPrice:number) => set({ totalPrice:totalPrice })),
  setOrderTime: ((orderTime:string) => set({ OrderTime:orderTime })),
}));

export const useOrderPerson = create<OrderPerson>((set) => ({
  orderName: "초기화",
  orderPhone: "",
  orderEmail: "",
  setOrderName: ((state: string) => set({ orderName: state })),
  setOrderPhone: ((state: string) => set({ orderPhone: state })),
  setOrderEmail: ((state: string) => set({ orderEmail: state }))
}));

export const useOrderAddress = create<OrderAddressType>((set) => ({
  deliveryName: "",
  zipCode: "",
  address: "",
  detailAddress: "",
  phone: "",
  message: "",
  setDeliveryName: ((state: string) => set({ deliveryName: state })),
  setZipCode: ((state: string) => set({ zipCode: state })),
  setAddress: ((state: string) => set({ address: state })),
  setDetailAddress: ((state: string) => set({ detailAddress: state })),
  setPhone: ((state: string) => set({ phone: state })),
  setMessage: ((state: string) => set({ message: state }))
}));
import firebase_app from "./config";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import { v4 } from "uuid";
import { Order } from "@/types/orders";

// FIREBASE DB에서 product에 해당하는 데이터의 CRUD.
const db = getDatabase(firebase_app);

//공통적으로 auth(userId) 추가해야함.

// 주문 추가
export const addOrder = async (order: Order, userId: string) => {
  return await set(ref(db, `orders/${userId}/${order.orderId}`), order);
};

// 주문 조회 (auth추가해야함)
export const getOrders = async (userId: string) => {
  return await get(ref(db, `orders/${userId}`)).then(snapshot => {
    const orders = snapshot.val() || {};
    return Object.values(orders);
  });
};

export const getDetailOrder = async (orderId: string, userId: string) => {
  return await get(ref(db, `orders/${userId}/${orderId}`)).then(snapshot => {
    const order = snapshot.val() || {};
    return order;
  });
};

export const deleteOrder = async (orderId: string, userId: string) => {
  return await remove(ref(db, `orders/${userId}/${orderId}`));
};

export const updateOrderStatus = async (
  order: Order,
  userId: string,
  status: Order["status"],
) => {
  return await set(ref(db, `orders/${userId}/${order.orderId}`), {
    ...order,
    status: status,
  });
};

import firebase_app from "./config";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import { v4 } from "uuid";
import { Product, Products } from "@/types/products";

// FIREBASE DB에서 product에 해당하는 데이터의 CRUD.
const db = getDatabase(firebase_app);

//제품 추가
export const addProduct = async (product: Product) => {
  const id = v4();
  await set(ref(db, `products/${id}`), {
    ...product,
    id,
  }).then(res => {
    console.log("response", res);
  });
};

// 전체 제품 조회 (firebase) serverComponent에서 사용
export const getProduct = async () => {
  const snapshot = await get(ref(db, "products"));
  return Object.values(snapshot.val()) as Products;
};

// 제품 삭제
export const deleteProduct = async (id: string) => {
  await remove(ref(db, `products/${id}`)).then(res => {
    console.log("response", res);
  });
};

// 제품 수정
export const updateProduct = async (product: Product) => {
  await set(ref(db, `products/${product.id}`), product).then(res => {
    console.log("response", res);
  });
};

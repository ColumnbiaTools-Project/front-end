import { getDatabase, ref, set, get, remove } from "firebase/database";
import { v4 } from "uuid";
import { getStorage } from "firebase/storage";
import firebase_app from "./config";


// Initialize Firebase
const storage = getStorage(firebase_app);
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

export async function getCart(userId:string):Promise<CartProduct[]> {
  return await get(ref(db, `carts/${userId}`)).then((snapshot) => {
    const items = snapshot.val() || {}
    return Object.values(items);
  });
}

export async function addOrUpdateToCart(userId:string, product:CartProduct) {
  return await set(ref(db, `carts/${userId}/${product.id}`), product);
}

//제품 등록 삭제
export async function removeFromCart(userId:string, productId:string) {
  return await remove(ref(db, `carts/${userId}/${productId}`));
}

export async function addTransaction(date:string, product:Product) {
  return await set(ref(db, `transactions/${date}/${product.id}`), product);
}
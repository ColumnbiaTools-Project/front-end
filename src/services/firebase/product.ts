import { getDatabase, ref, set, get, remove } from "firebase/database";
import { v4 } from "uuid";
import { getStorage } from "firebase/storage";
import firebase_app from "./config";


// Initialize Firebase
const storage = getStorage(firebase_app);
const db = getDatabase(firebase_app);

//제품 추가
export const addNewProduct = async (product: Product) => {
  const id = v4();
  await set(ref(db, `products/${id}`), {
    ...product,
    id,
  }).then(res => {
    console.log("response", res);
  });
};


export const getProduct = async () => {
  const snapshot = await get(ref(db, "products"));
  return Object.values(snapshot.val()) as Products;
};

// 제품 삭제
export async function removeFromProduct(productId:string) {
  return await remove(ref(db, `products/${productId}`));
}

// 제품 수정
export async function addOrUpdateToProduct(product:Product) {
  return await set(ref(db, `products/${product.id}`), product);
}


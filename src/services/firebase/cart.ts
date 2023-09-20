import { get, getDatabase, ref, remove, set } from "firebase/database";
import { getStorage } from "firebase/storage";
import firebase_app from "@/services/firebase/config";

const db = getDatabase(firebase_app);
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
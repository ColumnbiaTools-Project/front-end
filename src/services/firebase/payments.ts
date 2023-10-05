import { get, getDatabase, ref, remove, set } from "firebase/database";
import { getStorage } from "firebase/storage";
import firebase_app from "@/services/firebase/config";
import { UpdateOrderPersonType } from "@/@types/paymentsType";

const db = getDatabase(firebase_app);

export async function getPayment(userId:string):Promise<UpdateOrderPersonType[]> {
  return await get(ref(db, `payments/${userId}`)).then((snapshot) => {
    const items = snapshot.val() || {}
    return Object.values(items);
  });
}


export async function addOrUpdateToPayment(userId:string, product:UpdateOrderPersonType) {
  return await set(ref(db, `payments/${userId}/${product.orderId}`), product);
}


//제품 등록 삭제
export async function removeFromPayment(userId:string, productId:string) {
  return await remove(ref(db, `payments/${userId}/${productId}`));
}


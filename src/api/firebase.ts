import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import { v4 } from "uuid";
import { Product, Products } from "@/types/products";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL:
    "https://columbiatools-2428d-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

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
  console.log(Object.values(snapshot.val()));
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

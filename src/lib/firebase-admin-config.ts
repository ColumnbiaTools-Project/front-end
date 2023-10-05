import { initializeApp, getApps, cert } from "firebase-admin/app";

// Firebase Admin SDK
// typescript 제거

const firebaseAdminConfig = {
  privateKey: (process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY as string).replace(
    /\\n/g,
    "\n",
  ),
  clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp({
      credential: cert(firebaseAdminConfig),
      databaseURL:
        "https://columbiatools-2428d-default-rtdb.asia-southeast1.firebasedatabase.app",
    });
  }
}

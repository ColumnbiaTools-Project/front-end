import { initializeApp, getApps, cert } from "firebase-admin/app";

// Firebase Admin SDK
// typescript 제거

const firebaseAdminConfig = {
  credential: process.env.COLUMBIA_ADMIN_SECRET_KEY
    ? cert(process.env.COLUMBIA_ADMIN_SECRET_KEY as string)
    : undefined,
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}

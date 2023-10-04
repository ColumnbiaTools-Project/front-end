"use client";
import firebase from "firebase/app";
import { FiLogIn, FiUser } from "react-icons/fi";
import Link from "next/link";
import { auth } from "@/services/firebase/config";
import { useEffect, useState } from "react";

export default function LoginOrMypage() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: unknown) => {
      if (user) {
        console.log("현재 로그인 된 사용자:", user);
        setUser(user as User);
      } else {
        console.log("로그아웃 상태");
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <>
      {!user && (
        <Link href="/login" className="mx-3">
          <FiLogIn className="w-8 h-8 text-white" />
        </Link>
      )}
      {user && (
        <Link href="/mypage" className="mx-3">
          <FiUser className="w-8 h-8 text-white" />
        </Link>
      )}
      ;
    </>
  );
}

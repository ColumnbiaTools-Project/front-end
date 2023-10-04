"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/services/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

export default function Login() {
  // Login Page Form Data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log("현재 로그인 된 사용자:", user);
      } else {
        console.log("로그아웃 상태");
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        console.log("로그인 실패", errorMessage);

        if (
          errorMessage ===
            "The password is invalid or the user does not have a password." ||
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          setLoginError("아이디 또는 비밀번호를 잘못 입력했습니다.");
        }
      } else {
        console.log("로그인 에러 확인", error);
      }
    }
  };

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <main className="pt-[240px] mx-auto w-[700px]">
      <h2 className="font-bold leading-[54.5px] text-[40px] text-neutral-800">
        로그인
      </h2>
      <form>
        <p className="m-[80px_0_60px] leading-[30px] text-[20px] text-neutral-800">
          아이디(E-mail)
        </p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          className="w-[700px] border-b-[3px] border-neutral-300 focus:outline-none"
        />
        <p className="m-[50px_0_60px] leading-[30px] text-[20px] text-neutral-800">
          비밀번호
        </p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          className="w-[700px] border-b-[3px] border-neutral-300 focus:outline-none"
        />
        {loginError && (
          <div className="mt-[16px] -line-[21.8px] text-[16px] text-red-500">
            {loginError}
          </div>
        )}
        <button
          type="button"
          onClick={handleLogin}
          className="m-[100px_0_40px] w-[700px] h-[80px] font-bold text-[24px] leading-[32.7px] text-white bg-neutral-800"
        >
          로그인
        </button>
        <nav className="mb-[200px] w-[700px] h-[32px] text-center">
          <Link
            href="/"
            className="mr-[80px] text-center leading-[30px] text-[20px] text-neutral-500 after:content-[''] after:inline-block after:relative after:ml-[80px] after:top-[7px] after:w-[2px] after:h-[30px] after:bg-zinc-300 "
          >
            비밀번호 찾기
          </Link>
          <Link
            href="/signup"
            className="text-center leading-[30px] text-[20px] text-neutral-500"
          >
            회원가입
          </Link>
        </nav>
      </form>
    </main>
  );
}

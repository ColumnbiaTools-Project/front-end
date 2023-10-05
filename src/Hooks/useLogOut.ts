import { auth } from "@/services/firebase/config";
import { useRouter } from "next/navigation";

export default function useLogOut() {
  const router = useRouter();
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://colbia-dep.vercel.app/";
  const handleLogout = async () => {
    try {
      await auth.signOut();
      //Clear the cookies in the server
      const response = await fetch(`${baseURL}/api/signOut`, {
        method: "POST",
      });

      if (response.status === 200) {
        console.log("로그아웃 성공:", auth.currentUser);
      }
    } catch (error) {
      console.log("로그아웃 실패:", error);
    }
  };

  return { handleLogout };
}

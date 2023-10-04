import { auth } from "@/services/firebase/config";
import { useRouter } from "next/router";

export default function useLogOut() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      //Clear the cookies in the server
      const response = await fetch("http://localhost:3000/api/signOut", {
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

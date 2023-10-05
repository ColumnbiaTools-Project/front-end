import { auth } from "@/services/firebase/config";

export default function useLogOut() {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("로그아웃 성공:", auth.currentUser);
    } catch (error) {
      console.log("로그아웃 실패:", error);
    }
  };

  return { handleLogout };
}

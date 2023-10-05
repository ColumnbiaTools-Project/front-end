"use client";
import { FiLogOut } from "react-icons/fi";
import useLogOut from "@/Hooks/useLogOut";

export default function LogoutBtn() {
  const { handleLogout } = useLogOut();

  const handleLogOutClick = async () => {
    await handleLogout();
  };
  return (
    <button onClick={handleLogOutClick} className="mx-3">
      <FiLogOut className="w-8 h-8 text-white" />
    </button>
  );
}

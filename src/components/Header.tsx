"use client";
import Image from "next/image";
import Link from "next/link";
import useLogOut from "@/hooks/useLogOut";
import { FiLogOut } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export default function Header() {
  const { handleLogout } = useLogOut();

  const handleLogOutClick = async () => {
    await handleLogout();
  };

  return (
    <div className="w-full h-[70px] flex items-center gap-4 px-16 z-10 absolute bg-mainPrimary">
      <Image
        src="/main/columbia_tools_logo.svg"
        alt="Logo"
        width={169}
        height={70}
      />
      <div className="text-xl flex-1 text-white ml-6">
        <Link href="/" className="mx-6">
          Home
        </Link>
        <Link href="/about" className="mx-6">
          About
        </Link>
        <Link href="/product/all" className="mx-6">
          Product
        </Link>
        <Link href="/education" className="mx-6">
          Education
        </Link>
      </div>
      <div className="flex">
        <button onClick={handleLogOutClick} className="mx-3">
          <FiLogOut className="w-8 h-8 text-white" />
        </button>
        <Link href="/login" className="mx-3">
          <FiUser className="w-8 h-8 text-white" />
        </Link>
        <Link href="/cart" className="mx-3">
          <PiShoppingCartSimpleBold className="w-8 h-8 text-white" />
        </Link>
      </div>
    </div>
  );
}

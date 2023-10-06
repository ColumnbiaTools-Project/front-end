import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

import LogoutBtn from "./LogoutBtn";
import LoginOrMypage from "./LoginOrMypage";
import CartLink from "./CartLink";

export default function Header() {
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
        {/*<Link href="/education" className="mx-6">
          Education
        </Link>*/}
      </div>
      <div className="flex">
        <LogoutBtn />
        <LoginOrMypage />
        <CartLink />
      </div>
    </div>
  );
}

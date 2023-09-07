import Image from "next/image";
import Link from "next/link";
import { HiSearch } from 'react-icons/hi';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FiUser } from 'react-icons/fi';

export default function Header() {
  return (
    <div className="h-[70px] flex items-center gap-4 px-16">
      <Image src="/Columbia_Logo.png" alt="Logo" width={169} height={70}/>
      <div className="text-xl flex-1">
        <Link href="/" className="mx-6">Home</Link>
        <Link href="/about" className="mx-6">About</Link>
        <Link href="/product/all" className="mx-6">Product</Link>
        <Link href="/education" className="mx-6">Education</Link>
      </div>
      <div className="flex">
        <Link href="/login" className="mx-3">
          <HiSearch className="w-8 h-8"/>
        </Link>
        <Link href="/mypage" className="mx-3">
          <FiUser className="w-8 h-8"/>
        </Link>
        <Link href="/cart" className="mx-3">
          <PiShoppingCartSimpleBold className="w-8 h-8"/>
        </Link>
      </div>
    </div>
  );
}
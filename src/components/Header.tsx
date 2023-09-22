import Link from "next/link";

export default function Header() {
  return (
    <div className="h-header flex gap-4 bg-black text-white">
      <h2>Header</h2>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/product">Products</Link>
      <Link href="/login">Login</Link>
      <Link href="/mypage">MyPage</Link>
      {/*<Link href="/cart">Cart</Link>*/}
      <Link href={'/bucket'}>bucket</Link>
    </div>
  );
}

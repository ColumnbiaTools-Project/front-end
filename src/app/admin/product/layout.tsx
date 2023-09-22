import Link from "next/link";
export default function productLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-10">
      <div className="flex gap-3 flex-col">
        <Link href="/admin/product/add" className="hover:underline">
          제품추가
        </Link>
        <Link href="/admin/product/list" className="hover:underline">
          제품목록
        </Link>
        <Link href="/admin/product/edit" className="hover:underline">
          제품수정
        </Link>
      </div>
      <section>{children}</section>
    </div>
  );
}

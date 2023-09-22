export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-[1280px] mx-auto mb-[200px]">
      <header className="border-b-2 w-full border-whitegray h-[234px] mb-24 box-border flex justify-start items-end">
        <div>ADMIN</div>
      </header>
      <div>{children}</div>
    </section>
  );
}

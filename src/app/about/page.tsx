import Image from "next/image";

export default function AboutPage() {
  return (
  <>
    <div className="w-full h-screen relative">
      <div className="w-full h-full bg-black absolute z-[1]"></div>
      <Image src="/about/1979-main.png" fill alt="1979" />
    </div> 
  </>
  )
}

"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  images: string[];
}

export default function CarouselContainer({ images }: Props) {
  return (
    <div className="w-[650px] carousel">
      {images.map((image, index) => (
        <div id={`img${index}`} className="carousel-item w-full relative">
          <Image
            src={image}
            alt="img"
            loading="lazy"
            width={650}
            height={650}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href={`#img${index}`} />
            <button
              className="absolute top-1/2 -translate-y-1/2 left-0 w-[78px] h-[78px] flex justify-center items-center text-whitegray text-4xl"
              onClick={e => {
                e.preventDefault();
                const prevIndex = index - 1 < 0 ? images.length - 1 : index - 1;
                const prevImage = document.getElementById(`img${prevIndex}`);
                prevImage?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <Image src="/ChevronLeft.svg" width={78} height={78} alt="img" />
            </button>

            <button
              className="absolute top-1/2 -translate-y-1/2 right-0 w-[78px] h-[78px] flex justify-center items-center text-whitegray text-4xl"
              onClick={e => {
                e.preventDefault();
                const nextIndex = index + 1 >= images.length ? 0 : index + 1;
                const nextImage = document.getElementById(`img${nextIndex}`);
                nextImage?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <Image src="/ChevronRight.svg" width={78} height={78} alt="img" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

interface Props {
  images: string[];
}

export default function CarouselContainer({ images }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = (index: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    const prevIndex = index - 1 < 0 ? images.length - 1 : index - 1;
    const prevImage = document.getElementById(`img${prevIndex}`);
    prevImage?.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "nearest",
    });
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = (index: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    const nextIndex = index + 1 >= images.length ? 0 : index + 1;
    const nextImage = document.getElementById(`img${nextIndex}`);
    nextImage?.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "nearest",
    });
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(false);
    };
    carouselRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      carouselRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[650px] carousel" ref={carouselRef}>
      {images.map((image, index) => (
        <div
          id={`img${index}`}
          className="carousel-item w-full relative"
          key={index}
        >
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
                handlePrevClick(index);
              }}
            >
              <Image src="/ChevronLeft.svg" width={78} height={78} alt="img" />
            </button>

            <button
              className="absolute top-1/2 -translate-y-1/2 right-0 w-[78px] h-[78px] flex justify-center items-center text-whitegray text-4xl"
              onClick={e => {
                e.preventDefault();
                handleNextClick(index);
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

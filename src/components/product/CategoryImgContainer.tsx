"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import useStorage from "@/Hooks/useStorage";

interface CategoryImgContainerProps {
  category: string;
}

export default function CategoryImgContainer({
  category,
}: CategoryImgContainerProps) {
  const path = `상품페이지/${category}.png`;
  const {
    categoryImgQuery: { data: categoryImg },
  } = useStorage(path);

  return (
    <div>
      {categoryImg && (
        <Image
          src={categoryImg}
          alt="img"
          className="absolute -bottom-[73px] z-0"
          loading="lazy"
          fill={true}
        />
      )}
    </div>
  );
}

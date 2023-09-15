"use client";
import Image from "next/image";

interface Props {
  image: string | undefined;
}

export default function ImageContainer({ image }: Props) {
  const failedImage = (e: any) => {
    e.target.src = "/images/no-image.png";
  };
  return (
    <Image
      src={image as string}
      alt="사진"
      width={150}
      height={150}
      onError={e => {
        failedImage(e);
      }}
    />
  );
}

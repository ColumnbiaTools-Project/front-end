"use client";
import Image from "next/image";

interface Props {
  image: string[] | undefined;
  size: number;
}

export default function ImageContainer({ image, size }: Props) {
  const failedImage = (e: any) => {
    e.target.src = "/images/no-image.png";
  };
  return (
    <Image
      src={image ? image[0] : "/images/no-image.png"}
      alt="사진"
      width={size}
      height={size}
      onError={e => {
        failedImage(e);
      }}
      loading="lazy"
    />
  );
}

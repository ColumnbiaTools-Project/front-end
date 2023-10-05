"use client";

interface Props {
  video: string;
}

export default function VideoPlayer({ video }: Props) {
  return (
    <div>
      <iframe width="1280" height="720" src={video}></iframe>
    </div>
  );
}

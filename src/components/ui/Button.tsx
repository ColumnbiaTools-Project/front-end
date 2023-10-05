type Props = {
  text: string;
  type: 'big' | 'small'
}
export default function Button({ text, type }: Props) {
  return (
    <>
      <button
        className={`${type === "big" ? "w-[444px]" : "w-[198px]"} py-[13px] px-[36px] bg-black text-white text-[20px] `}>{text}</button>
    </>
  );
}

'use client'
import { removeOrderList } from "@/services/localStoreApi";
import { useRouter } from 'next/navigation'

export default function SuccessButton() {
  const router = useRouter()
  function handleClick() {
    router.push('/')
  }
  return (
    <>
      <button
        onClick={handleClick}
      >결재 확인
      </button>
    </>
  );
}

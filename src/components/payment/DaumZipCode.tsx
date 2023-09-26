'use client'
import { useEffect, useRef } from "react";

const id = "daum-postcode"; // script가 이미 rendering 되어 있는지 확인하기 위한 ID
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

export default function DaumZipCode() {
  const postcodeRef = useRef<HTMLDivElement | null>(null);

  const loadLayout = () => {
    if (typeof window !== "undefined") {
      window.daum.postcode.load(() => {
        const postcode = new window.daum.Postcode({
          oncomplete: function (data: any) {
            console.log(data);
          },
        });
        postcode.open();
      });
    }
  };

  useEffect(() => {
    const isAlready = document.getElementById(id);

    if (!isAlready) {
      const script = document.createElement("script");
      script.src = src;
      script.id = id;
      script.async = true; // 비동기적으로 스크립트 로드
      script.onload = loadLayout; // 스크립트 로딩 완료 후 실행할 함수
      document.body.append(script);
    }

    return () => {
      // 컴포넌트 언마운트 시에 스크립트 제거
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <button onClick={loadLayout}>주소찾기</button>
      <div ref={postcodeRef}></div>
    </div>
  );
}

import { ChangeEventHandler, useRef, useState } from "react";
import { usePaymentContext } from "@/context/PaymentContext";

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const id = "daum-postcode"; // script가 이미 rendering 되어 있는지 확인하기 위한 ID
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const LABELSTYLE = "mt-[50px] mb-[22px] text-[20px] text-darkgray";
const INPUTSTYLE = "w-full text-[20px] px-2 border-b-2 border-black";

export default function OrderAddress({handleChange }: Props) {
  const postcodeRef = useRef<HTMLDivElement | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState<boolean>(false);
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [zipCode, setZipCode] = useState("");
  const orderAddressContext = usePaymentContext();

  // 주소 검색 스크립트 로딩 함수
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.async = true;
    script.onload = () => {
      setIsScriptLoaded(true);
    };
    document.body.appendChild(script);
  };
  // 버튼 클릭 시 주소 검색 스크립트 로드 또는 주소 검색창 열기
  const handleButtonClick = () => {
    if (!isScriptLoaded) {
      loadScript();
    } else {
      // 이미 스크립트가 로드되었을 때 주소 검색창 열기
      const postcode = new window.daum.Postcode({
          oncomplete: function(data: any) {
            setRoadAddress(data.roadAddress);
            setZipCode(data.zonecode);
          }
        }
      );
      postcode.open();
    }
  };

  return (
    <section className={"flex justify-between items-start mt-[40px]"}>
      <div className={"mr-4"}>
        <p className={"text-[24px] font-bold"}>배송지 정보</p>
      </div>
      <div className={"w-[50%] flex flex-col mb-4"}>
        <label className={LABELSTYLE} htmlFor="deliveryName">
          받는 사람
        </label>
        <input
          onChange={handleChange}
          className={INPUTSTYLE}
          type="text"
          name="deliveryName"
        />
        <div className={"flex justify-start items-center"}>
          <div className={"flex flex-col"}>
            <label className={LABELSTYLE} htmlFor="postNumber">
              우편번호
            </label>
            <input
              onChange={handleChange}
              className={"w-full text-[20px] px-2 border-b-2 border-black"}
              type="text"
              name="zipCode"
              value={zipCode ? `${zipCode} ${orderAddressContext?.setZipCode(zipCode) || ""}` : ""}
            />
          </div>
          <div>
            <button
              onClick={handleButtonClick}
              className={"ml-4 w-[200px] bg-black text-white p-2 hover: cursor-pointer"}
            >
              우편번호찾기
            </button>
            <div ref={postcodeRef}></div>
          </div>
        </div>
        <label className={LABELSTYLE} htmlFor="address">
          주소
        </label>
        <input
          onChange={handleChange}
          className={INPUTSTYLE}
          type="text"
          name="address"
          value={roadAddress ? `${roadAddress} ${orderAddressContext?.setAddress(roadAddress) || ""}` : ""}
        />

        <label className={LABELSTYLE} htmlFor="detailAddress">
          상세주소
        </label>
        <input
          onChange={handleChange}
          className={INPUTSTYLE}
          type="text"
          name="detailAddress"
        />

        <label className={LABELSTYLE} htmlFor="phone">
          연락처
        </label>
        <input
          onChange={handleChange}
          className={INPUTSTYLE}
          type="text"
          name="phone"
        />

        <label className={LABELSTYLE} htmlFor="message">
          배송요청사항
        </label>
        <input
          onChange={handleChange}
          className={INPUTSTYLE}
          type="text"
          name="message"
        />
      </div>
    </section>
  );
}

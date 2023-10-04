"use client";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import SignUpFormState from "@/@types/signUpFormState";
import useSignUpForm from "@/hooks/useSignUpForm";

export default function SignUp() {
  // 각 field의 값을 Form 객체로 관리
  const initialFormState: SignUpFormState = {
    name: "",
    emailId: "",
    selectedEmail: "직접 입력",
    password: "",
    confirmPassword: "",
  };

  // SignUp Form Custom Hooks
  const {
    formState,
    isFormValid,
    passwordError,
    confirmPasswordError,
    handleFieldChange,
    handleInputChange,
    handleSubmit,
    handleSignUp,
  } = useSignUpForm(initialFormState);

  return (
    <main className="pt-[240px] mx-auto w-[700px]">
      <h2 className="font-bold leading-[54.5px] text-[40px] text-neutral-800">
        회원가입
      </h2>
      <form onSubmit={handleSubmit}>
        <p className="m-[80px_0_60px] leading-[30px] text-[20px] text-neutral-800">
          이름
        </p>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          className="w-[700px] border-b-[3px] border-neutral-300 focus:outline-none"
        />
        <p className="m-[50px_0_60px] leading-[30px] text-[20px] text-neutral-800">
          아이디(E-mail)
        </p>
        <div className="flex">
          <input
            type="text"
            name="emailId"
            value={formState.emailId}
            onChange={handleInputChange}
            className="w-[210px] border-b-[3px] border-neutral-300 focus:outline-none"
          />
          <span className="relative top-[13px] left-[13px] font-semibold text-neutral-400">
            @
          </span>
          <input
            type="text"
            name="selectedEmail"
            value={
              formState.selectedEmail === "직접 입력"
                ? ""
                : formState.selectedEmail
            }
            disabled={
              formState.selectedEmail !== "직접 입력" &&
              formState.selectedEmail.length < 0
            }
            onChange={handleInputChange}
            className="ml-[28px] w-[210px] border-b-[3px] border-neutral-300 focus:outline-none"
          />
          <select
            value={formState.selectedEmail}
            onChange={event => {
              handleFieldChange("selectedEmail", event.target.value);
              handleInputChange(event);
            }}
            className="select select-bordered border-neutral-800 ml-[28px] w-[226px] focus:outline-none"
          >
            <option value="직접 입력">직접 입력</option>
            <option value="naver.com">naver.com</option>
            <option value="nate.com">nate.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="daum.net">daum.net</option>
            <option value="hotmail.com">hotmail.com</option>
            <option value="hanmail.net">hanmail.net</option>
          </select>
        </div>
        <p className="m-[50px_0_60px] leading-[30px] text-[20px] text-neutral-800">
          비밀번호
        </p>
        <input
          type="password"
          name="password"
          placeholder="8~15자 이내의 영문, 숫자 및 특수문자 조합"
          value={formState.password}
          onChange={handleInputChange}
          className="w-[700px] border-b-[3px] border-neutral-300 font-medium leading-7 focus:outline-none"
        />
        <BsEye className="relative top-[-30px] right-[-660px] w-[25px] h-[24px] text-gray-300" />
        {passwordError && (
          <div className="line-[21.8px] text-[16px] text-red-500">
            {passwordError}
          </div>
        )}
        <p className="m-[60px_0_60px] leading-[30px] text-[20px] text-neutral-800">
          비밀번호 확인
        </p>
        <input
          type="password"
          name="confirmPassword"
          placeholder="8~15자 이내의 영문, 숫자 및 특수문자 조합"
          value={formState.confirmPassword}
          onChange={handleInputChange}
          className="w-[700px] border-b-[3px] border-neutral-300 font-medium leading-7 focus:outline-none"
        />
        <BsEyeSlash className="relative top-[-30px] right-[-660px] w-[25px] h-[24px] text-gray-300" />
        {confirmPasswordError && (
          <div className="line-[21.8px] text-[16px] text-red-500">
            {confirmPasswordError}
          </div>
        )}
        <button
          onClick={() => {
            handleSignUp(
              formState.name,
              formState.emailId,
              formState.selectedEmail,
              formState.password,
            );
          }}
          className={`m-[150px_0_200px] w-[700px] h-[80px] font-bold text-[24px] leading-[32.7px] text-white ${
            isFormValid ? "bg-neutral-800" : "bg-neutral-300"
          }`}
        >
          가입하기
        </button>
      </form>
    </main>
  );
}

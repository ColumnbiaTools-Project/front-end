import { useState } from "react";
import { auth } from "@/services/firebase/config";
import { isPasswordValid } from "@/utils/passwordValidation";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import SignUpFormState from "@/@types/signUpFormState";

export default function useSignUpForm(initialState: SignUpFormState) {
  const [formState, setFormState] = useState(initialState);
  const [isFormValid, setIsFormValid] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // SignUp Form Data
  const handleFieldChange = (fieldName: string, value: string) => {
    setFormState(prevFormState => ({
      ...prevFormState,
      [fieldName]: value,
    }));
  };

  // SignUp Form Data가 모두 작성 되었는지 확인 후 가입하기 버튼 활성화
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    handleFieldChange(name, value);

    const isFormEmpty =
      formState.name.length === 0 ||
      formState.emailId.length === 0 ||
      formState.selectedEmail.length === 0 ||
      formState.password.length === 0 ||
      formState.confirmPassword.length === 0;

    setIsFormValid(!isFormEmpty);
  };

  // 가입하기 버튼 클릭 시 Form 제출
  // 비밀번호 에러 메시지 초기화 및 비밀번호 유효성 검사
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset Password Error Messages
    setPasswordError("");
    setConfirmPasswordError("");

    if (!isPasswordValid(formState.password, formState.confirmPassword)) {
      setPasswordError(
        "8~15자 이내의 영문, 숫자 및 특수문자 조합으로 구성되어야 합니다.",
      );
      return;
    }

    if (formState.password !== formState.confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }
  };

  // 가입하기 버튼 클릭 시 Form 제출 후 Firebase 회원가입 메서드 실행
  const handleSignUp = async (
    name: string,
    emailId: string,
    selectedEmail: string,
    password: string,
  ) => {
    const email = `${emailId}@${selectedEmail}`;

    try {
      // 1. 회원가입
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      // const user = userCredential.user;
      console.log("회원가입 성공", userCredential);

      if (auth.currentUser) {
        // 2. 회원 이름 추가 저장
        const updateName = await updateProfile(auth.currentUser, {
          displayName: name,
        });
        console.log("회원 이름 업데이트 성공");

        // 3. 인증 이메일 전송
        const emailVerification = await sendEmailVerification(auth.currentUser);
        console.log("이메일 전송 성공", emailVerification);
      } else {
        console.log("현재 사용자가 인증되지 않았습니다.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        console.log("회원가입 실패", errorMessage);
      } else {
        console.log("알 수 없는 에러", error);
      }
    }
  };

  return {
    formState,
    isFormValid,
    passwordError,
    confirmPasswordError,
    handleFieldChange,
    handleInputChange,
    handleSubmit,
    handleSignUp,
  };
}

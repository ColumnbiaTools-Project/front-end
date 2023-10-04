// Password Validation
export const isPasswordValid = (password: string, confirmPassword: string) => {
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
  return (
    passwordPattern.test(password) && passwordPattern.test(confirmPassword)
  );
};

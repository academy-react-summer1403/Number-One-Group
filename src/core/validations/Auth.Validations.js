import * as yup from "yup";

export const emailValidation = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل را به درستی وارد کنید!")
    .typeError("ایمیل را به درستی وارد کنید!"),
});

export const loginValidation = yup.object().shape({
  phoneOrGmail: yup
    .string()
    .email("ایمیل را به درستی وارد کنید!")
    .typeError("ایمیل را به درستی وارد کنید!")
    .required("این فیلد الزامیست!"),
  password: yup
    .string()
    .required("این فیلد الزامیست!")
    .notOneOf(
      [yup.ref("currentPassword")],
      "این فیلد نباید با رمز عبور قبلی یکسان باشد!"
    )
    .min(3, "رمز عبور باید بیشتر از 3 حرف باشد"),
});

export const getCodeValidation = yup.object().shape({
  verifyCode: yup
    .number()
    .required("این فیلد الزامیست!")
    .typeError("لطفا کد را به درستی وارد کنید"),
});

export const mobileNumberValidation = yup.object().shape({
  phoneNumber: yup
    .number()
    .required("این فیلد الزامیست!")
    .min(9000000000, "شماره موبایل را درست وارد کنید")
    .max(9999999999, "شماره موبایل را درست وارد کنید"),
});

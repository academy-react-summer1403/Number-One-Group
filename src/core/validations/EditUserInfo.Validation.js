import * as yup from "yup";

export const EditInformationValidation = yup.object().shape({
  fName: yup.string().required("این فیلد الزامیست"),
  lName: yup.string().required("این فیلد الزامیست"),
  birthDay: yup.string().required("این فیلد الزامیست"),
  phoneNumber: yup
    .number()
    .required("این فیلد الزامیست!")
    .min(9000000000, "شماره موبایل را درست وارد کنید")
    .max(9999999999, "شماره موبایل را درست وارد کنید"),
  nationalCode: yup.number().required("این فیلد الزامیست"),
  email: yup
    .string()
    .email("ایمیل را به درستی وارد کنید!")
    .typeError("ایمیل را به درستی وارد کنید!"),
  homeAdderess: yup.string().required("این فیلد الزامیست"),
  userAbout: yup.string().required("این فیلد الزامیست"),
  gender: yup.string().required("این فیلد الزامیست"),
  telegramLink: yup.string().required("این فیلد الزامیست"),
  linkdinProfile: yup.string().required("این فیلد الزامیست")
});

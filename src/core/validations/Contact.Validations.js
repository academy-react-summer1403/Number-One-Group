import * as yup from "yup";

export const ContactValidation = yup.object().shape({
  description: yup.string().required("این فیلد الزامیست!"),
  name: yup.string().required("این فیلد الزامیست!"),
  email: yup
    .string()
    .email("ایمیل را به درستی وارد کنید!")
    .typeError("ایمیل را به درستی وارد کنید!")
    .required("این فیلد الزامیست!"),
  webSite: yup
    .string()
    .url("آدرس را به درستی وارد کنید!")
    .required("این فیلد الزامیست!"),
});

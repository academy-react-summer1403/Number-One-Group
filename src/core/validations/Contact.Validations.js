import * as yup from "yup";

export const ContactValidation = yup.object().shape({
  description: yup.string().required("این فیلد الزامیست!"),
});

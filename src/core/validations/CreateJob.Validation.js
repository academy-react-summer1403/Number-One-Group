import * as yup from "yup";

export const JobHistoryFormValidation = yup.object().shape({
  jobTitle: yup.string().required("این فیلد الزامیست"),
  aboutJob: yup.string().required("این فیلد الزامیست"),
  companyWebSite: yup.string().required("این فیلد الزامیست"),
  companyLinkdin: yup.string().required("این فیلد الزامیست"),
  workStartDate: yup.string().required("این فیلد الزامیست"),
  workEndDate: yup.string().required("این فیلد الزامیست"),
  companyName: yup.string().required("این فیلد الزامیست")
});

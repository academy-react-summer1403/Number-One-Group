import { toast } from "react-toastify";

const ProfileUploader = (event, setState) => {
  const img = event.target.files?.[0];
  if (!img) return;

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const imgElement = new Image();
    const imgURL = reader.result?.toString() || "";
    imgElement.src = imgURL;
    imgElement.addEventListener("load", (event) => {
      const { naturalWidth, naturalHeight } = event.currentTarget;
      if (naturalHeight < 250 && naturalWidth < 250) {
        toast.error("عکس شما نباید کمتر از 250 پیکسل باشد");
        return setState("");
      }
    });
    setState(imgURL);
  });
  reader.readAsDataURL(img);
};

export default ProfileUploader;

import { toast } from "react-toastify";

const handleCopyUrl = () => {
  navigator.clipboard.writeText(document.URL);
  toast.success("آدرس با موفقیت ذخیره شد.");
};

export default handleCopyUrl;

import moment from "jalali-moment";
import { useTranslation } from "react-i18next";

const ChangeMoment = (date) => {
  const { i18n } = useTranslation();
  const newDate = date ? date.slice(0, 10) : "1403 / 03 / 03"
  
  return (
    <span className="font-Number text-sm">
      {moment(newDate, "YYYY/MM/DD")
        .locale(i18n.language != "en" && "fa")
        .format("YYYY / MM / DD")}
    </span>
  );
};

export default ChangeMoment;

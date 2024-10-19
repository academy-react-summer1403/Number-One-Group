import { useSelector } from "react-redux";
import ChangeMoment from "../../utility/moment";

export const RightSection = () => {
  const userInfo = useSelector((state) => state.UserInfo.info);
  const { fName, lName, nationalCode, email, birthDay, gender, userAbout } =
    userInfo && userInfo;

  const items = [
    {
      title: ["نام و نام خانوادگی :", "Name And Surname:"],
      description: `${fName} ${lName}`,
    },
    { title: ["کد ملی :", "National Code:"], description: nationalCode },
    { title: ["ایمیل :", "Email:"], description: email },
    {
      title: ["تاریخ تولد :", "Date Of Birth:"],
      description: ChangeMoment(birthDay, "YYYY/MM/DD", "persian"),
    },
    { title: ["جنسیت :", "Gender:"], description: gender ? "مرد" : "زن" },
    { title: ["درباره من :", "About Me:"], description: userAbout },
  ];

  return items;
};

export const LeftSection = () => {
  const userInfo = useSelector((state) => state.UserInfo.info);
  const {
    phoneNumber,
    telegramLink,
    linkdinProfile,
    homeAdderess,
    longitude,
    latitude,
  } = userInfo && userInfo;

  const items = [
    { title: ["شماره همراه :", "Mobile Number:"], description: phoneNumber },
    { title: ["تلگرام :", "Telegram:"], description: telegramLink },
    { title: ["لینکداین :", "LinkedIn:"], description: linkdinProfile },
    { title: ["آدرس :", "Address:"], description: homeAdderess },
    { title: ["طول جغرافیایی :", "Longitude:"], description: longitude && longitude.slice(0, 4) },
    { title: ["عرض جغرافیایی :", "Latitude:"], description: longitude && latitude.slice(0, 4) },
  ];

  return items;
};

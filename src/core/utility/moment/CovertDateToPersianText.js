import monthNames from "../../constants/months";

const ConvertDateToPersianText = (shamsiDate) => {
  if (!shamsiDate) return;
  // جدا کردن سال، ماه و روز
  let [year, month, day] = shamsiDate.split("/");

  month = Number(month)

  // تبدیل ماه به نام فارسی
  const monthName = monthNames[Number(month) - 1];

  // بازگشت تاریخ به فرمت دلخواه
  return `${day} ${monthName} ${year}`;
};

export default ConvertDateToPersianText;

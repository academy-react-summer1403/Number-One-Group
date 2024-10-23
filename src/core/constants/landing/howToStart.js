import mannequin_coach from "../../../assets/images/mannequin-coach.png";
import mannequin_student from "../../../assets/images/mannequin-student.png";
import EmailMarketing from "../../../assets/images/EmailMarketing.png";
import LearnWithExperts from "../../../assets/images/LearnWithExperts.png";
import OnlineCertificate from "../../../assets/images/onlineCertificate.png";
import LearnAnything from "../../../assets/images/learnAnything.png";

export const requestCards = [
  {
    title: ["مربی شوید", "Become a Instructor"],
    paragraph: [
      "برای مثال بی اهمیت، کدام یک از ما متعهد می شویم ورزش بدنی بله این اتفاق در اینجا می افتد.",
      "To take a trivial example, which of us undertakes physical exercise yes is this happen here.",
    ],
    buttonValue: ["درخواست", "Apply Now"],
    picture: mannequin_coach,
  },
  {
    title: ["دانشجو شوید", "Become a Student"],
    paragraph: [
      "به میلیون ها نفر از سراسر جهان بپیوندید با هم یاد می گیرند یادگیری آنلاین.",
      "Join millions of people from around the world learning together. Online learning.",
    ],
    buttonValue: ["درخواست", "Apply Now"],
    picture: mannequin_student,
  },
];
export const encouragementItems = [
  {
    title: ["با کارشناسان بیاموزید", "Learn with Experts"],
    description: [
      "با کارشناسان بیاموزید و از تجربیات آنها بهره‌مند شوید.",
      "Learn with the experts and benefit from their experiences.",
    ],
    icon: LearnWithExperts,
  },
  {
    title: ["هر چیزی یاد بگیر", "Learn Anything"],
    description: [
      "هر چیزی یاد بگیرید و افق‌های جدیدی را به روی خودتان باز کنید.",
      "Learn anything and open new horizons for yourself.",
    ],
    icon: LearnAnything,
  },
  {
    title: ["دریافت گواهی آنلاین", "Get Online Certificate"],
    description: [
      "گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.",
      "Get certified online and complete valid proof of your skills.",
    ],
    icon: OnlineCertificate,
  },
  {
    title: ["بازاریابی ایمیلی", "E-mail Marketing"],
    description: [
      "بازاریابی ایمیلی ابزاری موثر برای ارتباط با مشتریان و افزایش فروش است.",
      "Email marketing is an effective tool to communicate with customers and increase sales.",
    ],
    icon: EmailMarketing,
    arrow: false,
  },
];

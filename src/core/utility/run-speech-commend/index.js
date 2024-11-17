import { changeThemeAction } from "../../../redux/slices/DarkMode";
import { setItem } from "../../hooks/local-storage";
import handleCopyUrl from "../copy-url";

const RunSpeechCommend = (commend, navigate, dispatch, i18n) => {
  // pages
  if (
    commend.includes("خانه") ||
    commend.includes("صفحه اصلی") ||
    commend.includes("صفحه اصلی")
  ) {
    if (
      commend.includes("go") ||
      commend.includes("برو") ||
      commend.includes("برگرد") ||
      commend.includes("back") ||
      commend.includes("برگرد") ||
      commend.includes("back")
    ) {
      navigate("/");
    }
  }
  if (commend.includes("دوره") || commend.includes("course")) {
    if (
      commend.includes("go") ||
      commend.includes("برو") ||
      commend.includes("برگرد") ||
      commend.includes("back") ||
      commend.includes("برگرد") ||
      commend.includes("back")
    ) {
      navigate("/courses");
    }
  }
  if (
    commend.includes("وبلاگ") ||
    commend.includes("خبر ها") ||
    commend.includes("blog") ||
    commend.includes("news")
  ) {
    if (
      commend.includes("go") ||
      commend.includes("برو") ||
      commend.includes("برگرد") ||
      commend.includes("back") ||
      commend.includes("برگرد") ||
      commend.includes("back")
    ) {
      navigate("/Blog");
    }
  }
  if (commend.includes("ورود") || commend.includes("login")) {
    if (
      commend.includes("go") ||
      commend.includes("برو") ||
      commend.includes("برگرد") ||
      commend.includes("back")
    ) {
      navigate("/authorize/login");
    }
  }
  if (commend.includes("ثبت نام") || commend.includes("register")) {
    if (
      commend.includes("go") ||
      commend.includes("برو") ||
      commend.includes("برگرد") ||
      commend.includes("back")
    ) {
      navigate("/authorize/register");
    }
  }
  if (
    commend.includes("داشبورد") ||
    commend.includes("پنل") ||
    commend.includes("panel") ||
    commend.includes("dashboard")
  ) {
    if (
      commend.includes("go") ||
      commend.includes("برو") ||
      commend.includes("برگرد") ||
      commend.includes("back")
    ) {
      navigate("/userPanel");
    }
  }
  if (commend.includes("دوره") || commend.includes("course")) {
    if (
      commend.includes("نشون") ||
      commend.includes("نشان") ||
      commend.includes("show")
    ) {
      navigate("/courses");
    }
  }
  if (
    commend.includes("وبلاگ") ||
    commend.includes("خبر") ||
    commend.includes("blog") ||
    commend.includes("news")
  ) {
    if (
      commend.includes("نشون") ||
      commend.includes("نشان") ||
      commend.includes("show")
    ) {
      navigate("/Blog");
    }
  }

  // Copy Url
  if (
    commend.includes("آدرس") &&
    commend.includes("کپی") &&
    commend.includes("صفحه")
  ) {
    handleCopyUrl();
  }

  // Theme
  if (
    commend.includes("دارک مود") ||
    commend.includes("حالت تاریک") ||
    commend.includes("حالت روشن رو بردار") ||
    commend.includes("لایت مود رو بردار")
  ) {
    dispatch(changeThemeAction(true));
    document.documentElement.classList.add("dark");
  }
  if (
    commend.includes("لایت مود") ||
    commend.includes("حالت روشن") ||
    commend.includes("حالت تاریک رو بردار") ||
    commend.includes("دارک مود رو بردار") ||
    commend.includes("light mode")
  ) {
    dispatch(changeThemeAction(false));
    document.documentElement.classList.remove("dark");
  }

  // Language
  if (commend.includes("زبان فارسی")) {
    i18n.changeLanguage("fa");
    setItem("lang", "fa");
  }
  if (commend.includes("زبان انگلیسی")) {
    i18n.changeLanguage("en");
    setItem("lang", "en");
  }
};

export default RunSpeechCommend;

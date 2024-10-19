import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BottomNav, OfflineWarning } from "../components/common";
import { routerPublic, routerPrivate } from "../router";
import ToastAlert from "../components/common/ToastAlert";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { getItem } from "../core/hooks/local-storage";

const App = () => {
  const { i18n } = useTranslation()
  const isLogin = useSelector(state => state.UserInfo.info)
  const token = getItem("token")
  const router = createBrowserRouter(isLogin || token ? routerPrivate : routerPublic);

  useEffect(() => { Aos.init() }, [])

  return (
    <main dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className={`bg-MainBg  ${i18n.language === 'fa' ? 'font-IranSans' : 'font-Pop_Med'}`}>
      <RouterProvider router={router} />
      <ToastAlert />
      <OfflineWarning />
      <BottomNav />
    </main>
  )
}

export default App

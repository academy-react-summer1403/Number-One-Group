import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BottomNav } from "../components/common";
import { routerPublic, routerPrivate } from "../router";
import ToastAlert from "../components/common/ToastAlert";

const App = () => {
  const { i18n } = useTranslation()
  const isLogin = useSelector(state => state.UserInfo.info)
  console.log(isLogin)
  const router = createBrowserRouter(isLogin === false ? routerPublic : routerPrivate);

  return (
    <main dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className={`bg-MainBg  ${i18n.language === 'fa' ? 'font-IranSans' : 'font-Pop_Med'}`}>
      <RouterProvider router={router} />
      <ToastAlert />
      <BottomNav />
    </main>
  )
}

export default App

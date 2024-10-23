import { Route, Routes, useLocation, } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BottomNav, OfflineWarning, PopupLoginWrapper } from "../components/common";
import { routerPublic, routerPrivate } from "../router";
import ToastAlert from "../components/common/ToastAlert";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { getItem } from "../core/hooks/local-storage";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const { i18n } = useTranslation()
  const isLogin = useSelector(state => state.UserInfo.info)
  const token = getItem("token")
  const router = isLogin || token ? routerPrivate : routerPublic;
  const location = useLocation()

  useEffect(() => { Aos.init() }, [])

  return (
    <main dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className={`bg-MainBg  ${i18n.language === 'fa' ? 'font-IranSans' : 'font-Pop_Med'}`}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {router.map((item, index) => (
            <Route key={index + item.path} {...item}>
              {item.children && item.children.map((item, index) => (
                <Route key={index + item.path} {...item}>
                  {item.children && item.children.map((item, index) => (
                    <Route key={index + item.path} {...item} />
                  ))}
                </Route>
              ))}
            </Route>
          ))}
        </Routes>
      </AnimatePresence>
      <ToastAlert />
      <OfflineWarning />
      <PopupLoginWrapper />
      <BottomNav />
    </main>
  )
}

export default App

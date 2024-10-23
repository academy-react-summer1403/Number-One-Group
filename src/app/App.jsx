import { useTranslation } from "react-i18next";
import { BottomNav, OfflineWarning, PopupLoginWrapper } from "../components/common";
import ToastAlert from "../components/common/ToastAlert";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import RouterComponent from "../router";

const App = () => {
  const { i18n } = useTranslation()

  useEffect(() => { Aos.init() }, [])

  return (
    <main dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className={`bg-MainBg  ${i18n.language === 'fa' ? 'font-IranSans' : 'font-Pop_Med'}`}>
      <AnimatePresence mode="wait">
        <RouterComponent />
      </AnimatePresence>
      <ToastAlert />
      <OfflineWarning />
      <PopupLoginWrapper />
      <BottomNav />
    </main>
  )
}

export default App

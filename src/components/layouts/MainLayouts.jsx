import { Outlet } from "react-router-dom"
import Header from "../partials/header/Header";
import Footer from "../partials/Footer/Footer";
import { ScrollToUpButton } from "../common";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <ScrollToUpButton />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayouts
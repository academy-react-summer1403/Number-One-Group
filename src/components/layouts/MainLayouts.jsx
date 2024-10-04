import { Outlet } from "react-router-dom"
import Header from "../partials/header";
import Footer from "../partials/footer";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayouts
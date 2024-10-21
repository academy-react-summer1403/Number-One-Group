import { Outlet, } from "react-router-dom"
import Header from "../partials/header";
import Footer from "../partials/footer";
import { LoadingSpinner } from "../common";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <LoadingSpinner />
      <Footer />
    </>
  )
}

export default MainLayouts
import { Outlet, useLocation } from "react-router-dom"
import Header from "../partials/header";
import Footer from "../partials/footer";
import { useEffect } from "react";
import { LoadingSpinner } from "../common";

const MainLayouts = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
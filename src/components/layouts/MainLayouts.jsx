import { Outlet, useLocation } from "react-router-dom"
import Header from "../partials/header";
import Footer from "../partials/footer";
import { useEffect } from "react";
import { LoadingSpinner } from "../common";

const MainLayouts = () => {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [pathname])

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
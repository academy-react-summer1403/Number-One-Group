import { ScrollProgressBar } from "../../common"
import { useDispatch } from "react-redux"
import { Navbar } from "@nextui-org/react";
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { GetProfileInfo } from "../../../core/services/api/get-data"
import { setInfoAction } from "../../../redux/slices/UserInfo"
import { useQuery } from "@tanstack/react-query"
import { getItem } from "../../../core/hooks/local-storage"
import LeftSectionItems from "./LeftSectionItems"
import RightSection from "./RightSection"

const Header = () => {
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [visibleMenu, setVisibleMenu] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  const token = getItem("token")

  const { data: userInfo, isSuccess } = useQuery({
    queryKey: ["GET-USER-PROFILE", location],
    queryFn: GetProfileInfo,
    enabled: token ? true : false
  })

  if (isSuccess) { dispatch(setInfoAction(userInfo)) }

  return (
    <Navbar
      shouldHideOnScroll={visibleMenu || visibleSearch ? false : true}
      className="flex gap-x-10 items-center justify-between py-3"
      maxWidth="full"
    >
      <div className="w-fit flex gap-x-6 items-center min-[1360px]:px-20 sm:px-10 px-3">
        <RightSection setVisibleMenu={setVisibleMenu} visibleMenu={visibleMenu} />
      </div>
      <div className="w-fit h-[42px] flex gap-x-3 justify-end items-center min-[1360px]:px-20 sm:px-10 px-3">
        <LeftSectionItems
          setVisibleSearch={setVisibleSearch}
          visibleSearch={visibleSearch}
        />
      </div>
      <ScrollProgressBar />
    </Navbar>
  )
}

export default Header
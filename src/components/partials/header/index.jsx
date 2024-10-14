import { menuItem } from "../../../core/constants/Header/headerData"
import MenuHeader from "./MenuHeader"
import { HamburgerMenu, LogoGroup, SearchInput } from "../../common"
import { CartIcon, FavoriteIcon } from "../../../core/icon"
import MediaQuery from "react-responsive"
import BasketItems from "./BasketItem"
import { useDispatch } from "react-redux"
import { Navbar } from "@nextui-org/react";
import SideBarMenu from "./SideBarMenu"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { GetProfileInfo } from "../../../core/services/api/get-data"
import { setInfoAction } from "../../../redux/slices/UserInfo"
import HeaderButtons from "./HeaderButtons"
import { useQueryWithDependencies } from "../../../core/hooks/react-query"
import { useQuery } from "@tanstack/react-query"
import { getItem } from "../../../core/hooks/local-storage"

const Header = () => {
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [visibleMenu, setVisibleMenu] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()

  const baskets = [
    { icon: CartIcon, number: 0, href: "/cart", tooltip: ["سبد خرید", "Cart"] },
    { icon: FavoriteIcon, number: 0, href: "", tooltip: ["لیست علاقه مندی", "Favorite List"] },
  ];

  const menuItems = menuItem.map((item, index) => {
    return (
      <MenuHeader
        key={index}
        href={item.href}
        title={item.title} />
    )
  });

  const basketItems = baskets.map((item, index) => <BasketItems key={index} item={item} />);

  const token = getItem('token')

  const {data: userInfo, isSuccess} = useQuery({
    queryKey: ["GET-USER-PROFILE", location],
    queryFn: GetProfileInfo,
    enabled: token ? true : false
  })
  
  if (isSuccess) { dispatch(setInfoAction(userInfo)) }

  return (
    <Navbar
      shouldHideOnScroll={visibleMenu || visibleSearch ? false : true}
      className="flex gap-x-10 items-center justify-between min-[1360px]:px-20 sm:px-10 px-3 py-3"
      maxWidth="full"
    >
      <div className="w-fit flex gap-x-6 items-center">
        <LogoGroup color={'text-VioletBlue'} />
        <MediaQuery minWidth={"1024px"}>
          <div className="w-fit flex gap-x-6 items-center">
            {menuItems}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={"1024px"}>
          <HamburgerMenu setVisible={setVisibleMenu} visible={visibleMenu} style={'bg-VioletBlue dark:bg-LightLavender z-50 p-8'}>
            <SideBarMenu basketItems={basketItems} menuItems={menuItems} />
          </HamburgerMenu >
        </MediaQuery>
      </div>
      <div className="w-fit h-[42px] flex gap-x-3 justify-end items-center ">
        <MediaQuery minWidth={"1285px"}>
          <SearchInput />
        </MediaQuery>
        <HeaderButtons
          setVisibleSearch={setVisibleSearch}
          visibleSearch={visibleSearch}
          basketItems={basketItems}
        />
      </div>
    </Navbar>
  )
}

export default Header
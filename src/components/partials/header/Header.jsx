import { menuItem } from "../../../core/constants/Header/headerData"
import MenuHeader from "./menuHeader"
import { useTranslation } from "react-i18next"
import { Button, HamburgerMenu, LogoGroup, SearchInput, SearchModal } from "../../common"
import { CartIcon, FavoriteIcon } from "../../../core/icon"
import MediaQuery from "react-responsive"
import BasketItems from "./basketItems"
import { useSelector } from "react-redux"
import { Navbar, Tooltip } from "@nextui-org/react";
import SideBarMenu from "./SideBarMenu"
import tooltipStyle from "../../../core/constants/tooltip-style/tooltip"
import { useState } from "react"
import SearchBtn from "../../common/searchBox/SearchBtn"

const Header = () => {
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [visibleMenu, setVisibleMenu] = useState(false)
  const { t, i18n } = useTranslation();
  const cartLength = useSelector(state => state.CartData.value.length)

  const baskets = [
    { icon: CartIcon, number: cartLength, href: "/cart", tooltip: ["سبد خرید", "Cart"] },
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

  const basketItems = baskets.map((item, index) => {
    return (
      <Tooltip key={index} {...tooltipStyle} content={i18n.language == "en" ? item.tooltip[1] : item.tooltip[0]}>
        <div>
          <BasketItems href={item.href} Icon={item.icon} number={item.number} />
        </div>
      </Tooltip>
    )
  });

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
        <MediaQuery maxWidth={"1284px"}>
          <div onClick={() => { setVisibleSearch(true) }} className="cursor-pointer">
            <SearchBtn />
          </div>
          <SearchModal setVisible={setVisibleSearch} visible={visibleSearch} />
        </MediaQuery>
        <MediaQuery minWidth={"768px"}>
          {basketItems}
        </MediaQuery>
        <Button href={"/authorize/login"} disableArrow={'hidden'} vType={'link'} vStyle={"yellow"} style={'shadow-none !pt-2 !pb-2'} text={'Login'} />
      </div>
    </Navbar>
  )
}

export default Header
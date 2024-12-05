import React, { Fragment } from 'react'
import { HamburgerMenu, LogoGroup } from '../../common'
import MediaQuery from 'react-responsive'
import Menu from "./Menu"

const RightSection = ({ setVisibleMenu, visibleMenu }) => {
    return (
        <Fragment>
            <LogoGroup color={'text-VioletBlue'} />
            <MediaQuery minWidth={"1024px"}>
                <div className="w-fit flex gap-x-6 items-center">
                    <Menu />
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={"1024px"}>
                <HamburgerMenu
                    setVisible={setVisibleMenu}
                    visible={visibleMenu}
                    style={'bg-VioletBlue dark:bg-LightLavender z-50 p-8'}
                >
                    {/* <SideBarMenu basketItems={basketItems} menuItems={menuItem} /> */}
                </HamburgerMenu >
            </MediaQuery>
        </Fragment>
    )
}

export default RightSection

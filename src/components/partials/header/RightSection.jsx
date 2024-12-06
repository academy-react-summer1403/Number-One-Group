import React, { Fragment } from 'react'
import { HamburgerMenu, LogoGroup } from '../../common'
import MediaQuery from 'react-responsive'
import Menu from "./Menu"
import SideBarMenu from './SideBarMenu'

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
                    <SideBarMenu />
                </HamburgerMenu >
            </MediaQuery>
        </Fragment>
    )
}

export default RightSection

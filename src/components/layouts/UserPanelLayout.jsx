import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setInfoAction } from '../../redux/slices/UserInfo'
import { getItem } from '../../core/hooks/local-storage'
import { GetProfileInfo } from '../../core/services/api/get-data'
import { useQueryWithDependencies } from '../../core/hooks/react-query'
import UserPanelHeader from '../partials/user-panel-header'
import { SidebarUserPanel } from '../pages/user-panel'
import { HamburgerMenu } from '../common'

const UserPanelLayout = () => {
    const [visibleMenu, setVisibleMenu] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
    const { i18n } = useTranslation()

    const { data, isSuccess } = useQueryWithDependencies("GET_PROFILE_INFO", GetProfileInfo, location, null)
    if (isSuccess) {
        const token = getItem("token")
        if (!token) return

        dispatch(setInfoAction(data))
    }

    return (
        <div className='relative w-full lg:h-[813px] flex'>
            <MediaQuery minWidth="1280px">
                <div className='min-w-[308px] w-[308px] h-svh bg-transparent'></div>
                <div className={`min-w-[308px] w-[308px] h-svh bg-VioletBlue dark:bg-[#1B1B2A] flex justify-center flex-wrap fixed top-0 ${i18n.language == "fa" ? "right-0" : "left-0"}`}>
                    <SidebarUserPanel />
                </div>
            </MediaQuery>
            <div className='flex flex-wrap sm:p-6 gap-y-5 h-fit bg-MainBg w-full'>
                <MediaQuery maxWidth="1279px">
                    <div className='w-full h-fit flex items-center justify-between xl:justify-end'>
                        <HamburgerMenu setVisible={setVisibleMenu} visible={visibleMenu} style="bg-VioletBlue dark:bg-LightLavender flex justify-center flex-wrap pt-12 pb-20">
                            <SidebarUserPanel />
                        </HamburgerMenu>
                    </div>
                </MediaQuery>
                <UserPanelHeader />
                <div className='w-full flex justify-center'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserPanelLayout

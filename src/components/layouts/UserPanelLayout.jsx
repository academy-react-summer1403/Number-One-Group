import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { Tooltip } from '@nextui-org/react'
import tooltipStyle from '../../core/constants/tooltip-style'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setInfoAction } from '../../redux/slices/UserInfo'
import { getItem } from '../../core/hooks/local-storage'
import { GetProfileInfo } from '../../core/services/api/get-data'
import { useQueryWithDependencies } from '../../core/hooks/react-query'
import UserPanelHeader from '../partials/user-panel-header'
import { SidebarUserPanel } from '../pages/user-panel'
import { HomeBtnPanelIcon } from '../../core/icon'
import { HamburgerMenu } from '../common'

const UserPanelLayout = () => {
    const [visibleMenu, setVisibleMenu] = useState(false)
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    const location = useLocation()

    const { data, isSuccess } = useQueryWithDependencies("GET_PROFILE_INFO", GetProfileInfo, location, null)
    if (isSuccess) {
        const token = getItem("token")
        if (!token) return

        dispatch(setInfoAction(data))
    }

    return (
        <div className='py-10 flex flex-wrap gap-y-10 sm:px-16 px-8'>
            {/* <UserPanelHeader /> */}
            <div className='relative w-full lg:h-[813px] flex rounded-2xl overflow-hidden sm:userPanel_holder_shadow'>
                <MediaQuery minWidth="1280px">
                    <div className='min-w-[308px] w-[308px] bg-VioletBlue dark:bg-[#1B1B2A] flex justify-center flex-wrap py-12'>
                        <SidebarUserPanel />
                    </div>
                </MediaQuery>
                <div className='w-full h-full flex flex-wrap sm:p-6'>
                    <div className='w-full h-fit flex items-center justify-between xl:justify-end'>
                        <MediaQuery maxWidth="1279px">
                            <HamburgerMenu setVisible={setVisibleMenu} visible={visibleMenu} style="bg-VioletBlue dark:bg-LightLavender flex justify-center flex-wrap pt-12 pb-20">
                                <SidebarUserPanel />
                            </HamburgerMenu>
                        </MediaQuery>
                        <UserPanelHeader />
                    </div>
                    <div className='w-full h-full py-14 flex justify-center'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPanelLayout

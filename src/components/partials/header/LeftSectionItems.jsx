import { useQuery } from '@tanstack/react-query'
import React, { Fragment, useEffect, useState } from 'react'
import { GetMyFavoriteBlogs, GetMyFavoriteCourses } from '../../../core/services/api/get-data'
import { getItem } from '../../../core/hooks/local-storage'
import { CartIcon, FavoriteIcon } from '../../../core/icon'
import MediaQuery from 'react-responsive'
import SearchBtn from '../../common/searchBox/SearchBtn'
import { CustomButton, ImageFallBack, SearchInput, SearchModal } from '../../common'
import BasketItems from './BasketItem'
import { useSelector } from 'react-redux'

import tooltipStyle from '../../../core/constants/tooltip-style'
import { Link } from 'react-router-dom'
import fallback from "../../../assets/images/user-circle-icon.png"
import { Tooltip } from '@nextui-org/react'
import StatusButton from './StatusButton'

const LeftSectionItems = ({ setVisibleSearch, visibleSearch }) => {
    const UserInfo = useSelector(state => state.UserInfo.info)

    return (
        <Fragment>
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
                <StatusButton />
            </MediaQuery>
            {
                UserInfo == false ?
                    <CustomButton
                        href={"/authorize/login"}
                        disableArrow={'hidden'}
                        vType={'link'}
                        vStyle={"yellow"}
                        style={'shadow-none !pt-2 !pb-2'}
                        text={'Login'}
                    /> :
                    <Tooltip {...tooltipStyle} content={`${UserInfo.lName} ${UserInfo.fName}`}>
                        <Link to={"/userPanel"}>
                            <ImageFallBack
                                alt={"Profile"}
                                fallback={fallback}
                                src={UserInfo.userImage[0] && UserInfo.userImage[0].puctureAddress}
                                className="rounded-full w-10 h-10"
                            />
                        </Link>
                    </Tooltip>
            }
        </Fragment>
    )
}

export default LeftSectionItems

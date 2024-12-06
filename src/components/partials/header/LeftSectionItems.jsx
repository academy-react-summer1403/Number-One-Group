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

const LeftSectionItems = ({ setVisibleSearch, visibleSearch }) => {
    const token = getItem('token')
    const cartItems = getItem('cartItems')
    const UserInfo = useSelector(state => state.UserInfo.info)

    // Get Favorite Blogs
    const { data: blogFavorite, } = useQuery({
        queryKey: ["GET_MY_FAVORITES"],
        queryFn: GetMyFavoriteBlogs,
        enabled: token ? true : false
    })

    // Get Favorite Courses
    const { data: courseFavorite, } = useQuery({
        queryKey: ["GET_MY_COURSES"],
        queryFn: GetMyFavoriteCourses,
        enabled: token ? true : false
    })

    const myFavoriteLength =
        courseFavorite?.favoriteCourseDto?.length + blogFavorite?.myFavoriteNews?.length;

    const StatusButtonItems = [
        { icon: CartIcon, number: cartItems?.length ? cartItems?.length : 0, href: "/cart", tooltip: ["سبد خرید", "Cart"] },
        { icon: FavoriteIcon, number: myFavoriteLength ? myFavoriteLength : 0, href: UserInfo !== false && "/userPanel/favorites", tooltip: ["لیست علاقه مندی", "Favorite List"] },
    ];

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
                {StatusButtonItems?.map((item, index) => <BasketItems key={index} item={item} />)}
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

import React from 'react'
import MediaQuery from 'react-responsive'
import SearchBtn from '../../common/searchBox/SearchBtn'
import { Button, SearchModal } from '../../common'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HeaderButtons = ({ setVisibleSearch, visibleSearch, basketItems }) => {
    const userInfo = useSelector(state => state.UserInfo.info)

    return (
        <>
            <MediaQuery maxWidth={"1284px"}>
                <div onClick={() => { setVisibleSearch(true) }} className="cursor-pointer">
                    <SearchBtn />
                </div>
                <SearchModal setVisible={setVisibleSearch} visible={visibleSearch} />
            </MediaQuery>
            <MediaQuery minWidth={"768px"}>
                {basketItems}
            </MediaQuery>
            {
                userInfo == false ?
                    <Button
                        href={"/authorize/login"}
                        disableArrow={'hidden'}
                        vType={'link'}
                        vStyle={"yellow"}
                        style={'shadow-none !pt-2 !pb-2'}
                        text={'Login'}
                    /> :
                    <Link>
                        {/* <img className="rounded-full w-10 h-10" src={userInfo.userImage[0].puctureAddress} alt="Profile" /> */}
                    </Link>
            }
        </>
    )
}

export default HeaderButtons

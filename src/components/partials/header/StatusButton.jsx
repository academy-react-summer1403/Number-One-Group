import { useSelector } from "react-redux"
import { getItem } from "../../../core/hooks/local-storage"
import { useQuery } from "@tanstack/react-query"
import { GetMyFavoriteBlogs, GetMyFavoriteCourses } from "../../../core/services/api/get-data"
import { CartIcon, FavoriteIcon } from "../../../core/icon"
import BasketItems from "./BasketItem"

const StatusButton = () => {
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

    return StatusButtonItems?.map((item, index) => <BasketItems key={index} item={item} />)
}

export default StatusButton

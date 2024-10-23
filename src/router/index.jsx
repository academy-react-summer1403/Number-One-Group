import routerPublic from "./UnAuthenticatedRoute";
import routerPrivate from "./AuthenticatedRoute";
import { useSelector } from "react-redux";
import { getItem } from "../core/hooks/local-storage";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const RouterComponent = () => {
    const isLogin = useSelector(state => state.UserInfo.info)
    const token = getItem("token")
    const router = isLogin || token ? routerPrivate : routerPublic;
    const location = useLocation()
    const [toExist, setToExist] = useState(false)

    useEffect(() => {
        const exist = location.pathname.includes("/userPanel")

        if (exist === true) setToExist(true)
        else setToExist(false)
    }, [location])

    return (
        !toExist ? (
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname} >
                    {router.map((item, index) => (
                        <Route key={index + item.path} {...item}>
                            {item.children && item.children.map((item, index) => (
                                <Route key={index + item.path} {...item}>
                                    {item.children && item.children.map((item, index) => (
                                        <Route key={index + item.path} {...item} />
                                    ))}
                                </Route>
                            ))}
                        </Route>
                    ))}
                </Routes>
            </AnimatePresence>
        ) : (
            <Routes>
                {router.map((item, index) => (
                    <Route key={index + item.path} {...item}>
                        {item.children && item.children.map((item, index) => (
                            <Route key={index + item.path} {...item}>
                                {item.children && item.children.map((item, index) => (
                                    <Route key={index + item.path} {...item} />
                                ))}
                            </Route>
                        ))}
                    </Route>
                ))}
            </Routes>
        )
    )
}


export default RouterComponent
import { useEffect, } from "react"
import { MoonIcon, SunIcon } from "../../../core/icon"
import { useSelector, useDispatch } from "react-redux"
import { changeThemeAction } from "../../../redux/slices/DarkMode"

const ThemeButton = () => {
    const theme = useSelector(state => state.DarkMode)
    const iconProps = { width: "24px", height: "24px", fill: "#fff" }
    const dispatch = useDispatch()

    useEffect(() => {
        if (theme === true) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    return (
        <div onClick={() => { dispatch(changeThemeAction()) }} className="bottomNav">
            {theme ? <MoonIcon {...iconProps} /> : <SunIcon {...iconProps} />}
        </div>
    )
}

export default ThemeButton

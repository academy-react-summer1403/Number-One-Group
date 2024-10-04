import { CloseIcon, MenuIcon } from "../../core/icon"
import { useTranslation } from "react-i18next"

const HamburgerMenu = ({ children, style, visible, setVisible }) => {
    const { i18n } = useTranslation()

    return (
        <>
            <div onClick={() => { setVisible(!visible); }} className="cursor-pointer hover:scale-110 duration-200">
                <MenuIcon width="25" height="25px" />
            </div>
            <div
                onClick={() => { setVisible(false) }}
                style={{ opacity: visible ? "1" : "0", visibility: visible ? "visible" : "hidden", }}
                className={`w-full duration-250 h-svh fixed top-0 right-0 bg-black/55 z-[5000]`}>
            </div>
            <div
                className={`
                    ${i18n.language == "en" ? "left-0" : "right-0"} 
                    ${visible ? "w-[308px] animate-mobileMenu" : "w-0 px-0"} 
                    h-svh fixed top-0 select-none z-[5000] overflow-x-hidden overflow-y-auto 
                    ${style}
                `}>
                <div onClick={() => { setVisible(false) }} className={`${i18n.language != "en" ? "right-6" : "left-6"}  absolute top-6 cursor-pointer hover:scale-105 duration-200 w-8 h-8 bg-SunshineYellow rounded-full flex justify-center items-center`}><CloseIcon /></div>
                {children}
            </div>
        </>
    )
}

export default HamburgerMenu

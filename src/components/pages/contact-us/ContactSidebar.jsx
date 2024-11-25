import { useTranslation } from "react-i18next"
import SidebarItem from "./SidebarItem"
import { sidebarItems } from "../../../core/constants/contact"

const ContactSidebar = () => {
    const { i18n } = useTranslation()

    return (
        <div className="w-full xl:w-2/6 h-full flex flex-wrap md:flex-nowrap xl:flex-wrap gap-4 xl:gap-y-6">
            {sidebarItems.map((item, index) => {
                if (i18n.language == "fa") {
                    return (<SidebarItem key={"fa" + index} Icon={item.icon} title={item.title[0]} paragraph={item.paragraph[0]} />)
                } else {
                    return (<SidebarItem key={"en" + index} Icon={item.icon} title={item.title[1]} paragraph={item.paragraph.length > 1 ? item.paragraph[1] : item.paragraph} />)
                }
            })}
        </div>
    )
}

export default ContactSidebar
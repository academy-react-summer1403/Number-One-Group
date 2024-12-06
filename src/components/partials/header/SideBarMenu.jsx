import MediaQuery from "react-responsive"
import { CustomButton, LogoGroup } from "../../common"
import { menuItem } from '../../../core/constants/Header/headerData'
import MenuHeaderItems from "./MenuHeaderItems"
import StatusButton from "./StatusButton"

const SideBarMenu = () => {
    return (
        <div className="mx-auto my-12">
            <MediaQuery maxWidth={'768px'}>
                <div className="flex gap-3 items-center justify-between">
                    <div className="flex gap-1 absolute left-6 top-6">
                        <StatusButton />
                    </div>
                </div>
            </MediaQuery>
            <div>
                {menuItem.map((item, index) => (
                    <MenuHeaderItems
                        key={index}
                        href={item.href}
                        title={item.title}
                    />
                ))}
            </div>
            <div className="bg-LightGray w-fit p-2 rounded-full mt-28 mx-auto">
                <LogoGroup />
            </div>
        </div>
    )
}

export default SideBarMenu
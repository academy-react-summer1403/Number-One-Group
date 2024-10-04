import { LinksFooter } from "../../../core/constants/Footer/footerData"
import LinkSections from "./LinkSections"
// import { Apps, Link_Item } from "./components"

const LinksWrapper = () => {
    return (
        <div className="md:w-[69%] max-md:mt-6 sm:pl-14">
            <div className="flex flex-wrap gap-1 justify-between">
                {LinksFooter.map((item, index) => (
                    <LinkSections
                        key={index}
                        showSocialNetworks={item.showSocialNetworks}
                        links={item.links}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default LinksWrapper
import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/mannequin-faqPoster.png"

const CategoryItem = ({ title, amount, icon }) => {
    return (
        <div className="lg:w-32 flex flex-wrap gap-y-3 justify-center">
            <div className="w-full h-32 flex items-center justify-center rounded-full border border-LightGrayish bg-gradient-to-t from-neutral-300 dark:from-neutral-800 to-neutral-50">
                <ImageFallBack 
                    alt={"Icon"}
                    src={icon}
                    fallback={fallback}
                    className={"w-10 h-10"}
                />
            </div>
            <div className="w-full flex flex-wrap justify-center gap-y-1">
                <h2 className="w-full text-center text-DarkBlue">{title}</h2>
                <span className="!font-Number text-sm text-neutral-400">({amount})</span>
            </div>
        </div>
    )
}

export default CategoryItem
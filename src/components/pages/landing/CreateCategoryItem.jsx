import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/CategoryDefaultIcon.png"
import Tilt from 'react-parallax-tilt';

const CategoryItem = ({ title, amount, icon }) => {
    return (
        <Tilt tiltAngleXInitial={20} tiltAngleYInitial={-20}>
            <div
                className="xl:w-[240px] xl:h-[240px] sm:w-48 sm:h-48 p-8 rounded-3xl bg-gradient-to-b from-neutral-400 dark:from-neutral-700
             to-neutral-200 dark:to-neutral-900 max-sm:mx-auto max-sm:mt-2 flex flex-wrap justify-center z-50"
            >
                <div className="xl:w-28 xl:h-28 flex items-center justify-center rounded-3xl border border-LightGrayish">
                    <ImageFallBack
                        alt={"Icon"}
                        src={icon}
                        fallback={fallback}
                        className={"w-10 h-10"}
                    />
                </div>
                <div className="w-full flex flex-wrap justify-center gap-y-1">
                    <h2 className="w-full text-center text-DarkBlue text-xl">{title}</h2>
                    <span className="!font-Number text-neutral-400">({amount})</span>
                </div>
            </div>
        </Tilt>
    )
}

export default CategoryItem
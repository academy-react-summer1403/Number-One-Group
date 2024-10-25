import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/CategoryDefaultIcon.png"
import { motion } from "framer-motion"

const CategoryItem = ({ title, amount, icon }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1, }}
            className="w-[250px] h-[250px] p-8 rounded-3xl bg-gradient-to-t from-neutral-300 dark:from-neutral-800 to-neutral-50 odd:-mt-[60px] even:mt-[10px] flex flex-wrap justify-center"
        >
            <div className="w-28 h-28 flex items-center justify-center rounded-3xl border border-LightGrayish">
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
        </motion.div>
    )
}

export default CategoryItem
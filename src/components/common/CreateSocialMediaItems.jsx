import { motion } from "framer-motion"

const CreateSocialMediaItems = ({ Icon, style }) => {
    return (
        <motion.div
            whileHover={{
                marginLeft: 5,
                marginRight: 5,
                scale: 1.2,
            }}
            className={`mt-2 w-8 h-8 rounded-full border border-neutral-500 flex justify-center items-center ${style}`}
        >
            {Icon}
        </motion.div>
    )
}

export default CreateSocialMediaItems

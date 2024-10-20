import { motion } from "framer-motion"

const PageTransition = ({ children, name }) => {
    return (
        <>
            {children}
            <motion.div
                initial={{ x: "100vw", }}
                animate={{ x: "100vw" }}
                exit={{ x: "0", }}
                transition={{
                    type: "spring",
                    duration: 0.8,
                    ease: "easeIn",
                    stiffness: 100,
                    delay: 1
                }}
                className="w-full h-svh bg-[#171717] fixed top-0 left-0 z-50"
            ></motion.div>
            <motion.div
                initial={{ x: "0vw", }}
                animate={{ x: "-125vw" }}
                exit={{ x: "-130vw", }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 2
                }}
                className="w-full h-svh bg-[#171717] fixed top-0 left-0 z-50 flex justify-center items-center"
            >
                <motion.h1
                    initial={{ scale: 0, opacity: 0, }}
                    animate={{ scale: 1.3, opacity: 1, }}
                    exit={{ opacity: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    className="text-white text-3xl"
                >
                    {name && name}
                </motion.h1>
            </motion.div>
        </>
    )
}

export default PageTransition

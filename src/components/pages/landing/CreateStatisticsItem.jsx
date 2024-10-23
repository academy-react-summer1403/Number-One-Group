import CountUp from 'react-countup'
import MediaQuery from 'react-responsive'
import { motion } from 'framer-motion'

const CreateStatisticsItem = ({ Statistics, name, isBorder = false }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-1/2 md:w-1/4 h-full flex items-center flex-wrap"
            >
                <h1 className="w-full text-white sm:text-5xl max-sm:text-3xl text-center" dir="ltr">
                    <CountUp
                        end={Statistics}
                        duration={50}
                    />
                </h1>
                <p className="w-full text-center max-sm:text-sm text-white">{name}</p>
            </motion.div>
            <MediaQuery minWidth={"768px"}>
                {isBorder ? <div className="w-0.5 bg-gradient-to-b from-white rounded-full"></div> : null}
            </MediaQuery>
        </>
    )
}

export default CreateStatisticsItem

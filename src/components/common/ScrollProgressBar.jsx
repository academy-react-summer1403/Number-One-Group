import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollProgressBar = () => {
    const { scrollYProgress } = useScroll(); // Track scroll progress
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]); // Transform scroll progress to scale

    return (
        <motion.div
            style={{
                position: 'absolute',
                bottom: "-17px",
                left: 0,
                height: '5px',
                width: '100%',
                backgroundColor: '#FFC224',
                scaleX, // Apply the scale based on scroll progress
                transformOrigin: '100%', // Scale from the left
                zIndex: 1000, // Ensure it's above other content
            }}
        />
    )
}

export default ScrollProgressBar

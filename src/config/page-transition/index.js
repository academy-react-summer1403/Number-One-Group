const configVariants = {
  initial: { x: "100vw" },
  animate: {
    x: "0",
    transition: {
      ease: "easeIn",
      duration: 0.5,
      stiffness: 100,
      type: "spring",
      delay: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeIn",
      duration: 1,
      delay: 0.5,
    },
  },
};

export default configVariants;

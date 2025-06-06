export const slideUp = {
    initial: {
        y: "-200px",
        opacity: 0,
    },
    animate: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    }
}

export const straggerContainer = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
}

export const fadeBlur = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export const transitionFade = {duration: 1, ease: [.25,.1,.25,1]};



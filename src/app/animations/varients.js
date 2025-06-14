export const slideUp = {
    hidden: {
        y: "80px",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
    }
}


export const fadeBlur = {
  hidden: { filter: "blur(10px)", transform: "translateX(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateX(0)", opacity: 1 },
};

export const transitionFade = {duration: 1, ease: [.25,.1,.25,1]};



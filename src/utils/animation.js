export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };
  
  export const zoomInUp = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 40,
    },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };


export const swingLeftFwd = {
  initial: {
    rotateY: 0,
    transformOrigin: "left bottom",
  },
  animate: {
    rotateY: -180,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const swingRightFwd = {
  initial: {
    rotateY: 0,
    transformOrigin: "right bottom",
  },
  animate: {
    rotateY: 180,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};


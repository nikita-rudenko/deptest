import type { Variants } from "framer-motion"

export const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
}

export const imageVariants: Variants = {
  hover: {
    scale: 1.08,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
}

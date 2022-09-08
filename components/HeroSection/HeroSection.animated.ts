import { Variants } from "framer-motion"

export const imageVariants: Variants = {
  show: {
    scale: 1.08,
    transition: {
      duration: 1,
    },
  },
}

export const textContentVariants: Variants = {
  initial: {
    opacity: 0,
    y: "100px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
}

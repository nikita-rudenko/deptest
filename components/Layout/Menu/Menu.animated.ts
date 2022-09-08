import type { Variants } from "framer-motion"

export const overlayVariants: Variants = {
  off: {
    opacity: 0,
  },
  on: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export const linksVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const linkVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

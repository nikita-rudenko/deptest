import type { Variants } from "framer-motion"

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

export const menuVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.2,
    },
  },
  hover: {
    scale: 1.2,
  },
}

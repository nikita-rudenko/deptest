import type { Variants } from "framer-motion"

export const brandsVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const brandVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

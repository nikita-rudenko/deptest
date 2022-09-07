import { motion } from "framer-motion"

import { Box } from "components/Box"
import { styled } from "stitches.config"

export const Container = styled(motion.div, {
  "overflow": "hidden",
  "height": "415px",
  "position": "relative",
  "background":
    "linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0) 100%)",
  "@md": {
    height: "628px",
  },
})

export const GradientOverlay = styled(Box, {
  width: "100%",
  height: "100%",
  zIndex: "$docked",
  position: "absolute",
  overflow: "hidden",
  background:
    "linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0) 100%)",
})

export const ImageContainer = styled(motion.div, {
  overflow: "hidden",
  height: "100%",
  position: "relative",
  width: "100%",
})

export const TextContent = styled(motion.div, {
  "color": "$fWhite",
  "position": "absolute",
  "zIndex": "$docked",
  "left": "16px",
  "bottom": "22px",
  "maxWidth": "400px",

  "@md": {
    left: "56px",
    bottom: "84px",
    maxWidth: "610px",
  },
})

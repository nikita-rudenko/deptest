import { motion } from "framer-motion"

import { Box } from "components/Box"
import { styled } from "stitches.config"

export const Container = styled(motion.a, {
  "display": "block",
  "overflow": "hidden",
  "height": "484px",
  "position": "relative",
  "width": "100%",
  "cursor": "pointer",

  "@md": {
    height: "568px",
  },
})

export const ImageContainer = styled(motion.div, {
  overflow: "hidden",
  height: "100%",
  position: "relative",
  width: "100%",
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

export const TextContent = styled(Box, {
  "color": "$fWhite",
  "position": "absolute",
  "zIndex": "$docked",
  "left": "24px",
  "bottom": "24px",
  "right": "24px",

  "> *:not(:last-child)": {
    marginBottom: "16px",
  },

  "@md": {
    left: "32px",
    bottom: "32px",
    right: "32px",
  },
})

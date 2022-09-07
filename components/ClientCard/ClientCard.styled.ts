import { Box } from "components/Box"
import { styled } from "stitches.config"

export const Container = styled(Box, {
  "overflowX": "hidden",
  "height": "484px",
  "position": "relative",
  "width": "100%",

  "@md": {
    height: "568px",
  },
})

export const GradientOverlay = styled(Box, {
  width: "100%",
  height: "100%",
  zIndex: "$docked",
  position: "absolute",
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

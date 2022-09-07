import { Box } from "components/Box"
import { styled } from "stitches.config"

export const CTAContainer = styled(Box, {
  "display": "flex",
  "justifyContent": "space-between",
  "alignItems": "center",
  "background": "$black",
  "color": "$fWhite",
  "padding": "32px 16px",

  "@md": {
    padding: "32px",
    background: "$fWhite",
    color: "$black",
  },
})

export const MutedText = styled("span", {
  color: "$lightGrey",
})

export const UnderlinedText = styled("span", {
  textDecoration: "underline",
})

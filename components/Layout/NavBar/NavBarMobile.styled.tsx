import { styled } from "stitches.config"

export const NavBarContainer = styled("nav", {
  "display": "flex",
  "height": "56px",
  "backgroundColor": "$fWhite",
  "alignItems": "center",
  "justifyContent": "space-between",
  "padding": "18px 16px 20px",

  "@lg": {
    display: "none",
  },
})

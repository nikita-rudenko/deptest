import { styled } from "stitches.config"

export const Container = styled("header", {
  "display": "none",
  "height": "115px",
  "padding": "45px 56px",
  "justifyContent": "space-between",
  "alignItems": "center",
  "color": "$fWhite",

  "@lg": {
    display: "flex",
  },
})

export const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
})

export const LinksList = styled("div", {
  "display": "flex",

  "> *:not(:last-child)": {
    marginRight: "48px",
  },
})

export const LinkItem = styled("div", {
  "textTransform": "uppercase",

  "> a": {
    color: "$fWhite",
    textDecoration: "none",
  },
})

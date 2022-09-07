import { styled } from "stitches.config"

export const Container = styled("div", {
  "padding": "48px 36px",
  "background": "$fWhite",
  "display": "flex",
  "flexDirection": "column",

  "@lg": {
    padding: "72px 48px",
    flexDirection: "row",
  },
})

export const ContactForm = styled("form", {
  "width": "100%",
  "display": "grid",
  "gridTemplateColumns": "1fr",
  "columnGap": "38px",
  "rowGap": "38px",
  "marginTop": "38px",

  "@lg": {
    marginTop: 0,
    gridTemplateColumns: "1fr 1fr",
  },
})

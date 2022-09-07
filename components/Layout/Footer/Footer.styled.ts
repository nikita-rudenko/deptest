import { styled } from "stitches.config"

export const Container = styled("footer", {
  color: "$fWhite",
  padding: "66px 50px",
})

export const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
})

export const LinksList = styled("div", {
  "display": "flex",
  "flexDirection": "column",

  "> *:not(:last-child)": {
    marginBottom: "48px",
  },

  "@lg": {
    "flexDirection": "row",
    "> *:not(:last-child)": {
      marginBottom: "0",
      marginRight: "48px",
    },
  },
})

export const LinkItem = styled("div", {
  "textTransform": "uppercase",

  "> a": {
    color: "$fWhite",
    textDecoration: "none",
  },
})

export const Separator = styled("div", {
  height: "1px",
  background: "$grey",
  width: "100%",
  margin: "60px 0 45px",
})

export const LegalInfoList = styled("div", {
  "display": "flex",
  "flexDirection": "column",
  "color": "$lightGrey",

  "> *:last-child": {
    marginTop: "24px",
  },

  "@lg": {
    "flexDirection": "row",

    "> *:not(:last-child)": {
      marginRight: "48px",
    },
    "> *:last-child": {
      marginTop: "0",
      marginLeft: "auto",
    },
  },
})

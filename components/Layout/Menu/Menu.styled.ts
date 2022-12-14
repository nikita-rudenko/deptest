import { motion } from "framer-motion"

import { styled } from "stitches.config"

export const Overlay = styled(motion.div, {
  background: "$black",
  width: "100%",
  height: "100%",
  zIndex: "$overlay",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
})

export const Header = styled("div", {
  color: "$fWhite",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const LinksList = styled(motion.nav, {
  "display": "flex",
  "color": "$fWhite",
  "textAlign": "right",
  "justifyContent": "center",
  "flexDirection": "column",
  "padding": "10px",

  "> *:not(:last-child)": {
    "&::after": {
      content: "",
      margin: "10px 0",
    },
  },
})

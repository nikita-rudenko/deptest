import { Box } from "components/Box"
import { styled } from "stitches.config"

export const Container = styled(Box, {
  "display": "flex",
  "flexDirection": "column",

  "@lg": {
    display: "grid",
  },

  "variants": {
    cardPosition: {
      left: {
        gridTemplateColumns: "67% 1fr",
      },
      right: {
        gridTemplateColumns: "1fr 67%",
        flexDirection: "column-reverse",
      },
    },
  },
})

export const NotesList = styled(Box, {
  "color": "$fWhite",
  "display": "flex",
  "justifyContent": "center",
  "flexDirection": "column",
  "padding": "32px",

  "> *:not(:last-child)": {
    "&::after": {
      margin: "36px 0",
      content: "",
      display: "block",
      width: "100%",
      height: "1px",
      background: "#fff",
    },
  },
})

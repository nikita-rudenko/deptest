import { styled } from "stitches.config"

export const Button = styled("button", {
  border: "1px solid $black",
  background: "none",
  textTransform: "uppercase",
  padding: "16px",
  borderRadius: "50px",
  fontSize: "$xs",
  width: "100%",
  cursor: "pointer",

  variants: {
    variant: {
      primary: {
        "&:hover": {
          background: "$black",
          color: "$fWhite",
          transition: "all 0.3s linear",
        },
      },
    },
  },
})

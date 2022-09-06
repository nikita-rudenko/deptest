import { styled } from "stitches.config"

export const Typography = styled("p", {
  fontFamily: "$primary",
  fontWeight: 400,

  variants: {
    variant: {
      "md": {
        fontSize: "$md",
        lineHeight: "1em",
      },
      "2xs": {
        fontSize: "$2xs",
        lineHeight: "1.135em",
      },
    },
  },
})

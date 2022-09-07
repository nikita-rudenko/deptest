import { styled } from "stitches.config"

export const Typography = styled("p", {
  "fontFamily": "$primary",
  "fontWeight": 400,

  "> strong": {
    fontWeight: "700",
  },

  "variants": {
    variant: {
      "xl": {
        fontSize: "$xl",
        lineHeight: "1em",
      },
      "lg": {
        fontSize: "$lg",
        lineHeight: "1em",
      },
      "md": {
        fontSize: "$md",
        lineHeight: "1em",
      },
      "sm": {
        fontSize: "$sm",
        lineHeight: "1em",
      },
      "xs": {
        fontSize: "$xs",
        lineHeight: "1em",
      },
      "2xs": {
        fontSize: "$2xs",
        lineHeight: "1.135em",
      },
    },
  },
})

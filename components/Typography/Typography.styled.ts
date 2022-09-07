import { styled } from "stitches.config"

export const Typography = styled("p", {
  "fontFamily": "$primary",
  "fontWeight": 400,

  "> strong": {
    fontWeight: "700",
  },

  "variants": {
    withAnimatedUnderline: {
      true: {
        "display": "inline",
        "width": "calc(100%)",
        "backgroundImage":
          "linear-gradient(transparent calc(100% - 3px), currentColor 3px)",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "0% 100%",
        "transition": "background-size 1s",
        "&:hover, &:focus": {
          backgroundSize: "100% 100%",
        },
      },
    },
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

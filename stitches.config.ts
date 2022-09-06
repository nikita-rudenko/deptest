import { createStitches } from "@stitches/react"
import type * as Stitches from '@stitches/react';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      grey: "#646464",
      black: "#121212",
      fWhite: "#ffffff",
      purple: "#5115f7",
    },
    fontSizes: {
      "3xl": "12px",
      "2xl": "13px",
      "xl": "15px",
      "lg": "17px",
      "md": "19px",
      "sm": "21px",
      "xs": "21px",
      "2xs": "16px",
      "cta": "16px",
    },
    fonts: {
      system: "system-ui",
      primary: "'Maison Neue', sans-serif",
      secondary: "'Teko', sans-serif",
    },
  },
  media: {
    "sm": "(min-width: 640px)",
    "md": "(min-width: 768px)",
    "lg": "(min-width: 1024px)",
    "xl": "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
})

export type CSS = Stitches.CSS<typeof config>;
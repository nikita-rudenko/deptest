import { createStitches } from "@stitches/react"
import type * as Stitches from "@stitches/react"

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
      lightGrey: "#a3a3a3",
    },
    fontSizes: {
      "3xl": "200px",
      "2xl": "70px",
      "xl": "60px",
      "lg": "48px",
      "md": "34px",
      "sm": "26px",
      "xs": "18px",
      "2xs": "16px",
      "cta": "16px",
    },
    fonts: {
      system: "system-ui",
      primary: "'Maison Neue', sans-serif",
    },
    zIndices: {
      hide: -1,
      auto: "auto",
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      toast: 1600,
      tooltip: 1700,
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

export type CSS = Stitches.CSS<typeof config>

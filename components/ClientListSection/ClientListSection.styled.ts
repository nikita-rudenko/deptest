import { Box } from "components/Box"
import { styled } from "stitches.config"

export const Container = styled(Box, {
  "color": "$fWhite",
  "padding": "44px 32px",

  "@md": {
    padding: "44px 92px",
  },
})

export const BrandsGrid = styled(Box, {
  "display": "grid",
  "gridTemplateColumns": "repeat(2, 1fr)",
  "rowGap": "84px",
  "justifyItems": "center",
  "alignContent": "center",

  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "84px",
  },
})

export const LogoContainer = styled(Box, {
  "position": "relative",
  "width": "115px",
  "height": "50px",

  "@lg": {
    width: "172px",
    height: "90px",
  },
})

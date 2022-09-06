import Image from "next/image"

import { Box } from "components/Box"
import { Typography } from "components/Typography"

export const HeroSection = (): JSX.Element => {
  return (
    <Box
      css={{
        overflowX: "hidden",
        height: "415px",
        position: "relative",
        background:
          "linear-gradient(358.53deg, rgba(0, 0, 0, 0.5) 1.79%, rgba(0, 0, 0, 0.185) 99.33%)",
      }}
    >
      <Image layout="fill" src="/hero.webp" objectFit="cover" />

      <Box
        css={{
          "color": "$fWhite",
          "position": "absolute",
          "zIndex": "$docked",
          "left": "16px",
          "bottom": "22px",
          "maxWidth": "400px",

          "@md": {
            left: "56px",
            bottom: "84px",
            maxWidth: "610px",
          },
        }}
      >
        <Typography as="h2" variant="2xs" css={{ marginBottom: "32px" }}>
          WORK
        </Typography>

        <Typography as="h2" variant="md">
          A selection of projects that <strong>pioneer tech</strong> and{" "}
          <strong>marketing </strong>
          to help brands stay ahead.
        </Typography>
      </Box>
    </Box>
  )
}

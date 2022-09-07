import { Box } from "components/Box"
import { PointIcon } from "components/SVG"
import { Typography } from "components/Typography"

export function ReadMore(): JSX.Element {
  return (
    <Typography
      as="a"
      variant="2xs"
      css={{
        "display": "none",
        "@md": {
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Box css={{ marginRight: "16px" }}>
        <PointIcon />
      </Box>
      Read more
    </Typography>
  )
}

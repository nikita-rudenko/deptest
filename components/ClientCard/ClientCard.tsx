import Image from "next/image"

import { Box } from "components/Box"
import { PointIcon } from "components/SVG"
import { Typography } from "components/Typography"
import type { ClientCase } from "data/clients"

import * as Styled from "./ClientCard.styled"

type ClientCardProps = ClientCase

export function ClientCard({
  title,
  clientName,
  backgroundSrc,
}: ClientCardProps): JSX.Element {
  return (
    <Styled.Container>
      <Styled.GradientOverlay />
      <Image
        layout="fill"
        src={backgroundSrc}
        objectFit="cover"
        style={{ zIndex: "0" }}
      />

      <Styled.TextContent>
        <Typography as="h2" variant="2xs">
          {clientName}
        </Typography>

        <Typography
          as="h3"
          variant={{
            "@initial": "sm",
            "@lg": "lg",
          }}
        >
          {title}
        </Typography>

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
      </Styled.TextContent>
    </Styled.Container>
  )
}

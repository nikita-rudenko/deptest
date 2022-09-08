import Image from "next/image"
import Link from "next/link"

import { Box } from "components/Box"
import { PointIcon } from "components/SVG"
import { Typography } from "components/Typography"
import type { ClientCase } from "data/clients"

import { cardVariants, imageVariants } from "./ClientCard.animated"
import * as Styled from "./ClientCard.styled"

type ClientCardProps = ClientCase

export function ClientCard({
  title,
  clientName,
  backgroundSrc,
}: ClientCardProps): JSX.Element {
  return (
    <Link href="#" passHref>
      <Styled.Container
        initial="offscreen"
        whileInView="onscreen"
        whileHover="hover"
        whileFocus="hover"
        whileTap="hover"
        viewport={{ once: true, amount: "some" }}
        variants={cardVariants}
      >
        <Styled.GradientOverlay />

        <Styled.ImageContainer variants={imageVariants}>
          <Image
            layout="fill"
            src={backgroundSrc}
            objectFit="cover"
            style={{ zIndex: "0" }}
            alt={clientName}
          />
        </Styled.ImageContainer>

        <Styled.TextContent>
          <Typography as="h2" variant="2xs">
            {clientName}
          </Typography>

          <Box>
            <Typography
              as="h3"
              withAnimatedUnderline
              variant={{
                "@initial": "sm",
                "@lg": "lg",
              }}
            >
              {title}
            </Typography>
          </Box>

          <Typography
            as="div"
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
    </Link>
  )
}

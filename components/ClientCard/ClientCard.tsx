import type { Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Box } from "components/Box"
import { PointIcon } from "components/SVG"
import { Typography } from "components/Typography"
import type { ClientCase } from "data/clients"

import * as Styled from "./ClientCard.styled"

type ClientCardProps = ClientCase

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
}

const imageVariants: Variants = {
  hover: {
    scale: 1.08,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
}

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

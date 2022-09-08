import Image from "next/image"

import { Typography } from "components/Typography"

import { imageVariants, textContentVariants } from "./HeroSection.animated"
import * as Styled from "./HeroSection.styled"

export const HeroSection = (): JSX.Element => {
  return (
    <Styled.Container
      initial="initial"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <Styled.GradientOverlay />

      <Styled.ImageContainer variants={imageVariants}>
        <Image
          layout="fill"
          src="/hero.webp"
          objectFit="cover"
          priority
          style={{ zIndex: "0" }}
          alt="Hero image."
        />
      </Styled.ImageContainer>

      <Styled.TextContent variants={textContentVariants}>
        <Typography as="h2" variant="2xs" css={{ marginBottom: "32px" }}>
          WORK
        </Typography>

        <Typography as="h2" variant="md" css={{ lineHeight: "1.2em" }}>
          A selection of projects that <strong>pioneer tech</strong> and{" "}
          <strong>marketing </strong>
          to help brands stay ahead.
        </Typography>
      </Styled.TextContent>
    </Styled.Container>
  )
}

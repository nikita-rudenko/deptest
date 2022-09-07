import type { Variants } from "framer-motion"
import Image from "next/image"

import { Typography } from "components/Typography"

import { brands } from "./ClientListSection.data"
import * as Styled from "./ClientListSection.styled"

const brandsVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const brandVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export function ClientListSection(): JSX.Element {
  return (
    <Styled.Container>
      <Typography as="h2" variant="md" css={{ marginBottom: "32px" }}>
        Clients
      </Typography>

      <Typography as="p" css={{ marginBottom: "64px" }}>
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </Typography>

      <Styled.BrandsGrid
        variants={brandsVariants}
        initial="hidden"
        whileInView="show"
      >
        {brands.map(({ logoSrc }) => {
          return (
            <Styled.LogoContainer key={logoSrc} variants={brandVariants}>
              <Image src={logoSrc} layout="fill" />
            </Styled.LogoContainer>
          )
        })}
      </Styled.BrandsGrid>
    </Styled.Container>
  )
}

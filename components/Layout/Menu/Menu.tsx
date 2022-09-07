import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import Link from "next/link"

import { Box } from "components/Box"
import { IconButton } from "components/IconButton"
import { Logo, XIcon } from "components/SVG"
import { Typography } from "components/Typography"
import { links } from "data/links"

import * as Styled from "./Menu.styled"

type MenuMobileProps = {
  onClose: VoidFunction
}

const overlayVariants: Variants = {
  off: {
    opacity: 0,
  },
  on: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const linksVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const linkVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const Menu = ({ onClose }: MenuMobileProps): JSX.Element => {
  return (
    <Styled.Overlay
      variants={overlayVariants}
      initial="off"
      animate="on"
      css={{
        padding: "45px 56px",
      }}
    >
      <Styled.Header>
        <Logo variant="big" />

        <IconButton onClick={onClose}>
          <Box css={{ color: "$fWhite" }}>
            <XIcon />
          </Box>
        </IconButton>
      </Styled.Header>

      <Styled.LinksList
        variants={linksVariants}
        initial="hidden"
        animate="show"
        css={{ marginTop: "54px" }}
      >
        {links.map(({ href, label }) => {
          return (
            <Box
              as={motion.div}
              variants={linkVariants}
              key={label}
              css={{ padding: "3px 0", marginBottom: "10px" }}
            >
              <Link href={href} passHref>
                <Typography
                  as="a"
                  withAnimatedUnderline
                  variant={{
                    "@initial": "md",
                    "@lg": "xl",
                  }}
                  css={{
                    color: "$fWhite",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Typography>
              </Link>
            </Box>
          )
        })}
      </Styled.LinksList>
    </Styled.Overlay>
  )
}

import { motion } from "framer-motion"
import Link from "next/link"

import { Box } from "components/Box"
import { IconButton } from "components/IconButton"
import { Logo, XIcon } from "components/SVG"
import { Typography } from "components/Typography"
import { links } from "data/links"

import { linksVariants, linkVariants, overlayVariants } from "./Menu.animated"
import * as Styled from "./Menu.styled"

type MenuMobileProps = {
  onClose: VoidFunction
}

export const MenuMobile = ({ onClose }: MenuMobileProps): JSX.Element => {
  return (
    <Styled.Overlay
      variants={overlayVariants}
      initial="off"
      animate="on"
      css={{ padding: "18px 16px" }}
    >
      <Styled.Header>
        <Logo variant="small" />

        <IconButton onClick={onClose}>
          <Box css={{ color: "$fWhite" }}>
            <XIcon />
          </Box>
        </IconButton>
      </Styled.Header>

      <Styled.LinksList
        css={{ marginTop: "54px" }}
        variants={linksVariants}
        initial="hidden"
        animate="show"
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

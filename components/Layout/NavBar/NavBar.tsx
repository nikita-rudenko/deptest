import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import Link from "next/link"

import { IconButton } from "components/IconButton"
import { Logo, MenuIcon } from "components/SVG"
import { Typography } from "components/Typography"
import { links } from "data/links"

import { useLayoutContext } from "../Layout.context"
import { Menu } from "../Menu"
import * as Styled from "./NavBar.styled"

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

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.2,
    },
  },
  hover: {
    scale: 1.2,
  },
}

export function NavBar(): JSX.Element {
  const { isMenuOpen, openMenu, closeMenu } = useLayoutContext()

  return (
    <Styled.Container>
      <Logo variant="big" />

      <Styled.Nav>
        <Styled.LinksList
          variants={linksVariants}
          initial="hidden"
          animate="show"
        >
          {links.slice(0, 6).map(({ label, href }) => {
            return (
              <Styled.LinkItem variants={linkVariants} key={label}>
                <Link href={href} passHref>
                  <Typography as="a" withAnimatedUnderline>
                    {label}
                  </Typography>
                </Link>
              </Styled.LinkItem>
            )
          })}
        </Styled.LinksList>

        <IconButton
          as={motion.div}
          variants={menuVariants}
          initial="hidden"
          animate="show"
          whileHover="hover"
          onClick={openMenu}
          css={{ marginLeft: "96px", color: "$fWhite" }}
        >
          <MenuIcon />
        </IconButton>
      </Styled.Nav>

      {isMenuOpen && <Menu onClose={closeMenu} />}
    </Styled.Container>
  )
}

import Link from "next/link"

import { IconButton } from "components/IconButton"
import { Logo, MenuIcon } from "components/SVG"
import { Typography } from "components/Typography"
import { links } from "data/links"

import { useLayoutContext } from "../Layout.context"
import { Menu } from "../Menu"
import * as Styled from "./NavBar.styled"

export function NavBar(): JSX.Element {
  const { isMenuOpen, openMenu, closeMenu } = useLayoutContext()

  return (
    <Styled.Container>
      <Logo variant="big" />

      <Styled.Nav>
        <Styled.LinksList>
          {links.slice(0, 6).map(({ label, href }) => {
            return (
              <Styled.LinkItem key={label}>
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

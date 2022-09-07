import Image from "next/image"
import Link from "next/link"

import { Box } from "components/Box"
import { IconButton } from "components/IconButton"
import { MenuIcon } from "components/SVG"
import { links } from "data/links"

import { useLayoutContext } from "../Layout.context"
import * as Styled from "./NavBar.styled"

export function NavBar(): JSX.Element {
  const { openMenu } = useLayoutContext()

  return (
    <Styled.Container>
      <Box>
        <Image src="/logo-white.svg" layout="fixed" width="88" height="25" />
      </Box>

      <Styled.Nav>
        <Styled.LinksList>
          {links.slice(0, 6).map(({ label, href }) => {
            return (
              <Styled.LinkItem key={label}>
                <Link href={href} passHref>
                  {label}
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
    </Styled.Container>
  )
}

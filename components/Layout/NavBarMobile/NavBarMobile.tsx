import Image from "next/image"

import { IconButton } from "components/IconButton"
import { Typography } from "components/Typography"

import { useLayoutContext } from "../Layout.context"
import { MobileMenu } from "../MobileMenu"
import { NavBarContainer } from "./NavBarMobile.styled"

export const NavBarMobile = (): JSX.Element => {
  const { isMenuOpen, openMenu, closeMenu } = useLayoutContext()

  return (
    <NavBarContainer>
      <Image src="/logo-black.svg" width="52px" height="15px" />

      <IconButton onClick={openMenu}>
        <Typography as="h1" variant="2xs">
          MENU
        </Typography>
      </IconButton>

      {isMenuOpen && <MobileMenu onClose={closeMenu} />}
    </NavBarContainer>
  )
}

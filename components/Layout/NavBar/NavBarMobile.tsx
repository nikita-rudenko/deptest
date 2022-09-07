import { IconButton } from "components/IconButton"
import { Logo } from "components/SVG"
import { Typography } from "components/Typography"

import { useLayoutContext } from "../Layout.context"
import { MenuMobile } from "../Menu"
import { NavBarContainer } from "./NavBarMobile.styled"

export const NavBarMobile = (): JSX.Element => {
  const { isMenuOpen, openMenu, closeMenu } = useLayoutContext()

  return (
    <NavBarContainer>
      <Logo variant="small" />

      <IconButton onClick={openMenu}>
        <Typography as="h1" variant="2xs">
          MENU
        </Typography>
      </IconButton>

      {isMenuOpen && <MenuMobile onClose={closeMenu} />}
    </NavBarContainer>
  )
}

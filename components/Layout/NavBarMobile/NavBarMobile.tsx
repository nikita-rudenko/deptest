import Image from "next/image"
import { useState } from "react"

import { IconButton } from "components/IconButton"
import { Typography } from "components/Typography"

import { MobileMenu } from "../MobileMenu"
import { NavBarContainer } from "./NavBarMobile.styled"

export const NavBarMobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavBarContainer>
      <Image src="/logo-black.svg" width="52px" height="15px" />

      <IconButton onClick={() => setIsOpen(true)}>
        <Typography as="h1" variant="2xs">
          MENU
        </Typography>
      </IconButton>

      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </NavBarContainer>
  )
}

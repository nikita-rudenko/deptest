import * as Styled from "./Layout.styled"
import { NavBarMobile } from "./NavBarMobile"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Styled.LayoutContainer>
      <NavBarMobile />

      {children}
    </Styled.LayoutContainer>
  )
}

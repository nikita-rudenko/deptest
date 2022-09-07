import { LayoutContextProvider } from "./Layout.context"
import * as Styled from "./Layout.styled"
import { NavBar } from "./NavBar"
import { NavBarMobile } from "./NavBarMobile"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <LayoutContextProvider>
      <Styled.LayoutContainer>
        <NavBar />
        <NavBarMobile />

        {children}
      </Styled.LayoutContainer>
    </LayoutContextProvider>
  )
}

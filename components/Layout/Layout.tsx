import * as Styled from "./Layout.styled"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return <Styled.LayoutContainer>{children}</Styled.LayoutContainer>
}

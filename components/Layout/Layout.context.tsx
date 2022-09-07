import { useState, createContext, useContext } from "react"

type LayoutContextValue = {
  isMenuOpen: boolean
  openMenu: VoidFunction
  closeMenu: VoidFunction
}

export const LayoutContext = createContext<LayoutContextValue>({
  isMenuOpen: false,
  openMenu: () => undefined,
  closeMenu: () => undefined,
})

type LayoutContextProviderProps = {
  children: React.ReactNode
}

export function LayoutContextProvider({
  children,
}: LayoutContextProviderProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(true)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <LayoutContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayoutContext = (): LayoutContextValue => {
  const context = useContext(LayoutContext)

  if (!context) {
    throw new Error(
      "useLayoutContext must be used within LayoutContextProvider. Wrap a parent component in <LayoutContextProvider/> to fix this error"
    )
  }

  return context
}

import Link from "next/link"

import { Box } from "components/Box"
import { IconButton } from "components/IconButton"
import { Logo, XIcon } from "components/SVG"
import { Typography } from "components/Typography"
import { links } from "data/links"

import * as Styled from "./Menu.styled"

type MenuMobileProps = {
  onClose: VoidFunction
}

export const MenuMobile = ({ onClose }: MenuMobileProps): JSX.Element => {
  return (
    <Styled.Overlay
      css={{
        padding: "18px 16px",
      }}
    >
      <Styled.Header>
        <Logo variant="small" />

        <IconButton onClick={onClose}>
          <Box css={{ color: "$fWhite" }}>
            <XIcon />
          </Box>
        </IconButton>
      </Styled.Header>

      <Styled.LinksList css={{ marginTop: "54px" }}>
        {links.map(({ href, label }) => {
          return (
            <Box key={label} css={{ padding: "3px 0", marginBottom: "10px" }}>
              <Link href={href} passHref>
                <Typography
                  as="a"
                  variant={{
                    "@initial": "md",
                    "@lg": "xl",
                  }}
                  css={{
                    color: "$fWhite",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Typography>
              </Link>
            </Box>
          )
        })}
      </Styled.LinksList>
    </Styled.Overlay>
  )
}

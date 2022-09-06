import Image from "next/image"
import Link from "next/link"

import { Box } from "components/Box"
import { IconButton } from "components/IconButton"
import { Typography } from "components/Typography"

import { links } from "./MobileMenu.config"

type MobileMenuProps = {
  onClose: VoidFunction
}

export const MobileMenu = ({ onClose }: MobileMenuProps): JSX.Element => {
  return (
    <Box
      as="nav"
      css={{
        background: "$black",
        width: "100%",
        height: "100%",
        zIndex: "$overlay",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "18px 16px",
      }}
    >
      <Box
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image src="/logo-white.svg" width="52px" height="15px" />

        <IconButton onClick={onClose}>
          <Image src="/x.svg" width="15px" height="15px" />
        </IconButton>
      </Box>

      <Box css={{ textAlign: "right", marginTop: "54px" }}>
        {links.map(({ href, label }) => {
          return (
            <Box key={label} css={{ padding: "3px 0", marginBottom: "10px" }}>
              <Link href={href}>
                <Typography
                  as="a"
                  variant="md"
                  css={{ color: "$fWhite", textTransform: "uppercase" }}
                >
                  {label}
                </Typography>
              </Link>

              <Box
                css={{ background: "$lightGrey", height: "1px", width: "100%" }}
              />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

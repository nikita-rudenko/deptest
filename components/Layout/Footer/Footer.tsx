import Link from "next/link"

import { Box } from "components/Box"
import { Logo } from "components/SVG"
import { Typography } from "components/Typography"
import { links } from "data/links"

import * as Styled from "./Footer.styled"

export function Footer(): JSX.Element {
  return (
    <Styled.Container>
      <Styled.Nav>
        <Box
          css={{
            "display": "none",
            "@lg": { display: "block", marginRight: "110px" },
          }}
        >
          <Logo variant="big" />
        </Box>

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
      </Styled.Nav>

      <Styled.Separator />

      <Styled.LegalInfoList>
        <Typography>Chamber of Commerce: 63464101</Typography>
        <Typography>VAT: NL 8552.47.502.B01</Typography>
        <Typography>Terms and conditions</Typography>
        <Typography>© 2022 Dept Agency</Typography>
      </Styled.LegalInfoList>
    </Styled.Container>
  )
}

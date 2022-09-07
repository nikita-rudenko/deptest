import { Typography } from "components/Typography"

import * as Styled from "./ClientQuoteSection.styled"

export function ClientQuoteSection(): JSX.Element {
  return (
    <Styled.Container>
      <Typography variant="sm" css={{ marginBottom: "16px" }}>
        “Dept helped us tell our story through a bold new identity and a robust
        online experience. To the tone of 60% growth in online bookings in just
        one month”
      </Typography>

      <Typography variant="xs">MATTIJS TEN DRINK - CEO, TRANSAVIA</Typography>
    </Styled.Container>
  )
}

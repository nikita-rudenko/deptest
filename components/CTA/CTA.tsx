import { Typography } from "components/Typography"

import { CTAContainer, MutedText, UnderlinedText } from "./CTA.styled"

export const CTA = (): JSX.Element => {
  return (
    <CTAContainer>
      <Typography as="p" variant="2xs">
        <MutedText>in </MutedText>
        <UnderlinedText>all industries</UnderlinedText>
      </Typography>

      <Typography as="p" variant="2xs">
        <MutedText>Show me </MutedText>
        <UnderlinedText>all work</UnderlinedText>
      </Typography>
    </CTAContainer>
  )
}

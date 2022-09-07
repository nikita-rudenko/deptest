import { Box } from "components/Box"
import { ClientCard } from "components/ClientCard"
import { ClientCase } from "data/clients"

type ClientSectionProps = {
  left: ClientCase
  right: ClientCase
}

export function ClientSection({
  left,
  right,
}: ClientSectionProps): JSX.Element {
  return (
    <Box
      css={{
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "@md": {
          flexDirection: "row",
        },
      }}
    >
      <ClientCard {...left} />
      <ClientCard {...right} />
    </Box>
  )
}

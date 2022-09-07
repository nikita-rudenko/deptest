import { Box } from "components/Box"
import { ReadMore } from "components/ReadMore"
import { Typography } from "components/Typography"

import { Note } from "./ClientNoteSection.data"

type ClientNoteProps = Note

const ClientNote = ({
  clientName,
  description,
}: ClientNoteProps): JSX.Element => {
  return (
    <Box>
      <Typography as="h3" variant="2xs" css={{ marginBottom: "12px" }}>
        {clientName}
      </Typography>
      <Typography as="p" variant="2xs" css={{ marginBottom: "12px" }}>
        {description}
      </Typography>

      <ReadMore />
    </Box>
  )
}
export default ClientNote

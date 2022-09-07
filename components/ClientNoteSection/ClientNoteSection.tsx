import { ClientCard } from "components/ClientCard"
import { ClientCase } from "data/clients"

import ClientNote from "./ClientNote"
import { data } from "./ClientNoteSection.data"
import * as Styled from "./ClientNoteSection.styled"

type ClientNoteSectionProps = {
  card: ClientCase
  cardPosition: "left" | "right"
}

export function ClientNoteSection({
  card,
  cardPosition,
}: ClientNoteSectionProps): JSX.Element {
  return (
    <Styled.Container cardPosition={cardPosition}>
      {cardPosition === "left" && <ClientCard {...card} />}

      <Styled.NotesList>
        {data.map((note) => (
          <ClientNote key={note.clientName} {...note} />
        ))}
      </Styled.NotesList>

      {cardPosition === "right" && <ClientCard {...card} />}
    </Styled.Container>
  )
}

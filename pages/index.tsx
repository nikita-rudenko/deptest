import { Box } from "components/Box"
import ClientNoteSection from "components/ClientNoteSection/ClientNoteSection"
import { ClientSection } from "components/ClientSection"
import { CTA } from "components/CTA"
import { HeroSection } from "components/HeroSection"
import { clients } from "data/clients"

function Home(): JSX.Element {
  return (
    <Box>
      <HeroSection />
      <CTA />
      <ClientSection left={clients[0]} right={clients[1]} />
      <ClientSection left={clients[2]} right={clients[3]} />
      <ClientNoteSection card={clients[4]} cardPosition="left" />
      <ClientSection left={clients[4]} right={clients[5]} />
      <ClientSection left={clients[6]} right={clients[7]} />
      <ClientSection left={clients[8]} right={clients[9]} />
    </Box>
  )
}

export default Home

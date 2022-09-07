import { Box } from "components/Box"
import { CTA } from "components/CTA"
import { HeroSection } from "components/HeroSection"

function Home(): JSX.Element {
  return (
    <Box>
      <HeroSection />
      <CTA />
    </Box>
  )
}

export default Home

import { Button } from "@/components/kit/Button"
import { Heading } from "@/components/kit/Heading"

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <Heading variant="section-1-large" as="h2">
        Page non trouvée
      </Heading>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button href="/">Retourner à l&apos;accueil</Button>
        <Button href="/contact" variant="inline">
          Me contacter
        </Button>
      </div>
    </div>
  )
}

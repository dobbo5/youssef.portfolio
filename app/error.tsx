"use client"

// Error components must be Client Components
import { useEffect } from "react"

import { Button } from "@/components/kit/Button"
import { Heading } from "@/components/kit/Heading"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <Heading variant="section-1-large" as="h2">
        Erreur
      </Heading>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Actualiser
        </Button>
        <Button href="/contact" variant="inline">
          Me contacter
        </Button>
      </div>
    </div>
  )
}

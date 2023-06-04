import { Heading } from "@/components/kit/Heading"

export function ProjectSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <>
      <section className="flex flex-col gap-8">
        {title ? (
          <Heading as="h2" variant="section-1-medium">
            {title}
          </Heading>
        ) : null}

        {children}
      </section>
      <div className="h-px w-full bg-neutral-100" />
    </>
  )
}

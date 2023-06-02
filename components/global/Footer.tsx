import { Heading } from '@/components/kit/Heading'
import { Button } from '../kit/Button'

export function Footer() {
  return (
    <footer className="w-full bg-neutral-900 py-8 text-neutral-50">
      <div className="mx-auto flex max-w-[120rem] flex-col justify-between gap-20 px-[clamp(1rem,6vw,6rem)]">
        <div className="my-32">
          <Heading variant="section-1-medium" as="h6" className="max-w-4xl">
            Incitation à me contacter, n&apos;hésitez pas. Contact.
          </Heading>
        </div>
        <div className="flex w-full justify-between">
          <ul className="flex gap-8">
            <li>
              <Button variant="inline">Linkedin</Button>
            </li>
            <li>
              <Button variant="inline">Télécharger le CV</Button>
            </li>
          </ul>
          <p className="font-mono uppercase text-neutral-500">
            2023 / Youssef Douieb
          </p>
        </div>
      </div>
    </footer>
  )
}

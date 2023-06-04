import { Heading } from "@/components/kit/Heading"

import { Button } from "../kit/Button"

export function Footer() {
  return (
    <footer className="mt-16 w-full">
      <div className="mx-auto flex max-w-[100rem] px-[clamp(1rem,6vw,6rem)]">
        <div className="flex w-full justify-between border-t border-neutral-100 py-8">
          <ul className="flex gap-16">
            <li>
              <Button variant="inline">Linkedin</Button>
            </li>
            <li>
              <Button variant="inline">Télécharger le CV</Button>
            </li>
            <li>
              <Button href="/contact" variant="inline">
                Me contacter
              </Button>
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

import { Button } from "../kit/Button"

export function Footer() {
  return (
    <footer className="mt-32 flex w-full justify-center">
      <div className="w-full max-w-[calc(20rem+60vw)] px-[clamp(1rem,5vw,4rem)]">
        <div className="flex w-full flex-wrap justify-between gap-x-32 gap-y-8 border-t border-neutral-100 py-8">
          <ul className="flex w-full justify-between sm:w-auto sm:flex-wrap sm:gap-x-16 sm:gap-y-4">
            <li>
              <Button
                target="_blank"
                href="https://www.linkedin.com/in/youssef-douieb/"
                variant="inline"
              >
                Linkedin
              </Button>
            </li>
            <li>
              <Button href="/contact" variant="inline">
                Me contacter
              </Button>
            </li>
            <li className="hidden sm:block">
              <Button
                target="_blank"
                href="/cv-product-builder-youssef-douieb.pdf"
                variant="inline"
              >
                Télécharger mon CV
              </Button>
            </li>
            <li className="sm:hidden">
              <Button variant="inline">CV</Button>
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

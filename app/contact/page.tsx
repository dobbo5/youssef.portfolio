import { HeadingAppear } from "@/components/animations/HeadingAppear"

import { ContactForm } from "./ContactForm"

export default function ContactPage() {
  return (
    <>
      <HeadingAppear as="h3" variant="section-1-large">
        Contact
      </HeadingAppear>
      <ContactForm />
    </>
  )
}

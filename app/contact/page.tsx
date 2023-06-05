import { Heading } from "@/components/kit/Heading"

import { ContactForm } from "./ContactForm"

export default function ContactPage() {
  return (
    <>
      <Heading as="h3" variant="section-1-large" className="py-40">
        Contact
      </Heading>
      <ContactForm />
    </>
  )
}

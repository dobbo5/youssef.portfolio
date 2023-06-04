"use client"

import { Button } from "@/components/kit/Button"
import { Input } from "@/components/kit/Input"

export function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-2 gap-8">
      <Input label="label" placeholder="ex : tonmail@gmail.com" />
      <Input label="label" placeholder="ex : tonmail@gmail.com" />
      <Input label="label" placeholder="ex : tonmail@gmail.com" />
      <Input label="label" placeholder="ex : tonmail@gmail.com" />
      <Button type="submit">Envoyer</Button>
    </form>
  )
}

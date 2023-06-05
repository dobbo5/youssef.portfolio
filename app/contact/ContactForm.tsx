/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import thankYou from "@/public/thank-you.webp"

import { Button } from "@/components/kit/Button"
import { Heading } from "@/components/kit/Heading"
import { Input } from "@/components/kit/Input"
import { Text } from "@/components/kit/Text"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    email: "",
    tel: "",
    object: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.object ||
      !formData.message
    ) {
      setError("Veuillez remplir tous les champs requis.")
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          formData,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
      if (res.status === 200) {
        setSubmitted(true)
      } else {
        setError(
          "Il y a eu un problème lors de la soumission du formulaire. Veuillez réessayer plus tard."
        )
      }
    } catch (err: any) {
      console.error("Err", err)
      setError("Erreur réseau, contactez-moi directement par mail.")
    }
  }

  async function generateMessage() {
    const res = await fetch("/api/generate-message", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.status === 200) {
      const { message } = await res.json()
      setFormData({ ...formData, message })
    } else {
      setError(
        "Un problème est survenu lors de la génération du message. Veuillez réessayer plus tard."
      )
    }
  }

  return (
    <div className="mx-auto max-w-screen-md">
      {submitted ? (
        <div className="flex flex-col items-center gap-8">
          <Heading as="h3" variant="section-1-medium" className="text-center">
            Merci pour votre message !
          </Heading>
          <Button href="/" variant="primary">
            Retourner à l&apos;accueil
          </Button>
          <Image
            src={thankYou}
            alt="Thank you gif from the succession TV show"
            width={480}
            height={270}
            className="rounded-md"
          />
        </div>
      ) : (
        <form onSubmit={onSubmit} className="relative grid grid-cols-2 gap-4">
          {error && (
            <p className="absolute top-[-3rem] col-span-2 text-danger-700">
              {error}
            </p>
          )}
          <Input
            label="Prénom"
            placeholder="ex : Marcel"
            id="firstName"
            name="firstName"
            type="text"
            aria-label="prénom"
            required
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            label="Entreprise (Optionnel)"
            placeholder="ex : Acme Corp"
            id="company"
            name="company"
            type="text"
            aria-label="company"
            autoComplete="company"
            value={formData.company}
            onChange={handleChange}
          />
          <Input
            label="Email"
            placeholder="ex : email@gmail.com"
            id="email"
            name="email"
            type="email"
            aria-label="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Téléphone (Optionnel)"
            placeholder="ex : +33762645423"
            id="tel"
            name="tel"
            type="tel"
            aria-label="téléphone"
            autoComplete="tel-national"
            value={formData.tel}
            onChange={handleChange}
          />
          <Input
            label="Objet"
            placeholder="ex : Recrutement, mission freelance..."
            className="col-span-2"
            id="object"
            name="object"
            aria-label="object"
            required
            value={formData.object}
            onChange={handleChange}
          />
          <Button
            type="Button"
            variant="inline"
            className="justify-self-start"
            onClick={generateMessage}
          >
            Pré-générer un message
          </Button>
          <Input
            as="textarea"
            label="Message"
            placeholder="Your message..."
            className="col-span-2"
            id="message"
            name="message"
            aria-label="message"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="primary"
            className="justify-self-start"
          >
            Envoyer
          </Button>
          <Text variant="sub-mono" className="justify-self-end">
            Email envoyé à{" "}
            <Link
              href="mailto:youssefdouieb@hotmail.com"
              className="underline hover:text-primary-600"
            >
              YoussefDouieb@hotmail.com
            </Link>
          </Text>
        </form>
      )}
    </div>
  )
}

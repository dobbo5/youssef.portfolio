// file: pages/api/generate-message.ts
import { NextApiRequest, NextApiResponse } from "next"

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || ""

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { firstName, company, email, tel, object } = req.body

  const prompt = `En tant que ${firstName}  ${
    company && "travaillant chez " + company
  } avec l'email ${email} et le numéro de téléphone ${tel}, je souhaite envoyer un email ayant pour objet ${object}. Le contenu du courriel devrait être:`

  const response = await fetch(
    "https://api.openai.com/v1/engines/text-davinci-001/completions",
    {
      method: "POST",
      body: JSON.stringify({
        prompt,
        max_tokens: 150,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    }
  )

  const data = await response.json()

  console.log("OpenAI API response:", data)

  if (!data.choices || data.choices.length === 0) {
    return res.status(500).json({ error: "Impossible de générer un message." })
  }

  const message = data.choices[0].text.trim()

  res.status(200).json({ message })
}

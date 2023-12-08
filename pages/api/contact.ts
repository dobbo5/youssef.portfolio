import type { NextApiRequest, NextApiResponse } from "next"
import FormData from "form-data"
import Mailgun from "mailgun.js"

const API_KEY = process.env.MAILGUN_API_KEY || ""
const DOMAIN = process.env.MAILGUN_DOMAIN || ""

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Data", req.body)

  const mailgun = new Mailgun(FormData)
  const client = mailgun.client({ username: "api", key: API_KEY })

  const {
    formData: { firstName, email, message },
  } = req.body

  const messageData = {
    from: email,
    to: "youssefdouieb.work@gmail.com",
    subject: "Nouveau message de votre portfolio",
    text: `
    Hello,

    Tu as reçus un message de: ${firstName} 

    Email : ${email}

    ----------------------------

    ${message}
    `,
  }

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData)
    console.log(emailRes)
  } catch (err: any) {
    console.error("Error sending email", err)
  }

  res.status(200).json({ submitted: true })
}

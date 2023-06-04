import "../style/globals.css"

import { JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import clsx from "clsx"

import { Footer } from "@/components/global/Footer"
import { Menu } from "@/components/global/Menu"

const NnNouvelleGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/nn-nouvelle-grotesk/NNNouvelleGroteskSTD-Normal.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/nn-nouvelle-grotesk/NNNouvelleGroteskSTD-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/nn-nouvelle-grotesk/NNNouvelleGroteskSTD-Bold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-nnnouvellegrotesk",
  display: "swap",
})

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrainsmono",
  display: "swap",
})

export const metadata = {
  title: "Youssef Douieb | Portfolio",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={clsx(
        NnNouvelleGrotesk.variable,
        JetBrainsMono.variable,
        "bg-neutral-50 font-serif font-normal leading-normal text-neutral-900 antialiased"
      )}
    >
      <body>
        <Menu />
        <main className="mx-auto max-w-[100rem] px-[clamp(1rem,6vw,6rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

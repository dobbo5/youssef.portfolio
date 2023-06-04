import { Suspense } from "react"

import { Hero } from "@/components/home/Hero"
import { MyValues } from "@/components/home/MyValues"
import { Work } from "@/components/home/Work"

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Suspense>
        <MyValues />
      </Suspense>
    </>
  )
}

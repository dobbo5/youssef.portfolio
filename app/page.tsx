import { Suspense } from 'react'

import { Hero } from '@/components/home/Hero'
import { Work } from '@/components/home/Work'
import { MyValues } from '@/components/home/MyValues'

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Hero />
      {/* @ts-expect-error Server Component */}
      <Work />
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <MyValues />
      </Suspense>
    </>
  )
}

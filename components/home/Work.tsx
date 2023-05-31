'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

import { Heading } from '@/components/kit/Heading'
import { Text } from '../kit/Text'
import { Tag } from '../kit/Tag'

import toutouImage from '../../public/assets/Alerte-toutou_1.jpg'
import tufthappyImage from '../../public/assets/tufthappy_1.jpg'

const works = [
  { name: 'Alertetoutou', image: toutouImage },
  { name: 'Tufthappy', image: tufthappyImage },
  { name: 'Tufthappy', image: tufthappyImage },
  { name: 'Alertetoutou', image: toutouImage },
]

const filtersName = ['Toutes', 'Détaillés', 'Simples']

export function Work() {
  const [CurrentFilter, setCurrentFilter] = useState<string>(filtersName[0])

  return (
    <section>
      <div className="flex w-full items-center justify-between">
        <Heading as="h3" variant="section-1-medium">
          Work
        </Heading>
        <FilterSwitch
          CurrentFilter={CurrentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      </div>
      <ul className="grid grid-cols-8 gap-4">
        {works.map((work, index) => (
          <WorkCard key={`${work.name}-${index}`} work={work} />
        ))}
      </ul>
    </section>
  )
}

function WorkCard({ work }) {
  return (
    <li className="work-span col-span-2 flex flex-col rounded-md border border-neutral-100">
      <Link href={work.name} className="flex h-full flex-col">
        <div className="relative flex grow items-start justify-center py-16">
          <Image
            className="w-[80%] rounded-md"
            alt="work"
            src={work.image}
            height={500}
            width={500}
          />
          <div className="absolute bottom-4 left-4">
            <Tag>Product Design</Tag>
          </div>
        </div>

        <div className=" flex flex-col gap-4 border-t border-neutral-100 p-4">
          <div className="flex w-full flex-wrap justify-between gap-1">
            <Text variant="sub-mono">2023</Text>
            <Text variant="sub-mono">Fullstack e-shop</Text>
          </div>

          <Heading as="h3" variant="section-3">
            {work.name}
          </Heading>
        </div>
      </Link>
    </li>
  )
}

function FilterSwitch({
  setCurrentFilter,
  CurrentFilter,
}: {
  setCurrentFilter: (filterName: string) => void
  CurrentFilter: string
}) {
  //
  const switchFilter = (filterName: string) => setCurrentFilter(filterName)

  return (
    <div className="flex items-center gap-4 font-mono uppercase">
      <Text>05 Études de cas</Text>
      <div className="flex gap-2 overflow-clip rounded-sm bg-neutral-100 font-medium">
        {filtersName.map((filterName) => (
          <button
            key={filterName}
            onClick={() => switchFilter(filterName)}
            className={clsx(
              CurrentFilter === filterName
                ? 'bg-primary-600 text-neutral-50'
                : 'undefined',
              'px-3 py-2 uppercase'
            )}
          >
            {filterName}
          </button>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { WorkData } from "@/types/gqltypes"
import { Heading } from "@/components/kit/Heading"

import { Tag } from "../kit/Tag"
import { Text } from "../kit/Text"

const filtersName = ["all", "detaled", "simple"]

export function WorkGrid({ worksData }: { worksData: WorkData[] }) {
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
        {worksData.map((work, index) => (
          <WorkCard
            key={`${work.attributes.intro.name}-${index}`}
            work={work.attributes}
          />
        ))}
      </ul>
    </section>
  )
}

function WorkCard({ work }) {
  const {
    name,
    role,
    year,
    image: {
      data: {
        attributes: { url: imageUrl, height, width },
      },
    },
  } = work.intro
  const { project_type, handle } = work

  return (
    <li className="work-span col-span-2 flex flex-col rounded-md border border-neutral-100">
      <Link href={`/projects/${handle}`} className="flex h-full flex-col">
        <div className="relative flex grow items-start justify-center py-16">
          <Image
            className="w-[80%] rounded-md"
            alt="work"
            src={imageUrl}
            height={height}
            width={width}
          />
          <div className="absolute bottom-4 left-4">
            <Tag>{role}</Tag>
          </div>
        </div>

        <div className=" flex flex-col gap-4 border-t border-neutral-100 p-4">
          <div className="flex w-full flex-wrap justify-between gap-1">
            <Text variant="sub-mono">{year}</Text>
            <Text variant="sub-mono">{project_type}</Text>
          </div>

          <Heading as="h3" variant="section-3">
            {name}
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
                ? "bg-primary-600 text-neutral-50"
                : "undefined",
              "px-3 py-2 uppercase"
            )}
          >
            {filterName}
          </button>
        ))}
      </div>
    </div>
  )
}

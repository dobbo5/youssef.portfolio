"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { AnimatePresence, motion as m } from "framer-motion"

import { WorkData } from "@/types/gqltypes"
import { Heading } from "@/components/kit/Heading"

import { Tag } from "../kit/Tag"
import { Text } from "../kit/Text"

const filtersName = ["all", "detailed", "simple"]

export function WorkGrid({ worksData }: { worksData: WorkData[] }) {
  const [filterData, setFilteredData] = useState<WorkData[]>(worksData)
  const [currentFilter, setCurrentFilter] = useState<string>(filtersName[0])

  return (
    <section>
      <div className="flex w-full items-center justify-between">
        <Heading as="h3" variant="section-1-medium">
          Work
        </Heading>
        <FilterSwitch
          setFilteredData={setFilteredData}
          worksData={worksData}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      </div>
      <ul className="grid grid-cols-8 gap-4">
        <AnimatePresence>
          {filterData.map((work, index) => {
            return (
              <WorkCard
                key={`${work.attributes.intro.name}-${index}`}
                work={work.attributes}
              />
            )
          })}
        </AnimatePresence>
      </ul>
    </section>
  )
}

function WorkCard({ work }) {
  const { name, role, year } = work.intro
  const {
    project_type,
    handle,
    col_span,
    cover_image: {
      data: {
        attributes: { url: imageUrl, height, width },
      },
    },
  } = work

  return (
    <m.li
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 50 }}
      layout
      className="work-span rounded-md border border-neutral-100 bg-neutral-100/25"
      style={{ gridColumn: `span ${col_span} / span ${col_span}` }}
    >
      <Link href={`/projects/${handle}`} className="flex h-full flex-col gap-4">
        <div className="relative flex grow items-start justify-center p-10">
          <Image
            className="w-full rounded shadow-custom"
            alt="work"
            src={imageUrl}
            height={height}
            width={width}
          />
          <div className="absolute bottom-4 left-4">
            <Tag>{role}</Tag>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-100 p-4">
          <div className="flex w-full flex-wrap justify-between gap-1">
            <Text variant="sub-mono">{year}</Text>
            <Text variant="sub-mono">{project_type}</Text>
          </div>
          <Heading as="h3" variant="section-3">
            {name}
          </Heading>
        </div>
      </Link>
    </m.li>
  )
}

function FilterSwitch({
  setCurrentFilter,
  currentFilter,
  setFilteredData,
  worksData,
}: {
  setCurrentFilter: (filterName: string) => void
  setFilteredData: (data: WorkData[]) => void
  currentFilter: string
  worksData: WorkData[]
}) {
  //
  const switchFilter = (filterName: string) => setCurrentFilter(filterName)

  useEffect(() => {
    if (currentFilter === "all") {
      setFilteredData(worksData)
      return
    }

    const filteredData = worksData.filter((work) =>
      work.attributes.casestudy_type.includes(currentFilter)
    )
    setFilteredData(filteredData)
  }, [currentFilter])

  return (
    <div className="flex items-center gap-4 font-mono uppercase">
      <Text>05 Études de cas</Text>
      <div className="flex gap-2 overflow-hidden rounded-md bg-neutral-100 font-medium">
        {filtersName.map((filterName) => (
          <button
            key={filterName}
            onClick={() => switchFilter(filterName)}
            className={clsx(
              currentFilter === filterName
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

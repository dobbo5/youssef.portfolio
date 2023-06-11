"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { AnimatePresence, motion as m } from "framer-motion"

import { WorkData } from "@/types/gqltypes"
import { easeOutCirc } from "@/lib/animation"
import { Heading } from "@/components/kit/Heading"

import { Tag } from "../kit/Tag"
import { Text } from "../kit/Text"

const filtersName = ["tous", "detailles", "simples"]

export function WorkGrid({
  worksData,
  isHeading,
}: {
  worksData: WorkData[]
  isHeading?: boolean
}) {
  const [filterData, setFilteredData] = useState<WorkData[]>(worksData)
  const [currentFilter, setCurrentFilter] = useState<string>(filtersName[0])

  return (
    <section>
      <div className="mb-4 flex w-full flex-wrap items-center justify-between">
        <div>
          {isHeading && (
            <Heading as="h3" variant="section-1-medium">
              Projets
            </Heading>
          )}
        </div>
        <FilterSwitch
          setFilteredData={setFilteredData}
          worksData={worksData}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          filterDataLength={filterData.length}
        />
      </div>
      <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-8">
        <AnimatePresence>
          {filterData.map((work) => {
            return (
              <WorkCard
                key={work.attributes.intro.name}
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
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: easeOutCirc }}
      key={name}
      layout
      className="group rounded-md border border-neutral-100 bg-neutral-100/20 "
      style={{ gridColumn: `span ${col_span} / span ${col_span}` }}
    >
      <Link href={`/projects/${handle}`} className="flex h-full flex-col gap-4">
        <div className="relative flex grow items-start justify-center p-4 xl:p-10">
          <Image
            className="w-full rounded-lg shadow-custom transition-transform duration-500 ease-out-quint group-hover:scale-105"
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
  filterDataLength,
}: {
  setCurrentFilter: (filterName: string) => void
  setFilteredData: (data: WorkData[]) => void
  currentFilter: string
  worksData: WorkData[]
  filterDataLength: number
}) {
  //
  const switchFilter = (filterName: string) => setCurrentFilter(filterName)

  useEffect(() => {
    if (currentFilter === "tous") {
      setFilteredData(worksData)
      return
    }

    const newFilteredData = worksData.filter((work) =>
      work.attributes.casestudy_type.includes(currentFilter)
    )
    setFilteredData(newFilteredData)
  }, [currentFilter, setFilteredData, worksData])

  return (
    <div className="flex flex-wrap items-center gap-4 font-mono uppercase">
      <Text>{filterDataLength} Études de cas</Text>
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
            {filterName === "detailles" ? "détaillés" : filterName}
          </button>
        ))}
      </div>
    </div>
  )
}

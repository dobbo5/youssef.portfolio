"use client"

import { useState } from "react"
import clsx from "clsx"
import { AnimatePresence, motion as m } from "framer-motion"

import { Heading } from "../kit/Heading"
import { Text } from "../kit/Text"

interface AccordionItem {
  title: string
  content: string
}

export function Accordion({ data }: { data: AccordionItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const onTitleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  const variants = {
    open: { rotate: 0, fill: "var(--color-primary)" },
    closed: { rotate: 270, fill: "var(--color-secondary)" },
  }

  return (
    <ul className="border-secondary w-full">
      {data.map((item, index) => {
        const isActive = activeIndex === index
        return (
          <li
            onClick={() => onTitleClick(index)}
            key={item.title}
            className="myflex-col cursor-pointer select-none overflow-hidden border-b border-neutral-200 py-8"
          >
            <div className="flex items-center gap-4">
              <m.div
                className="flex h-2 w-2 items-center justify-center"
                animate={isActive ? "open" : "closed"}
                variants={variants}
              >
                <div
                  className={clsx(
                    isActive ? "bg-primary-600" : "bg-neutral-900",
                    "h-[2px] w-full"
                  )}
                />
              </m.div>
              <Heading
                as="h3"
                variant="body"
                className={clsx(
                  isActive ? "text-primary-600" : "text-neutral-900"
                )}
              >
                {item.title}
              </Heading>
            </div>
            <AnimatePresence initial={false}>
              {isActive && (
                <m.div
                  initial={{ height: 0, opacity: 0, y: 20 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: [0.38, 0.005, 0.215, 1] }}
                  key="content"
                >
                  <div className="pt-4">
                    <Text>{item.content}</Text>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

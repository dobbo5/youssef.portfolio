"use client"

import { useRef } from "react"
import clsx from "clsx"
import { motion as m, useInView } from "framer-motion"

import { easeOutCirc } from "@/lib/animation"

import { Heading } from "../kit/Heading"

export function HeadingAppear({
  children,
  as,
  className,
  variant = "section-1-large",
}: {
  as: React.ElementType
  children: React.ReactNode
  className?: string
  variant:
    | "section-1-large"
    | "section-1-medium"
    | "section-2"
    | "section-3"
    | "hero"
    | "body"
    | "info-name"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const style = clsx(className, "overflow-hidden")

  return (
    <Heading as={as} variant={variant} className={style}>
      <div className="overflow-hidden">
        <m.span
          className="inline-block"
          initial={{ y: 250 }}
          animate={{ y: isInView ? 250 : 0 }}
          transition={{ duration: 0.8, ease: easeOutCirc, delay: 0.2 }}
        >
          {children}
        </m.span>
      </div>
    </Heading>
  )
}

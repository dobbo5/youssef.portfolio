"use client"

import { useRef } from "react"
import { motion as m, useInView } from "framer-motion"

import { easeOutCirc } from "@/lib/animation"

import { Heading } from "../kit/Heading"

export function DesignXcode() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Heading as="h3" variant="section-1-large">
      <div ref={ref} className="overflow-hidden">
        <m.span
          className="inline-block"
          initial={{ y: 250 }}
          animate={{ y: isInView ? 0 : 250 }}
          transition={{ duration: 0.6, ease: easeOutCirc, delay: 0.6 }}
        >
          Design
        </m.span>
      </div>
      <div className="overflow-hidden">
        <m.span
          className="inline-block text-primary-600"
          initial={{ y: -250 }}
          animate={{ y: isInView ? 0 : -250 }}
          transition={{ duration: 0.6, ease: easeOutCirc, delay: 0.6 }}
        >
          X
        </m.span>
        <m.span
          className="inline-block"
          initial={{ y: -250 }}
          animate={{ y: isInView ? 0 : -250 }}
          transition={{ duration: 0.6, ease: easeOutCirc, delay: 0.6 }}
        >
          CODE
        </m.span>
      </div>
    </Heading>
  )
}

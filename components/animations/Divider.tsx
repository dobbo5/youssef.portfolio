"use client"

import { motion as m } from "framer-motion"

import { easeOutCirc } from "@/lib/animation"

export function Divider() {
  return (
    <m.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: easeOutCirc, delay: 0.3 }}
      className="mx-auto h-px w-full bg-neutral-100"
    />
  )
}

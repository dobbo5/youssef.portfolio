"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import profileImage from "@/public/profile-image.jpg"
import {
  AnimatePresence,
  motion as m,
  useMotionValue,
  useTransform,
} from "framer-motion"

import { easeOutCirc } from "@/lib/animation"

export function ProfileBubble() {
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(0)
  const rotateX = useTransform(x, [0, 100], [-40, 40])
  const translateX = useTransform(x, [0, 100], [-40, 40])
  const handleMouseMove = (event: { clientX: number }) => {
    x.set(event.clientX - window.innerWidth / 2)
  }
  return (
    <m.span
      className="relative mx-2 whitespace-nowrap rounded-full"
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <Link href="/contact">
        <AnimatePresence>
          {hovering && (
            <m.span
              className="absolute -top-1/4 left-[-100%] rounded-full bg-primary-600 px-3 py-1 font-mono text-[clamp(1rem,calc(2vw),2rem)] font-medium leading-normal tracking-wide text-neutral-50 sm:px-6 sm:py-2"
              style={{ rotate: rotateX, x: translateX }}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
            >
              Youssef&nbsp;Douieb
            </m.span>
          )}
        </AnimatePresence>
        <m.div
          className="inline-block"
          initial={{ width: 0, height: 0 }}
          animate={{ width: "auto", height: "auto" }}
          transition={{ duration: 0.6, ease: easeOutCirc }}
        >
          <Image
            src={profileImage}
            alt="Photo de moi"
            className="inline h-auto w-[clamp(3rem,calc(4vw+2rem),8rem)] rounded-full bg-neutral-50"
            width={400}
            height={400}
            priority={true}
          />
        </m.div>
      </Link>
    </m.span>
  )
}

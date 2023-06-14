"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion as m } from "framer-motion"

import { easeOutCirc } from "@/lib/animation"

const menuItems = [
  { name: "Accueil", path: "/" },
  { name: "Projets", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export function Menu() {
  const [currentPathIndex, setCurrentPathIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <header className="myflex-col fixed bottom-16 left-1/2 z-40 m-auto translate-x-[-50%] gap-1 rounded font-mono text-xs uppercase tracking-wide sm:bottom-auto sm:top-16 sm:text-base">
      <m.nav
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOutCirc }}
        className="rounded-lg bg-neutral-900/50 p-1 text-neutral-50 backdrop-blur-md"
      >
        <m.ul
          onHoverEnd={() => setActiveIndex(currentPathIndex)}
          className="flex sm:gap-2"
        >
          {menuItems.map((item, index) => (
            <ActiveLink
              key={`menu-${item.name}`}
              href={item.path}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              setCurrentPathIndex={setCurrentPathIndex}
            >
              {item.name}
            </ActiveLink>
          ))}
        </m.ul>
      </m.nav>
    </header>
  )
}

function ActiveLink({
  children,
  href,
  index,
  activeIndex,
  setActiveIndex,
  setCurrentPathIndex,
}: {
  children: React.ReactNode
  href: string
  index: number
  activeIndex: number
  setActiveIndex: (index: number) => void
  setCurrentPathIndex: (index: number) => void
}) {
  const pathname = usePathname()
  const isCurrentPath = pathname === href
  const isActive = index === activeIndex

  useEffect(() => {
    if (isCurrentPath) {
      setCurrentPathIndex(index)
      setActiveIndex(index)
    } else if (pathname?.includes("projects")) {
      setCurrentPathIndex(1)
      setActiveIndex(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <m.li onHoverStart={() => setActiveIndex(index)}>
      <Link
        className="relative inline-block p-3 text-center sm:py-2"
        href={href}
      >
        {isActive ? (
          <m.span
            layoutId="menu-bg"
            className="absolute inset-0 -z-10 rounded-md bg-primary-600"
            transition={{ duration: 0.3, ease: easeOutCirc }}
          />
        ) : null}
        <span>{children}</span>
      </Link>
    </m.li>
  )
}

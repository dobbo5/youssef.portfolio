'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export function Menu() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '#work' },
    { name: 'About', path: '/about' },
  ]

  return (
    <header className="myflex-col fixed left-1/2 top-16 z-50 m-auto translate-x-[-50%] gap-1 rounded font-mono uppercase tracking-wide">
      <nav className="rounded-lg bg-neutral-500 bg-opacity-75 p-1 text-neutral-50 backdrop-blur-lg">
        <ul className="flex gap-2">
          {menuItems.map((item) => (
            <ActiveLink key={`menu-${item.name}`} href={item.path}>
              {item.name}
            </ActiveLink>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function ActiveLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  const pathname = usePathname()

  const isActive = pathname === href
  const style = clsx(
    'rounded-md px-4 py-2',
    isActive ? 'bg-primary-600' : 'bg-opacity-0'
  )

  return (
    <li className={style}>
      <Link href={href}>{children}</Link>
    </li>
  )
}

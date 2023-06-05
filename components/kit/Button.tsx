/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import clsx from "clsx"

export function Button({
  as = "button",
  className,
  variant = "secondary",
  children,
  ...props
}: {
  as?: React.ElementType
  className?: string
  variant?: "primary" | "inline" | "secondary"
  children: React.ReactNode
  [key: string]: any
}) {
  const Component = props?.href ? Link : as

  const baseButton =
    "font-mono uppercase text-neutral-50 px-4 py-2 rounded-md transition-colors duration-200 ease-in-out"

  const variants = {
    primary: baseButton + " bg-primary-600 hover:bg-primary-900",
    secondary: baseButton + " bg-neutral-900 hover:bg-neutral-700",
    inline: "font-mono uppercase",
  }

  const styles = clsx(variants[variant], className)

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  )
}

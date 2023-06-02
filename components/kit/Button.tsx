import Link from "next/link"
import clsx from "clsx"

export function Button({
  as = "button",
  className,
  variant = "primary",

  children,
  ...props
}: {
  as?: React.ElementType
  className?: string
  variant?: "primary" | "inline"

  [key: string]: any
}) {
  const Component = props?.href ? Link : as

  const variants = {
    primary:
      "font-mono uppercase bg-neutral-900 text-neutral-50 px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors duration-200 ease-in-out",
    inline: "font-mono uppercase",
  }

  const styles = clsx(variants[variant], className)

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  )
}

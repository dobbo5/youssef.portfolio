import clsx from "clsx"

export function Text({
  className,
  variant = "paragraph",
  children,
  ...props
}: {
  className?: string
  variant?: "paragraph" | "paragraph-large" | "sub-mono"
  children: React.ReactNode
}) {
  const baseStyleSans = "font-normal tracking-wide max-w-prose text-neutral-700"

  const variants = {
    "paragraph-large": `${baseStyleSans} sm:text-xl`,
    paragraph: `${baseStyleSans}`,
    "sub-mono": "font-mono uppercase text-sm text-neutral-500",
  }

  const styles = clsx(variants[variant], className)

  return (
    <p {...props} className={styles}>
      {children}
    </p>
  )
}

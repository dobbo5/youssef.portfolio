import clsx from "clsx"

export function Heading({
  as: Component = "h2",
  children,
  className,
  variant = "section-1-large",
  ...props
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
} & React.HTMLAttributes<HTMLHeadingElement>) {
  //Space
  const baseStyle = "leading-tight tracking-wide font-medium"

  const variants = {
    hero: "text-[clamp(3rem,calc(4vw+2rem),8rem)]",
    "section-1-large": "text-9xl uppercase text-center",
    "section-1-medium": "text-6xl",
    "section-2": "text-4xl",
    "section-3": "text-2xl",
    body: "uppercase",
  }

  const styles = clsx(className, baseStyle, variants[variant])

  return (
    <Component {...props} className={styles}>
      {children}
    </Component>
  )
}

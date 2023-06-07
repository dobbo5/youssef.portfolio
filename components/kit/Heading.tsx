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
    | "info-name"
} & React.HTMLAttributes<HTMLHeadingElement>) {
  //Space
  const baseStyle = "leading-tight tracking-wide font-medium"

  const variants = {
    hero: "text-[clamp(3rem,calc(4vw+2rem),8rem)] leading-[1.1em]",
    "section-1-large":
      "text-[clamp(2rem,calc(8vw+1rem),16rem)] tracking-normal leading-[1.1em] uppercase pt-[clamp(3rem,calc(12vw),24rem)] pb-[clamp(2rem,calc(8vw),16rem)] text-center",
    "section-1-medium": "text-4xl sm:text-6xl uppercase",
    "info-name": "text-[clamp(3rem,calc(4vw+1.5rem),6rem)] uppercase",
    "section-2": "text-3xl sm:text-4xl",
    "section-3": "text-xl sm:text-2xl",
    body: "uppercase",
  }

  const styles = clsx(className, baseStyle, variants[variant])

  return (
    <Component {...props} className={styles}>
      {children}
    </Component>
  )
}

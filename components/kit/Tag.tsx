import clsx from "clsx"

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const style = clsx(
    className,
    "whitespace-nowrap rounded-md bg-primary-100 select-none",
    "px-2 py-1 font-mono text-sm font-medium uppercase tracking-normal text-primary-700"
  )

  return <span className={style}>{children}</span>
}

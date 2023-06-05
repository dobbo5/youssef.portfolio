import { createElement } from "react"
import clsx from "clsx"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  as?: "input" | "textarea"
}

export function Input({
  label,
  placeholder,
  as = "input",
  className,
  ...restProps
}: InputProps) {
  const style = clsx(
    className,
    "flex flex-col gap-2 rounded-md border border-neutral-100 p-4 outline outline-0 outline-primary-600 focus-within:outline-2 hover:outline-2"
  )

  const inputStyle = clsx(
    as === "textarea" && "max-h-96 min-h-[10rem]",
    "group bg-neutral-50 font-light tracking-wide outline-none"
  )

  return (
    <label htmlFor={restProps.id} className={style}>
      <span className="font-mono text-sm font-medium uppercase text-neutral-600">
        {label}
      </span>
      {createElement(as, {
        placeholder,
        ...restProps,
        className: inputStyle,
      })}
    </label>
  )
}

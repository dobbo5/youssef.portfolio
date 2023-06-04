import clsx from "clsx"

const INPUT_STYLE_CLASSES = clsx(
  "rounded outline-4 outline-offset-0 hover:outline focus:outline box-border",
  "hover:outline-neutral-900 focus:outline-neutral-900 ring-0 w-full py-3 px-4",
  "text-secondary/90 placeholder:text-neutral-900"
)

const getInputStyleClasses = (isError?: string | null) => {
  return `${INPUT_STYLE_CLASSES} ${isError ? "bg-primary/20" : "bg-tertiary"}`
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  isError?: string | null
}

export function Input({ label, placeholder, className, ...restProps }) {
  const style = clsx(
    className,
    "flex flex-col p-4 gap-2 rounded-md border border-neutral-100"
  )

  return (
    <label htmlFor={restProps.id} className={style}>
      <span className="font-mono font-medium uppercase">{label}</span>
      <input
        placeholder={placeholder}
        {...restProps}
        className=" bg-neutral-50 font-light tracking-wide outline-none"
      />
    </label>
  )
}

import clsx from "clsx"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export function TextMarkdown({ children }) {
  const style = clsx(
    "max-w-prose font-normal",
    "tracking-wide text-neutral-700",
    "prose-li:m-0 prose prose-li:p-0 prose-ul:m-0 prose-ul:list-square prose-li:marker:text-neutral-700"
  )

  return <ReactMarkdown className={style}>{children}</ReactMarkdown>
}

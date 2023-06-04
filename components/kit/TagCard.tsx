import { Text } from "./Text"

export function TagCard({
  title,
  content,
}: {
  title: string
  content: string
}) {
  return (
    <dl className="rounded-md bg-primary-50 p-4">
      <dt className="mb-2 font-semibold uppercase tracking-wide text-primary-600">
        {title}
      </dt>
      <dd>
        <Text>{content}</Text>
      </dd>
    </dl>
  )
}

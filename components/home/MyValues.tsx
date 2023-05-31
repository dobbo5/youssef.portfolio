import { Heading } from '@/components/kit/Heading'
import { Text } from '@/components/kit/Text'

const values = [
  {
    title: 'Simplicité',
    content:
      'Lorem ipsum dolor sit amet. Aut saepe recusandae et nisi dignissimos ut laboriosam reprehenderit.',
  },
  {
    title: 'Technicités',
    content:
      'Lorem ipsum dolor sit amet. Aut saepe recusandae et nisi dignissimos ut laboriosam reprehenderit.',
  },
  {
    title: 'Efficacité',
    content:
      'Lorem ipsum dolor sit amet. Aut saepe recusandae et nisi dignissimos ut laboriosam reprehenderit.',
  },
  {
    title: 'Efficacité',
    content:
      'Lorem ipsum dolor sit amet. Aut saepe recusandae et nisi dignissimos ut laboriosam reprehenderit.',
  },
]

export function MyValues() {
  return (
    <section>
      <Heading as="h3" variant="section-1-large">
        Mes valeurs
      </Heading>
      <div>
        {values.map((value) => (
          <dl key={value.title} className="flex py-16">
            <dt className="w-full">
              <Heading as="h5" variant="section-2">
                {value.title}
              </Heading>
            </dt>
            <dd className="w-full">
              <Text>{value.content}</Text>
            </dd>
          </dl>
        ))}
      </div>
    </section>
  )
}

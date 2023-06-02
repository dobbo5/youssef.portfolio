import { Heading } from '@/components/kit/Heading'
import { Text } from '@/components/kit/Text'

const infos = [
  {
    title: 'career',
    contents: [
      {
        surtitle: 'Lisaa Paris',
        title: 'Agence La Fusée',
        tag: 'Depuis Juin 2022',
        content: 'Loremax',
      },
      {
        surtitle: 'Lisaa Paris',
        title: 'Agence La Fusée',
        tag: 'Depuis Juin 2022',
        content: 'Loremax',
      },
    ],
  },
]

export default function AboutPage() {
  return (
    <section className="py-40">
      <Heading as="h3" variant="section-1-large">
        Mes valeurs
      </Heading>
      <div>
        {infos.map((info) => (
          <dl
            key={info.title}
            className="flex border-b border-neutral-100 py-16"
          >
            <dt className="w-full">
              <Heading as="h5" variant="section-2">
                {info.title}
              </Heading>
            </dt>
            <dd className="w-full">
              {info.contents.map((content) => (
                <Text>{content.content}</Text>
              ))}
            </dd>
          </dl>
        ))}
      </div>
    </section>
  )
}

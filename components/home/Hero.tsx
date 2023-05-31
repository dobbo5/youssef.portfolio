import { Heading } from '@/components/kit/Heading'
import { Text } from '@/components/kit/Text'

export function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col justify-center gap-4">
      <Heading as="h2" variant="hero">
        Salut ! Je suis product builder en Alternance et en Freelance.
      </Heading>
      <Text variant="paragraph-large">
        Lorem ipsum dolor sit amet. Et voluptatem facilis quo alias quas et
        neque dolor! Est cumque itaque a iure alias 33 sint sapiente sit amet
        ullam. Eos aliquid quia qui perspiciatis aliquam a quos reprehenderit et
        voluptatem temporibus non veniam vitae et harum iste.
      </Text>
    </section>
  )
}

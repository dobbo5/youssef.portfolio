import { gql } from '@apollo/client'

import { getDataFromGql } from '@/lib/getDataFromGql'
import { Heading } from '@/components/kit/Heading'
import { Text } from '@/components/kit/Text'
interface MyValueResponse {
  data: {
    hero: {
      data: {
        attributes: {
          Description: string
        }
      }
    }
  }
}

const GetHeroDescription = gql`
  query heroDescription {
    hero {
      data {
        attributes {
          Description
        }
      }
    }
  }
`

export async function Hero() {
  const response: MyValueResponse = await getDataFromGql(GetHeroDescription)

  const {
    data: {
      hero: {
        data: {
          attributes: { Description },
        },
      },
    },
  } = response

  return (
    <section className="flex min-h-[90vh] flex-col justify-center gap-4">
      <Heading as="h2" variant="hero">
        Salut ! Je suis product builder en Alternance et en Freelance.
      </Heading>
      <Text variant="paragraph-large">{Description}</Text>
    </section>
  )
}

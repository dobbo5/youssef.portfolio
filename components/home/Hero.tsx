import Link from "next/link"
import { gql } from "@apollo/client"

import { getDataFromGql } from "@/lib/getDataFromGql"
import { ProfileBubble } from "@/components/home/ProfileBubble"
import { Heading } from "@/components/kit/Heading"
import { Text } from "@/components/kit/Text"

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
    <section className="mt-[clamp(1rem,5vw,4rem)] flex min-h-screen flex-col gap-4 sm:mt-0 sm:min-h-[80vh] sm:justify-center">
      <Heading as="h2" variant="hero">
        Salut ! Je suis
        <ProfileBubble />
        Product Designer chez{" "}
        <Link
          target="_blank"
          href="https://source.paris/"
          className="link-hover"
        >
          Source
        </Link>
      </Heading>
      <Text variant="paragraph-large">{Description}</Text>
    </section>
  )
}

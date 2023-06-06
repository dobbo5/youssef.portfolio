import Image from "next/image"
import profileImage from "@/public/profile-image.jpg"
import { gql } from "@apollo/client"

import { getDataFromGql } from "@/lib/getDataFromGql"
import { Button } from "@/components/kit/button"
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
    <section className="flex min-h-[90vh] flex-col justify-center gap-4">
      <Heading as="h2" variant="hero">
        Salut ! Je suis&nbsp;
        <span className="rounded-full">
          <Image
            src={profileImage}
            alt="Photo de moi"
            className="inline h-auto w-[clamp(3rem,calc(4vw+2rem),8rem)] rounded-full bg-neutral-50"
            width={400}
            height={400}
          />
        </span>
        &nbsp;product builder en Alternance et en Freelance.
      </Heading>
      <Text variant="paragraph-large">{Description}</Text>
    </section>
  )
}

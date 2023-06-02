import { gql } from '@apollo/client'

import { getDataFromGql } from '@/lib/getDataFromGql'
import { Heading } from '@/components/kit/Heading'
import { Text } from '@/components/kit/Text'

// Define types for GraphQL data
interface MyValue {
  title: string
  content: string
}
interface MyValueResponse {
  data: {
    myValue: {
      data: {
        attributes: {
          my_values: MyValue[]
        }
      }
    }
  }
}

const GetValuesQuery = gql`
  query values {
    myValue {
      data {
        attributes {
          my_values {
            uuid
            title
            content
          }
        }
      }
    }
  }
`

export async function MyValues() {
  const response: MyValueResponse = await getDataFromGql(GetValuesQuery)

  const {
    data: {
      myValue: {
        data: {
          attributes: { my_values },
        },
      },
    },
  } = response

  return (
    <section className="py-40">
      <Heading as="h3" variant="section-1-large">
        Mes valeurs
      </Heading>
      <div>
        {my_values.map((value: MyValue, index) => (
          <dl
            key={`${value.title}-${index}`}
            className="flex border-b border-neutral-100 py-16"
          >
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

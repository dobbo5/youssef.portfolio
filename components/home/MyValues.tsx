import { gql } from "@apollo/client"

import { getDataFromGql } from "@/lib/getDataFromGql"
import { Heading } from "@/components/kit/Heading"
import { Text } from "@/components/kit/Text"

import { Divider } from "../animations/Divider"
import { DesignXcode } from "./DesignXcode"

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
    <section>
      <DesignXcode />
      <div>
        {my_values.map((value: MyValue, index) => (
          <div key={`${value.title}-${index}`}>
            <dl className="flex flex-col gap-y-4 py-8 sm:flex-row sm:py-16">
              <dt className="w-full">
                <Heading as="h5" variant="section-2">
                  {value.title}
                </Heading>
              </dt>
              <dd className="w-full">
                <Text>{value.content}</Text>
              </dd>
            </dl>
            <Divider />
          </div>
        ))}
      </div>
    </section>
  )
}

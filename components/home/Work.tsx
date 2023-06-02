import { gql } from "@apollo/client"

import { WorksResponse } from "@/types/gqltypes"
import { getDataFromGql } from "@/lib/getDataFromGql"

import { WorkGrid } from "./WorkGrid"

const GetWorks = gql`
  query works {
    projects {
      data {
        attributes {
          casestudy_type
          project_type
          handle
          intro {
            name
            role
            year
            image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`

export async function Work() {
  const response: WorksResponse = await getDataFromGql(GetWorks)

  const {
    data: {
      projects: { data: worksData },
    },
  } = response

  return <WorkGrid worksData={worksData} />
}

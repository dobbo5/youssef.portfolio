import { gql } from "@apollo/client"

import { WorksResponse } from "@/types/gqltypes"
import { IMAGE_FRAGMENT } from "@/lib/fragments"
import { getDataFromGql } from "@/lib/getDataFromGql"

import { WorkGrid } from "./WorkGrid"

const GetWorks = gql`
  ${IMAGE_FRAGMENT}
  query works {
    projects(sort: "rank") {
      data {
        attributes {
          casestudy_type
          col_span
          project_type
          handle
          cover_image {
            ...ImageFragment
          }
          intro {
            name
            role
            year
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

  return <WorkGrid isHeading worksData={worksData} />
}

import { Suspense } from "react"
import { gql } from "@apollo/client"

import { WorksResponse } from "@/types/gqltypes"
import { IMAGE_FRAGMENT } from "@/lib/fragments"
import { getDataFromGql } from "@/lib/getDataFromGql"
import { HeadingAppear } from "@/components/animations/HeadingAppear"
import { WorkGrid } from "@/components/home/WorkGrid"

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

export default async function WorkPage() {
  const response: WorksResponse = await getDataFromGql(GetWorks)

  const {
    data: {
      projects: { data: worksData },
    },
  } = response

  return (
    <>
      <HeadingAppear as="h3" variant="section-1-large">
        Projets
      </HeadingAppear>
      <Suspense>
        <WorkGrid worksData={worksData} />
      </Suspense>
    </>
  )
}

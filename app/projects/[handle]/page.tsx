import Image from "next/image"
import { gql } from "@apollo/client"

import { ProjectResponse } from "@/types/gqltypes"
import { IMAGE_FRAGMENT } from "@/lib/fragments"
import { getDataFromGql } from "@/lib/getDataFromGql"
import { Accordion } from "@/components/global/Accordion"
import { Button } from "@/components/kit/Button"
import { Heading } from "@/components/kit/Heading"
import { Tag } from "@/components/kit/Tag"
import { Text } from "@/components/kit/Text"

import { Sections } from "./Sections"

const GetProject = gql`
  ${IMAGE_FRAGMENT}
  query ProjectByHandle($handle: String!) {
    projects(filters: { handle: { eq: $handle } }) {
      data {
        attributes {
          intro {
            name
            role
            link
            year
            problems_solutions {
              title
              content
            }
            livrables {
              text
            }
            tech_stack {
              title
              image {
                ...ImageFragment
              }
            }
            briefs {
              title
              content
            }
            image {
              ...ImageFragment
            }
          }
          Sections {
            __typename
            ... on ComponentLayoutsKeyDrivers {
              key_drivers {
                title
                content
              }
            }
            ... on ComponentLayoutsPersonnas {
              Personnas {
                infos {
                  image {
                    ...ImageFragment
                  }
                  name
                  age
                  position
                  city
                }
                contents {
                  title
                  content
                }
              }
            }
            ... on ComponentLayoutsTextsAndImage {
              title
              contents {
                col_span
                contents {
                  title
                  content
                }
              }
              image {
                ...ImageFragment
              }
            }
          }
        }
      }
    }
  }
`

export default async function ProjectPage({ params: { handle } }) {
  const response: ProjectResponse = await getDataFromGql(GetProject, { handle })

  const {
    data: {
      projects: { data },
    },
  } = response

  const { attributes: bodyData } = data[0]

  return (
    <div className="my-64 flex flex-col gap-6">
      <header className="flex flex-col items-start gap-4">
        <Tag>{bodyData.intro.role}</Tag>
        <div className="flex w-full items-center justify-between">
          <Heading as="h1" variant="section-1-medium">
            {bodyData.intro.name}
          </Heading>
          <Button>Voir le siteweb</Button>
        </div>
      </header>

      <ProjectBody bodyData={bodyData} />
    </div>
  )
}

function ProjectBody({ bodyData }) {
  const { intro: introData, Sections: SectionsData } = bodyData

  return (
    <article className="flex flex-col gap-16 rounded-md border border-neutral-100 p-16">
      <Intro introData={introData} />

      <Sections SectionsData={SectionsData} />
    </article>
  )
}

function Intro({ introData }) {
  const {
    year,
    problems_solutions,
    tech_stack,
    briefs,
    livrables,
    image: {
      data: {
        attributes: { url, height, width },
      },
    },
  } = introData

  return (
    <section className="grid grid-cols-4 gap-16">
      <Image
        src={url}
        alt={`screenshot of ${introData.name}`}
        width={width}
        height={height}
        className="col-span-4 rounded-md shadow-md shadow-neutral-100"
      />
      <div className="col-span-2 flex flex-col gap-8">
        {briefs.map(({ title, content }) => (
          <div key={title}>
            <Heading as="h4" variant="body" className="mb-4">
              {title}
            </Heading>
            <Text>{content}</Text>
          </div>
        ))}
      </div>
      <div className="col-span-1">
        <Heading as="h4" variant="body" className="mb-4">
          Année
        </Heading>
        <Text>{year}</Text>
      </div>
      <div className="col-span-1">
        <Heading as="h4" variant="body" className="mb-4">
          Livrables
        </Heading>
        <ul className="flex flex-col gap-4">
          {livrables.map((livrable) => (
            <li>
              <Tag>{livrable.text}</Tag>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4 grid grid-cols-4 gap-16 border-t border-neutral-200">
        <Heading
          as="h3"
          variant="section-1-medium"
          className="col-span-2 mt-8 uppercase"
        >
          Problèmes + Solutions
        </Heading>
        <div className="col-span-2">
          <Accordion data={problems_solutions} />
        </div>
      </div>
    </section>
  )
}

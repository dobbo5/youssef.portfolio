import Image from "next/image"
import { gql } from "@apollo/client"

import { ProjectResponse } from "@/types/gqltypes"
import { IMAGE_FRAGMENT } from "@/lib/fragments"
import { getDataFromGql } from "@/lib/getDataFromGql"
import { HeadingAppear } from "@/components/animations/HeadingAppear"
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
              image {
                ...ImageFragment
              }
              contents {
                col_span
                contents {
                  title
                  content
                }
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
    <div className="my-8 flex flex-col gap-6 sm:my-64">
      <header className="flex flex-col items-start gap-4">
        <Tag>{bodyData.intro.role}</Tag>
        <div className="flex w-full flex-col items-center justify-between sm:flex-row">
          <HeadingAppear
            as="h1"
            variant="section-1-medium"
            className="my-8 sm:my-0"
          >
            {bodyData.intro.name}
          </HeadingAppear>
          {bodyData.intro.link && (
            <Button target="_blank" href={bodyData.intro.link}>
              Voir le siteweb
            </Button>
          )}
        </div>
      </header>
      <ProjectBody bodyData={bodyData} />
    </div>
  )
}

function ProjectBody({ bodyData }) {
  const { intro: introData, Sections: SectionsData } = bodyData

  return (
    <article className="flex flex-col gap-8 rounded-md border border-neutral-100 p-4 sm:gap-16 sm:p-16">
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
    <section className="grid grid-cols-1 gap-16 sm:grid-cols-4">
      <Image
        src={url}
        alt={`screenshot of ${introData.name}`}
        width={width}
        height={height}
        priority={true}
        className="rounded-lg shadow-custom sm:col-span-4"
      />
      <div className="flex flex-col gap-8 sm:col-span-4 md:col-span-2">
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
      {tech_stack.length > 0 && <TechStack techStackData={tech_stack} />}
      <div className="grid grid-cols-1 gap-x-16 border-t border-neutral-200 sm:col-span-4 md:grid-cols-4">
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

function TechStack({ techStackData }) {
  return (
    <div className="sm:col-span-2 sm:col-start-3">
      <Heading as="h4" variant="body" className="mb-4">
        TechStack
      </Heading>
      <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {techStackData.map(({ title, image }) => (
          <li className="flex flex-col items-center justify-center gap-2 rounded-md border border-neutral-100 p-2">
            <Image
              src={image.data.attributes.url}
              alt={title}
              width={image.data.attributes.width}
              height={image.data.attributes.height}
              className="aspect-square rounded-sm object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Text variant="sub-mono">{title}</Text>
          </li>
        ))}
      </ul>
    </div>
  )
}

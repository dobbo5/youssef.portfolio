import { Fragment } from "react"
import { gql } from "@apollo/client"
import clsx from "clsx"

import { getDataFromGql } from "@/lib/getDataFromGql"
import { Divider } from "@/components/animations/Divider"
import { HeadingAppear } from "@/components/animations/HeadingAppear"
import { Heading } from "@/components/kit/Heading"
import { Tag } from "@/components/kit/Tag"
import { Text } from "@/components/kit/Text"
import { TextMarkdown } from "@/components/kit/TextMarkdown"

type SkillTool = {
  text: string
}

const GetInfos = gql`
  query infos {
    info {
      data {
        attributes {
          my_infos {
            title
            contents {
              title
              surtitle
              content
              tag
            }
          }
          skills_tools {
            design_skills {
              text
            }
            design_tools {
              text
            }
            tech_skills {
              text
            }
            tech_tools {
              text
            }
          }
        }
      }
    }
  }
`

export default async function AboutPage() {
  const response = await getDataFromGql(GetInfos)

  const {
    data: {
      info: {
        data: {
          attributes: { my_infos, skills_tools },
        },
      },
    },
  } = response

  return (
    <>
      <HeadingAppear as="h3" variant="section-1-large">
        Mes infos
      </HeadingAppear>
      <MyInfos my_infos={my_infos} />
      <SkillTool skills_tools={skills_tools} />
    </>
  )
}

function SkillTool({ skills_tools }) {
  const { design_skills, design_tools, tech_skills, tech_tools } = skills_tools

  return (
    <div className="mt-16 grid grid-cols-1 gap-y-8 rounded-lg bg-neutral-100 p-8 sm:p-12 md:grid-cols-2">
      <Heading as="h2" variant="info-name">
        SKILLS <br /> + TOOLS
      </Heading>
      <div className="grid grid-cols-2 gap-8 sm:gap-x-16">
        <SkillToolList data={design_skills} />
        <SkillToolList uppercase data={design_tools} />
        <div className="col-span-2 h-px w-full bg-neutral-200" />
        <SkillToolList data={tech_skills} />
        <SkillToolList uppercase data={tech_tools} />
      </div>
    </div>
  )
}

function SkillToolList({
  data,
  uppercase = false,
}: {
  data: SkillTool[]
  uppercase?: boolean
}) {
  const style = clsx(
    uppercase ? "uppercase" : undefined,
    "space-y-2 leading-tight"
  )

  return (
    <ul className={style}>
      {data.map((item) => (
        <li key={item.text}>{item.text}</li>
      ))}
    </ul>
  )
}

function MyInfos({ my_infos }) {
  return (
    <div>
      <Divider />
      {my_infos.map((info) => (
        <Fragment key={info.title}>
          <dl className="flex flex-col gap-y-4 py-8 sm:flex-row sm:py-16">
            <dt className="w-full">
              <Heading as="h2" variant="info-name">
                {info.title}
              </Heading>
            </dt>
            <dd className="w-full space-y-10">
              {info.contents.map((content) => (
                <div key={content.title}>
                  <Text variant="sub-mono" className="mb-1">
                    {content.surtitle}
                  </Text>
                  <Heading as="h3" variant="section-2" className="mb-4">
                    {content.title}
                    <Tag className="ml-2 align-middle">{content.tag}</Tag>
                  </Heading>
                  <TextMarkdown>{content.content}</TextMarkdown>
                </div>
              ))}
            </dd>
          </dl>
          <Divider />
        </Fragment>
      ))}
    </div>
  )
}

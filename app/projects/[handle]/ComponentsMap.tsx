import Image from "next/image"

import { Heading } from "@/components/kit/Heading"
import { TagCard } from "@/components/kit/TagCard"
import { Text } from "@/components/kit/Text"
import { TextMarkdown } from "@/components/kit/TextMarkdown"

import { ProjectSection } from "./ProjectSection"

function ComponentLayoutsKeyDrivers({ key_drivers }) {
  return (
    <ProjectSection title="Key drivers">
      <ul className="columns-3 gap-4 space-y-4">
        {key_drivers.map((key_driver) => {
          return (
            <li key={key_driver.title} className="break-inside-avoid">
              <TagCard title={key_driver.title} content={key_driver.content} />
            </li>
          )
        })}
      </ul>
    </ProjectSection>
  )
}

function ComponentLayoutsTextsAndImage({ title, contents, image }) {
  const {
    data: { attributes: imageData },
  } = image

  const { contents: contentData, col_span } = contents

  const calculatedSpan = (12 - col_span + 12) % 12 || 12

  return (
    <ProjectSection title={title}>
      <div className="grid grid-cols-12 gap-x-16 gap-y-8">
        <ul
          className="flex flex-col gap-8"
          style={{ gridColumn: `span ${col_span} / span ${col_span}` }}
        >
          {contentData.map((content) => {
            return (
              <li key={content.title}>
                <Heading as="h3" variant="body" className="mb-2">
                  {content.title}
                </Heading>
                <TextMarkdown>{content.content}</TextMarkdown>
              </li>
            )
          })}
        </ul>
        <div
          style={{
            gridColumn: `span ${calculatedSpan} / span ${calculatedSpan}`,
          }}
        >
          <Image
            className="h-auto w-full"
            src={imageData.url}
            alt={title || "screenshot of the project"}
            width={imageData.width}
            height={imageData.height}
          />
        </div>
      </div>
    </ProjectSection>
  )
}

function ComponentLayoutsPersonnas({ Personnas }) {
  return (
    <ProjectSection title="Personnas">
      <div className="grid grid-cols-3 items-start gap-4">
        {Personnas.map((personna) => {
          const {
            infos: {
              name,
              age,
              position,
              city,
              image: {
                data: { attributes: imageData },
              },
            },
            contents,
          } = personna

          return (
            <div
              key={personna.infos.name}
              className="rounded-md bg-neutral-100 p-8"
            >
              <div className="mb-4 grid grid-cols-2 items-end gap-4">
                <Image
                  src={imageData.url}
                  width={imageData.width}
                  height={imageData.height}
                  alt={"Photo de " + name}
                  className="aspect-square rounded-sm object-cover"
                />
                <ul className="text-lg">
                  <li className="font-medium uppercase">{name}</li>
                  <li>{age}</li>
                  <li>{position}</li>
                  <li>{city}</li>
                </ul>
              </div>

              <ul>
                {contents.map((content) => {
                  return (
                    <li
                      className="border-t border-neutral-200 py-4"
                      key={content.title}
                    >
                      <dl className="grid grid-cols-3 gap-4">
                        <dt className="col-span-1 font-medium">
                          {content.title}
                        </dt>
                        <dd className="col-span-2">
                          <Text>{content.content}</Text>
                        </dd>
                      </dl>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </ProjectSection>
  )
}

export const componentsMap = {
  ComponentLayoutsKeyDrivers,
  ComponentLayoutsTextsAndImage,
  ComponentLayoutsPersonnas,
}

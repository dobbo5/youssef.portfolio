import Image from "next/image"

import { Heading } from "@/components/kit/Heading"
import { TagCard } from "@/components/kit/TagCard"
import { Text } from "@/components/kit/Text"
import { TextMarkdown } from "@/components/kit/TextMarkdown"

import { ProjectSection } from "./ProjectSection"

function ComponentLayoutsKeyDrivers({ key_drivers }) {
  return (
    <ProjectSection title="Key drivers">
      <ul className="gap-4 space-y-4 sm:columns-2 md:columns-3">
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

  let calculatedSpan = 12

  if (contents) {
    calculatedSpan = (12 - contents.col_span + 12) % 12 || 12
  }

  console.log(imageData)

  return (
    <ProjectSection title={title}>
      <div className="flex w-full grid-cols-12 flex-col gap-8 md:grid lg:gap-x-16">
        {contents ? (
          <ul
            className="flex flex-col gap-8"
            style={{
              gridColumn: `span ${contents.col_span} / span ${contents.col_span}`,
            }}
          >
            {contents.contents.map((content) => {
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
        ) : null}

        <div
          className="overflow-hidden rounded-md"
          style={{
            gridColumn: `span ${calculatedSpan} / span ${calculatedSpan}`,
          }}
        >
          <MediaRender imageData={imageData} />
        </div>
      </div>
    </ProjectSection>
  )
}

function MediaRender({ imageData }) {
  if (imageData.mime.includes("image")) {
    return (
      <Image
        className="h-auto w-full"
        src={imageData.url}
        alt="Project Video"
        width={imageData.width || 1920}
        height={imageData.height || 1080}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    )
  } else if (imageData.mime.includes("video")) {
    return (
      <video autoPlay muted loop>
        <source src={imageData.url} />
      </video>
    )
  }

  return null
}

function ComponentLayoutsPersonnas({ Personnas }) {
  return (
    <ProjectSection title="Personnas">
      <div className="grid items-start gap-4 md:grid-cols-2 2xl:grid-cols-3">
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
              className="rounded-md bg-neutral-100/25 p-4 sm:p-8"
            >
              <div className="mb-4 grid grid-cols-2 items-end gap-4">
                <Image
                  src={imageData.url}
                  width={imageData.width}
                  height={imageData.height}
                  alt={"Photo de " + name}
                  className="aspect-square rounded-sm object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <ul className="sm:text-lg">
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
                      <dl className="grid gap-4 sm:grid-cols-3">
                        <dt className="col-span-1 font-medium">
                          {content.title}
                        </dt>
                        <dd className="sm:col-span-2">
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

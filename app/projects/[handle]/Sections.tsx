import { componentsMap } from "./ComponentsMap"

export function Sections({ SectionsData }: { SectionsData: object[] }) {
  return (
    <>
      {SectionsData.map((section, index) => {
        const Component = componentsMap[section.__typename]
        if (!Component) return null

        return <Component key={index} {...section} />
      })}
    </>
  )
}

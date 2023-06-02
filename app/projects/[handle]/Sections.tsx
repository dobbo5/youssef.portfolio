import { componentsMap } from "./ComponentsMap"

export function Sections({ SectionsData }) {
  return (
    <div>
      {SectionsData.map((section, index) => {
        const Component = componentsMap[section.__typename]
        if (!Component) return <div>Nothing</div>

        return <Component key={index} />
      })}
    </div>
  )
}

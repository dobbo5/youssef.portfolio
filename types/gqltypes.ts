export type ImageType = {
  image: {
    data: {
      attributes: {
        url: string
        width: number
        height: number
      }
    }
  }
}

export type WorksResponse = {
  data: {
    projects: {
      data: WorkData[]
    }
  }
}

export type WorkData = {
  attributes: {
    casestudy_type: string
    col_span: string
    project_type: string
    handle: string
    cover_image: ImageType
    intro: {
      name: string
      role: string
      year: string
    }
  }
}

export type ProjectResponse = {
  data: {
    projects: {
      data: {
        attributes: {
          intro: {
            name: string
            role: string
            link?: string
            year: string
            image: ImageType
            problems_solutions: {
              title: string
              content: string
            }[]
            livrables: {
              text: string
            }[]
            tech_stack?: {
              title: string
              image: ImageType
            }[]
            briefs: {
              title: string
              content: string
            }[]
          }
          sections: {
            __typename: string
          }[]
        }
      }
    }
  }
}

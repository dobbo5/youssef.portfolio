import { gql } from "@apollo/client"

export const IMAGE_FRAGMENT = gql`
  fragment ImageFragment on UploadFileEntityResponse {
    data {
      attributes {
        width
        height
        url
      }
    }
  }
`

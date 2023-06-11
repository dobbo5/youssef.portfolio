import { gql } from "@apollo/client"

export const IMAGE_FRAGMENT = gql`
  fragment ImageFragment on UploadFileEntityResponse {
    data {
      attributes {
        mime
        width
        height
        url
      }
    }
  }
`

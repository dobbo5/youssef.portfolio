import { DocumentNode } from "@apollo/client"
import { print } from "graphql/language/printer"

export async function getDataFromGql(
  gqlData: DocumentNode,
  variables: any = undefined
) {
  // console.log(variables)
  const data = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: print(gqlData),
      variables,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json())
  return data
}

import { gql } from '@apollo/client'

export const GET_REPOS = gql`
  query Search($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      edges {
        node {
          ... on Repository {
            id
            name
            forkCount
            url
            stargazerCount
            owner {
              login
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`

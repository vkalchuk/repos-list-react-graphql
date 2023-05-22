import { GET_REPOS } from '../graphql/queries'

export const mocks = [
  {
    request: {
      query: GET_REPOS,
      variables: {
        query: 'react',
        first: 5,
        after: null,
      },
    },
    result: {
      data: {
        search: {
          edges: [
            {
              node: {
                id: '1',
                name: 'Repo 1',
                stargazerCount: 10,
                forkCount: 5,
                url: 'https://github.com/repo1',
                owner: {
                  login: 'owner1',
                },
              },
            },
            {
              node: {
                id: '2',
                name: 'Repo 2',
                stargazerCount: 20,
                forkCount: 8,
                url: 'https://github.com/repo2',
                owner: {
                  login: 'owner2',
                },
              },
            },
          ],
          pageInfo: {
            endCursor: 'abc123',
            hasNextPage: true,
          },
        },
      },
    },
  },
]

export const mocksWithoutNextPage = [
  {
    request: {
      query: GET_REPOS,
      variables: {
        query: 'react',
        first: 5,
        after: null,
      },
    },
    result: {
      data: {
        search: {
          edges: [
            {
              node: {
                id: '1',
                name: 'Repo1',
                stargazerCount: 10,
                forkCount: 5,
                url: 'https://github.com/repo1',
                owner: {
                  login: 'owner1',
                },
              },
            },
            {
              node: {
                id: '2',
                name: 'Repo 2',
                stargazerCount: 20,
                forkCount: 8,
                url: 'https://github.com/repo2',
                owner: {
                  login: 'owner2',
                },
              },
            },
          ],
          pageInfo: {
            endCursor: 'abc123',
            hasNextPage: false,
          },
        },
      },
    },
  },
]

export const loadMoreMocks = [
  {
    request: {
      query: GET_REPOS,
      variables: {
        query: 'react',
        first: 5,
        after: 'abc123',
      },
    },
    result: {
      data: {
        search: {
          edges: [
            {
              node: {
                id: '1',
                name: 'Repo1',
                stargazerCount: 10,
                forkCount: 5,
                url: 'https://github.com/repo1',
                owner: {
                  login: 'owner1',
                },
              },
            },
            {
              node: {
                id: '2',
                name: 'Repo 2',
                stargazerCount: 20,
                forkCount: 8,
                url: 'https://github.com/repo2',
                owner: {
                  login: 'owner2',
                },
              },
            },
          ],
          pageInfo: {
            endCursor: 'abc123',
            hasNextPage: false,
          },
        },
      },
    },
  },
]

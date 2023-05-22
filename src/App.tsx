import React, { useState, useEffect } from 'react'
import { NetworkStatus, useLazyQuery } from '@apollo/client'
import { GET_REPOS } from './graphql/queries'
import RepositoryList from './components/RepositoryList/RepositoryList'
import Loader from './components/Loader/Loader'
import SearchInput from './components/SearchInput/SearchInput'

interface RepositoryResponse {
  search: Search
}

interface Search {
  edges: Edge[]
  pageInfo: PageInfo
}

interface PageInfo {
  endCursor: string
  hasNextPage: boolean
}

export interface Edge {
  node: Repository
}

interface Repository {
  id: string
  name: string
  stargazerCount: number
  forkCount: number
  url: string
  owner: RepositoryOwner
}

interface RepositoryOwner {
  login: string
}

const RESULTS_PER_PAGE = 5
const INIT_SEARCH_QUERY = 'react'

function App() {
  const [repositories, setRepositories] = useState<
    RepositoryResponse | undefined
  >()

  const [searchRepos, { loading, error, fetchMore, networkStatus }] =
    useLazyQuery(GET_REPOS, {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
      onCompleted: data => setRepositories(data),
    })

  useEffect(() => {
    searchRepos({
      variables: {
        query: INIT_SEARCH_QUERY,
        first: RESULTS_PER_PAGE,
        after: null,
      },
    })
  }, [searchRepos])

  const handleLoadMore = () => {
    fetchMore({
      variables: { after: repositories?.search?.pageInfo?.endCursor },
      updateQuery: (_, { fetchMoreResult }) => {
        if (!fetchMoreResult) return repositories

        const mergedRepositories = [
          ...(repositories?.search?.edges || []),
          ...(fetchMoreResult?.search?.edges || []),
        ]

        return {
          ...repositories,
          search: {
            ...repositories?.search,
            edges: mergedRepositories,
            pageInfo: fetchMoreResult.search.pageInfo,
          },
        }
      },
    })
  }

  const handleSearch = (searchQuery: string) => {
    searchRepos({
      variables: {
        first: RESULTS_PER_PAGE,
        query: searchQuery,
        after: null,
      },
    })
  }

  return (
    <div className='flex flex-col justify-center w-[640px] mx-auto pb-10'>
      {error ? <p>Error: {JSON.stringify(error)}</p> : null}

      <SearchInput onSearch={handleSearch} />

      <RepositoryList repositories={repositories?.search?.edges} />

      {loading || networkStatus === NetworkStatus.fetchMore ? <Loader /> : null}

      {repositories?.search?.pageInfo?.hasNextPage ? (
        <button
          className='w-1/2 mx-auto px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
          onClick={handleLoadMore}
        >
          Load More
        </button>
      ) : null}
    </div>
  )
}

export default App

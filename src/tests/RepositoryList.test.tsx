import React from 'react'
import { render, screen } from '@testing-library/react'
import RepositoryList from '../components/RepositoryList'

import { mocks } from './mocks'

describe('Repository list', () => {
  test('should render list of repositories', async () => {
    render(<RepositoryList repositories={mocks[0].result.data.search.edges} />)

    const repoNames = screen.getAllByTestId('repo-name')

    expect(repoNames).toHaveLength(2)
    expect(repoNames[0]).toHaveTextContent('owner1/Repo 1')
    expect(repoNames[1]).toHaveTextContent('owner2/Repo 2')
  })
})

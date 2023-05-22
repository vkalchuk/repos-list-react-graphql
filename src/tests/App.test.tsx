import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { mocks, mocksWithoutNextPage, loadMoreMocks } from './mocks'
import App from '../App'

describe('App', () => {
  it('renders search search input', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    )
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
  })

  it('renders render loader when loading initial repositories', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  })

  it('renders render table with initial repositories', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('🌟 Stars 🌟')).toBeInTheDocument()
    expect(screen.getByText('🍴 Forks 🍴')).toBeInTheDocument()

    expect(screen.getByText('Load More')).toBeInTheDocument()
  })

  it('renders Load More button when next page is available', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument()
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

    expect(screen.getByText('Load More')).toBeInTheDocument()
  })

  it('does not render Load More button when there is no next page', async () => {
    render(
      <MockedProvider mocks={mocksWithoutNextPage} addTypename={false}>
        <App />
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

    expect(screen.queryByText('Load More')).not.toBeInTheDocument()
  })

  it('loads more repositories when clicking the Load More button', async () => {
    render(
      <MockedProvider mocks={[...mocks, ...loadMoreMocks]} addTypename={false}>
        <App />
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument()
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

    fireEvent.click(screen.getByText('Load More'))

    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument()
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  })
})

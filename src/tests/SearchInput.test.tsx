import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Search from '../components/SearchInput'

describe('Search', () => {
  test('should trigger callback function', async () => {
    const onSearchSpy = jest.fn()

    render(<Search onSearch={onSearchSpy} />)

    const searchInput = screen.getByTestId('search-input')
    const searchBtn = screen.getByTestId('search-btn')

    fireEvent.change(searchInput, { target: { value: 'Mickey' } })
    fireEvent.click(searchBtn)

    expect(onSearchSpy).toHaveBeenCalledTimes(1)
    expect(onSearchSpy).toHaveBeenCalledWith('Mickey')
  })
})

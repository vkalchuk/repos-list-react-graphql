import React, { useState, ChangeEvent, KeyboardEvent } from 'react'

interface SearchInputProps {
  onSearch: (searchTerm: string) => void
}

function SearchInput({ onSearch }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState('react')

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className='flex justify-center my-5'>
      <input
        type='text'
        className='mr-2 px-4 py-2 border border-gray-300 rounded'
        placeholder='Search'
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        data-testid='search-input'
      />
      <button
        className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
        onClick={handleSearch}
        data-testid='search-btn'
      >
        Search
      </button>
    </div>
  )
}

export default SearchInput

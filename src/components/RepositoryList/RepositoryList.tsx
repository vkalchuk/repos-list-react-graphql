import React from 'react'
import { Edge } from '../../App'

interface RepositoryListProps {
  repositories: Edge[] | undefined
}

function RepositoryList({ repositories }: RepositoryListProps) {
  if (!repositories) {
    return null
  }

  return (
    <div className='max-w-2xl mx-auto my-8'>
      <h1 className='text-2xl font-bold mb-4'>React Repositories</h1>
      <table className='w-full border-collapse'>
        <thead className='bg-neutral-300'>
          <tr>
            <th className='border p-2'>Name</th>
            <th className='border p-2'>🌟 Stars 🌟</th>
            <th className='border p-2'>🍴 Forks 🍴</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map(({ node }) => {
            if (!node || !node.owner || !node.owner.login) {
              return null
            }

            const { id, name, stargazerCount, forkCount, url, owner } = node

            return (
              <tr key={id}>
                <td className='border p-2'>
                  <a
                    className='text-blue-600 underline'
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    data-testid='repo-name'
                  >
                    {owner.login}/{name}
                  </a>
                </td>
                <td className='border p-2'>{stargazerCount}</td>
                <td className='border p-2'>{forkCount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RepositoryList

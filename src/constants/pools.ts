import { Pool } from '../types'

export const pools: Pool[] = [
  {
    id: '1',
    name: 'Community Improvement',
    description: 'Vote on various community improvement initiatives.',
    candidates: [
      {
        id: 'alice-johnson',
        name: 'Alice Johnson',
        affiliation: 'Local Business Owner',
        linktree: 'https://linktr.ee/alicejohnson',
      },
      {
        id: 'bob-smith',
        name: 'Bob Smith',
        affiliation: 'Teacher',
        linktree: 'https://linktr.ee/bobsmith',
      },
    ],
  },
  {
    id: '2',
    name: 'Environmental Policies',
    description: 'Select policies for enhancing environmental sustainability.',
    candidates: [
      {
        id: 'carol-white',
        name: 'Carol White',
        affiliation: 'Environmental Activist',
        linktree: 'https://linktr.ee/carolwhite',
      },
      {
        id: 'david-lee',
        name: 'David Lee',
        affiliation: 'Engineer',
        linktree: 'https://linktr.ee/davidlee',
      },
    ],
  },
]
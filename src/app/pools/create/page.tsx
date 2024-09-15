'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Candidate } from '../../../types'

export default function CreatePool() {
  const router = useRouter()
  const [poolName, setPoolName] = useState('')
  const [description, setDescription] = useState('')
  const [candidates, setCandidates] = useState<Candidate[]>([
    { id: '', name: '', affiliation: '', linktree: '' },
  ])

  const handleCandidateChange = (
    index: number,
    field: keyof Candidate,
    value: string
  ) => {
    const updatedCandidates = [...candidates]
    updatedCandidates[index][field] = value
    setCandidates(updatedCandidates)
  }

  const addCandidate = () => {
    setCandidates([...candidates, { id: '', name: '', affiliation: '', linktree: '' }])
  }

  const removeCandidate = (index: number) => {
    const updatedCandidates = candidates.filter((_, i) => i !== index)
    setCandidates(updatedCandidates)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/pools', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          poolName,
          description,
          candidates,
        }),
      })

      const data = await response.json()

      if (data.success) {
        // Redirect after successful creation
        router.push('/pools')
      } else {
        // Handle error (e.g., show a message to the user)
        console.error(data.message)
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create a New Pool</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Pool Name</label>
          <input
            type="text"
            value={poolName}
            onChange={(e) => setPoolName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
            rows={4}
          ></textarea>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Candidates</h3>
          {candidates.map((candidate, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <div className="flex justify-between items-center mb-2">
                <span>Candidate {index + 1}</span>
                {candidates.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCandidate(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    value={candidate.name}
                    onChange={(e) =>
                      handleCandidateChange(index, 'name', e.target.value)
                    }
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Affiliation</label>
                  <input
                    type="text"
                    value={candidate.affiliation}
                    onChange={(e) =>
                      handleCandidateChange(
                        index,
                        'affiliation',
                        e.target.value
                      )
                    }
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">LinkTree URL</label>
                  <input
                    type="url"
                    value={candidate.linktree}
                    onChange={(e) =>
                      handleCandidateChange(index, 'linktree', e.target.value)
                    }
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addCandidate}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Candidate
          </button>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white rounded"
        >
          Create Pool
        </button>
      </form>
    </div>
  )
}

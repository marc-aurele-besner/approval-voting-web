export interface Candidate {
  id: string
  name: string
  affiliation: string
  linktree: string
}

export interface Pool {
  id: string
  name: string
  description: string
  candidates: Candidate[]
}

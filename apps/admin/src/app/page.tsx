import { createGymClient } from '@gym/api-client'

const client = createGymClient('http://localhost:8000')

export default async function AdminHome() {
  const exercises = await client.GET('/api/v1/exercises')

  return (
    <main style={{ padding: 24 }}>
      <h1>Admin: Exercises</h1>
      <pre>{JSON.stringify(exercises.data, null, 2)}</pre>
    </main>
  )
}

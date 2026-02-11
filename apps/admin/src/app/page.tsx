import { getExercisesApiV1ExercisesGet } from '@gym/api-client'

export default async function AdminHome() {
  const exercises = await getExercisesApiV1ExercisesGet({
    baseUrl: 'http://localhost:8000'
  })

  return (
    <main style={{ padding: 24 }}>
      <h1>Admin: Exercises</h1>
      <pre>{JSON.stringify(exercises.data, null, 2)}</pre>
    </main>
  )
}

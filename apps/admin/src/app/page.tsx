import { V1Service } from '@gym/api-client'

export default async function AdminHome() {
  const exercises = await V1Service.getExercisesApiV1ExercisesGet()

  return (
    <main style={{ padding: 24 }}>
      <h1>Admin: Exercises</h1>
      <pre>{JSON.stringify(exercises, null, 2)}</pre>
    </main>
  )
}

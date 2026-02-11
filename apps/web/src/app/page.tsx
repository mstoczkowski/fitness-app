import Image from "next/image";
import { getExercisesApiV1ExercisesGet } from "@gym/api-client";

export default async function Home() {
  const exercises = await getExercisesApiV1ExercisesGet({
    baseUrl: 'http://localhost:8000'
  })

  return (
    <main style={{ padding: 24 }}>
      <h1>Exercises</h1>
      <ul>
        {exercises.data?.map((e) => (
          <li key={e.id}>
            {e.name} {e.equipment ? `(${e.equipment})` : ''}
          </li>
        ))}
      </ul>
    </main>
  );
}

import Image from "next/image";
import { V1Service } from "@gym/api-client";

export default async function Home() {
  const exercises = await V1Service.getExercisesApiV1ExercisesGet()

  return (
    <main style={{ padding: 24 }}>
      <h1>Exercises</h1>
      <ul>
        {exercises.map((e) => (
          <li key={e.id}>
            {e.name} {e.equipment ? `(${e.equipment})` : ''}
          </li>
        ))}
      </ul>
    </main>
  );
}

import Image from "next/image";
import { createGymClient } from "@gym/api-client";

const client = createGymClient('http://localhost:8000')

export default async function Home() {
  const exercises = await client.GET('/api/v1/exercises')

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

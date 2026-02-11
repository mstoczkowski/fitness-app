import createClient from 'openapi-fetch'
import type { paths } from './generated/schema'

export type GymClient = ReturnType<typeof createGymClient>

export function createGymClient(baseUrl: string) {
  return createClient<paths>({ baseUrl })
}

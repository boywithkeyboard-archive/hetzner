import _createClient from 'openapi-fetch'
import { paths } from './spec'

export type Client = ReturnType<typeof _createClient<paths>>

export function createClient({ token }: { token: string }) {
  return _createClient<paths>({
    baseUrl: 'https://api.hetzner.cloud/v1',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

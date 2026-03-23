import { redis } from './redis'

export async function getAccessToken(): Promise<string | null> {
  const tokens = await redis.get<any>('spotify:tokens')
  if (!tokens) return null

  if (Date.now() < tokens.expires_at - 60_000) return tokens.access_token

  const creds = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${creds}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: tokens.refresh_token,
    }),
  })

  const fresh = await res.json()
  fresh.refresh_token = tokens.refresh_token
  fresh.expires_at = Date.now() + fresh.expires_in * 1000
  await redis.set('spotify:tokens', fresh)
  return fresh.access_token
}
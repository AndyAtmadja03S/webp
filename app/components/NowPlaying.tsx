'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

type Track = {
  isPlaying: boolean
  title?: string
  artist?: string
  albumArt?: string
  songUrl?: string
  progressMs?: number
  durationMs?: number
}

type TrackWithMeta = Track & {
  lastFetchedAt?: number
}

function formatTime(ms?: number) {
  if (!ms) return '0:00'
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export default function NowPlaying() {
  const [track, setTrack] = useState<TrackWithMeta | null>(null)
  const [displayProgress, setDisplayProgress] = useState(0)
  const trackRef = useRef<TrackWithMeta | null>(null)

  useEffect(() => {
    trackRef.current = track
  }, [track])

  useEffect(() => {
    const fetchTrack = async () => {
      const res = await window.fetch('/api/spotify')
      const data = await res.json()

      setTrack({
        ...data,
        lastFetchedAt: Date.now(),
      })
    }

    fetchTrack()
    const interval = setInterval(fetchTrack, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const t = trackRef.current

      if (!t?.isPlaying || !t.progressMs || !t.lastFetchedAt) return

      const elapsed = Date.now() - t.lastFetchedAt
      const current = t.progressMs + elapsed

      setDisplayProgress(
        Math.min(current, t.durationMs ?? current)
      )
    }, 250)

    return () => clearInterval(interval)
  }, [])
  if (!track) return null

  if (!track.isPlaying) {
    return (
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <SpotifyIcon />
        <span>Not playing</span>
      </div>
    )
  }

  const progressPercent = track.durationMs
    ? (displayProgress / track.durationMs) * 100
    : 0

  return (
    <a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 group w-fit"
    >
      {track.albumArt && (
        <Image
          src={track.albumArt}
          alt="Album art"
          width={40}
          height={40}
          className="rounded-md shadow-sm"
        />
      )}

      <div className="w-full max-w-[220px]">
        <p className="text-xs text-green-500 flex items-center gap-1">
          <SpotifyIcon /> Now Playing
        </p>

        <p className="text-sm font-medium text-gray-800 group-hover:underline truncate">
          {track.title}
        </p>

        <p className="text-xs text-gray-500 truncate">
          {track.artist}
        </p>

        {/* Progress Bar */}
        <div className="w-full mt-1">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex justify-between text-[10px] text-gray-400 mt-1">
            <span>{formatTime(displayProgress)}</span>
            <span>{formatTime(track.durationMs)}</span>
          </div>
        </div>
      </div>
    </a>
  )
}

function SpotifyIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}
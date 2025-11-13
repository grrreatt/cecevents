'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AmbientAudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [muted, setMuted] = useState(false)
  const [supported, setSupported] = useState(true)
  const [volume, setVolume] = useState(0.25)

  useEffect(() => {
    const audio = new Audio('/ambient.mp3')
    audio.loop = true
    audio.preload = 'none'
    audio.volume = volume
    audioRef.current = audio

    const onVisibility = () => {
      if (document.hidden && audioRef.current) audioRef.current.pause()
      else if (enabled && !muted) audioRef.current?.play().catch(() => {})
    }

    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = volume
  }, [volume])

  const toggle = async () => {
    if (!audioRef.current) return
    if (!enabled) {
      try {
        await audioRef.current.play()
        setEnabled(true)
        setMuted(false)
      } catch {
        setSupported(false)
      }
    } else {
      audioRef.current.pause()
      setEnabled(false)
    }
  }

  const toggleMute = async () => {
    if (!audioRef.current) return
    if (muted) {
      setMuted(false)
      if (enabled) await audioRef.current.play().catch(() => {})
    } else {
      setMuted(true)
      audioRef.current.pause()
    }
  }

  if (!supported) return null

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggle}
        className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20"
      >
        {enabled ? 'Sound On' : 'Enable Sound'}
      </button>
      {enabled && (
        <button onClick={toggleMute} className="p-2 rounded-full text-white/90 hover:bg-white/10">
          {muted ? <VolumeX className="w-4 h-4"/> : <Volume2 className="w-4 h-4"/>}
        </button>
      )}
      {enabled && (
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 accent-gold"
          aria-label="Ambient volume"
        />
      )}
    </div>
  )
}

import React, { useState, useRef, useEffect } from 'react'
import './MusicPlayer.css'

const MusicPlayer = ({ musicPlaying, setMusicPlaying }) => {
  const audioRef = useRef(null)
  const [volume, setVolume] = useState(0.5)

  useEffect(() => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.play().catch(e => console.log("Auto-play prevented:", e))
      } else {
        audioRef.current.pause()
      }
    }
  }, [musicPlaying])

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying)
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="music-player">
      <button 
        onClick={toggleMusic}
        className={`music-toggle ${musicPlaying ? 'playing' : ''}`}
        aria-label={musicPlaying ? 'Pause music' : 'Play music'}
      >
        {musicPlaying ? '♫' : '♫'}
      </button>
      
      {musicPlaying && (
        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      )}
      
      <audio ref={audioRef} loop>
        <source src="/music/background.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default MusicPlayer
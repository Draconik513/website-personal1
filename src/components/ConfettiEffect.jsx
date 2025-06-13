import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../utils'
import './ConfettiEffect.css'

const ConfettiEffect = ({ active }) => {
  const [showConfetti, setShowConfetti] = useState(active)
  const { width, height } = useWindowSize()
  const [confettiPieces, setConfettiPieces] = useState([])

  useEffect(() => {
    setShowConfetti(active)
    if (active) {
      // Generate confetti pieces
      const pieces = Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        x: Math.random() * width,
        y: -10,
        rotation: Math.random() * 360,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 10 + 5,
        speed: Math.random() * 3 + 2
      }))
      setConfettiPieces(pieces)

      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [active, width])

  if (!showConfetti) return null

  return (
    <div className="confetti-container">
      {confettiPieces.map(piece => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `fall ${piece.speed}s linear forwards`
          }}
        />
      ))}
    </div>
  )
}

export default ConfettiEffect
import React, { useEffect, useState } from 'react'
import './FloatingHearts.css'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([])

  const createHeart = (e) => {
    if (e.target.closest('button, a, input')) return
    
    const heart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 3 + 2
    }
    setHearts(prev => [...prev, heart])
  }

  useEffect(() => {
    window.addEventListener('click', createHeart)
    return () => window.removeEventListener('click', createHeart)
  }, [])

  return (
    <div className="floating-hearts-container">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.duration}s`
          }}
          onAnimationEnd={() => setHearts(prev => prev.filter(h => h.id !== heart.id))}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts
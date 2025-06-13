import React, { useState, useEffect } from 'react'
import './ScrollIndicator.css'

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-indicator-container">
      <div 
        className="scroll-indicator-bar" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollIndicator
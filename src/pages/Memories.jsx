import React from 'react'
import MemoryTimeline from '../components/MemoryTimeline'
import PhotoCarousel from '../components/PhotoCarousel'
import RomanticQuotes from '../components/RomanticQuotes'
import './Memories.css'

const Memories = () => {
  return (
    <div className="memories-page">
      <h1>Our Journey Together</h1>
      <MemoryTimeline />
      <div className="highlight-section">
        <h2>Special Moments</h2>
        <PhotoCarousel />
      </div>
      <RomanticQuotes />
    </div>
  )
}

export default Memories
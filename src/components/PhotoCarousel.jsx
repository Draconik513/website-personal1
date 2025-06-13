import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './PhotoCarousel.css'

const images = [
  'fotodilaut.jpg',
  'fotokubersamanya.jpg',
  'fotonyayangpalingimut.jpg',
  'gantengdancantik.jpg'
]

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button onClick={prevImage} className="nav-button prev">
          &lt;
        </button>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="image-container"
          >
            <img 
              src={`/images/${images[currentIndex]}`} 
              alt={`Memory ${currentIndex + 1}`}
            />
          </motion.div>
        </AnimatePresence>
        
        <button onClick={nextImage} className="nav-button next">
          &gt;
        </button>
      </div>
      
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default PhotoCarousel
import React from 'react'
import { motion } from 'framer-motion'
import './MemoryHighlights.css'

const highlights = [
  {
    image: '/images/fotodilaut.jpg',
    caption: 'Our first beach vacation'
  },
  {
    image: '/images/fotokubersamanya.jpg',
    caption: 'Date night celebration'
  },
  {
    image: '/images/fotonyayangpalingimut.jpg',
    caption: 'Your most adorable moment'
  },
  {
    image: '/images/lucunyaaaaa.jpg',
    caption: 'Lucunyaaaa kamu tuh'
  },
  {
    image: '/images/aththebeach.jpg',
    caption: 'Main pasir bareng kamu'
  },
  {
    image: '/images/gantengdancantik.jpg',
    caption: 'Pasangan paling serasi'
  },
  {
    image: '/images/fotokakikudengandia.jpg',
    caption: 'Langkah kita bareng'
  },
  {
    image: '/images/ISTRIKUAAAHH.jpg',
    caption: 'Istriku ahhh 😍'
  },
  {
    image: '/images/senyumsakit.jpg',
    caption: 'Masih bisa senyum walau sakit'
  }
]

const MemoryHighlights = () => {
  return (
    <div className="memory-highlights">
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          className="highlight-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img 
            src={item.image} 
            alt={item.caption}
            onError={(e) => {
              e.target.src = '/images/placeholder.jpg'
            }}
          />
          <p>{item.caption}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default MemoryHighlights

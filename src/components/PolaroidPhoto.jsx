import React from 'react'
import { motion } from 'framer-motion'
import './PolaroidPhoto.css'

const PolaroidPhoto = ({ image, caption, rotation = 0 }) => {
  return (
    <motion.div 
      className="polaroid"
      initial={{ rotate: rotation - 5 }}
      animate={{ rotate: rotation }}
      whileHover={{ rotate: rotation + 5 }}
    >
      <div className="polaroid-image">
        <img src={`/images/${image}`} alt={caption} />
      </div>
      <p className="polaroid-caption">{caption}</p>
    </motion.div>
  )
}

export default PolaroidPhoto
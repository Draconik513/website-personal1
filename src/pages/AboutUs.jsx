import React from 'react'
import { motion } from 'framer-motion'
import PolaroidPhoto from '../components/PolaroidPhoto'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Story</h2>
          <p>
            We met on a beautiful summer day and instantly connected. From that moment on, 
            our lives have been filled with love, laughter, and countless memories.
          </p>
          <p>
            This website is a collection of our journey together - the moments we've shared, 
            the adventures we've had, and the love that continues to grow every day.
          </p>
        </motion.div>
        
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PolaroidPhoto 
            image="gantengdancantik.jpg" 
            caption="Together since 2023" 
          />
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUs
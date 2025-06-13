import React from 'react'
import PolaroidPhoto from '../components/PolaroidPhoto'
import CountdownTimer from '../components/CountdownTimer'
import './OurStory.css'

const OurStory = () => {
  // Set your anniversary date
  const anniversaryDate = '2024-06-15'

  return (
    <div className="our-story-page">
      <h1>Our Story</h1>
      
      <div className="story-content">
        <div className="story-text">
          <h2>How We Met</h2>
          <p>
            It all began on a sunny day in June. We were both at the same coffee shop, 
            waiting in line. When we accidentally reached for the last chocolate croissant, 
            our eyes met and we both laughed. That moment sparked a conversation that 
            lasted for hours.
          </p>
          <p>
            From that day on, we've been inseparable. Every moment with you feels like 
            a beautiful dream I never want to wake up from. Your smile brightens my 
            darkest days, and your love gives me strength I never knew I had.
          </p>
        </div>
        
        <div className="story-photo">
          <PolaroidPhoto 
            image="gantengdancantik.jpg" 
            caption="Our first photo together" 
            rotation={5}
          />
        </div>
      </div>
      
      <div className="anniversary-countdown">
        <CountdownTimer targetDate={anniversaryDate} />
      </div>
    </div>
  )
}

export default OurStory
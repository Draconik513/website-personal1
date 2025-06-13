import React, { useState, useEffect } from 'react'
import './CountdownTimer.css'

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return

    timerComponents.push(
      <div key={interval} className="time-block">
        <span className="time-number">{timeLeft[interval]}</span>
        <span className="time-label">{interval}</span>
      </div>
    )
  })

  return (
    <div className="countdown-container">
      <h3>Time Until Our Next Anniversary</h3>
      <div className="countdown-timer">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  )
}

export default CountdownTimer
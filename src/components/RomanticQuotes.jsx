import React, { useState, useEffect } from 'react'
import './RomanticQuotes.css'

const quotes = [
  "Love is not about how many days, months, or years you've been together. It's about how much you love each other every single day.",
  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
  "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
  "You're the closest to heaven that I'll ever be."
]

const RomanticQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="quotes-container">
      <div className="quote-content">
        <p className="quote-text">"{quotes[currentQuote]}"</p>
      </div>
      <div className="quote-dots">
        {quotes.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentQuote ? 'active' : ''}`}
            onClick={() => setCurrentQuote(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default RomanticQuotes

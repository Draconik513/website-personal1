import React, { useState } from 'react'
import './SecretMessage.css'

const SecretMessage = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [password, setPassword] = useState('')
  const correctPassword = 'selamanya'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.toLowerCase() === correctPassword) {
      setShowMessage(true)
    } else {
      alert('Password-nya salah, coba lagi ya sayang 😘')
    }
  }

  return (
    <div className="secret-message-container">
      {!showMessage ? (
        <form onSubmit={handleSubmit} className="password-form">
          <label htmlFor="password">Enter secret password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Hint: kata cinta kita"
          />
          <button type="submit">Reveal Message</button>
        </form>
      ) : (
        <div className="message-content">
          <h3>My Secret Message for You</h3>
          <p>
            My love, you are the calm to my storm, the melody in my silence, and the warmth in my coldest nights. Every second with you feels like a dream I never want to wake up from.
          </p>
          <p>
            I know life may throw challenges our way, but I promise to hold your hand through every one of them. Your happiness is my mission, and your love is my reward. You make me believe in forever, and I want to spend mine with you.
          </p>
          <p>
            Thank you for loving me, for choosing me, and for being the most beautiful part of my every day. I love you more than words could ever say — to the moon, the stars, and all the galaxies in between.
          </p>
          <p>Forever yours,</p>
          <p className="signature"><i><b>[Abi kesayanganmu]</b></i></p>
        </div>
      )}
    </div>
  )
}

export default SecretMessage

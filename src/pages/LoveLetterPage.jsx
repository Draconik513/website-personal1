import React from 'react'
import LoveLetter from '../components/LoveLetter'
import RomanticQuotes from '../components/RomanticQuotes'
import SecretMessage from '../components/SecretMessage'
import './LoveLetterPage.css'

const LoveLetterPage = () => {
  return (
    <div className="love-letter-page">
      <h1>For You, My Love</h1>
      <div className="content-container">
        <div className="letter-section">
          <LoveLetter />
        </div>
        <div className="quotes-section">
          <RomanticQuotes />
          <SecretMessage />
        </div>
      </div>
    </div>
  )
}

export default LoveLetterPage

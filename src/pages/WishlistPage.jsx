import React from 'react'
import Wishlist from '../components/Wishlist'
import RomanticQuotes from '../components/RomanticQuotes'
import './WishlistPage.css'

const WishlistPage = () => {
  return (
    <div className="wishlist-page">
      <h1>Our Dreams Together</h1>
      <div className="content-container">
        <Wishlist />
        <RomanticQuotes />
      </div>
    </div>
  )
}

export default WishlistPage
import React, { useState } from 'react'
import './Wishlist.css'

const Wishlist = () => {
  const [wishes, setWishes] = useState([
    { id: 1, text: 'Travel to Bali together', completed: false },
    { id: 2, text: 'Watch sunset at the beach', completed: true },
    { id: 3, text: 'Celebrate anniversary every year', completed: false }
  ])

  const toggleWish = (id) => {
    setWishes(wishes.map(wish => 
      wish.id === id ? { ...wish, completed: !wish.completed } : wish
    ))
  }

  return (
    <div className="wishlist-container">
      <h2>Our Wishlist</h2>
      <ul className="wishlist">
        {wishes.map(wish => (
          <li 
            key={wish.id} 
            className={`wish-item ${wish.completed ? 'completed' : ''}`}
            onClick={() => toggleWish(wish.id)}
          >
            <span className="checkmark">✓</span>
            {wish.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Wishlist
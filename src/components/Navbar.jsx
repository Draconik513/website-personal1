import { Link } from 'react-router-dom'
import './Navbar.css'
import MusicPlayer from './MusicPlayer'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ musicPlaying, setMusicPlaying }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          TriPratiwi Muchlis
        </Link>

        {/* Icon Menu */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-links" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/story" className="nav-links" onClick={() => setMenuOpen(false)}>
              Our Story
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/love-letter" className="nav-links" onClick={() => setMenuOpen(false)}>
              Love Letter
            </Link>
          </li>
          <li className="nav-item">
            <MusicPlayer musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
  